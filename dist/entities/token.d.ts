import { ChainId } from '../constants';
import { Currency } from './currency';
/**
 * Represents an ERC20 token with a unique address and some metadata.
 */
export declare class Token extends Currency {
    readonly chainId: ChainId;
    readonly address: string;
    static readonly WETH: {
        [key: number]: Token;
    };
    static readonly POOF: {
        [key: number]: Token;
    };
    static readonly MCEUR: {
        [key: number]: Token;
    };
    static readonly CEUR: {
        [key: number]: Token;
    };
    static readonly MOOLA: {
        [key: number]: Token;
    };
    static readonly MCUSD: {
        [key: number]: Token;
    };
    static readonly MCELO: {
        [key: number]: Token;
    };
    static readonly CUSD: {
        [key: number]: Token;
    };
    static readonly SCELO: {
        [key: number]: Token;
    };
    static readonly RCELO: {
        [key: number]: Token;
    };
    static readonly USDC: {
        [key: number]: Token;
    };
    static readonly USDT: {
        [key: number]: Token;
    };
    static readonly DAI: {
        [key: number]: Token;
    };
    static readonly ZOO: {
        [key: number]: Token;
    };
    static readonly ZDEX: {
        [key: number]: Token;
    };
    static readonly DEZU: {
        [key: number]: Token;
    };
    static readonly WONE: {
        [key: number]: Token;
    };
    static readonly WMATIC: {
        [key: number]: Token;
    };
    private static readonly NATIVE_CURRENCY_WRAPPER;
    constructor(chainId: ChainId, address: string, decimals: number, symbol?: string, name?: string);
    /**
     * Returns true if the two tokens are equivalent, i.e. have the same chainId and address.
     * @param other other token to compare
     */
    equals(other: Token): boolean;
    /**
     * Returns true if the address of this token sorts before the address of the other token
     * @param other other token to compare
     * @throws if the tokens have the same address
     * @throws if the tokens are on different chains
     */
    sortsBefore(other: Token): boolean;
    static getNativeWrapper(chainId: ChainId): Token;
    static isNativeWrapper(token: Token): boolean;
}
/**
 * Compares two currencies for equality
 */
export declare function currencyEquals(currencyA: Currency, currencyB: Currency): boolean;
export declare const WETH: {
    [key: number]: Token;
};
export declare const WONE: {
    [key: number]: Token;
};
export declare const WMATIC: {
    [key: number]: Token;
};
export declare const ZDEX: {
    [key: number]: Token;
};
export declare const ZOO: {
    [key: number]: Token;
};
export declare const DEZU: {
    [key: number]: Token;
};
export declare const USDT: {
    [key: number]: Token;
};
export declare const USDC: {
    [key: number]: Token;
};
export declare const DAI: {
    [key: number]: Token;
};
export declare const RCELO: {
    [key: number]: Token;
};
export declare const SCELO: {
    [key: number]: Token;
};
export declare const MCUSD: {
    [key: number]: Token;
};
export declare const MCELO: {
    [key: number]: Token;
};
export declare const CUSD: {
    [key: number]: Token;
};
export declare const MCEUR: {
    [key: number]: Token;
};
export declare const CEUR: {
    [key: number]: Token;
};
export declare const MOOLA: {
    [key: number]: Token;
};
export declare const POOF: {
    [key: number]: Token;
};
