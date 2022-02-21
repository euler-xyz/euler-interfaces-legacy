import { BigNumber, BigNumberish, Contract, ContractTransaction } from "ethers"
import { ContractCallOverrides, ContractTransactionOverrides } from "./shared"

export interface PToken extends Contract {
  "new"(
    euler_: string,
    underlying_: string,
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
  balanceOf(who: string, overrides?: ContractCallOverrides): Promise<BigNumber>
  claimSurplus(
    who: string,
    overrides?: ContractTransactionOverrides,
  ): Promise<ContractTransaction>
  decimals(overrides?: ContractCallOverrides): Promise<number>
  forceUnwrap(
    who: string,
    amount: BigNumberish,
    overrides?: ContractTransactionOverrides,
  ): Promise<ContractTransaction>
  name(overrides?: ContractCallOverrides): Promise<string>
  symbol(overrides?: ContractCallOverrides): Promise<string>
  totalSupply(overrides?: ContractCallOverrides): Promise<BigNumber>
  transfer(
    recipient: string,
    amount: BigNumberish,
    overrides?: ContractTransactionOverrides,
  ): Promise<ContractTransaction>
  transferFrom(
    from: string,
    recipient: string,
    amount: BigNumberish,
    overrides?: ContractTransactionOverrides,
  ): Promise<ContractTransaction>
  underlying(overrides?: ContractCallOverrides): Promise<string>
  unwrap(
    amount: BigNumberish,
    overrides?: ContractTransactionOverrides,
  ): Promise<ContractTransaction>
  wrap(
    amount: BigNumberish,
    overrides?: ContractTransactionOverrides,
  ): Promise<ContractTransaction>
}
