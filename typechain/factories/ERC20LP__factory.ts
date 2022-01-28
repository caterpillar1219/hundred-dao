/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import {
  Signer,
  BigNumberish,
  Contract,
  ContractFactory,
  Overrides,
} from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";

import type { ERC20LP } from "../ERC20LP";

export class ERC20LP__factory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(
    _name: string,
    _symbol: string,
    _decimals: BigNumberish,
    _supply: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ERC20LP> {
    return super.deploy(
      _name,
      _symbol,
      _decimals,
      _supply,
      overrides || {}
    ) as Promise<ERC20LP>;
  }
  getDeployTransaction(
    _name: string,
    _symbol: string,
    _decimals: BigNumberish,
    _supply: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(
      _name,
      _symbol,
      _decimals,
      _supply,
      overrides || {}
    );
  }
  attach(address: string): ERC20LP {
    return super.attach(address) as ERC20LP;
  }
  connect(signer: Signer): ERC20LP__factory {
    return super.connect(signer) as ERC20LP__factory;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): ERC20LP {
    return new Contract(address, _abi, signerOrProvider) as ERC20LP;
  }
}

const _abi = [
  {
    name: "Transfer",
    inputs: [
      {
        name: "_from",
        type: "address",
        indexed: true,
      },
      {
        name: "_to",
        type: "address",
        indexed: true,
      },
      {
        name: "_value",
        type: "uint256",
        indexed: false,
      },
    ],
    anonymous: false,
    type: "event",
  },
  {
    name: "Approval",
    inputs: [
      {
        name: "_owner",
        type: "address",
        indexed: true,
      },
      {
        name: "_spender",
        type: "address",
        indexed: true,
      },
      {
        name: "_value",
        type: "uint256",
        indexed: false,
      },
    ],
    anonymous: false,
    type: "event",
  },
  {
    stateMutability: "nonpayable",
    type: "constructor",
    inputs: [
      {
        name: "_name",
        type: "string",
      },
      {
        name: "_symbol",
        type: "string",
      },
      {
        name: "_decimals",
        type: "uint256",
      },
      {
        name: "_supply",
        type: "uint256",
      },
    ],
    outputs: [],
  },
  {
    stateMutability: "nonpayable",
    type: "function",
    name: "set_minter",
    inputs: [
      {
        name: "_minter",
        type: "address",
      },
    ],
    outputs: [],
    gas: 37545,
  },
  {
    stateMutability: "view",
    type: "function",
    name: "totalSupply",
    inputs: [],
    outputs: [
      {
        name: "",
        type: "uint256",
      },
    ],
    gas: 2418,
  },
  {
    stateMutability: "view",
    type: "function",
    name: "allowance",
    inputs: [
      {
        name: "_owner",
        type: "address",
      },
      {
        name: "_spender",
        type: "address",
      },
    ],
    outputs: [
      {
        name: "",
        type: "uint256",
      },
    ],
    gas: 2878,
  },
  {
    stateMutability: "nonpayable",
    type: "function",
    name: "transfer",
    inputs: [
      {
        name: "_to",
        type: "address",
      },
      {
        name: "_value",
        type: "uint256",
      },
    ],
    outputs: [
      {
        name: "",
        type: "bool",
      },
    ],
    gas: 77400,
  },
  {
    stateMutability: "nonpayable",
    type: "function",
    name: "transferFrom",
    inputs: [
      {
        name: "_from",
        type: "address",
      },
      {
        name: "_to",
        type: "address",
      },
      {
        name: "_value",
        type: "uint256",
      },
    ],
    outputs: [
      {
        name: "",
        type: "bool",
      },
    ],
    gas: 117212,
  },
  {
    stateMutability: "nonpayable",
    type: "function",
    name: "approve",
    inputs: [
      {
        name: "_spender",
        type: "address",
      },
      {
        name: "_value",
        type: "uint256",
      },
    ],
    outputs: [
      {
        name: "",
        type: "bool",
      },
    ],
    gas: 40346,
  },
  {
    stateMutability: "nonpayable",
    type: "function",
    name: "mint",
    inputs: [
      {
        name: "_to",
        type: "address",
      },
      {
        name: "_value",
        type: "uint256",
      },
    ],
    outputs: [],
    gas: 79631,
  },
  {
    stateMutability: "nonpayable",
    type: "function",
    name: "burn",
    inputs: [
      {
        name: "_value",
        type: "uint256",
      },
    ],
    outputs: [],
    gas: 80288,
  },
  {
    stateMutability: "nonpayable",
    type: "function",
    name: "burnFrom",
    inputs: [
      {
        name: "_to",
        type: "address",
      },
      {
        name: "_value",
        type: "uint256",
      },
    ],
    outputs: [],
    gas: 80422,
  },
  {
    stateMutability: "view",
    type: "function",
    name: "name",
    inputs: [],
    outputs: [
      {
        name: "",
        type: "string",
      },
    ],
    gas: 12888,
  },
  {
    stateMutability: "view",
    type: "function",
    name: "symbol",
    inputs: [],
    outputs: [
      {
        name: "",
        type: "string",
      },
    ],
    gas: 10641,
  },
  {
    stateMutability: "view",
    type: "function",
    name: "decimals",
    inputs: [],
    outputs: [
      {
        name: "",
        type: "uint256",
      },
    ],
    gas: 2718,
  },
  {
    stateMutability: "view",
    type: "function",
    name: "balanceOf",
    inputs: [
      {
        name: "arg0",
        type: "address",
      },
    ],
    outputs: [
      {
        name: "",
        type: "uint256",
      },
    ],
    gas: 2963,
  },
];

