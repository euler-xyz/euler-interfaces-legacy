/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import {
  Signer,
  utils,
  Contract,
  ContractFactory,
  BytesLike,
  Overrides,
} from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type {
  EulerSimpleLens,
  EulerSimpleLensInterface,
} from "../../views/EulerSimpleLens";

const _abi = [
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "moduleGitCommit_",
        type: "bytes32",
      },
      {
        internalType: "address",
        name: "euler_",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    inputs: [],
    name: "euler",
    outputs: [
      {
        internalType: "contract Euler",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "exec",
    outputs: [
      {
        internalType: "contract Exec",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "getAccountStatus",
    outputs: [
      {
        internalType: "uint256",
        name: "collateralValue",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "liabilityValue",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "healthScore",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "underlying",
        type: "address",
      },
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "getDTokenBalance",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "underlying",
        type: "address",
      },
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "getETokenBalance",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "getEnteredMarkets",
    outputs: [
      {
        internalType: "address[]",
        name: "",
        type: "address[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "underlying",
        type: "address",
      },
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "getEulerAccountAllowance",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "underlying",
        type: "address",
      },
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "getPTokenBalance",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "underlying",
        type: "address",
      },
    ],
    name: "getPriceFull",
    outputs: [
      {
        internalType: "uint256",
        name: "twap",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "twapPeriod",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "currPrice",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "underlying",
        type: "address",
      },
    ],
    name: "getPricingConfig",
    outputs: [
      {
        internalType: "uint16",
        name: "pricingType",
        type: "uint16",
      },
      {
        internalType: "uint32",
        name: "pricingParameters",
        type: "uint32",
      },
      {
        internalType: "address",
        name: "pricingForwarded",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "underlying",
        type: "address",
      },
    ],
    name: "getTokenInfo",
    outputs: [
      {
        internalType: "string",
        name: "name",
        type: "string",
      },
      {
        internalType: "string",
        name: "symbol",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "underlying",
        type: "address",
      },
    ],
    name: "getTotalSupplyAndDebts",
    outputs: [
      {
        internalType: "uint256",
        name: "poolSize",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "totalBalances",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "totalBorrows",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "reserveBalance",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "underlying",
        type: "address",
      },
    ],
    name: "interestAccumulator",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "underlying",
        type: "address",
      },
    ],
    name: "interestRateModel",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "underlying",
        type: "address",
      },
    ],
    name: "interestRates",
    outputs: [
      {
        internalType: "uint256",
        name: "borrowSPY",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "borrowAPY",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "supplyAPY",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "underlying",
        type: "address",
      },
    ],
    name: "irmSettings",
    outputs: [
      {
        components: [
          {
            internalType: "uint256",
            name: "kink",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "baseAPY",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "kinkAPY",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "maxAPY",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "baseSupplyAPY",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "kinkSupplyAPY",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "maxSupplyAPY",
            type: "uint256",
          },
        ],
        internalType: "struct EulerSimpleLens.ResponseIRM",
        name: "r",
        type: "tuple",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "markets",
    outputs: [
      {
        internalType: "contract Markets",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "moduleGitCommit",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "underlying",
        type: "address",
      },
    ],
    name: "reserveFee",
    outputs: [
      {
        internalType: "uint32",
        name: "",
        type: "uint32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "underlying",
        type: "address",
      },
    ],
    name: "underlyingToAssetConfig",
    outputs: [
      {
        components: [
          {
            internalType: "address",
            name: "eTokenAddress",
            type: "address",
          },
          {
            internalType: "bool",
            name: "borrowIsolated",
            type: "bool",
          },
          {
            internalType: "uint32",
            name: "collateralFactor",
            type: "uint32",
          },
          {
            internalType: "uint32",
            name: "borrowFactor",
            type: "uint32",
          },
          {
            internalType: "uint24",
            name: "twapWindow",
            type: "uint24",
          },
        ],
        internalType: "struct Storage.AssetConfig",
        name: "config",
        type: "tuple",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "underlying",
        type: "address",
      },
    ],
    name: "underlyingToDToken",
    outputs: [
      {
        internalType: "address",
        name: "dToken",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "underlying",
        type: "address",
      },
    ],
    name: "underlyingToEToken",
    outputs: [
      {
        internalType: "address",
        name: "eToken",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "underlying",
        type: "address",
      },
    ],
    name: "underlyingToInternalTokens",
    outputs: [
      {
        internalType: "address",
        name: "eToken",
        type: "address",
      },
      {
        internalType: "address",
        name: "dToken",
        type: "address",
      },
      {
        internalType: "address",
        name: "pToken",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "underlying",
        type: "address",
      },
    ],
    name: "underlyingToPToken",
    outputs: [
      {
        internalType: "address",
        name: "pToken",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
];

const _bytecode =
  "0x6101006040523480156200001257600080fd5b506040516200243a3803806200243a833981016040819052620000359162000151565b60808290526001600160a01b03811660a081905260405163734c938f60e01b81526002600482015263734c938f90602401602060405180830381865afa15801562000084573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190620000aa919062000180565b6001600160a01b0390811660c05260a05160405163734c938f60e01b81526005600482015291169063734c938f90602401602060405180830381865afa158015620000f9573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906200011f919062000180565b6001600160a01b031660e05250620001a59050565b80516001600160a01b03811681146200014c57600080fd5b919050565b600080604083850312156200016557600080fd5b82519150620001776020840162000134565b90509250929050565b6000602082840312156200019357600080fd5b6200019e8262000134565b9392505050565b60805160a05160c05160e0516121e4620002566000396000818161048d01528181610b21015261173801526000818161024a015281816105d30152818161073f015281816107f6015281816108b80152818161093101528181610d3c01528181610dfe015281816110db0152818161119401528181611578015261184e01526000818161051d01528181610bff01528181610cbd01528181610ea8015261124b0152600061033d01526121e46000f3fe608060405234801561001057600080fd5b50600436106101985760003560e01c8063b409dd9b116100e3578063d6ba7c091161008c578063eea0bd4d11610066578063eea0bd4d14610552578063fd4fa05a14610565578063fd7948d41461057857600080fd5b8063d6ba7c09146104af578063db661b7114610518578063dccda03d1461053f57600080fd5b8063b97dfd40116100bd578063b97dfd4014610442578063bcc343ae14610475578063c1c0e9c41461048857600080fd5b8063b409dd9b146103f4578063b6e8f70514610407578063b74b1ed51461041a57600080fd5b806369a92ea31161014557806395d20fc51161011f57806395d20fc5146103a05780639693fa6b146103b3578063a4f16fbd146103e157600080fd5b806369a92ea314610338578063894887491461036d5780638ccb720b1461038057600080fd5b80633ac2a032116101765780633ac2a032146102455780634e9cfac21461026c578063546422d6146102ea57600080fd5b80631b3005821461019d5780631f69565f146101da578063342b9805146101fb575b600080fd5b6101b06101ab366004611b65565b61058b565b60405173ffffffffffffffffffffffffffffffffffffffff90911681526020015b60405180910390f35b6101ed6101e8366004611b65565b610647565b6040516101d1929190611c03565b61020e610209366004611b65565b6106a7565b6040805173ffffffffffffffffffffffffffffffffffffffff948516815292841660208401529216918101919091526060016101d1565b6101b07f000000000000000000000000000000000000000000000000000000000000000081565b61027f61027a366004611b65565b6106d3565b6040516101d19190600060a08201905073ffffffffffffffffffffffffffffffffffffffff8351168252602083015115156020830152604083015163ffffffff8082166040850152806060860151166060850152505062ffffff608084015116608083015292915050565b6102fd6102f8366004611b65565b6107aa565b6040805161ffff909416845263ffffffff909216602084015273ffffffffffffffffffffffffffffffffffffffff16908201526060016101d1565b61035f7f000000000000000000000000000000000000000000000000000000000000000081565b6040519081526020016101d1565b6101b061037b366004611b65565b610870565b61039361038e366004611b65565b6108e9565b6040516101d19190611c28565b61035f6103ae366004611c82565b6109c0565b6103c66103c1366004611b65565b610ad5565b604080519384526020840192909252908201526060016101d1565b61035f6103ef366004611c82565b610b9c565b61035f610402366004611b65565b610cf4565b61035f610415366004611c82565b610daa565b61042d610428366004611b65565b610db6565b60405163ffffffff90911681526020016101d1565b610455610450366004611b65565b610e6b565b6040805194855260208501939093529183015260608201526080016101d1565b61035f610483366004611b65565b611093565b6101b07f000000000000000000000000000000000000000000000000000000000000000081565b6104c26104bd366004611b65565b61110c565b6040516101d19190600060e082019050825182526020830151602083015260408301516040830152606083015160608301526080830151608083015260a083015160a083015260c083015160c083015292915050565b6101b07f000000000000000000000000000000000000000000000000000000000000000081565b6103c661054d366004611b65565b61152c565b61035f610560366004611c82565b61161c565b6103c6610573366004611b65565b6116ec565b6101b0610586366004611b65565b611806565b6040517f1b30058200000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff82811660048301526000917f000000000000000000000000000000000000000000000000000000000000000090911690631b300582906024015b602060405180830381865afa15801561061d573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906106419190611cbb565b92915050565b606080610674837f06fdde030000000000000000000000000000000000000000000000000000000061187f565b91506106a0837f95d89b410000000000000000000000000000000000000000000000000000000061187f565b9050915091565b60008060006106b584610870565b92506106c08461058b565b91506106cb84611806565b929491935050565b6040805160a08101825260008082526020820181905281830181905260608201819052608082015290517f4e9cfac200000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff83811660048301527f00000000000000000000000000000000000000000000000000000000000000001690634e9cfac29060240160a060405180830381865afa158015610786573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906106419190611d7f565b6040517f546422d600000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff8281166004830152600091829182917f00000000000000000000000000000000000000000000000000000000000000009091169063546422d690602401606060405180830381865afa15801561083f573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906108639190611e19565b9196909550909350915050565b6040517f8948874900000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff82811660048301526000917f000000000000000000000000000000000000000000000000000000000000000090911690638948874990602401610600565b6040517f8ccb720b00000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff82811660048301526060917f000000000000000000000000000000000000000000000000000000000000000090911690638ccb720b90602401600060405180830381865afa15801561097a573d6000803e3d6000fd5b505050506040513d6000823e601f3d9081017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe01682016040526106419190810190611e69565b6000806109cc8461058b565b905073ffffffffffffffffffffffffffffffffffffffff831615610a83576040517f70a0823100000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff84811660048301528216906370a08231906024015b602060405180830381865afa158015610a57573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610a7b9190611f1b565b915050610641565b6040517f70a0823100000000000000000000000000000000000000000000000000000000815233600482015273ffffffffffffffffffffffffffffffffffffffff8216906370a0823190602401610a3a565b6040517f9693fa6b00000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff8281166004830152600091829182917f000000000000000000000000000000000000000000000000000000000000000091821690639693fa6b90602401606060405180830381865afa158015610b6a573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610b8e9190611f34565b919790965090945092505050565b600073ffffffffffffffffffffffffffffffffffffffff821615610c7a576040517fdd62ed3e00000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff83811660048301527f00000000000000000000000000000000000000000000000000000000000000008116602483015284169063dd62ed3e906044015b602060405180830381865afa158015610c4f573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610c739190611f1b565b9050610641565b6040517fdd62ed3e00000000000000000000000000000000000000000000000000000000815233600482015273ffffffffffffffffffffffffffffffffffffffff7f00000000000000000000000000000000000000000000000000000000000000008116602483015284169063dd62ed3e90604401610c32565b6040517fb409dd9b00000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff82811660048301526000917f00000000000000000000000000000000000000000000000000000000000000009091169063b409dd9b906024015b602060405180830381865afa158015610d86573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906106419190611f1b565b6000806109cc84611806565b6040517fb74b1ed500000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff82811660048301526000917f00000000000000000000000000000000000000000000000000000000000000009091169063b74b1ed590602401602060405180830381865afa158015610e47573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906106419190611f62565b6040517f70a0823100000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff7f0000000000000000000000000000000000000000000000000000000000000000811660048301526000918291829182918616906370a0823190602401602060405180830381865afa158015610f00573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610f249190611f1b565b9350600080610f32876106a7565b50915091508173ffffffffffffffffffffffffffffffffffffffff1663fea61faa6040518163ffffffff1660e01b8152600401602060405180830381865afa158015610f82573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610fa69190611f1b565b94508073ffffffffffffffffffffffffffffffffffffffff166318160ddd6040518163ffffffff1660e01b8152600401602060405180830381865afa158015610ff3573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906110179190611f1b565b93508173ffffffffffffffffffffffffffffffffffffffff1663e73277d06040518163ffffffff1660e01b8152600401602060405180830381865afa158015611064573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906110889190611f1b565b925050509193509193565b6040517fbcc343ae00000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff82811660048301526000917f00000000000000000000000000000000000000000000000000000000000000009091169063bcc343ae90602401610d69565b61114c6040518060e00160405280600081526020016000815260200160008152602001600081526020016000815260200160008152602001600081525090565b6040517fb409dd9b00000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff83811660048301526000917f00000000000000000000000000000000000000000000000000000000000000009091169063b409dd9b90602401602060405180830381865afa1580156111dd573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906112019190611f1b565b6040517fcab65f010000000000000000000000000000000000000000000000000000000081526004810182905290915060009073ffffffffffffffffffffffffffffffffffffffff7f0000000000000000000000000000000000000000000000000000000000000000169063cab65f0190602401602060405180830381865afa158015611292573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906112b69190611cbb565b9050600081905060008173ffffffffffffffffffffffffffffffffffffffff1663fd2da3396040518163ffffffff1660e01b8152600401602060405180830381865afa15801561130a573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061132e9190611f1b565b8086529050600061133e87610db6565b905060008373ffffffffffffffffffffffffffffffffffffffff16631f68f20a6040518163ffffffff1660e01b8152600401602060405180830381865afa15801561138d573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906113b19190611f1b565b905060008473ffffffffffffffffffffffffffffffffffffffff1663a62b75a86040518163ffffffff1660e01b8152600401602060405180830381865afa158015611400573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906114249190611f1b565b61142e9085611fac565b6114389083611fe9565b905060008573ffffffffffffffffffffffffffffffffffffffff1663d0134cb76040518163ffffffff1660e01b8152600401602060405180830381865afa158015611487573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906114ab9190611f1b565b6114b98663ffffffff612001565b6114c39190611fac565b6114cd9083611fe9565b90506114e083600063ffffffff876119c0565b60808b015260208a01526114fa828663ffffffff876119c0565b60a08b015260408a01526115148163ffffffff80876119c0565b60c08b015260608a0152509698975050505050505050565b6040517f7c2c69c000000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff8281166004830152600091829182917f000000000000000000000000000000000000000000000000000000000000000090911690637c2c69c090602401602060405180830381865afa1580156115c1573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906115e59190612018565b600b0b92506000806115f686610e6b565b50925092505061161085828461160b8a610db6565b6119c0565b95979096509350505050565b60008061162884610870565b905073ffffffffffffffffffffffffffffffffffffffff83161561169a576040517f3af9e66900000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff8481166004830152821690633af9e66990602401610a3a565b6040517f3af9e66900000000000000000000000000000000000000000000000000000000815233600482015273ffffffffffffffffffffffffffffffffffffffff821690633af9e66990602401610a3a565b6040517fb8c876b100000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff8281166004830152600091829182917f00000000000000000000000000000000000000000000000000000000000000009183919083169063b8c876b190602401608060405180830381865afa158015611784573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906117a8919061203b565b8051602082015190965094509050836117df577fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff92505b836117f286670de0b6b3a7640000611fac565b6117fc91906120a5565b9496939550505050565b6040517ffd7948d400000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff82811660048301526000917f00000000000000000000000000000000000000000000000000000000000000009091169063fd7948d490602401610600565b60408051600481526024810182526020810180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff167fffffffff0000000000000000000000000000000000000000000000000000000085161790529051606091600091829173ffffffffffffffffffffffffffffffffffffffff87169161190391906120e0565b600060405180830381855afa9150503d806000811461193e576040519150601f19603f3d011682016040523d82523d6000602084013e611943565b606091505b5091509150811580611956575060208151105b15611974576040518060200160405280600081525092505050610641565b8051602014611996578080602001905181019061199191906120fc565b6119b7565b806040516020016119a791906120e0565b6040516020818303038152906040525b95945050505050565b6000806b033b2e3c9fd0803ce80000006119f46119dd8883611fe9565b6301e185586b033b2e3c9fd0803ce8000000611a82565b6119fe9190612001565b915060008415611a225784611a138789611fac565b611a1d91906120a5565b611a25565b60005b905063ee6b2800611a3c63ffffffff861682612001565b611a469083611fac565b611a5091906120a5565b90506b033b2e3c9fd0803ce8000000611a6c6119dd8383611fe9565b611a769190612001565b91505094509492505050565b6000838015611b2257600184168015611a9d57859250611aa1565b8392505b50600283046002850494505b8415611b1c578586028687820414611ac457600080fd5b81810181811015611ad457600080fd5b8590049650506001851615611b11578583028387820414158715151615611afa57600080fd5b81810181811015611b0a57600080fd5b8590049350505b600285049450611aad565b50611b38565b838015611b325760009250611b36565b8392505b505b509392505050565b73ffffffffffffffffffffffffffffffffffffffff81168114611b6257600080fd5b50565b600060208284031215611b7757600080fd5b8135611b8281611b40565b9392505050565b60005b83811015611ba4578181015183820152602001611b8c565b83811115611bb3576000848401525b50505050565b60008151808452611bd1816020860160208601611b89565b601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0169290920160200192915050565b604081526000611c166040830185611bb9565b82810360208401526119b78185611bb9565b6020808252825182820181905260009190848201906040850190845b81811015611c7657835173ffffffffffffffffffffffffffffffffffffffff1683529284019291840191600101611c44565b50909695505050505050565b60008060408385031215611c9557600080fd5b8235611ca081611b40565b91506020830135611cb081611b40565b809150509250929050565b600060208284031215611ccd57600080fd5b8151611b8281611b40565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b604051601f82017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe016810167ffffffffffffffff81118282101715611d4e57611d4e611cd8565b604052919050565b80518015158114611d6657600080fd5b919050565b805163ffffffff81168114611d6657600080fd5b600060a08284031215611d9157600080fd5b60405160a0810181811067ffffffffffffffff82111715611db457611db4611cd8565b6040528251611dc281611b40565b8152611dd060208401611d56565b6020820152611de160408401611d6b565b6040820152611df260608401611d6b565b6060820152608083015162ffffff81168114611e0d57600080fd5b60808201529392505050565b600080600060608486031215611e2e57600080fd5b835161ffff81168114611e4057600080fd5b9250611e4e60208501611d6b565b91506040840151611e5e81611b40565b809150509250925092565b60006020808385031215611e7c57600080fd5b825167ffffffffffffffff80821115611e9457600080fd5b818501915085601f830112611ea857600080fd5b815181811115611eba57611eba611cd8565b8060051b9150611ecb848301611d07565b8181529183018401918481019088841115611ee557600080fd5b938501935b83851015611f0f5784519250611eff83611b40565b8282529385019390850190611eea565b98975050505050505050565b600060208284031215611f2d57600080fd5b5051919050565b600080600060608486031215611f4957600080fd5b8351925060208401519150604084015190509250925092565b600060208284031215611f7457600080fd5b611b8282611d6b565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b6000817fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0483118215151615611fe457611fe4611f7d565b500290565b60008219821115611ffc57611ffc611f7d565b500190565b60008282101561201357612013611f7d565b500390565b60006020828403121561202a57600080fd5b815180600b0b8114611b8257600080fd5b60006080828403121561204d57600080fd5b6040516080810181811067ffffffffffffffff8211171561207057612070611cd8565b806040525082518152602083015160208201526040830151604082015261209960608401611d56565b60608201529392505050565b6000826120db577f4e487b7100000000000000000000000000000000000000000000000000000000600052601260045260246000fd5b500490565b600082516120f2818460208701611b89565b9190910192915050565b60006020828403121561210e57600080fd5b815167ffffffffffffffff8082111561212657600080fd5b818401915084601f83011261213a57600080fd5b81518181111561214c5761214c611cd8565b61217d60207fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0601f84011601611d07565b915080825285602082850101111561219457600080fd5b6121a5816020840160208601611b89565b5094935050505056fea2646970667358221220f553c66ded798e8bd4f1aded15ced4acd0bcb974cf56a32c2bb6c3feb146998b64736f6c634300080a0033";

type EulerSimpleLensConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: EulerSimpleLensConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class EulerSimpleLens__factory extends ContractFactory {
  constructor(...args: EulerSimpleLensConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    moduleGitCommit_: BytesLike,
    euler_: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<EulerSimpleLens> {
    return super.deploy(
      moduleGitCommit_,
      euler_,
      overrides || {}
    ) as Promise<EulerSimpleLens>;
  }
  override getDeployTransaction(
    moduleGitCommit_: BytesLike,
    euler_: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(
      moduleGitCommit_,
      euler_,
      overrides || {}
    );
  }
  override attach(address: string): EulerSimpleLens {
    return super.attach(address) as EulerSimpleLens;
  }
  override connect(signer: Signer): EulerSimpleLens__factory {
    return super.connect(signer) as EulerSimpleLens__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): EulerSimpleLensInterface {
    return new utils.Interface(_abi) as EulerSimpleLensInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): EulerSimpleLens {
    return new Contract(address, _abi, signerOrProvider) as EulerSimpleLens;
  }
}