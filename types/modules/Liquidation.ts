import {
  ContractTransaction,
  BytesLike as Arrayish,
  BigNumber,
  BigNumberish,
  Contract,
} from "ethers"
import { ContractCallOverrides, ContractTransactionOverrides } from "../shared"

export interface Liquidation extends Contract {
  "new"(
    moduleGitCommit_: Arrayish,
    overrides?: ContractTransactionOverrides,
  ): Promise<ContractTransaction>
  DISCOUNT_BOOSTER_SLOPE(overrides?: ContractCallOverrides): Promise<BigNumber>
  MAXIMUM_BOOSTER_DISCOUNT(
    overrides?: ContractCallOverrides,
  ): Promise<BigNumber>
  MAXIMUM_DISCOUNT(overrides?: ContractCallOverrides): Promise<BigNumber>
  TARGET_HEALTH(overrides?: ContractCallOverrides): Promise<BigNumber>
  UNDERLYING_RESERVES_FEE(overrides?: ContractCallOverrides): Promise<BigNumber>
  checkLiquidation(
    liquidator: string,
    violator: string,
    underlying: string,
    collateral: string,
    overrides?: ContractTransactionOverrides,
  ): Promise<ContractTransaction>
  liquidate(
    violator: string,
    underlying: string,
    collateral: string,
    repay: BigNumberish,
    minYield: BigNumberish,
    overrides?: ContractTransactionOverrides,
  ): Promise<ContractTransaction>
  moduleGitCommit(overrides?: ContractCallOverrides): Promise<string>
  moduleId(overrides?: ContractCallOverrides): Promise<BigNumber>
}