const _bytecode =
  "0x60806108e961014039606060206108e960c03960c0516108e9016101c039604060206108e960c03960c05160040135111561003957600080fd5b6040602060206108e90160c03960c0516108e901610240396020602060206108e90160c03960c05160040135111561007057600080fd5b6101a051604e610180511061008457600080fd5b61018051600a0a808202821582848304141761009f57600080fd5b809050905090506102a0526101c0806000602082510161012060006003818352015b826101205160200211156100d4576100f6565b61012051602002850151610120518501555b81516001018083528114156100c1575b505050505050610240806004602082510161012060006002818352015b8261012051602002111561012657610148565b61012051602002850151610120518501555b8151600101808352811415610113575b505050505050610180516007556102a05160083360e05260c052604060c020556102a051600a5533600b556102a0516102c0523360007fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef60206102c0a36108d156600436101561000d5761067d565b600035601c52600051341561002157600080fd5b631652e9fc8114156100535760043560a01c1561003d57600080fd5b600b54331461004b57600080fd5b600435600b55005b6318160ddd81141561006b57600a5460005260206000f35b63dd62ed3e8114156100bf5760043560a01c1561008757600080fd5b60243560a01c1561009757600080fd5b600960043560e05260c052604060c02060243560e05260c052604060c0205460005260206000f35b63a9059cbb8114156101705760043560a01c156100db57600080fd5b60083360e05260c052604060c0208054602435808210156100fb57600080fd5b80820390509050815550600860043560e05260c052604060c020805460243581818301101561012957600080fd5b8082019050905081555060243561014052600435337fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef6020610140a3600160005260206000f35b6323b872dd8114156102785760043560a01c1561018c57600080fd5b60243560a01c1561019c57600080fd5b600860043560e05260c052604060c0208054604435808210156101be57600080fd5b80820390509050815550600860243560e05260c052604060c02080546044358181830110156101ec57600080fd5b80820190509050815550600b5433181561023957600960043560e05260c052604060c0203360e05260c052604060c02080546044358082101561022e57600080fd5b808203905090508155505b604435610140526024356004357fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef6020610140a3600160005260206000f35b63095ea7b38114156103295760043560a01c1561029457600080fd5b60243515156102a45760016102c3565b60093360e05260c052604060c02060043560e05260c052604060c02054155b6102cc57600080fd5b60243560093360e05260c052604060c02060043560e05260c052604060c0205560243561014052600435337f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b9256020610140a3600160005260206000f35b6340c10f198114156103e55760043560a01c1561034557600080fd5b600b54331461035357600080fd5b60006004351861036257600080fd5b600a805460243581818301101561037857600080fd5b80820190509050815550600860043560e05260c052604060c02080546024358181830110156103a657600080fd5b808201905090508155506024356101405260043560007fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef6020610140a3005b6342966c6881141561046357600b5433141515610441576308c379a061014052602061016052601e610180527f4f6e6c79206d696e74657220697320616c6c6f77656420746f206275726e00006101a05261018050606461015cfd5b336101405260043561016052610160516101405160065801610683565b600050005b6379cc67908114156104f35760043560a01c1561047f57600080fd5b600b54331415156104cf576308c379a061014052602061016052601e610180527f4f6e6c79206d696e74657220697320616c6c6f77656420746f206275726e00006101a05261018050606461015cfd5b6004356101405260243561016052610160516101405160065801610683565b600050005b6306fdde0381141561059057600080610180602082540161012060006003818352015b826101205160200211156105295761054b565b61012051850154610120516020028501525b8151600101808352811415610516575b50505050505061018051806101a001818260206001820306601f82010390500336823750506020610160526040610180510160206001820306601f8201039050610160f35b6395d89b4181141561062d57600480610180602082540161012060006002818352015b826101205160200211156105c6576105e8565b61012051850154610120516020028501525b81516001018083528114156105b3575b50505050505061018051806101a001818260206001820306601f82010390500336823750506020610160526040610180510160206001820306601f8201039050610160f35b63313ce5678114156106455760075460005260206000f35b6370a0823181141561067b5760043560a01c1561066157600080fd5b600860043560e05260c052604060c0205460005260206000f35b505b60006000fd5b6101805261014052610160526000610140511861069f57600080fd5b600a805461016051808210156106b457600080fd5b8082039050905081555060086101405160e05260c052604060c020805461016051808210156106e257600080fd5b80820390509050815550610160516101a0526000610140517fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef60206101a0a361018051565b6101aa6108d1036101aa6000396101aa6108d1036000f3";
