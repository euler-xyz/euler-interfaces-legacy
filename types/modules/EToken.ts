import {
  ContractTransaction,
  BytesLike as Arrayish,
  BigNumber,
  BigNumberish,
  Contract,
} from "ethers"
import { ContractCallOverrides, ContractTransactionOverrides } from "../shared"

export interface EToken extends Contract {
  "new"(
    moduleGitCommit_: Arrayish,
    overrides?: ContractTransactionOverrides,
  ): Promise<ContractTransaction>
  allowance(
    holder: string,
    spender: string,
    overrides?: ContractCallOverrides,
  ): Promise<BigNumber>
  approve(
    spender: string,
    amount: BigNumberish,
    overrides?: ContractTransactionOverrides,
  ): Promise<ContractTransaction>
  approveSubAccount(
    subAccountId: BigNumberish,
    spender: string,
    amount: BigNumberish,
    overrides?: ContractTransactionOverrides,
  ): Promise<ContractTransaction>
  balanceOf(
    account: string,
    overrides?: ContractCallOverrides,
  ): Promise<BigNumber>
  balanceOfUnderlying(
    account: string,
    overrides?: ContractCallOverrides,
  ): Promise<BigNumber>
  burn(
    subAccountId: BigNumberish,
    amount: BigNumberish,
    overrides?: ContractTransactionOverrides,
  ): Promise<ContractTransaction>
  decimals(overrides?: ContractCallOverrides): Promise<number>
  deposit(
    subAccountId: BigNumberish,
    amount: BigNumberish,
    overrides?: ContractTransactionOverrides,
  ): Promise<ContractTransaction>
  mint(
    subAccountId: BigNumberish,
    amount: BigNumberish,
    overrides?: ContractTransactionOverrides,
  ): Promise<ContractTransaction>
  moduleGitCommit(overrides?: ContractCallOverrides): Promise<string>
  moduleId(overrides?: ContractCallOverrides): Promise<BigNumber>
  name(overrides?: ContractCallOverrides): Promise<string>
  reserveBalance(overrides?: ContractCallOverrides): Promise<BigNumber>
  reserveBalanceUnderlying(
    overrides?: ContractCallOverrides,
  ): Promise<BigNumber>
  symbol(overrides?: ContractCallOverrides): Promise<string>
  totalSupply(overrides?: ContractCallOverrides): Promise<BigNumber>
  totalSupplyUnderlying(overrides?: ContractCallOverrides): Promise<BigNumber>
  touch(overrides?: ContractTransactionOverrides): Promise<ContractTransaction>
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
  withdraw(
    subAccountId: BigNumberish,
    amount: BigNumberish,
    overrides?: ContractTransactionOverrides,
  ): Promise<ContractTransaction>
}
