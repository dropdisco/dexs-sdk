import { BigintIsh, ChainId, defaultSwapFee, FACTORY_ADDRESS, INIT_CODE_HASH, ROUTER_ADDRESS, _30 } from '../constants'

const UNISWAP_FACTORY_ADDRESS = '0x5C69bEe701ef814a2B6a3EDD4B1652CB9cc5aA6f'
const SUSHISWAP_FACTORY_ADDRESS = '0xC0AEe478e3658e2610c5F7A4A2E1777cE9e4f2Ac'
const VIPERSWAP_FACTORY_ADDRESS = '0x7D02c116b98d0965ba7B642ace0183ad8b8D2196' // mainnet
const VIPERSWAP_FACTORY_ADDRESS_TESTNET = '0xFb1d2c9f60bD2491487c70F79130e53B0C4e4b06' // testnet
const QUICKSWAP_FACTORY_ADDRESS = '0x5757371414417b8C6CAad45bAeF941aBc7d3Ab32' // mainnet
const UBESWAP_FACTORY_ADDRESS = '0x62d5b84be28a183abb507e125b384122d2c25fae' // test

const UNISWAP_ROUTER_ADDRESS = '0x7a250d5630B4cF539739dF2C5dAcb4c659F2488D'
const SUSHISWAP_ROUTER_ADDRESS = '0xd9e1cE17f2641f24aE83637ab66a2cca9C378B9F'
const VIPERSWAP_ROUTER_ADDRESS = '0xf012702a5f0e54015362cBCA26a26fc90AA832a3' // mainnet //
const VIPERSWAP_ROUTER_ADDRESS_TESTNET = '0xda3DD48726278a7F478eFaE3BEf9a5756ccdb4D0' // testnet //
const QUICKSWAP_ROUTER_ADDRESS = '0x8954AfA98594b838bda56FE4C12a09D7739D179b' // mainnet //
const UBESWAP_ROUTER_ADDRESS = '0xe3d8bd6aed4f159bc8000a9cd47cffdb95f96121' // test //





export class RoutablePlatform {
  public readonly name: string
  public readonly factoryAddress: { [supportedChainId in ChainId]?: string }
  public readonly routerAddress: { [supportedChainId in ChainId]?: string }
  public readonly initCodeHash: string
  public readonly defaultSwapFee: BigintIsh

  public static readonly DEXSWAP = new RoutablePlatform(
    'DEXSWAP',
    FACTORY_ADDRESS,
    ROUTER_ADDRESS,
    INIT_CODE_HASH,
    defaultSwapFee
  )
  public static readonly UNISWAP = new RoutablePlatform(
    'Uniswap',
    { [ChainId.MAINNET]: UNISWAP_FACTORY_ADDRESS, [ChainId.RINKEBY]: UNISWAP_FACTORY_ADDRESS },
    { [ChainId.MAINNET]: UNISWAP_ROUTER_ADDRESS, [ChainId.RINKEBY]: UNISWAP_ROUTER_ADDRESS },
    '0x96e8ac4277198ff8b6f785478aa9a39f403cb768dd02cbee326c3e7da348845f',
    _30
  )
  public static readonly SUSHISWAP = new RoutablePlatform(
    'Sushiswap',
    { [ChainId.MAINNET]: SUSHISWAP_FACTORY_ADDRESS, [ChainId.RINKEBY]: SUSHISWAP_FACTORY_ADDRESS },
    { [ChainId.MAINNET]: SUSHISWAP_ROUTER_ADDRESS, [ChainId.RINKEBY]: SUSHISWAP_ROUTER_ADDRESS },
    '0xe18a34eb0e04b04f7a0ac29a6e80748dca96319b42c54d679cb821dca90c6303',
    _30
  )

  public static readonly VIPERSWAP = new RoutablePlatform(
    'Viperswap',
    { [ChainId.HARMONY]: VIPERSWAP_FACTORY_ADDRESS,[ChainId.HARMONY_TESTNET]: VIPERSWAP_FACTORY_ADDRESS_TESTNET},
    { [ChainId.HARMONY]: VIPERSWAP_ROUTER_ADDRESS, [ChainId.HARMONY_TESTNET]: VIPERSWAP_ROUTER_ADDRESS_TESTNET},
    '0x162f79e638367cd45a118c778971dfd8d96c625d2798d3b71994b035cfe9b6dc',
    _30
  )

  public static readonly QUICKSWAP = new RoutablePlatform(
    'Quickswap',
    { [ChainId.MUMBAI]: QUICKSWAP_FACTORY_ADDRESS },
    { [ChainId.MUMBAI]: QUICKSWAP_ROUTER_ADDRESS },
    '0x96e8ac4277198ff8b6f785478aa9a39f403cb768dd02cbee326c3e7da348845f',
    _30
  )

  public static readonly UBESWAP = new RoutablePlatform(
    'Ubeswap',
    { [ChainId.ALFAJORES]: UBESWAP_FACTORY_ADDRESS},
    { [ChainId.ALFAJORES]: UBESWAP_ROUTER_ADDRESS},
    '0x162f79e638367cd45a118c778971dfd8d96c625d2798d3b71994b035cfe9b6dc',
    _30
  )


  public constructor(
    name: string,
    factoryAddress: { [supportedChainId in ChainId]?: string },
    routerAddress: { [supportedChainId in ChainId]?: string },
    initCodeHash: string,
    defaultSwapFee: BigintIsh
  ) {
    this.name = name
    this.factoryAddress = factoryAddress
    this.routerAddress = routerAddress
    this.initCodeHash = initCodeHash
    this.defaultSwapFee = defaultSwapFee
  }

  public supportsChain(chainId: ChainId): boolean {
    return !!this.factoryAddress[chainId]
  }
}
