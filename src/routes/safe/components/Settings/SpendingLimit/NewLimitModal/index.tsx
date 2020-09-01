import { List } from 'immutable'
import React from 'react'
import { useSelector } from 'react-redux'

import { Token } from 'src/logic/tokens/store/model/token'
import { extendedSafeTokensSelector } from 'src/routes/safe/container/selector'
import Modal from 'src/routes/safe/components/Settings/SpendingLimit/Modal'

import Create from './Create'
import Review from './Review'

const CREATE = 'CREATE' as const
const REVIEW = 'REVIEW' as const

type Step = typeof CREATE | typeof REVIEW

type State = {
  step?: Step
  values?: Record<string, string> | null
  txToken?: Token | null
}

type Action = {
  type: Step
  newState?: State
  tokens?: List<Token>
}

const newLimitModalReducer = (state: State, action: Action) => {
  const { type, newState, tokens } = action

  switch (type) {
    case CREATE: {
      return {
        ...state,
        step: CREATE,
      }
    }

    case REVIEW: {
      return {
        ...state,
        ...newState,
        // we lookup into the list of tokens for the selected token info
        txToken: tokens.find((token) => token.address === newState.values.token) ?? null,
        step: REVIEW,
      }
    }
  }
}

type ActionCallback = (state?: State) => void
type NewLimitModalHook = [State, { create: ActionCallback; review: ActionCallback }]

const useNewLimitModal = (initialStep: Step): NewLimitModalHook => {
  // globally stored tokens
  const tokens = useSelector(extendedSafeTokensSelector)

  // setup the reducer with initial values
  const [state, dispatch] = React.useReducer(newLimitModalReducer, {
    step: initialStep,
    values: null,
    txToken: null,
  })

  // define actions
  const create = React.useCallback<ActionCallback>(() => dispatch({ type: CREATE }), [])
  const review = React.useCallback<ActionCallback>((newState) => dispatch({ type: REVIEW, newState, tokens }), [tokens])

  // returns state and dispatch
  return [state, { create, review }]
}

interface SpendingLimitModalProps {
  close: () => void
  open: boolean
}

const NewLimitModal = ({ close, open }: SpendingLimitModalProps): React.ReactElement => {
  // state and dispatch
  const [{ step, txToken, values }, { create, review }] = useNewLimitModal(CREATE)

  const handleReview = async (values) => {
    // if form is valid, we update the state to REVIEW and sets values
    review({ values })
  }

  return (
    <Modal
      handleClose={close}
      open={open}
      title="New Spending Limit"
      description="set rules for specific beneficiaries to access funds from this Safe without having to collect all signatures"
    >
      {step === CREATE && <Create initialValues={values} onCancel={close} onReview={handleReview} />}
      {step === REVIEW && <Review onBack={create} onClose={close} txToken={txToken} values={values} />}
    </Modal>
  )
}

export default NewLimitModal
