import {
  ContractTransaction,
  BytesLike as Arrayish,
  BigNumber,
  BigNumberish,
  Contract,
} from "ethers"
import { ContractCallOverrides, ContractTransactionOverrides } from "../shared"

export interface DToken extends Contract {
  "new"(
    moduleGitCommit_: Arrayish,
    overrides?: ContractTransactionOverrides,
  ): Promise<ContractTransaction>
  approveDebt(
    subAccountId: BigNumberish,
    spender: string,
    amount: BigNumberish,
    overrides?: ContractTransactionOverrides,
  ): Promise<ContractTransaction>
  balanceOf(
    account: string,
    overrides?: ContractCallOverrides,
  ): Promise<BigNumber>
  balanceOfExact(
    account: string,
    overrides?: ContractCallOverrides,
  ): Promise<BigNumber>
  borrow(
    subAccountId: BigNumberish,
    amount: BigNumberish,
    overrides?: ContractTransactionOverrides,
  ): Promise<ContractTransaction>
  debtAllowance(
    holder: string,
    spender: string,
    overrides?: ContractCallOverrides,
  ): Promise<BigNumber>
  decimals(overrides?: ContractCallOverrides): Promise<number>
  moduleGitCommit(overrides?: ContractCallOverrides): Promise<string>
  moduleId(overrides?: ContractCallOverrides): Promise<BigNumber>
  name(overrides?: ContractCallOverrides): Promise<string>
  repay(
    subAccountId: BigNumberish,
    amount: BigNumberish,
    overrides?: ContractTransactionOverrides,
  ): Promise<ContractTransaction>
  symbol(overrides?: ContractCallOverrides): Promise<string>
  totalSupply(overrides?: ContractCallOverrides): Promise<BigNumber>
  totalSupplyExact(overrides?: ContractCallOverrides): Promise<BigNumber>
  transfer(
    to: string,
    amount: BigNumberish,
    overrides?: ContractTransactionOverrides,
  ): Promise<ContractTransaction>
  transferFrom(
    from: string,
    to: string,
    amount: BigNumberish,
    overrides?: ContractTransactionOverrides,
  ): Promise<ContractTransaction>
}
