import { BigintIsh, ChainId } from '../constants';
export declare class RoutablePlatform {
    readonly name: string;
    readonly factoryAddress: {
        [supportedChainId in ChainId]?: string;
    };
    readonly routerAddress: {
        [supportedChainId in ChainId]?: string;
    };
    readonly initCodeHash: string;
    readonly defaultSwapFee: BigintIsh;
    static readonly DEXSWAP: RoutablePlatform;
    static readonly UNISWAP: RoutablePlatform;
    static readonly SUSHISWAP: RoutablePlatform;
    static readonly VIPERSWAP: RoutablePlatform;
    constructor(name: string, factoryAddress: {
        [supportedChainId in ChainId]?: string;
    }, routerAddress: {
        [supportedChainId in ChainId]?: string;
    }, initCodeHash: string, defaultSwapFee: BigintIsh);
    supportsChain(chainId: ChainId): boolean;
}
