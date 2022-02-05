import { BigintIsh, ChainId } from '../constants';
import JSBI from 'jsbi';
import { Percent, TokenAmount } from './fractions';
import { PricedTokenAmount } from './fractions/priced-token-amount';
import { Pair } from './pair';
export declare class LiquidityMiningCampaign {
    readonly chainId: ChainId;
    readonly address?: string;
    readonly startsAt: BigintIsh;
    readonly endsAt: BigintIsh;
    readonly rewards: PricedTokenAmount[];
    readonly targetedPair: Pair;
    readonly staked: PricedTokenAmount;
    readonly duration: BigintIsh;
    readonly locked: boolean;
    readonly stakingCap: TokenAmount;
    constructor(startsAt: BigintIsh, endsAt: BigintIsh, targetedPair: Pair, rewards: PricedTokenAmount[], staked: PricedTokenAmount, locked: boolean, stakingCap: TokenAmount, address?: string);
    get remainingDuration(): JSBI;
    get remainingDistributionPercentage(): Percent;
    get remainingRewards(): PricedTokenAmount[];
    get apy(): Percent;
    get currentlyActive(): boolean;
    get ended(): boolean;
}
