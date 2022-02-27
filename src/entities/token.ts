import invariant from 'tiny-invariant'
import { ChainId } from '../constants'
import { validateAndParseAddress } from '../utils'
import { Currency } from './currency'

/**
 * Represents an ERC20 token with a unique address and some metadata.
 */
export class Token extends Currency {
  public readonly chainId: ChainId
  public readonly address: string

  public static readonly WETH: { [key: number]: Token } = {
    [ChainId.MAINNET]: new Token(
      ChainId.MAINNET,
      '0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2',
      18,
      'WETH',
      'Wrapped Ether'
    ),
    [ChainId.RINKEBY]: new Token(
      ChainId.RINKEBY,
      '0xc778417E063141139Fce010982780140Aa0cD5Ab',
      18,
      'WETH',
      'Wrapped Ether'
    ),
    [ChainId.HARMONY]: new Token(
      ChainId.HARMONY,
      '0xcF664087a5bB0237a0BAd6742852ec6c8d69A27a',
      18,
      'WONE',
      'Wrapped ONE'
    ),
    [ChainId.HARMONY_TESTNET]: new Token(
      ChainId.HARMONY_TESTNET,
      '0x7466d7d0C21Fa05F32F5a0Fa27e12bdC06348Ce2',
      18,
      'WONE',
      'Wrapped ONE'
    ),
    [ChainId.ALFAJORES]: new Token(
      ChainId.ALFAJORES,
      '0x524d97A67f50F4A062C28c74F60703Aec9028a94',
      18,
      'WCELO',
      'Wrapped Celo'
    )
  }

  // TODO:
  public static readonly xDEXS: { [key: number]: Token } = {
    [ChainId.RINKEBY]: new Token(ChainId.RINKEBY, '0xA9c6d7F92a894310B9C04968326A9dE6D0e38724', 18, 'DEZU', 'DexSwapZoo'),
    [ChainId.HARMONY]: new Token(ChainId.HARMONY, '0x6d3363020963a64B4DfA8f7F9f4Dc0cBaDCe7858', 18, 'DEZU', 'DexSwapZoo'),
    [ChainId.HARMONY_TESTNET]: new Token(ChainId.HARMONY_TESTNET, '0x8E8645D7A03d53bF41BcFfE26CfCCBA14354028C', 18, 'DEZU', 'DexSwapZoo'),
    [ChainId.ALFAJORES]: new Token(ChainId.ALFAJORES, '0x64b8EaB670f580817b26023f376bb91E32501fE6', 18, 'DEZU', 'DexSwapZoo'),
  }

  public static readonly POOF: { [key: number]: Token } = {
    // [ChainId.CELO]: new Token(ChainId.CELO, '0x8E8645D7A03d53bF41BcFfE26CfCCBA14354028C', 18, 'DEZU', 'DexSwapZoo'),
    [ChainId.ALFAJORES]: new Token(ChainId.ALFAJORES, '0x00400FcbF0816bebB94654259de7273f4A05c762', 18, 'POOF', 'Poof Governance Token'),
  }

  public static readonly MCEUR: { [key: number]: Token } = {
    // [ChainId.CELO]: new Token(ChainId.CELO, '0x8E8645D7A03d53bF41BcFfE26CfCCBA14354028C', 18, 'DEZU', 'DexSwapZoo'),
    [ChainId.ALFAJORES]: new Token(ChainId.ALFAJORES, '0x0D9B4311657003251d1eFa085e74f761185F271c', 18, 'mcEUR', 'Moola cEUR'),
  }

  public static readonly CEUR: { [key: number]: Token } = {
    // [ChainId.CELO]: new Token(ChainId.CELO, '0x8E8645D7A03d53bF41BcFfE26CfCCBA14354028C', 18, 'DEZU', 'DexSwapZoo'),
    [ChainId.ALFAJORES]: new Token(ChainId.ALFAJORES, '0x10c892A6EC43a53E45D0B916B4b7D383B1b78C0F', 18, 'cEUR', 'Celo Euro'),
  }

