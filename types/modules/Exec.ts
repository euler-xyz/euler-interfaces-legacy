import {
  ContractTransaction,
  BytesLike as Arrayish,
  BigNumber,
  BigNumberish,
  Contract,
} from "ethers"
import { ContractCallOverrides, ContractTransactionOverrides } from "../shared"

export interface BatchDispatchRequest {
  allowError: boolean
  proxyAddr: string
  data: Arrayish
}

export interface BatchDispatchExtraRequest {
  allowError: boolean
  proxyAddr: string
  data: Arrayish
}

export interface Exec extends Contract {
  "new"(
    moduleGitCommit_: Arrayish,
    overrides?: ContractTransactionOverrides,
  ): Promise<ContractTransaction>
  batchDispatch(
    items: BatchDispatchRequest[],
    deferLiquidityChecks: string[],
    overrides?: ContractTransactionOverrides,
  ): Promise<ContractTransaction>
  batchDispatchExtra(
    items: BatchDispatchExtraRequest[],
    deferLiquidityChecks: string[],
    queryLiquidity: string[],
    overrides?: ContractTransactionOverrides,
  ): Promise<ContractTransaction>
  deferLiquidityCheck(
    account: string,
    data: Arrayish,
    overrides?: ContractTransactionOverrides,
  ): Promise<ContractTransaction>
  detailedLiquidity(
    account: string,
    overrides?: ContractTransactionOverrides,
  ): Promise<ContractTransaction>
  getAverageLiquidity(
    account: string,
    overrides?: ContractTransactionOverrides,
  ): Promise<ContractTransaction>
  getAverageLiquidityDelegateAccount(
    account: string,
    overrides?: ContractCallOverrides,
  ): Promise<string>
  getAverageLiquidityWithDelegate(
    account: string,
    overrides?: ContractTransactionOverrides,
  ): Promise<ContractTransaction>
  getPrice(
    underlying: string,
    overrides?: ContractTransactionOverrides,
  ): Promise<ContractTransaction>
  getPriceFull(
    underlying: string,
    overrides?: ContractTransactionOverrides,
  ): Promise<ContractTransaction>
  liquidity(
    account: string,
    overrides?: ContractTransactionOverrides,
  ): Promise<ContractTransaction>
  moduleGitCommit(overrides?: ContractCallOverrides): Promise<string>
  moduleId(overrides?: ContractCallOverrides): Promise<BigNumber>
  pTokenUnWrap(
    underlying: string,
    amount: BigNumberish,
    overrides?: ContractTransactionOverrides,
  ): Promise<ContractTransaction>
  pTokenWrap(
    underlying: string,
    amount: BigNumberish,
    overrides?: ContractTransactionOverrides,
  ): Promise<ContractTransaction>
  trackAverageLiquidity(
    subAccountId: BigNumberish,
    delegate: string,
    onlyDelegate: boolean,
    overrides?: ContractTransactionOverrides,
  ): Promise<ContractTransaction>
  unTrackAverageLiquidity(
    subAccountId: BigNumberish,
    overrides?: ContractTransactionOverrides,
  ): Promise<ContractTransaction>
}
