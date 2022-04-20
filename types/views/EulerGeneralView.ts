import {
  ContractTransaction,
  BytesLike as Arrayish,
  BigNumber,
  BigNumberish,
} from "ethers"
import { ContractCallOverrides, ContractTransactionOverrides } from "../shared"

export interface ComputeAPYsResponse {
  borrowAPY: BigNumber
  0: BigNumber
  supplyAPY: BigNumber
  1: BigNumber
  length: 2
}
export interface DoQueryRequest {
  eulerContract: string
  account: string
  markets: string[]
}
export interface ConfigResponse {
  eTokenAddress: string
  0: string
  borrowIsolated: boolean
  1: boolean
  collateralFactor: number
  2: number
  borrowFactor: number
  3: number
  twapWindow: number
  4: number
}
export interface LiquidityStatusResponse {
  collateralValue: BigNumber
  0: BigNumber
  liabilityValue: BigNumber
  1: BigNumber
  numBorrows: BigNumber
  2: BigNumber
  borrowIsolated: boolean
  3: boolean
}
export interface MarketsResponse {
  underlying: string
  0: MarketsResponse[]
  name: string
  1: MarketsResponse[]
  symbol: string
  2: MarketsResponse[]
  decimals: number
  3: MarketsResponse[]
  eTokenAddr: string
  4: MarketsResponse[]
  dTokenAddr: string
  5: MarketsResponse[]
  pTokenAddr: string
  6: MarketsResponse[]
  config: ConfigResponse
  7: MarketsResponse[]
  poolSize: BigNumber
  8: MarketsResponse[]
  totalBalances: BigNumber
  9: MarketsResponse[]
  totalBorrows: BigNumber
  10: MarketsResponse[]
  reserveBalance: BigNumber
  11: MarketsResponse[]
  reserveFee: number
  12: MarketsResponse[]
  borrowAPY: BigNumber
  13: MarketsResponse[]
  supplyAPY: BigNumber
  14: MarketsResponse[]
  twap: BigNumber
  15: MarketsResponse[]
  twapPeriod: BigNumber
  16: MarketsResponse[]
  currPrice: BigNumber
  17: MarketsResponse[]
  pricingType: number
  18: MarketsResponse[]
  pricingParameters: number
  19: MarketsResponse[]
  pricingForwarded: string
  20: MarketsResponse[]
  underlyingBalance: BigNumber
  21: MarketsResponse[]
  eulerAllowance: BigNumber
  22: MarketsResponse[]
  eTokenBalance: BigNumber
  23: MarketsResponse[]
  eTokenBalanceUnderlying: BigNumber
  24: MarketsResponse[]
  dTokenBalance: BigNumber
  25: MarketsResponse[]
  liquidityStatus: LiquidityStatusResponse
  26: MarketsResponse[]
}
export interface RResponse {
  timestamp: BigNumber
  0: BigNumber
  blockNumber: BigNumber
  1: BigNumber
  markets: MarketsResponse[]
  2: MarketsResponse[]
  enteredMarkets: string[]
  3: string[]
}
export interface StatusResponse {
  collateralValue: BigNumber
  0: BigNumber
  liabilityValue: BigNumber
  1: BigNumber
  numBorrows: BigNumber
  2: BigNumber
  borrowIsolated: boolean
  3: boolean
}
export interface DoQueryBatchRequest {
  eulerContract: string
  account: string
  markets: string[]
}
export interface DoQueryIRMRequest {
  eulerContract: string
  underlying: string
}

export interface EulerGeneralView {
  /**
   * Payable: false
   * Constant: false
   * StateMutability: nonpayable
   * Type: constructor
   * @param moduleGitCommit_ Type: bytes32, Indexed: false
   * @param overrides
   */
  "new"(
    moduleGitCommit_: Arrayish,
    overrides?: ContractTransactionOverrides,
  ): Promise<ContractTransaction>
  /**
   * Payable: false
   * Constant: true
   * StateMutability: pure
   * Type: function
   * @param borrowSPY Type: uint256, Indexed: false
   * @param totalBorrows Type: uint256, Indexed: false
   * @param totalBalancesUnderlying Type: uint256, Indexed: false
   * @param reserveFee Type: uint32, Indexed: false
   * @param overrides
   */
  computeAPYs(
    borrowSPY: BigNumberish,
    totalBorrows: BigNumberish,
    totalBalancesUnderlying: BigNumberish,
    reserveFee: BigNumberish,
    overrides?: ContractCallOverrides,
  ): Promise<ComputeAPYsResponse>
  /**
   * Payable: false
   * Constant: true
   * StateMutability: view
   * Type: function
   * @param q Type: tuple, Indexed: false
   * @param overrides
   */
  doQuery(
    q: DoQueryRequest,
    overrides?: ContractCallOverrides,
  ): Promise<RResponse>
  /**
   * Payable: false
   * Constant: true
   * StateMutability: view
   * Type: function
   * @param eulerContract Type: address, Indexed: false
   * @param addrs Type: address[], Indexed: false
   */
  doQueryAccountLiquidity(
    eulerContract: string,
    addrs: string[],
    overrides?: ContractCallOverrides,
  ): Promise<RResponse[]>
  /**
   * Payable: false
   * Constant: true
   * StateMutability: view
   * Type: function
   * @param qs Type: tuple[], Indexed: false
   */
  doQueryBatch(
    qs: DoQueryBatchRequest[],
    overrides?: ContractCallOverrides,
  ): Promise<RResponse[]>
  /**
   * Payable: false
   * Constant: true
   * StateMutability: view
   * Type: function
   * @param q Type: tuple, Indexed: false
   * @param overrides
   */
  doQueryIRM(
    q: DoQueryIRMRequest,
    overrides?: ContractCallOverrides,
  ): Promise<RResponse>
  /**
   * Payable: false
   * Constant: true
   * StateMutability: view
   * Type: function
   */
  moduleGitCommit(overrides?: ContractCallOverrides): Promise<string>
}