  public static readonly MOOLA: { [key: number]: Token } = {
    // [ChainId.CELO]: new Token(ChainId.CELO, '0x8E8645D7A03d53bF41BcFfE26CfCCBA14354028C', 18, 'DEZU', 'DexSwapZoo'),
    [ChainId.ALFAJORES]: new Token(ChainId.ALFAJORES, '0x17700282592D6917F6A73D0bF8AcCf4D578c131e', 18, 'MOO', 'Moola'),
  }

  public static readonly MCUSD: { [key: number]: Token } = {
    // [ChainId.CELO]: new Token(ChainId.CELO, '0x8E8645D7A03d53bF41BcFfE26CfCCBA14354028C', 18, 'DEZU', 'DexSwapZoo'),
    [ChainId.ALFAJORES]: new Token(ChainId.ALFAJORES, '0x3a0EA4e0806805527C750AB9b34382642448468D', 18, 'mcUSD', 'Moola cUSD'),
  }

  public static readonly MCELO: { [key: number]: Token } = {
    // [ChainId.CELO]: new Token(ChainId.CELO, '0x8E8645D7A03d53bF41BcFfE26CfCCBA14354028C', 18, 'DEZU', 'DexSwapZoo'),
    [ChainId.ALFAJORES]: new Token(ChainId.ALFAJORES, '0x653cC2Cc0Be398614BAd5d5328336dc79281e246', 18, 'mCELO', 'Moola CELO'),
  }

  public static readonly CUSD: { [key: number]: Token } = {
    // [ChainId.CELO]: new Token(ChainId.CELO, '0x8E8645D7A03d53bF41BcFfE26CfCCBA14354028C', 18, 'DEZU', 'DexSwapZoo'),
    [ChainId.ALFAJORES]: new Token(ChainId.ALFAJORES, '0x874069Fa1Eb16D44d622F2e0Ca25eeA172369bC1', 18, 'cUSD', 'Celo Dollar'),
  }

  public static readonly SCELO: { [key: number]: Token } = {
    // [ChainId.CELO]: new Token(ChainId.CELO, '0x8E8645D7A03d53bF41BcFfE26CfCCBA14354028C', 18, 'DEZU', 'DexSwapZoo'),
    [ChainId.ALFAJORES]: new Token(ChainId.ALFAJORES, '0xb9B532e99DfEeb0ffB4D3EDB499f09375CF9Bf07', 18, 'sCELO', 'Savings CELO'),
  }

  public static readonly RCELO: { [key: number]: Token } = {
    // [ChainId.CELO]: new Token(ChainId.CELO, '0x8E8645D7A03d53bF41BcFfE26CfCCBA14354028C', 18, 'DEZU', 'DexSwapZoo'),
    [ChainId.ALFAJORES]: new Token(ChainId.ALFAJORES, '0xF194afDf50B03e69Bd7D057c1Aa9e10c9954E4C9', 18, 'rCELO', 'Rewards CELO'),
  }

  public static readonly ZOO: { [key: number]: Token } = {
    // [ChainId.CELO]: new Token(ChainId.CELO, '0x8E8645D7A03d53bF41BcFfE26CfCCBA14354028C', 18, 'DEZU', 'DexSwapZoo'),
    [ChainId.ALFAJORES]: new Token(ChainId.ALFAJORES, '0x0fCA561Cb5288b93C3A9aE9B9338a0458d5D1cff', 18, 'ZOO', 'ZooHarmony'),
    [ChainId.HARMONY]: new Token(ChainId.HARMONY, '0x9E0882e93d7f19E3D3Fc6d062652FE7e9E375Fda', 18, 'ZOO', 'ZooHarmony'),
    [ChainId.HARMONY_TESTNET]: new Token(ChainId.HARMONY_TESTNET, '0xAd2F2D10d8056ECa21A26436245AC2666a6662aB', 18, 'ZOO', 'ZooHarmony'),
  }

