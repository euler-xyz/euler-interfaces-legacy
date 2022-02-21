import {
  ContractTransaction,
  BytesLike as Arrayish,
  BigNumber,
  BigNumberish,
  Contract,
} from "ethers"
import { ContractCallOverrides, ContractTransactionOverrides } from "../shared"

export interface Swap1InchRequest {
  subAccountIdIn: BigNumberish
  subAccountIdOut: BigNumberish
  underlyingIn: string
  underlyingOut: string
  amount: BigNumberish
  amountOutMinimum: BigNumberish
  payload: Arrayish
}
export interface SwapAndRepayUniRequest {
  subAccountIdIn: BigNumberish
  subAccountIdOut: BigNumberish
  amountOut: BigNumberish
  amountInMaximum: BigNumberish
  deadline: BigNumberish
  path: Arrayish
}
export interface SwapAndRepayUniSingleRequest {
  subAccountIdIn: BigNumberish
  subAccountIdOut: BigNumberish
  underlyingIn: string
  underlyingOut: string
  amountOut: BigNumberish
  amountInMaximum: BigNumberish
  deadline: BigNumberish
  fee: BigNumberish
  sqrtPriceLimitX96: BigNumberish
}
export interface SwapUniExactInputRequest {
  subAccountIdIn: BigNumberish
  subAccountIdOut: BigNumberish
  amountIn: BigNumberish
  amountOutMinimum: BigNumberish
  deadline: BigNumberish
  path: Arrayish
}
export interface SwapUniExactInputSingleRequest {
  subAccountIdIn: BigNumberish
  subAccountIdOut: BigNumberish
  underlyingIn: string
  underlyingOut: string
  amountIn: BigNumberish
  amountOutMinimum: BigNumberish
  deadline: BigNumberish
  fee: BigNumberish
  sqrtPriceLimitX96: BigNumberish
}
export interface SwapUniExactOutputRequest {
  subAccountIdIn: BigNumberish
  subAccountIdOut: BigNumberish
  amountOut: BigNumberish
  amountInMaximum: BigNumberish
  deadline: BigNumberish
  path: Arrayish
}
export interface SwapUniExactOutputSingleRequest {
  subAccountIdIn: BigNumberish
  subAccountIdOut: BigNumberish
  underlyingIn: string
  underlyingOut: string
  amountOut: BigNumberish
  amountInMaximum: BigNumberish
  deadline: BigNumberish
  fee: BigNumberish
  sqrtPriceLimitX96: BigNumberish
}
export interface Swap extends Contract {
  "new"(
    moduleGitCommit_: Arrayish,
    uniswapRouter_: string,
    oneInch_: string,
    overrides?: ContractTransactionOverrides,
  ): Promise<ContractTransaction>
  moduleGitCommit(overrides?: ContractCallOverrides): Promise<string>
  moduleId(overrides?: ContractCallOverrides): Promise<BigNumber>
  oneInch(overrides?: ContractCallOverrides): Promise<string>
  swap1Inch(
    params: Swap1InchRequest,
    overrides?: ContractTransactionOverrides,
  ): Promise<ContractTransaction>
  swapAndRepayUni(
    params: SwapAndRepayUniRequest,
    targetDebt: BigNumberish,
    overrides?: ContractTransactionOverrides,
  ): Promise<ContractTransaction>
  swapAndRepayUniSingle(
    params: SwapAndRepayUniSingleRequest,
    targetDebt: BigNumberish,
    overrides?: ContractTransactionOverrides,
  ): Promise<ContractTransaction>
  swapUniExactInput(
    params: SwapUniExactInputRequest,
    overrides?: ContractTransactionOverrides,
  ): Promise<ContractTransaction>
  swapUniExactInputSingle(
    params: SwapUniExactInputSingleRequest,
    overrides?: ContractTransactionOverrides,
  ): Promise<ContractTransaction>
  swapUniExactOutput(
    params: SwapUniExactOutputRequest,
    overrides?: ContractTransactionOverrides,
  ): Promise<ContractTransaction>
  swapUniExactOutputSingle(
    params: SwapUniExactOutputSingleRequest,
    overrides?: ContractTransactionOverrides,
  ): Promise<ContractTransaction>
  uniswapRouter(overrides?: ContractCallOverrides): Promise<string>
}
