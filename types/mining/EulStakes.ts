import {
  ContractTransaction,
  BytesLike as Arrayish,
  BigNumber,
  BigNumberish,
  Contract,
} from "ethers"
import { ContractCallOverrides, ContractTransactionOverrides } from "../shared"

export interface StakeRequest {
  underlying: string
  amount: BigNumberish
}
export interface StakePermitRequest {
  underlying: string
  amount: BigNumberish
}
export interface EulStakes extends Contract {
  "new"(
    eul_: string,
    overrides?: ContractTransactionOverrides,
  ): Promise<ContractTransaction>
  eul(overrides?: ContractCallOverrides): Promise<string>
  name(overrides?: ContractCallOverrides): Promise<string>
  stake(
    ops: StakeRequest[],
    overrides?: ContractTransactionOverrides,
  ): Promise<ContractTransaction>
  stakeGift(
    beneficiary: string,
    underlying: string,
    amount: BigNumberish,
    overrides?: ContractTransactionOverrides,
  ): Promise<ContractTransaction>
  stakePermit(
    ops: StakePermitRequest[],
    value: BigNumberish,
    deadline: BigNumberish,
    v: BigNumberish,
    r: Arrayish,
    s: Arrayish,
    overrides?: ContractTransactionOverrides,
  ): Promise<ContractTransaction>
  staked(
    parameter0: string,
    parameter1: string,
    overrides?: ContractCallOverrides,
  ): Promise<BigNumber>
}