  public static readonly ZDEX: { [key: number]: Token } = {
    // [ChainId.CELO]: new Token(ChainId.CELO, '0x8E8645D7A03d53bF41BcFfE26CfCCBA14354028C', 18, 'DEZU', 'DexSwapZoo'),
    [ChainId.ALFAJORES]: new Token(ChainId.ALFAJORES, '0x108B870375a1A0aBBD24306A6Ff990a87CB6d31d', 18, 'ZDEX', 'ZooDex'),
    [ChainId.HARMONY]: new Token(ChainId.HARMONY, '0x520D479046A02A875D9F3b46CA661Da67f3c2735', 18, 'ZDEX', 'ZooDex'),
    [ChainId.HARMONY_TESTNET]: new Token(ChainId.HARMONY_TESTNET, '0xbd38b88bAA29ADF42f81D74E6EaBCE44f1B38e33', 18, 'ZDEX', 'ZooDex'),
  }


  public static readonly WONE: { [key: number]: Token } = {
    [ChainId.HARMONY]: new Token(ChainId.HARMONY, '0xcF664087a5bB0237a0BAd6742852ec6c8d69A27a', 18, 'WONE', 'Wrapped One'),
    [ChainId.HARMONY_TESTNET]: new Token(ChainId.HARMONY_TESTNET, '0x7466d7d0C21Fa05F32F5a0Fa27e12bdC06348Ce2', 18, 'WONE', 'Wrapped One')
  }


  private static readonly NATIVE_CURRENCY_WRAPPER: { [chainId in ChainId]: Token } = {
    [ChainId.MAINNET]: Token.WETH[ChainId.MAINNET],
    [ChainId.RINKEBY]: Token.WETH[ChainId.RINKEBY],
    [ChainId.HARMONY]: Token.WONE[ChainId.HARMONY],
    [ChainId.HARMONY_TESTNET]: Token.WETH[ChainId.HARMONY_TESTNET],
    [ChainId.ALFAJORES]: Token.WETH[ChainId.ALFAJORES],
  }

  public constructor(chainId: ChainId, address: string, decimals: number, symbol?: string, name?: string) {
    super(decimals, symbol, name)
    this.chainId = chainId
    this.address = validateAndParseAddress(address)
  }

  /**
   * Returns true if the two tokens are equivalent, i.e. have the same chainId and address.
   * @param other other token to compare
   */
  public equals(other: Token): boolean {
    // short circuit on reference equality
    if (this === other) {
      return true
    }
    return this.chainId === other.chainId && this.address === other.address
  }

  /**
   * Returns true if the address of this token sorts before the address of the other token
   * @param other other token to compare
   * @throws if the tokens have the same address
   * @throws if the tokens are on different chains
   */
  public sortsBefore(other: Token): boolean {
    invariant(this.chainId === other.chainId, 'CHAIN_IDS')
    invariant(this.address !== other.address, 'ADDRESSES')
    return this.address.toLowerCase() < other.address.toLowerCase()
  }

  public static getNativeWrapper(chainId: ChainId): Token {
    return Token.NATIVE_CURRENCY_WRAPPER[chainId]
  }

  public static isNativeWrapper(token: Token): boolean {
    return Token.NATIVE_CURRENCY_WRAPPER[token.chainId].equals(token)
  }
}

/**
 * Compares two currencies for equality
 */
export function currencyEquals(currencyA: Currency, currencyB: Currency): boolean {
  if (currencyA instanceof Token && currencyB instanceof Token) {
    return currencyA.equals(currencyB)
  } else if (currencyA instanceof Token) {
    return false
  } else if (currencyB instanceof Token) {
    return false
  } else {
    return currencyA === currencyB
  }
}

// reexport for convenience
export const WETH = Token.WETH
export const xDEXS = Token.xDEXS
export const WONE = Token.WONE
export const ZDEX = Token.ZDEX
export const ZOO = Token.ZOO
export const RCELO = Token.RCELO
export const SCELO = Token.SCELO
export const MCUSD = Token.MCUSD
export const MCELO = Token.MCELO
export const CUSD = Token.CUSD
export const MCEUR = Token.MCEUR
export const CEUR = Token.CEUR
export const MOOLA = Token.MOOLA
export const POOF = Token.POOF
