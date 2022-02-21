import { BigNumberish, Contract, ContractTransaction } from "ethers"
import { ContractCallOverrides, ContractTransactionOverrides } from "./shared"

export interface Euler extends Contract {
  "new"(
    admin: string,
    installerModule: string,
    overrides?: ContractTransactionOverrides,
  ): Promise<ContractTransaction>
  dispatch(
    overrides?: ContractTransactionOverrides,
  ): Promise<ContractTransaction>
  moduleIdToImplementation(
    moduleId: BigNumberish,
    overrides?: ContractCallOverrides,
  ): Promise<string>
  moduleIdToProxy(
    moduleId: BigNumberish,
    overrides?: ContractCallOverrides,
  ): Promise<string>
  name(overrides?: ContractCallOverrides): Promise<string>
}
