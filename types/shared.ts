import type { BigNumber } from "ethers"

export interface ContractTransactionOverrides {
  gasLimit?: number
  gasPrice?: BigNumber | string | number | Promise<any>
  nonce?: number
  value?: BigNumber | string | number | Promise<any>
  chainId?: number
}

export interface ContractCallOverrides {
  from?: string
  gasLimit?: number
}

export interface CheckpointResponse {
  fromBlock: number
  0: number
  votes: BigNumber
  1: BigNumber
}
