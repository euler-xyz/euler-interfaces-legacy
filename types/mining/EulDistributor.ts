import type {
  BigNumber,
  BigNumberish,
  Contract,
  ContractTransaction,
} from "ethers"
import type { BytesLike as Arrayish } from "@ethersproject/bytes"
import { ContractCallOverrides, ContractTransactionOverrides } from "../shared"

export interface EulDistributor extends Contract {
  "new"(
    eul_: string,
    eulStakes_: string,
    overrides?: ContractTransactionOverrides,
  ): Promise<ContractTransaction>
  claim(
    account: string,
    token: string,
    claimable: BigNumberish,
    proof: Arrayish[],
    stake: string,
    overrides?: ContractTransactionOverrides,
  ): Promise<ContractTransaction>
  claimed(
    parameter0: string,
    parameter1: string,
    overrides?: ContractCallOverrides,
  ): Promise<BigNumber>
  eul(overrides?: ContractCallOverrides): Promise<string>
  eulStakes(overrides?: ContractCallOverrides): Promise<string>
  name(overrides?: ContractCallOverrides): Promise<string>
  owner(overrides?: ContractCallOverrides): Promise<string>
  transferOwnership(
    newOwner: string,
    overrides?: ContractTransactionOverrides,
  ): Promise<ContractTransaction>
  updateRoot(
    newRoot: Arrayish,
    overrides?: ContractTransactionOverrides,
  ): Promise<ContractTransaction>
}
