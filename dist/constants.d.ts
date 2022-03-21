import JSBI from 'jsbi';
import MULTICALL_ABI from './abis/multicall.json';
import STAKING_REWARDS_FACTORY_ABI from './abis/staking-rewards-distribution-factory.json';
import STAKING_REWARDS_DISTRIBUTION_ABI from './abis/staking-rewards-distribution.json';
export declare type BigintIsh = JSBI | bigint | string;
export declare enum ChainId {
    MAINNET = 1,
    RINKEBY = 4,
    HARMONY = 1666600000,
    HARMONY_TESTNET = 1666700000,
    MUMBAI = 80001,
    ALFAJORES = 44787
}
export declare enum TradeType {
    EXACT_INPUT = 0,
    EXACT_OUTPUT = 1
}
export declare enum Rounding {
    ROUND_DOWN = 0,
    ROUND_HALF_UP = 1,
    ROUND_UP = 2
}
export declare const ZERO_ADDRESS = "0x0000000000000000000000000000000000000000";
export declare const FACTORY_ADDRESS: {
    [chainId in ChainId]: string;
};
export declare const ROUTER_ADDRESS: {
    [chainId in ChainId]: string;
};
export declare const STAKING_REWARDS_FACTORY_ADDRESS: {
    [chainId in ChainId]: string;
};
export declare const INIT_CODE_HASH = "0x73d6dcc94c11d81141f8d9cdd590d156f773f79e2639eb9bb987549a338b82da";
export declare const MINIMUM_LIQUIDITY: JSBI;
export declare const ZERO: JSBI;
export declare const ONE: JSBI;
export declare const TWO: JSBI;
export declare const THREE: JSBI;
export declare const FIVE: JSBI;
export declare const TEN: JSBI;
export declare const _25: JSBI;
export declare const SECONDS_IN_YEAR: JSBI;
export declare const _30: JSBI;
export declare const _100: JSBI;
export declare const _1000: JSBI;
export declare const _10000: JSBI;
export declare const defaultSwapFee: JSBI;
export declare const defaultProtocolFeeDenominator: JSBI;
export declare enum SolidityType {
    uint8 = "uint8",
    uint256 = "uint256"
}
export declare const SOLIDITY_TYPE_MAXIMA: {
    uint8: JSBI;
    uint256: JSBI;
};
declare const MULTICALL_ADDRESS: {
    [chainId in ChainId]: string;
};
export { MULTICALL_ABI, MULTICALL_ADDRESS, STAKING_REWARDS_FACTORY_ABI, STAKING_REWARDS_DISTRIBUTION_ABI };
