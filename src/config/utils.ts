import { EnvironmentSettings, NetworkSettings, SafeFeatures } from 'src/config/networks/network.d'
import networks from 'src/config/networks'
import { NETWORK_NAME, CURRENT_ENVIRONMENT } from 'src/utils/constants'

export type NetworkSpecificConfiguration = EnvironmentSettings & {
    network: NetworkSettings,
    disabledFeatures?: SafeFeatures,
  }

export const configuration = (): NetworkSpecificConfiguration => {
    const currentEnvironment = CURRENT_ENVIRONMENT
  
    // special case for test environment
    if (currentEnvironment === 'test') {
      const configFile = networks.local
  
      return {
        ...configFile.environment.production,
        network: configFile.network,
        disabledFeatures: configFile.disabledFeatures,
      }
    }
  
    // lookup the config file based on the network specified in the NETWORK variable
    const configFile = networks[NETWORK_NAME.toLowerCase()]
    // defaults to 'production' as it's the only environment that is required for the network configs
    const networkBaseConfig = configFile.environment[currentEnvironment] ?? configFile.environment.production
  
    return {
      ...networkBaseConfig,
      network: configFile.network,
      disabledFeatures: configFile.disabledFeatures,
    }
  }

  export const getCurrentEnvironment = (nodeEnv, appEnv): string => {
    switch (nodeEnv) {
      case 'test': {
        return 'test'
      }
      case 'production': {
        return appEnv === 'production' ? 'production' : 'staging'
      }
      default: {
        return 'dev'
      }
    }
  }

  