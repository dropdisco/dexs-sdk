import JSBI from 'jsbi'
import MULTICALL_ABI from './abis/multicall.json'
import STAKING_REWARDS_FACTORY_ABI from './abis/staking-rewards-distribution-factory.json'
import STAKING_REWARDS_DISTRIBUTION_ABI from './abis/staking-rewards-distribution.json'
import {
  rinkeby as coreRinkeby,
  mainnet as coreMainnet,
  harmony_testnet as coreHarmony_Testnet,
  harmony as coreHarmony,
  mumbai as coreMumbai,
  alfajores as coreAlfajores,

} from 'dexswap-core/.contracts.json'
import {
  rinkeby as peripheryRinkeby,
  mainnet as peripheryMainnet,
  harmony_testnet as peripheryHarmony_Testnet,
  harmony as peripheryHarmony,
  mumbai as peripheryMumbai,
  alfajores as peripheryAlfajores,

} from 'dexswap-periphery/.contracts.json'

// exports for external consumption
export type BigintIsh = JSBI | bigint | string

export enum ChainId {
  MAINNET = 1,
  RINKEBY = 4,
  HARMONY = 1666600000,
  HARMONY_TESTNET = 1666700000,
  MUMBAI = 80001,
  ALFAJORES = 44787,

}

export enum TradeType {
  EXACT_INPUT,
  EXACT_OUTPUT
}

export enum Rounding {
  ROUND_DOWN,
  ROUND_HALF_UP,
  ROUND_UP
}

export const ZERO_ADDRESS = '0x0000000000000000000000000000000000000000'

export const FACTORY_ADDRESS: { [chainId in ChainId]: string } = {
  [ChainId.MAINNET]: coreMainnet.factory,
  [ChainId.RINKEBY]: coreRinkeby.factory,
  [ChainId.HARMONY]: coreHarmony.factory,
  [ChainId.HARMONY_TESTNET]: coreHarmony_Testnet.factory,
  [ChainId.MUMBAI]: coreMumbai.factory,
  [ChainId.ALFAJORES]: coreAlfajores.factory,


}

export const ROUTER_ADDRESS: { [chainId in ChainId]: string } = {
  [ChainId.MAINNET]: peripheryMainnet.router,
  [ChainId.RINKEBY]: peripheryRinkeby.router,
  [ChainId.HARMONY]: peripheryHarmony.router,
  [ChainId.HARMONY_TESTNET]: peripheryHarmony_Testnet.router,
  [ChainId.MUMBAI]: peripheryMumbai.router,
  [ChainId.ALFAJORES]: peripheryAlfajores.router,

}

export const STAKING_REWARDS_FACTORY_ADDRESS: { [chainId in ChainId]: string } = {
  [ChainId.MAINNET]: '0x0000000000000000000000000000000000001234',
  [ChainId.RINKEBY]: '0x709db16a6ef437197938256460c49183dc36ca4d',
  [ChainId.HARMONY]: '0x3b2Cc22b41ed373a2E512E49D049d0E61ED226f8',
  [ChainId.HARMONY_TESTNET]: '0x9072E625EB73A42F0FeFF5278Ed132c14B00D0cD',
  [ChainId.MUMBAI]: '0x377DA5b8287e0360e53B7F4589c8dCB531c7936B',
  [ChainId.ALFAJORES]: '0x6bdF5040646631eEc475D599903d842E128a7a21',
}

export const INIT_CODE_HASH = '0x73d6dcc94c11d81141f8d9cdd590d156f773f79e2639eb9bb987549a338b82da'

export const MINIMUM_LIQUIDITY = JSBI.BigInt(1000)

// exports for internal consumption
export const ZERO = JSBI.BigInt(0)
export const ONE = JSBI.BigInt(1)
export const TWO = JSBI.BigInt(2)
export const THREE = JSBI.BigInt(3)
export const FIVE = JSBI.BigInt(5)
export const TEN = JSBI.BigInt(10)
export const _25 = JSBI.BigInt(25)
export const SECONDS_IN_YEAR = JSBI.BigInt(31536000)
export const _30 = JSBI.BigInt(30)
export const _100 = JSBI.BigInt(100)
export const _1000 = JSBI.BigInt(1000)
export const _10000 = JSBI.BigInt(10000)

export const defaultSwapFee = _25
export const defaultProtocolFeeDenominator = FIVE

export enum SolidityType {
  uint8 = 'uint8',
  uint256 = 'uint256'
}

export const SOLIDITY_TYPE_MAXIMA = {
  [SolidityType.uint8]: JSBI.BigInt('0xff'),
  [SolidityType.uint256]: JSBI.BigInt('0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff')
}

const MULTICALL_ADDRESS: { [chainId in ChainId]: string } = {
  [ChainId.MAINNET]: '0xeefba1e63905ef1d7acba5a8513c70307c1ce441',
  [ChainId.HARMONY]: '0x4e24A3D6B6D47A4F56e4025C8A514b45C66e6d7A',
  [ChainId.RINKEBY]: '0x8c9E7447ABE0607a610a1C3E7cCC1A7B51f729C2',
  [ChainId.HARMONY_TESTNET]: '0xD76bF711EC7FA3740fC0ddae1A7CB648E77604e8',
  [ChainId.MUMBAI]: '0x3D522CD23C0A8a4Eb7b7f2478c4f46132a068398',
  [ChainId.ALFAJORES]: '0x3d8315f6BBdc0Afa659421a5856D4eC12c2F7Efa',
}

export { MULTICALL_ABI, MULTICALL_ADDRESS, STAKING_REWARDS_FACTORY_ABI, STAKING_REWARDS_DISTRIBUTION_ABI }
