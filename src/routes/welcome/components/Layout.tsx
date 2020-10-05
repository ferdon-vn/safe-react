import * as React from 'react'

import styles from './Layout.module.scss'
import { Card, Title, Text } from '@gnosis.pm/safe-react-components'

import ConnectButton from 'src/components/ConnectButton'
import Block from 'src/components/layout/Block'
import Button from 'src/components/layout/Button'
import Heading from 'src/components/layout/Heading'
import Img from 'src/components/layout/Img'
import Link from 'src/components/layout/Link'
import { LOAD_ADDRESS, OPEN_ADDRESS } from 'src/routes/routes'
import { marginButtonImg } from 'src/theme/variables'
import styled from 'styled-components'

const plus = require('../assets/new.svg')
const safe = require('../assets/safe.svg')

const StyledCard = styled(Card)`
  width: 333px;
  display: inline-block;
  margin: 0 20px 0 0;
`

const buttonStyle = {
  marginLeft: marginButtonImg,
}

interface CreateSafeProps {
  provider?: string
  size: string
}

export const CreateSafe = ({ provider, size }: CreateSafeProps): React.ReactElement => (
  <Button
    color="primary"
    component={Link}
    disabled={!provider}
    minHeight={42}
    minWidth={240}
    size={size || 'medium'}
    to={OPEN_ADDRESS}
    variant="contained"
    testId="create-new-safe-btn"
  >
    <Img alt="Safe" height={14} src={plus} />
    <div style={buttonStyle}>Create new Safe</div>
  </Button>
)

interface LoadSafeProps {
  provider?: string
  size: string
}

export const LoadSafe = ({ provider, size }: LoadSafeProps): React.ReactElement => (
  <Button
    color="primary"
    component={Link}
    disabled={!provider}
    minWidth={240}
    size={size || 'medium'}
    to={LOAD_ADDRESS}
    variant="outlined"
    testId="load-existing-safe-btn"
  >
    <Img alt="Safe" height={14} src={safe} />
    <div style={buttonStyle}>Load existing Safe</div>
  </Button>
)

interface Welcome {
  provider?: string
  isOldMultisigMigration: boolean
}

const Welcome = ({ isOldMultisigMigration, provider }: Welcome): React.ReactElement => {
  const headingText = isOldMultisigMigration ? (
    <>
      We will replicate the owner structure from your existing Gnosis MultiSig to let you test the new interface. As
      soon as you feel comfortable, start moving funds to your new Safe.{' '}
    </>
  ) : (
    <>
      Gnosis Safe Multisig is the most trusted platform to manage <br /> digital assets on Ethereum. Here is how to get
      started:{' '}
    </>
  )
  return (
    <Block className={styles.safe}>
      <Title size="md">Welcome to Gnosis Safe Multisig</Title>
      <Heading align="left" margin="lg" tag="h1" weight="bold">
        Welcome to Gnosis Safe Multisig
      </Heading>
      <Title size="xs">{headingText}</Title>
      {/* <a
          className={styles.learnMoreLink}
          href="https://gnosis-safe.io/teams"
          rel="noopener noreferrer"
          target="_blank"
        >
          Learn more
          <OpenInNew style={openIconStyle} />
        </a> */}

      {provider ? (
        <>
          <StyledCard>
            <Title size="xs">Connect wallet</Title>
            <Text size="xl">
              Gnosis Safe Multisig supports a wide range of wallets that you can choose to be one of the authentication
              factors.
            </Text>
          </StyledCard>
          <StyledCard>
            <Title size="xs">Create Safe</Title>
            <Text size="xl">
              Create a new Safe Multisig that is controlled by one or multiple owners. <br />
              You will be required to pay a network fee for creating your new Safe.
            </Text>
          </StyledCard>
          {/* 
          <Block className={styles.safeActions} margin="md">
            <CreateSafe provider={provider} size="large" />
          </Block>
          <Block className={styles.safeActions} margin="md">
            <LoadSafe provider={provider} size="large" />
          </Block> */}
        </>
      ) : (
        <Block className={styles.connectWallet} margin="md">
          <Heading align="center" margin="md" tag="h3">
            Get Started by Connecting a Wallet
          </Heading>
          <ConnectButton minHeight={42} minWidth={240} data-testid="connect-btn" />
        </Block>
      )}
    </Block>
  )
}

export default Welcome
