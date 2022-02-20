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
    [ChainId.AURORA]: new Token(
      ChainId.AURORA,
      '0x784e5B8541410284092cf465Cd455Beb09aAcdc3',
      18,
      'WAURORA',
      'Wrapped Aurora'
    ),
    [ChainId.MUMBAI]: new Token(
      ChainId.MUMBAI,
      '0x9c3C9283D3e44854697Cd22D3Faa240Cfb032889',
      18,
      'WMATIC',
      'Wrapped Matic'
    )
  }

  // TODO:
  public static readonly DexSwapZoo: { [key: number]: Token } = {
    [ChainId.RINKEBY]: new Token(ChainId.RINKEBY, '0xA9c6d7F92a894310B9C04968326A9dE6D0e38724', 18, 'xDEXS', 'xDEXS'),
    [ChainId.AURORA]: new Token(ChainId.AURORA, '0x45e92Dd180ECa40f90556Aa5B84620F253194E5E', 18, 'DexSwapZoo', 'DEZU'),
    [ChainId.MUMBAI]: new Token(ChainId.MUMBAI, '0x4F80365e46da3A5B03458c31CccB3b640E12d4fE', 18, 'DexSwapZoo', 'DEZU'),
  }


  public static readonly WMATIC: { [key: number]: Token } = {
    // [ChainId.MATIC]: new Token(ChainId.MATIC, '', 18, ''WMATIC', 'Wrapped Matic'),
    [ChainId.MUMBAI]: new Token(ChainId.MUMBAI, '0x9c3C9283D3e44854697Cd22D3Faa240Cfb032889', 18, 'WMATIC', 'Wrapped Matic')
  }

  private static readonly NATIVE_CURRENCY_WRAPPER: { [chainId in ChainId]: Token } = {
    [ChainId.MAINNET]: Token.WETH[ChainId.MAINNET],
    [ChainId.RINKEBY]: Token.WETH[ChainId.RINKEBY],
    [ChainId.AURORA]: Token.WETH[ChainId.AURORA],
    [ChainId.MUMBAI]: Token.WMATIC[ChainId.MUMBAI]
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
export const DexSwapZoo = Token.DexSwapZoo
export const WMATIC = Token.WMATIC
