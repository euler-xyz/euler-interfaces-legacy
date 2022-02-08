import {
  ContractTransaction,
  BytesLike as Arrayish,
  BigNumber,
  BigNumberish,
  Contract,
} from "ethers"
import { ContractCallOverrides, ContractTransactionOverrides } from "../shared"

export interface GetPricingConfigResponse {
  pricingType: number
  0: number
  pricingParameters: number
  1: number
  pricingForwarded: string
  2: string
  length: 3
}

export interface AssetconfigResponse {
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

export interface Markets extends Contract {
  "new"(
    moduleGitCommit_: Arrayish,
    overrides?: ContractTransactionOverrides,
  ): Promise<ContractTransaction>
  activateMarket(
    underlying: string,
    overrides?: ContractTransactionOverrides,
  ): Promise<ContractTransaction>
  activatePToken(
    underlying: string,
    overrides?: ContractTransactionOverrides,
  ): Promise<ContractTransaction>
  eTokenToDToken(
    eToken: string,
    overrides?: ContractCallOverrides,
  ): Promise<string>
  eTokenToUnderlying(
    eToken: string,
    overrides?: ContractCallOverrides,
  ): Promise<string>
  enterMarket(
    subAccountId: BigNumberish,
    newMarket: string,
    overrides?: ContractTransactionOverrides,
  ): Promise<ContractTransaction>
  exitMarket(
    subAccountId: BigNumberish,
    oldMarket: string,
    overrides?: ContractTransactionOverrides,
  ): Promise<ContractTransaction>
  getEnteredMarkets(
    account: string,
    overrides?: ContractCallOverrides,
  ): Promise<string[]>
  getPricingConfig(
    underlying: string,
    overrides?: ContractCallOverrides,
  ): Promise<GetPricingConfigResponse>
  interestAccumulator(
    underlying: string,
    overrides?: ContractCallOverrides,
  ): Promise<BigNumber>
  interestRate(
    underlying: string,
    overrides?: ContractCallOverrides,
  ): Promise<BigNumber>
  interestRateModel(
    underlying: string,
    overrides?: ContractCallOverrides,
  ): Promise<BigNumber>
  moduleGitCommit(overrides?: ContractCallOverrides): Promise<string>
  moduleId(overrides?: ContractCallOverrides): Promise<BigNumber>
  reserveFee(
    underlying: string,
    overrides?: ContractCallOverrides,
  ): Promise<number>
  underlyingToAssetConfig(
    underlying: string,
    overrides?: ContractCallOverrides,
  ): Promise<AssetconfigResponse>
  underlyingToAssetConfigUnresolved(
    underlying: string,
    overrides?: ContractCallOverrides,
  ): Promise<ConfigResponse>
  underlyingToDToken(
    underlying: string,
    overrides?: ContractCallOverrides,
  ): Promise<string>
  underlyingToEToken(
    underlying: string,
    overrides?: ContractCallOverrides,
  ): Promise<string>
  underlyingToPToken(
    underlying: string,
    overrides?: ContractCallOverrides,
  ): Promise<string>
}
