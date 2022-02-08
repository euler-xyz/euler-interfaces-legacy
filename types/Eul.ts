import type {
  ContractTransaction,
  Contract,
  BytesLike as Arrayish,
  BigNumber,
  BigNumberish,
} from "ethers"
import type {
  CheckpointResponse,
  ContractCallOverrides,
  ContractTransactionOverrides,
} from "./shared"

export interface Eul extends Contract {
  "new"(
    name: string,
    symbol: string,
    totalSupply_: BigNumberish,
    mintingRestrictedBefore_: BigNumberish,
    treasury_: string,
    overrides?: ContractTransactionOverrides,
  ): Promise<ContractTransaction>
  ADMIN_ROLE(overrides?: ContractCallOverrides): Promise<string>
  DEFAULT_ADMIN_ROLE(overrides?: ContractCallOverrides): Promise<string>
  DOMAIN_SEPARATOR(overrides?: ContractCallOverrides): Promise<string>
  MINT_MAX_PERCENT(overrides?: ContractCallOverrides): Promise<BigNumber>
  MINT_MIN_INTERVAL(overrides?: ContractCallOverrides): Promise<BigNumber>
  allowance(
    owner: string,
    spender: string,
    overrides?: ContractCallOverrides,
  ): Promise<BigNumber>
  approve(
    spender: string,
    amount: BigNumberish,
    overrides?: ContractTransactionOverrides,
  ): Promise<ContractTransaction>
  balanceOf(
    account: string,
    overrides?: ContractCallOverrides,
  ): Promise<BigNumber>
  checkpoints(
    account: string,
    pos: BigNumberish,
    overrides?: ContractCallOverrides,
  ): Promise<CheckpointResponse>
  decimals(overrides?: ContractCallOverrides): Promise<number>
  decreaseAllowance(
    spender: string,
    subtractedValue: BigNumberish,
    overrides?: ContractTransactionOverrides,
  ): Promise<ContractTransaction>
  delegate(
    delegatee: string,
    overrides?: ContractTransactionOverrides,
  ): Promise<ContractTransaction>
  delegateBySig(
    delegatee: string,
    nonce: BigNumberish,
    expiry: BigNumberish,
    v: BigNumberish,
    r: Arrayish,
    s: Arrayish,
    overrides?: ContractTransactionOverrides,
  ): Promise<ContractTransaction>
  delegates(account: string, overrides?: ContractCallOverrides): Promise<string>
  getPastTotalSupply(
    blockNumber: BigNumberish,
    overrides?: ContractCallOverrides,
  ): Promise<BigNumber>
  getPastVotes(
    account: string,
    blockNumber: BigNumberish,
    overrides?: ContractCallOverrides,
  ): Promise<BigNumber>
  getRoleAdmin(
    role: Arrayish,
    overrides?: ContractCallOverrides,
  ): Promise<string>
  getVotes(
    account: string,
    overrides?: ContractCallOverrides,
  ): Promise<BigNumber>
  grantRole(
    role: Arrayish,
    account: string,
    overrides?: ContractTransactionOverrides,
  ): Promise<ContractTransaction>
  hasRole(
    role: Arrayish,
    account: string,
    overrides?: ContractCallOverrides,
  ): Promise<boolean>
  increaseAllowance(
    spender: string,
    addedValue: BigNumberish,
    overrides?: ContractTransactionOverrides,
  ): Promise<ContractTransaction>
  mint(overrides?: ContractTransactionOverrides): Promise<ContractTransaction>
  mintingRestrictedBefore(overrides?: ContractCallOverrides): Promise<BigNumber>
  name(overrides?: ContractCallOverrides): Promise<string>
  nonces(owner: string, overrides?: ContractCallOverrides): Promise<BigNumber>
  numCheckpoints(
    account: string,
    overrides?: ContractCallOverrides,
  ): Promise<number>
  permit(
    owner: string,
    spender: string,
    value: BigNumberish,
    deadline: BigNumberish,
    v: BigNumberish,
    r: Arrayish,
    s: Arrayish,
    overrides?: ContractTransactionOverrides,
  ): Promise<ContractTransaction>
  renounceRole(
    role: Arrayish,
    account: string,
    overrides?: ContractTransactionOverrides,
  ): Promise<ContractTransaction>
  revokeRole(
    role: Arrayish,
    account: string,
    overrides?: ContractTransactionOverrides,
  ): Promise<ContractTransaction>
  supportsInterface(
    interfaceId: Arrayish,
    overrides?: ContractCallOverrides,
  ): Promise<boolean>
  symbol(overrides?: ContractCallOverrides): Promise<string>
  totalSupply(overrides?: ContractCallOverrides): Promise<BigNumber>
  transfer(
    recipient: string,
    amount: BigNumberish,
    overrides?: ContractTransactionOverrides,
  ): Promise<ContractTransaction>
  transferFrom(
    sender: string,
    recipient: string,
    amount: BigNumberish,
    overrides?: ContractTransactionOverrides,
  ): Promise<ContractTransaction>
  treasury(overrides?: ContractCallOverrides): Promise<string>
  updateTreasury(
    newTreasury: string,
    overrides?: ContractTransactionOverrides,
  ): Promise<ContractTransaction>
}
