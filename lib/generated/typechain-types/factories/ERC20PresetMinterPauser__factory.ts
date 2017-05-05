/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type {
  ERC20PresetMinterPauser,
  ERC20PresetMinterPauserInterface,
} from "../ERC20PresetMinterPauser";

const _abi = [
  {
    inputs: [
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
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "Approval",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "Paused",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        indexed: true,
        internalType: "bytes32",
        name: "previousAdminRole",
        type: "bytes32",
      },
      {
        indexed: true,
        internalType: "bytes32",
        name: "newAdminRole",
        type: "bytes32",
      },
    ],
    name: "RoleAdminChanged",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        indexed: true,
        internalType: "address",
        name: "account",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "sender",
        type: "address",
      },
    ],
    name: "RoleGranted",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        indexed: true,
        internalType: "address",
        name: "account",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "sender",
        type: "address",
      },
    ],
    name: "RoleRevoked",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "Transfer",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "Unpaused",
    type: "event",
  },
  {
    inputs: [],
    name: "DEFAULT_ADMIN_ROLE",
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
    inputs: [],
    name: "MINTER_ROLE",
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
    inputs: [],
    name: "PAUSER_ROLE",
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
        name: "owner",
        type: "address",
      },
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
    ],
    name: "allowance",
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
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "approve",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
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
    name: "balanceOf",
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
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "burn",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "burnFrom",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "decimals",
    outputs: [
      {
        internalType: "uint8",
        name: "",
        type: "uint8",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "subtractedValue",
        type: "uint256",
      },
    ],
    name: "decreaseAllowance",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
    ],
    name: "getRoleAdmin",
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
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        internalType: "uint256",
        name: "index",
        type: "uint256",
      },
    ],
    name: "getRoleMember",
    outputs: [
      {
        internalType: "address",
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
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
    ],
    name: "getRoleMemberCount",
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
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "grantRole",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "hasRole",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "addedValue",
        type: "uint256",
      },
    ],
    name: "increaseAllowance",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "mint",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "name",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "pause",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "paused",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "renounceRole",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "revokeRole",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes4",
        name: "interfaceId",
        type: "bytes4",
      },
    ],
    name: "supportsInterface",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "symbol",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "totalSupply",
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
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "transfer",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "transferFrom",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "unpause",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x60806040523480156200001157600080fd5b5060405162001cf038038062001cf08339810160408190526200003491620003b5565b8151829082906200004d90600590602085019062000242565b5080516200006390600690602084019062000242565b50506007805460ff19169055506200007d600033620000dd565b620000a97f9f2df0fed2c77648de5860a4cc508cd0818c85b8b8a1ab4ceeef8d981c8956a633620000dd565b620000d57f65d7a28e3265b37a6474929f336521b332c1681b933f6cb9f3376673440d862a33620000dd565b50506200045c565b620000e98282620000ed565b5050565b6200010482826200013060201b620008bd1760201c565b60008281526001602090815260409091206200012b91839062000941620001d0821b17901c565b505050565b6000828152602081815260408083206001600160a01b038516845290915290205460ff16620000e9576000828152602081815260408083206001600160a01b03851684529091529020805460ff191660011790556200018c3390565b6001600160a01b0316816001600160a01b0316837f2f8788117e7eff1d82e926ec794901d17c78024a50270940304540a733656f0d60405160405180910390a45050565b6000620001e7836001600160a01b038416620001f0565b90505b92915050565b60008181526001830160205260408120546200023957508154600181810184556000848152602080822090930184905584548482528286019093526040902091909155620001ea565b506000620001ea565b82805462000250906200041f565b90600052602060002090601f016020900481019282620002745760008555620002bf565b82601f106200028f57805160ff1916838001178555620002bf565b82800160010185558215620002bf579182015b82811115620002bf578251825591602001919060010190620002a2565b50620002cd929150620002d1565b5090565b5b80821115620002cd5760008155600101620002d2565b634e487b7160e01b600052604160045260246000fd5b600082601f8301126200031057600080fd5b81516001600160401b03808211156200032d576200032d620002e8565b604051601f8301601f19908116603f01168101908282118183101715620003585762000358620002e8565b816040528381526020925086838588010111156200037557600080fd5b600091505b838210156200039957858201830151818301840152908201906200037a565b83821115620003ab5760008385830101525b9695505050505050565b60008060408385031215620003c957600080fd5b82516001600160401b0380821115620003e157600080fd5b620003ef86838701620002fe565b935060208501519150808211156200040657600080fd5b506200041585828601620002fe565b9150509250929050565b600181811c908216806200043457607f821691505b602082108114156200045657634e487b7160e01b600052602260045260246000fd5b50919050565b611884806200046c6000396000f3fe608060405234801561001057600080fd5b50600436106101845760003560e01c806370a08231116100d9578063a457c2d711610087578063a457c2d714610336578063a9059cbb14610349578063ca15c8731461035c578063d53913931461036f578063d547741f14610396578063dd62ed3e146103a9578063e63ab1e9146103bc57600080fd5b806370a08231146102a457806379cc6790146102cd5780638456cb59146102e05780639010d07c146102e857806391d148541461031357806395d89b4114610326578063a217fddf1461032e57600080fd5b8063313ce56711610136578063313ce5671461023657806336568abe1461024557806339509351146102585780633f4ba83a1461026b57806340c10f191461027357806342966c68146102865780635c975abb1461029957600080fd5b806301ffc9a71461018957806306fdde03146101b1578063095ea7b3146101c657806318160ddd146101d957806323b872dd146101eb578063248a9ca3146101fe5780632f2ff15d14610221575b600080fd5b61019c6101973660046114d0565b6103d1565b60405190151581526020015b60405180910390f35b6101b96103fc565b6040516101a89190611526565b61019c6101d4366004611575565b61048e565b6004545b6040519081526020016101a8565b61019c6101f936600461159f565b6104a6565b6101dd61020c3660046115db565b60009081526020819052604090206001015490565b61023461022f3660046115f4565b6104ca565b005b604051601281526020016101a8565b6102346102533660046115f4565b6104f5565b61019c610266366004611575565b610578565b6102346105b7565b610234610281366004611575565b610635565b6102346102943660046115db565b6106c2565b60075460ff1661019c565b6101dd6102b2366004611620565b6001600160a01b031660009081526002602052604090205490565b6102346102db366004611575565b6106cf565b6102346106e4565b6102fb6102f636600461163b565b61075e565b6040516001600160a01b0390911681526020016101a8565b61019c6103213660046115f4565b61077d565b6101b96107a6565b6101dd600081565b61019c610344366004611575565b6107b5565b61019c610357366004611575565b610847565b6101dd61036a3660046115db565b610855565b6101dd7f9f2df0fed2c77648de5860a4cc508cd0818c85b8b8a1ab4ceeef8d981c8956a681565b6102346103a43660046115f4565b61086c565b6101dd6103b736600461165d565b610892565b6101dd60008051602061180f83398151915281565b60006001600160e01b03198216635a05180f60e01b14806103f657506103f682610956565b92915050565b60606005805461040b90611687565b80601f016020809104026020016040519081016040528092919081815260200182805461043790611687565b80156104845780601f1061045957610100808354040283529160200191610484565b820191906000526020600020905b81548152906001019060200180831161046757829003601f168201915b5050505050905090565b60003361049c81858561098b565b5060019392505050565b6000336104b4858285610aaf565b6104bf858585610b29565b506001949350505050565b6000828152602081905260409020600101546104e68133610cf0565b6104f08383610d54565b505050565b6001600160a01b038116331461056a5760405162461bcd60e51b815260206004820152602f60248201527f416363657373436f6e74726f6c3a2063616e206f6e6c792072656e6f756e636560448201526e103937b632b9903337b91039b2b63360891b60648201526084015b60405180910390fd5b6105748282610d76565b5050565b3360008181526003602090815260408083206001600160a01b038716845290915281205490919061049c90829086906105b29087906116d8565b61098b565b6105cf60008051602061180f8339815191523361077d565b61062b5760405162461bcd60e51b815260206004820152603960248201526000805160206117ef83398151915260448201527876652070617573657220726f6c6520746f20756e706175736560381b6064820152608401610561565b610633610d98565b565b61065f7f9f2df0fed2c77648de5860a4cc508cd0818c85b8b8a1ab4ceeef8d981c8956a63361077d565b6106b85760405162461bcd60e51b815260206004820152603660248201526000805160206117ef8339815191526044820152751d99481b5a5b9d195c881c9bdb19481d1bc81b5a5b9d60521b6064820152608401610561565b6105748282610e2b565b6106cc3382610f04565b50565b6106da823383610aaf565b6105748282610f04565b6106fc60008051602061180f8339815191523361077d565b6107565760405162461bcd60e51b815260206004820152603760248201526000805160206117ef83398151915260448201527676652070617573657220726f6c6520746f20706175736560481b6064820152608401610561565b61063361104c565b600082815260016020526040812061077690836110c7565b9392505050565b6000918252602082815260408084206001600160a01b0393909316845291905290205460ff1690565b60606006805461040b90611687565b3360008181526003602090815260408083206001600160a01b03871684529091528120549091908381101561083a5760405162461bcd60e51b815260206004820152602560248201527f45524332303a2064656372656173656420616c6c6f77616e63652062656c6f77604482015264207a65726f60d81b6064820152608401610561565b6104bf828686840361098b565b60003361049c818585610b29565b60008181526001602052604081206103f6906110d3565b6000828152602081905260409020600101546108888133610cf0565b6104f08383610d76565b6001600160a01b03918216600090815260036020908152604080832093909416825291909152205490565b6108c7828261077d565b610574576000828152602081815260408083206001600160a01b03851684529091529020805460ff191660011790556108fd3390565b6001600160a01b0316816001600160a01b0316837f2f8788117e7eff1d82e926ec794901d17c78024a50270940304540a733656f0d60405160405180910390a45050565b6000610776836001600160a01b0384166110dd565b60006001600160e01b03198216637965db0b60e01b14806103f657506301ffc9a760e01b6001600160e01b03198316146103f6565b6001600160a01b0383166109ed5760405162461bcd60e51b8152602060048201526024808201527f45524332303a20617070726f76652066726f6d20746865207a65726f206164646044820152637265737360e01b6064820152608401610561565b6001600160a01b038216610a4e5760405162461bcd60e51b815260206004820152602260248201527f45524332303a20617070726f766520746f20746865207a65726f206164647265604482015261737360f01b6064820152608401610561565b6001600160a01b0383811660008181526003602090815260408083209487168084529482529182902085905590518481527f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925910160405180910390a3505050565b6000610abb8484610892565b90506000198114610b235781811015610b165760405162461bcd60e51b815260206004820152601d60248201527f45524332303a20696e73756666696369656e7420616c6c6f77616e63650000006044820152606401610561565b610b23848484840361098b565b50505050565b6001600160a01b038316610b8d5760405162461bcd60e51b815260206004820152602560248201527f45524332303a207472616e736665722066726f6d20746865207a65726f206164604482015264647265737360d81b6064820152608401610561565b6001600160a01b038216610bef5760405162461bcd60e51b815260206004820152602360248201527f45524332303a207472616e7366657220746f20746865207a65726f206164647260448201526265737360e81b6064820152608401610561565b610bfa83838361112c565b6001600160a01b03831660009081526002602052604090205481811015610c725760405162461bcd60e51b815260206004820152602660248201527f45524332303a207472616e7366657220616d6f756e7420657863656564732062604482015265616c616e636560d01b6064820152608401610561565b6001600160a01b03808516600090815260026020526040808220858503905591851681529081208054849290610ca99084906116d8565b92505081905550826001600160a01b0316846001600160a01b031660008051602061182f83398151915284604051610ce391815260200190565b60405180910390a3610b23565b610cfa828261077d565b61057457610d12816001600160a01b03166014611137565b610d1d836020611137565b604051602001610d2e9291906116f0565b60408051601f198184030181529082905262461bcd60e51b825261056191600401611526565b610d5e82826108bd565b60008281526001602052604090206104f09082610941565b610d8082826112d3565b60008281526001602052604090206104f09082611338565b60075460ff16610de15760405162461bcd60e51b815260206004820152601460248201527314185d5cd8589b194e881b9bdd081c185d5cd95960621b6044820152606401610561565b6007805460ff191690557f5db9ee0a495bf2e6ff9c91a7834c1ba4fdd244a5e8aa4e537bd38aeae4b073aa335b6040516001600160a01b03909116815260200160405180910390a1565b6001600160a01b038216610e815760405162461bcd60e51b815260206004820152601f60248201527f45524332303a206d696e7420746f20746865207a65726f2061646472657373006044820152606401610561565b610e8d6000838361112c565b8060046000828254610e9f91906116d8565b90915550506001600160a01b03821660009081526002602052604081208054839290610ecc9084906116d8565b90915550506040518181526001600160a01b0383169060009060008051602061182f8339815191529060200160405180910390a35050565b6001600160a01b038216610f645760405162461bcd60e51b815260206004820152602160248201527f45524332303a206275726e2066726f6d20746865207a65726f206164647265736044820152607360f81b6064820152608401610561565b610f708260008361112c565b6001600160a01b03821660009081526002602052604090205481811015610fe45760405162461bcd60e51b815260206004820152602260248201527f45524332303a206275726e20616d6f756e7420657863656564732062616c616e604482015261636560f01b6064820152608401610561565b6001600160a01b038316600090815260026020526040812083830390556004805484929061101390849061175f565b90915550506040518281526000906001600160a01b0385169060008051602061182f8339815191529060200160405180910390a3505050565b60075460ff16156110925760405162461bcd60e51b815260206004820152601060248201526f14185d5cd8589b194e881c185d5cd95960821b6044820152606401610561565b6007805460ff191660011790557f62e78cea01bee320cd4e420270b5ea74000d11b0c9f74754ebdbfc544b05a258610e0e3390565b6000610776838361134d565b60006103f6825490565b6000818152600183016020526040812054611124575081546001818101845560008481526020808220909301849055845484825282860190935260409020919091556103f6565b5060006103f6565b6104f0838383611377565b60606000611146836002611776565b6111519060026116d8565b67ffffffffffffffff81111561116957611169611795565b6040519080825280601f01601f191660200182016040528015611193576020820181803683370190505b509050600360fc1b816000815181106111ae576111ae6117ab565b60200101906001600160f81b031916908160001a905350600f60fb1b816001815181106111dd576111dd6117ab565b60200101906001600160f81b031916908160001a9053506000611201846002611776565b61120c9060016116d8565b90505b6001811115611284576f181899199a1a9b1b9c1cb0b131b232b360811b85600f1660108110611240576112406117ab565b1a60f81b828281518110611256576112566117ab565b60200101906001600160f81b031916908160001a90535060049490941c9361127d816117c1565b905061120f565b5083156107765760405162461bcd60e51b815260206004820181905260248201527f537472696e67733a20686578206c656e67746820696e73756666696369656e746044820152606401610561565b6112dd828261077d565b15610574576000828152602081815260408083206001600160a01b0385168085529252808320805460ff1916905551339285917ff6391f5c32d9c69d2a47ea670b442974b53935d1edc7fd64eb21e047a839171b9190a45050565b6000610776836001600160a01b0384166113dd565b6000826000018281548110611364576113646117ab565b9060005260206000200154905092915050565b60075460ff16156104f05760405162461bcd60e51b815260206004820152602a60248201527f45524332305061757361626c653a20746f6b656e207472616e736665722077686044820152691a5b19481c185d5cd95960b21b6064820152608401610561565b600081815260018301602052604081205480156114c657600061140160018361175f565b85549091506000906114159060019061175f565b905081811461147a576000866000018281548110611435576114356117ab565b9060005260206000200154905080876000018481548110611458576114586117ab565b6000918252602080832090910192909255918252600188019052604090208390555b855486908061148b5761148b6117d8565b6001900381819060005260206000200160009055905585600101600086815260200190815260200160002060009055600193505050506103f6565b60009150506103f6565b6000602082840312156114e257600080fd5b81356001600160e01b03198116811461077657600080fd5b60005b838110156115155781810151838201526020016114fd565b83811115610b235750506000910152565b60208152600082518060208401526115458160408501602087016114fa565b601f01601f19169190910160400192915050565b80356001600160a01b038116811461157057600080fd5b919050565b6000806040838503121561158857600080fd5b61159183611559565b946020939093013593505050565b6000806000606084860312156115b457600080fd5b6115bd84611559565b92506115cb60208501611559565b9150604084013590509250925092565b6000602082840312156115ed57600080fd5b5035919050565b6000806040838503121561160757600080fd5b8235915061161760208401611559565b90509250929050565b60006020828403121561163257600080fd5b61077682611559565b6000806040838503121561164e57600080fd5b50508035926020909101359150565b6000806040838503121561167057600080fd5b61167983611559565b915061161760208401611559565b600181811c9082168061169b57607f821691505b602082108114156116bc57634e487b7160e01b600052602260045260246000fd5b50919050565b634e487b7160e01b600052601160045260246000fd5b600082198211156116eb576116eb6116c2565b500190565b76020b1b1b2b9b9a1b7b73a3937b61d1030b1b1b7bab73a1604d1b8152600083516117228160178501602088016114fa565b7001034b99036b4b9b9b4b733903937b6329607d1b60179184019182015283516117538160288401602088016114fa565b01602801949350505050565b600082821015611771576117716116c2565b500390565b6000816000190483118215151615611790576117906116c2565b500290565b634e487b7160e01b600052604160045260246000fd5b634e487b7160e01b600052603260045260246000fd5b6000816117d0576117d06116c2565b506000190190565b634e487b7160e01b600052603160045260246000fdfe45524332305072657365744d696e7465725061757365723a206d75737420686165d7a28e3265b37a6474929f336521b332c1681b933f6cb9f3376673440d862addf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3efa2646970667358221220d7ae2add40a4e9a77cc351cc150e641a76d4aa7462aa374ac698f25f0aa83c1d64736f6c634300080c0033";

