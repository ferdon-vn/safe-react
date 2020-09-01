import { formatRelative } from 'date-fns'
import { List } from 'immutable'

import { TableColumn } from 'src/components/Table/types.d'

import { SpendingLimitRow } from 'src/routes/safe/components/Settings/SpendingLimit/utils'

export const SPENDING_LIMIT_TABLE_BENEFICIARY_ID = 'beneficiary'
export const SPENDING_LIMIT_TABLE_SPENT_ID = 'spent'
export const SPENDING_LIMIT_TABLE_RESET_TIME_ID = 'resetTime'
export const SPENDING_LIMIT_TABLE_ACTION_ID = 'action'

export type SpentTableInfo = {
  spent: string
  amount: string
  tokenAddress: string
}

export type ResetTimeInfo = {
  relativeTime: string
  lastResetMin: string
  resetTimeMin: string
}

export type SpendingLimitTable = {
  [SPENDING_LIMIT_TABLE_BENEFICIARY_ID]: string
  [SPENDING_LIMIT_TABLE_SPENT_ID]: SpentTableInfo
  [SPENDING_LIMIT_TABLE_RESET_TIME_ID]: ResetTimeInfo
}

const relativeTime = (baseTimeMin: string, resetTimeMin: string): string => {
  if (resetTimeMin === '0') {
    return 'One-time'
  }

  const baseTimeSeconds = +baseTimeMin * 60
  const resetTimeSeconds = +resetTimeMin * 60
  const nextResetTimeMilliseconds = (baseTimeSeconds + resetTimeSeconds) * 1000

  return formatRelative(nextResetTimeMilliseconds, Date.now())
}

export const getSpendingLimitData = (spendingLimits: SpendingLimitRow[] | null): SpendingLimitTable[] | undefined =>
  spendingLimits?.map((spendingLimit) => ({
    [SPENDING_LIMIT_TABLE_BENEFICIARY_ID]: spendingLimit.delegate,
    [SPENDING_LIMIT_TABLE_SPENT_ID]: {
      spent: spendingLimit.spent,
      amount: spendingLimit.amount,
      tokenAddress: spendingLimit.token,
    },
    [SPENDING_LIMIT_TABLE_RESET_TIME_ID]: {
      relativeTime: relativeTime(spendingLimit.lastResetMin, spendingLimit.resetTimeMin),
      lastResetMin: spendingLimit.lastResetMin,
      resetTimeMin: spendingLimit.resetTimeMin,
    },
  }))

export const generateColumns = (): List<TableColumn> => {
  const beneficiaryColumn: TableColumn = {
    align: 'left',
    custom: false,
    disablePadding: false,
    id: SPENDING_LIMIT_TABLE_BENEFICIARY_ID,
    label: 'Beneficiary',
    order: false,
  }

  const spentColumn: TableColumn = {
    align: 'left',
    custom: false,
    disablePadding: false,
    id: SPENDING_LIMIT_TABLE_SPENT_ID,
    label: 'Spent',
    order: false,
  }

  const resetColumn: TableColumn = {
    align: 'left',
    custom: false,
    disablePadding: false,
    id: SPENDING_LIMIT_TABLE_RESET_TIME_ID,
    label: 'Reset Time',
    order: false,
  }

  const actionsColumn: TableColumn = {
    custom: true,
    disablePadding: false,
    id: SPENDING_LIMIT_TABLE_ACTION_ID,
    label: '',
    order: false,
  }

  return List([beneficiaryColumn, spentColumn, resetColumn, actionsColumn])
}