type ERC20PresetMinterPauserConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: ERC20PresetMinterPauserConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class ERC20PresetMinterPauser__factory extends ContractFactory {
  constructor(...args: ERC20PresetMinterPauserConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
    this.contractName = "ERC20PresetMinterPauser";
  }

  deploy(
    name: string,
    symbol: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ERC20PresetMinterPauser> {
    return super.deploy(
      name,
      symbol,
      overrides || {}
    ) as Promise<ERC20PresetMinterPauser>;
  }
  getDeployTransaction(
    name: string,
    symbol: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(name, symbol, overrides || {});
  }
  attach(address: string): ERC20PresetMinterPauser {
    return super.attach(address) as ERC20PresetMinterPauser;
  }
  connect(signer: Signer): ERC20PresetMinterPauser__factory {
    return super.connect(signer) as ERC20PresetMinterPauser__factory;
  }
  static readonly contractName: "ERC20PresetMinterPauser";
  public readonly contractName: "ERC20PresetMinterPauser";
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): ERC20PresetMinterPauserInterface {
    return new utils.Interface(_abi) as ERC20PresetMinterPauserInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): ERC20PresetMinterPauser {
    return new Contract(
      address,
      _abi,
      signerOrProvider
    ) as ERC20PresetMinterPauser;
  }
}
