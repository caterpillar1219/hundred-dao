/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";

import type { VotingEscrow } from "../VotingEscrow";

export class VotingEscrow__factory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(
    token_addr: string,
    _name: string,
    _symbol: string,
    _version: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<VotingEscrow> {
    return super.deploy(
      token_addr,
      _name,
      _symbol,
      _version,
      overrides || {}
    ) as Promise<VotingEscrow>;
  }
  getDeployTransaction(
    token_addr: string,
    _name: string,
    _symbol: string,
    _version: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(
      token_addr,
      _name,
      _symbol,
      _version,
      overrides || {}
    );
  }
  attach(address: string): VotingEscrow {
    return super.attach(address) as VotingEscrow;
  }
  connect(signer: Signer): VotingEscrow__factory {
    return super.connect(signer) as VotingEscrow__factory;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): VotingEscrow {
    return new Contract(address, _abi, signerOrProvider) as VotingEscrow;
  }
}

const _abi = [
  {
    name: "CommitOwnership",
    inputs: [
      {
        name: "admin",
        type: "address",
        indexed: false,
      },
    ],
    anonymous: false,
    type: "event",
  },
  {
    name: "ApplyOwnership",
    inputs: [
      {
        name: "admin",
        type: "address",
        indexed: false,
      },
    ],
    anonymous: false,
    type: "event",
  },
  {
    name: "Deposit",
    inputs: [
      {
        name: "provider",
        type: "address",
        indexed: true,
      },
      {
        name: "value",
        type: "uint256",
        indexed: false,
      },
      {
        name: "locktime",
        type: "uint256",
        indexed: true,
      },
      {
        name: "type",
        type: "int128",
        indexed: false,
      },
      {
        name: "ts",
        type: "uint256",
        indexed: false,
      },
    ],
    anonymous: false,
    type: "event",
  },
  {
    name: "Withdraw",
    inputs: [
      {
        name: "provider",
        type: "address",
        indexed: true,
      },
      {
        name: "value",
        type: "uint256",
        indexed: false,
      },
      {
        name: "ts",
        type: "uint256",
        indexed: false,
      },
    ],
    anonymous: false,
    type: "event",
  },
  {
    name: "Supply",
    inputs: [
      {
        name: "prevSupply",
        type: "uint256",
        indexed: false,
      },
      {
        name: "supply",
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
        name: "token_addr",
        type: "address",
      },
      {
        name: "_name",
        type: "string",
      },
      {
        name: "_symbol",
        type: "string",
      },
      {
        name: "_version",
        type: "string",
      },
    ],
    outputs: [],
  },
  {
    stateMutability: "nonpayable",
    type: "function",
    name: "commit_transfer_ownership",
    inputs: [
      {
        name: "addr",
        type: "address",
      },
    ],
    outputs: [],
    gas: 38895,
  },
  {
    stateMutability: "nonpayable",
    type: "function",
    name: "apply_transfer_ownership",
    inputs: [],
    outputs: [],
    gas: 41034,
  },
  {
    stateMutability: "nonpayable",
    type: "function",
    name: "commit_smart_wallet_checker",
    inputs: [
      {
        name: "addr",
        type: "address",
      },
    ],
    outputs: [],
    gas: 37605,
  },
  {
    stateMutability: "nonpayable",
    type: "function",
    name: "apply_smart_wallet_checker",
    inputs: [],
    outputs: [],
    gas: 39632,
  },
  {
    stateMutability: "view",
    type: "function",
    name: "get_last_user_slope",
    inputs: [
      {
        name: "addr",
        type: "address",
      },
    ],
    outputs: [
      {
        name: "",
        type: "int128",
      },
    ],
    gas: 5001,
  },
  {
    stateMutability: "view",
    type: "function",
    name: "user_point_history__ts",
    inputs: [
      {
        name: "_addr",
        type: "address",
      },
      {
        name: "_idx",
        type: "uint256",
      },
    ],
    outputs: [
      {
        name: "",
        type: "uint256",
      },
    ],
    gas: 2804,
  },
  {
    stateMutability: "view",
    type: "function",
    name: "locked__end",
    inputs: [
      {
        name: "_addr",
        type: "address",
      },
    ],
    outputs: [
      {
        name: "",
        type: "uint256",
      },
    ],
    gas: 2789,
  },
  {
    stateMutability: "nonpayable",
    type: "function",
    name: "checkpoint",
    inputs: [],
    outputs: [],
    gas: 37424696,
  },
  {
    stateMutability: "nonpayable",
    type: "function",
    name: "deposit_for",
    inputs: [
      {
        name: "_addr",
        type: "address",
      },
      {
        name: "_value",
        type: "uint256",
      },
    ],
    outputs: [],
    gas: 75034133,
  },
  {
    stateMutability: "nonpayable",
    type: "function",
    name: "create_lock",
    inputs: [
      {
        name: "_value",
        type: "uint256",
      },
      {
        name: "_unlock_time",
        type: "uint256",
      },
    ],
    outputs: [],
    gas: 75035702,
  },
  {
    stateMutability: "nonpayable",
    type: "function",
    name: "increase_amount",
    inputs: [
      {
        name: "_value",
        type: "uint256",
      },
    ],
    outputs: [],
    gas: 75035123,
  },
  {
    stateMutability: "nonpayable",
    type: "function",
    name: "increase_unlock_time",
    inputs: [
      {
        name: "_unlock_time",
        type: "uint256",
      },
    ],
    outputs: [],
    gas: 75035770,
  },
  {
    stateMutability: "nonpayable",
    type: "function",
    name: "withdraw",
    inputs: [],
    outputs: [],
    gas: 37603171,
  },
  {
    stateMutability: "view",
    type: "function",
    name: "balanceOf",
    inputs: [
      {
        name: "addr",
        type: "address",
      },
    ],
    outputs: [
      {
        name: "",
        type: "uint256",
      },
    ],
  },
  {
    stateMutability: "view",
    type: "function",
    name: "balanceOf",
    inputs: [
      {
        name: "addr",
        type: "address",
      },
      {
        name: "_t",
        type: "uint256",
      },
    ],
    outputs: [
      {
        name: "",
        type: "uint256",
      },
    ],
  },
  {
    stateMutability: "view",
    type: "function",
    name: "balanceOfAt",
    inputs: [
      {
        name: "addr",
        type: "address",
      },
      {
        name: "_block",
        type: "uint256",
      },
    ],
    outputs: [
      {
        name: "",
        type: "uint256",
      },
    ],
    gas: 824489,
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
  },
  {
    stateMutability: "view",
    type: "function",
    name: "totalSupply",
    inputs: [
      {
        name: "t",
        type: "uint256",
      },
    ],
    outputs: [
      {
        name: "",
        type: "uint256",
      },
    ],
  },
  {
    stateMutability: "view",
    type: "function",
    name: "totalSupplyAt",
    inputs: [
      {
        name: "_block",
        type: "uint256",
      },
    ],
    outputs: [
      {
        name: "",
        type: "uint256",
      },
    ],
    gas: 1370618,
  },
  {
    stateMutability: "nonpayable",
    type: "function",
    name: "changeController",
    inputs: [
      {
        name: "_newController",
        type: "address",
      },
    ],
    outputs: [],
    gas: 38055,
  },
  {
    stateMutability: "view",
    type: "function",
    name: "token",
    inputs: [],
    outputs: [
      {
        name: "",
        type: "address",
      },
    ],
    gas: 2928,
  },
  {
    stateMutability: "view",
    type: "function",
    name: "supply",
    inputs: [],
    outputs: [
      {
        name: "",
        type: "uint256",
      },
    ],
    gas: 2958,
  },
  {
    stateMutability: "view",
    type: "function",
    name: "locked",
    inputs: [
      {
        name: "arg0",
        type: "address",
      },
    ],
    outputs: [
      {
        name: "amount",
        type: "int128",
      },
      {
        name: "end",
        type: "uint256",
      },
    ],
    gas: 5593,
  },
  {
    stateMutability: "view",
    type: "function",
    name: "epoch",
    inputs: [],
    outputs: [
      {
        name: "",
        type: "uint256",
      },
    ],
    gas: 3018,
  },
  {
    stateMutability: "view",
    type: "function",
    name: "point_history",
    inputs: [
      {
        name: "arg0",
        type: "uint256",
      },
    ],
    outputs: [
      {
        name: "bias",
        type: "int128",
      },
      {
        name: "slope",
        type: "int128",
      },
      {
        name: "ts",
        type: "uint256",
      },
      {
        name: "blk",
        type: "uint256",
      },
    ],
    gas: 9903,
  },
  {
    stateMutability: "view",
    type: "function",
    name: "user_point_history",
    inputs: [
      {
        name: "arg0",
        type: "address",
      },
      {
        name: "arg1",
        type: "uint256",
      },
    ],
    outputs: [
      {
        name: "bias",
        type: "int128",
      },
      {
        name: "slope",
        type: "int128",
      },
      {
        name: "ts",
        type: "uint256",
      },
      {
        name: "blk",
        type: "uint256",
      },
    ],
    gas: 10148,
  },
  {
    stateMutability: "view",
    type: "function",
    name: "user_point_epoch",
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
    gas: 3323,
  },
  {
    stateMutability: "view",
    type: "function",
    name: "slope_changes",
    inputs: [
      {
        name: "arg0",
        type: "uint256",
      },
    ],
    outputs: [
      {
        name: "",
        type: "int128",
      },
    ],
    gas: 3253,
  },
  {
    stateMutability: "view",
    type: "function",
    name: "controller",
    inputs: [],
    outputs: [
      {
        name: "",
        type: "address",
      },
    ],
    gas: 3168,
  },
  {
    stateMutability: "view",
    type: "function",
    name: "transfersEnabled",
    inputs: [],
    outputs: [
      {
        name: "",
        type: "bool",
      },
    ],
    gas: 3198,
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
    gas: 13458,
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
    gas: 11211,
  },
  {
    stateMutability: "view",
    type: "function",
    name: "version",
    inputs: [],
    outputs: [
      {
        name: "",
        type: "string",
      },
    ],
    gas: 11241,
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
    gas: 3318,
  },
  {
    stateMutability: "view",
    type: "function",
    name: "future_smart_wallet_checker",
    inputs: [],
    outputs: [
      {
        name: "",
        type: "address",
      },
    ],
    gas: 3348,
  },
  {
    stateMutability: "view",
    type: "function",
    name: "smart_wallet_checker",
    inputs: [],
    outputs: [
      {
        name: "",
        type: "address",
      },
    ],
    gas: 3378,
  },
  {
    stateMutability: "view",
    type: "function",
    name: "admin",
    inputs: [],
    outputs: [
      {
        name: "",
        type: "address",
      },
    ],
    gas: 3408,
  },
  {
    stateMutability: "view",
    type: "function",
    name: "future_admin",
    inputs: [],
    outputs: [
      {
        name: "",
        type: "address",
      },
    ],
    gas: 3438,
  },
];

const _bytecode =
  "0x6f7fffffffffffffffffffffffffffffff6040526080612ece610140396020612ece60c03960c05160a01c1561003457600080fd5b606060206020612ece0160c03960c051612ece016101c039604060206020612ece0160c03960c05160040135111561006b57600080fd5b604060206040612ece0160c03960c051612ece0161024039602060206040612ece0160c03960c0516004013511156100a257600080fd5b604060206060612ece0160c03960c051612ece016102a039602060206060612ece0160c03960c0516004013511156100d957600080fd5b336c050c783eb9b5c840000000001655610140516000554360075542600655336c050c783eb9b5c84000000000075560016c050c783eb9b5c8400000000008556020610380600463313ce5676103205261033c610140515afa61013b57600080fd5b601f3d1161014857600080fd5b600050610380516103005260ff61030051111561016457600080fd5b610300516c050c783eb9b5c8400000000013556101c0806c050c783eb9b5c8400000000009602082510161012060006003818352015b826101205160200211156101ad576101cf565b61012051602002850151610120518501555b815160010180835281141561019a575b505050505050610240806c050c783eb9b5c840000000000d602082510161012060006002818352015b8261012051602002111561020b5761022d565b61012051602002850151610120518501555b81516001018083528114156101f8575b5050505050506102a0806c050c783eb9b5c8400000000010602082510161012060006002818352015b826101205160200211156102695761028b565b61012051602002850151610120518501555b8151600101808352811415610256575b505050505050612eb656600436101561000d57611d19565b600035601c526f7fffffffffffffffffffffffffffffff604052600051341561003557600080fd5b636b441a408114156100ad5760043560a01c1561005157600080fd5b6c050c783eb9b5c840000000001654331461006b57600080fd5b6004356c050c783eb9b5c840000000001755600435610140527f2f56810a6bf40af059b96d3aea4db54081f378029a518390491093a7b67032e96020610140a1005b636a1c05ae81141561013a576c050c783eb9b5c84000000000165433146100d357600080fd5b6c050c783eb9b5c84000000000175461014052600061014051186100f657600080fd5b610140516c050c783eb9b5c84000000000165561014051610160527febee2d5739011062cb4f14113f3b36bf0ffe3da5c0568f64189d1012a11891056020610160a1005b6357f901e28114156101845760043560a01c1561015657600080fd5b6c050c783eb9b5c840000000001654331461017057600080fd5b6004356c050c783eb9b5c840000000001455005b638e5b490f8114156101ca576c050c783eb9b5c84000000000165433146101aa57600080fd5b6c050c783eb9b5c8400000000014546c050c783eb9b5c840000000001555005b637c74a1748114156102485760043560a01c156101e657600080fd5b6c050c783eb9b5c840000000000560043560e05260c052604060c02054610140526001600461014051633b9aca00811061021f57600080fd5b026c050c783eb9b5c840000000000460043560e05260c052604060c02001015460005260206000f35b63da020a188114156102a45760043560a01c1561026457600080fd5b60026004602435633b9aca00811061027b57600080fd5b026c050c783eb9b5c840000000000460043560e05260c052604060c02001015460005260206000f35b63adc635898114156102dd5760043560a01c156102c057600080fd5b6001600260043560e05260c052604060c020015460005260206000f35b63c2c4c5c181141561036b5760403661014037604036610180376101405161016051610180516101a05160006101c0526101e061014080518252806020015182602001525050610220610180805182528060200151826020015250506102405161022051610200516101e0516101c05160065801611e0c565b6101a052610180526101605261014052600050005b633a46273e811415610505576012541561038457600080fd5b600160125560043560a01c1561039957600080fd5b610140600260043560e05260c052604060c020805482526001810154826020015250506000602435116103cb57600080fd5b60006101405113151561041d576308c379a06101805260206101a05260166101c0527f4e6f206578697374696e67206c6f636b20666f756e64000000000000000000006101e0526101c050606461019cfd5b4261016051111515610493576308c379a06101805260206101a05260246101c0527f43616e6e6f742061646420746f2065787069726564206c6f636b2e20576974686101e0527f6472617700000000000000000000000000000000000000000000000000000000610200526101c050608461019cfd5b6101405161016051604060046101803760006101c0526101e0600260043560e05260c052604060c0208054825260018101548260200152505060006102205261022051610200516101e0516101c0516101a051610180516006580161269b565b61016052610140526000506000601255005b6365fc387381141561073f576012541561051e57600080fd5b600160125533610140526101405160065801611d1f565b60005060243562093a808082049050905062093a80808202821582848304141761055e57600080fd5b809050905090506101405261016060023360e05260c052604060c0208054825260018101548260200152505060006004351161059957600080fd5b610160511515156105e9576308c379a06101a05260206101c05260196101e0527f5769746864726177206f6c6420746f6b656e7320666972737400000000000000610200526101e05060646101bcfd5b426101405111151561065f576308c379a06101a05260206101c05260266101e0527f43616e206f6e6c79206c6f636b20756e74696c2074696d6520696e2074686520610200527f6675747572650000000000000000000000000000000000000000000000000000610220526101e05060846101bcfd5b42630784ce0081818301101561067457600080fd5b8082019050905061014051111515156106cc576308c379a06101a05260206101c052601e6101e0527f566f74696e67206c6f636b2063616e2062652034207965617273206d61780000610200526101e05060646101bcfd5b610140516101605161018051336101a0526004356101c052610140516101e052610200610160805182528060200151826020015250506001610240526102405161022051610200516101e0516101c0516101a0516006580161269b565b6101805261016052610140526000506000601255005b634957677c8114156108d3576012541561075857600080fd5b600160125533610140526101405160065801611d1f565b60005061014060023360e05260c052604060c020805482526001810154826020015250506000600435116107a257600080fd5b6000610140511315156107f4576308c379a06101805260206101a05260166101c0527f4e6f206578697374696e67206c6f636b20666f756e64000000000000000000006101e0526101c050606461019cfd5b426101605111151561086a576308c379a06101805260206101a05260246101c0527f43616e6e6f742061646420746f2065787069726564206c6f636b2e20576974686101e0527f6472617700000000000000000000000000000000000000000000000000000000610200526101c050608461019cfd5b610140516101605133610180526004356101a05260006101c0526101e06101408051825280602001518260200152505060026102205261022051610200516101e0516101c0516101a051610180516006580161269b565b61016052610140526000506000601255005b63eff7a612811415610b2e57601254156108ec57600080fd5b600160125533610140526101405160065801611d1f565b60005061014060023360e05260c052604060c0208054825260018101548260200152505060043562093a808082049050905062093a80808202821582848304141761094d57600080fd5b809050905090506101805242610160511115156109a9576308c379a06101a05260206101c052600c6101e0527f4c6f636b20657870697265640000000000000000000000000000000000000000610200526101e05060646101bcfd5b6000610140511315156109fb576308c379a06101a05260206101c05260116101e0527f4e6f7468696e67206973206c6f636b6564000000000000000000000000000000610200526101e05060646101bcfd5b6101605161018051111515610a4f576308c379a06101a05260206101c052601f6101e0527f43616e206f6e6c7920696e637265617365206c6f636b206475726174696f6e00610200526101e05060646101bcfd5b42630784ce00818183011015610a6457600080fd5b808201905090506101805111151515610abc576308c379a06101a05260206101c052601e6101e0527f566f74696e67206c6f636b2063616e2062652034207965617273206d61780000610200526101e05060646101bcfd5b610140516101605161018051336101a05260006101c052610180516101e052610200610140805182528060200151826020015250506003610240526102405161022051610200516101e0516101c0516101a0516006580161269b565b6101805261016052610140526000506000601255005b633ccfd60b811415610d975760125415610b4757600080fd5b600160125561014060023360e05260c052604060c02080548252600181015482602001525050610160514210151515610bbf576308c379a06101805260206101a05260166101c0527f546865206c6f636b206469646e277420657870697265000000000000000000006101e0526101c050606461019cfd5b610140516000811215610bd157600080fd5b610180526101a06101408051825280602001518260200152505060006101605260006101405260023360e05260c052604060c020610140805182558060200151600183015550506001546101e0526101e0516101805180821015610c3457600080fd5b808203905090506001556101405161016051610180516101a0516101c0516101e05133610200526102206101a08051825280602001518260200152505061026061014080518252806020015182602001525050610280516102605161024051610220516102005160065801611e0c565b6101e0526101c0526101a05261018052610160526101405260005060206102a0604463a9059cbb610200523361022052610180516102405261021c60006000545af1610cef57600080fd5b601f3d11610cfc57600080fd5b6000506102a051610d0c57600080fd5b61018051610200524261022052337ff279e6a1f5e320cca91135676d9cb6e44ca8a08c0b88342bcdb1144f6511b5686040610200a26101e051610200526101e0516101805180821015610d5e57600080fd5b80820390509050610220527f5e2aa66efd74cce82b21852e317e5490d9ecc9e6bb953ae24d90851258cc2f5c6040610200a16000601255005b6370a08231811415610dad574261014052610dcd565b62fdd58e811415610dc8576020602461014037600050610dcd565b610f1f565b60043560a01c15610ddd57600080fd5b6c050c783eb9b5c840000000000560043560e05260c052604060c0205461016052610160511515610e1757600060005260206000f3610f1d565b610180600461016051633b9aca008110610e3057600080fd5b026c050c783eb9b5c840000000000460043560e05260c052604060c0200180548252600181015482602001526002810154826040015260038101548260600152505061018080516101a051610140516101c05180821015610e9057600080fd5b80820390509050604051811115610ea657600080fd5b80820280806000811215610eb657195b607f1c15610ec357600080fd5b90509050905080820380806000811215610ed957195b607f1c15610ee657600080fd5b9050905090508152506000610180511215610f02576000610180525b610180516000811215610f1457600080fd5b60005260206000f35b005b634ee2cd7e81141561139b5760043560a01c15610f3b57600080fd5b436024351115610f4a57600080fd5b6000610140526c050c783eb9b5c840000000000560043560e05260c052604060c020546101605261018060006080818352015b6101605161014051101515610f9157611052565b6101405161016051818183011015610fa857600080fd5b808201905090506001818183011015610fc057600080fd5b808201905090506002808204905090506101a052602435600360046101a051633b9aca008110610fef57600080fd5b026c050c783eb9b5c840000000000460043560e05260c052604060c020010154111515611023576101a05161014052611042565b6101a05160018082101561103657600080fd5b80820390509050610160525b8151600101808352811415610f7d575b5050610180600461014051633b9aca00811061106d57600080fd5b026c050c783eb9b5c840000000000460043560e05260c052604060c02001805482526001810154826020015260028101548260400152600381015482606001525050600354610200526101405161016051610180516101a0516101c0516101e0516102005161022051602435610240526102005161026052610260516102405160065801612932565b6102c05261022052610200526101e0526101c0526101a0526101805261016052610140526102c051610220526102406004610220516c01431e0fae6d7217caa0000000811061114457600080fd5b026004018054825260018101548260200152600281015482604001526003810154826060015250506040366102c0376102005161022051101561122857610300600461022051600181818301101561119b57600080fd5b808201905090506c01431e0fae6d7217caa000000081106111bb57600080fd5b02600401805482526001810154826020015260028101548260400152600381015482606001525050610360516102a051808210156111f857600080fd5b808203905090506102c05261034051610280518082101561121857600080fd5b808203905090506102e052611263565b436102a0518082101561123a57600080fd5b808203905090506102c05242610280518082101561125757600080fd5b808203905090506102e0525b610280516103005260006102c05118156112e55761030080516102e0516024356102a0518082101561129457600080fd5b8082039050905080820282158284830414176112af57600080fd5b809050905090506102c05180806112c557600080fd5b8204905090508181830110156112da57600080fd5b808201905090508152505b61018080516101a051610300516101c0518082101561130357600080fd5b8082039050905060405181111561131957600080fd5b8082028080600081121561132957195b607f1c1561133657600080fd5b9050905090508082038080600081121561134c57195b607f1c1561135957600080fd5b90509050905081525060006101805112151561138e5761018051600081121561138157600080fd5b60005260206000f3611399565b600060005260206000f35b005b6318160ddd8114156113b15742610140526113d2565b63bd85b0398114156113cd5760206004610140376000506113d2565b6114b3565b600354610160526101806004610160516c01431e0fae6d7217caa000000081106113fb57600080fd5b026004018054825260018101548260200152600281015482604001526003810154826060015250506101405161016051610180516101a0516101c0516101e0516102006101808051825280602001518260200152806040015182604001528060600151826060015250506101405161028052610280516102605161024051610220516102005160065801612a2f565b6102e0526101e0526101c0526101a0526101805261016052610140526102e05160005260206000f35b63981b24d08114156117a3574360043511156114ce57600080fd5b60035461014052610140516101605160043561018052610140516101a0526101a0516101805160065801612932565b61020052610160526101405261020051610160526101806004610160516c01431e0fae6d7217caa0000000811061153357600080fd5b026004018054825260018101548260200152600281015482604001526003810154826060015250506000610200526101405161016051101561166857610220600461016051600181818301101561158957600080fd5b808201905090506c01431e0fae6d7217caa000000081106115a957600080fd5b02600401805482526001810154826020015260028101548260400152600381015482606001525050610280516101e0511815611663576004356101e051808210156115f357600080fd5b80820390509050610260516101c0518082101561160f57600080fd5b80820390509050808202821582848304141761162a57600080fd5b80905090509050610280516101e0518082101561164657600080fd5b80820390509050808061165857600080fd5b820490509050610200525b6116f1565b436101e05118156116f1576004356101e0518082101561168757600080fd5b80820390509050426101c051808210156116a057600080fd5b8082039050905080820282158284830414176116bb57600080fd5b80905090509050436101e051808210156116d457600080fd5b8082039050905080806116e657600080fd5b820490509050610200525b6101405161016051610180516101a0516101c0516101e051610200516102206101808051825280602001518260200152806040015182604001528060600151826060015250506101c0516102005181818301101561174e57600080fd5b808201905090506102a0526102a0516102805161026051610240516102205160065801612a2f565b61030052610200526101e0526101c0526101a0526101805261016052610140526103005160005260206000f35b633cebb8238114156117ed5760043560a01c156117bf57600080fd5b6c050c783eb9b5c84000000000075433146117d957600080fd5b6004356c050c783eb9b5c840000000000755005b63fc0c546a8114156118055760005460005260206000f35b63047fc9aa81141561181d5760015460005260206000f35b63cbf9fe5f8114156118775760043560a01c1561183957600080fd5b600260043560e05260c052604060c020610140808080845481525050602081019050808060018501548152505060409050905060c05260c051610140f35b63900cf0cf81141561188f5760035460005260206000f35b63d1febfb981141561190d5760046004356c01431e0fae6d7217caa000000081106118b957600080fd5b0260040161014080808084548152505060208101905080806001850154815250506020810190508080600285015481525050602081019050808060038501548152505060809050905060c05260c051610140f35b6328d09d478114156119ac5760043560a01c1561192957600080fd5b6004602435633b9aca00811061193e57600080fd5b026c050c783eb9b5c840000000000460043560e05260c052604060c0200161014080808084548152505060208101905080806001850154815250506020810190508080600285015481525050602081019050808060038501548152505060809050905060c05260c051610140f35b63010ae7578114156119ee5760043560a01c156119c857600080fd5b6c050c783eb9b5c840000000000560043560e05260c052604060c0205460005260206000f35b6371197484811415611a20576c050c783eb9b5c840000000000660043560e05260c052604060c0205460005260206000f35b63f77c4791811415611a44576c050c783eb9b5c84000000000075460005260206000f35b63bef97c87811415611a68576c050c783eb9b5c84000000000085460005260206000f35b6306fdde03811415611b11576c050c783eb9b5c840000000000980610180602082540161012060006003818352015b82610120516020021115611aaa57611acc565b61012051850154610120516020028501525b8151600101808352811415611a97575b50505050505061018051806101a001818260206001820306601f82010390500336823750506020610160526040610180510160206001820306601f8201039050610160f35b6395d89b41811415611bba576c050c783eb9b5c840000000000d80610180602082540161012060006002818352015b82610120516020021115611b5357611b75565b61012051850154610120516020028501525b8151600101808352811415611b40575b50505050505061018051806101a001818260206001820306601f82010390500336823750506020610160526040610180510160206001820306601f8201039050610160f35b6354fd4d50811415611c63576c050c783eb9b5c840000000001080610180602082540161012060006002818352015b82610120516020021115611bfc57611c1e565b61012051850154610120516020028501525b8151600101808352811415611be9575b50505050505061018051806101a001818260206001820306601f82010390500336823750506020610160526040610180510160206001820306601f8201039050610160f35b63313ce567811415611c87576c050c783eb9b5c84000000000135460005260206000f35b638ff36fd1811415611cab576c050c783eb9b5c84000000000145460005260206000f35b637175d4f7811415611ccf576c050c783eb9b5c84000000000155460005260206000f35b63f851a440811415611cf3576c050c783eb9b5c84000000000165460005260206000f35b6317f7182a811415611d17576c050c783eb9b5c84000000000175460005260206000f35b505b60006000fd5b610160526101405232610140511815611e06576c050c783eb9b5c840000000001554610180526000610180511815611d9c576020610220602463c23697a86101a052610140516101c0526101bc6000610180515af1611d7d57600080fd5b601f3d11611d8a57600080fd5b6000506102205115611d9c5761016051565b6308c379a06101a05260206101c05260256101e0527f536d61727420636f6e7472616374206465706f7369746f7273206e6f7420616c610200527f6c6f776564000000000000000000000000000000000000000000000000000000610220526101e05060846101bcfd5b61016051565b6101e0526101405261016052610180526101a0526101c0526101403661020037600354610340526000610140511815611ff15742610180511115611e565760006101605113611e59565b60005b15611ee25761016051630784ce0080820580806000811215611e7757195b607f1c15611e8457600080fd5b9050905090506102205261022051610180514280821015611ea457600080fd5b80820390509050604051811115611eba57600080fd5b80820280806000811215611eca57195b607f1c15611ed757600080fd5b905090509050610200525b426101c0511115611ef95760006101a05113611efc565b60005b15611f85576101a051630784ce0080820580806000811215611f1a57195b607f1c15611f2757600080fd5b9050905090506102a0526102a0516101c0514280821015611f4757600080fd5b80820390509050604051811115611f5d57600080fd5b80820280806000811215611f6d57195b607f1c15611f7a57600080fd5b905090509050610280525b6c050c783eb9b5c84000000000066101805160e05260c052604060c020546103005260006101c0511815611ff157610180516101c0511415611fce576103005161032052611ff1565b6c050c783eb9b5c84000000000066101c05160e05260c052604060c02054610320525b6103606000815260008160200152428160400152438160600152506000610340511115612063576103606004610340516c01431e0fae6d7217caa0000000811061203a57600080fd5b026004018054825260018101548260200152600281015482604001526003810154826060015250505b6103a0516103e0526104006103608051825280602001518260200152806040015182604001528060600151826060015250506000610480526103a05142111561211257670de0b6b3a7640000436103c051808210156120c157600080fd5b8082039050905080820282158284830414176120dc57600080fd5b80905090509050426103a051808210156120f557600080fd5b80820390509050808061210757600080fd5b820490509050610480525b6103e05162093a808082049050905062093a80808202821582848304141761213957600080fd5b809050905090506104a0526104c0600060ff818352015b6104a0805162093a8081818301101561216857600080fd5b8082019050905081525060006104e052426104a051111561218d57426104a0526121b0565b6c050c783eb9b5c84000000000066104a05160e05260c052604060c020546104e0525b6103608051610380516104a0516103e051808210156121ce57600080fd5b808203905090506040518111156121e457600080fd5b808202808060008112156121f457195b607f1c1561220157600080fd5b9050905090508082038080600081121561221757195b607f1c1561222457600080fd5b90509050905081525061038080516104e0518082018080600081121561224657195b607f1c1561225357600080fd5b905090509050815250600061036051121561226f576000610360525b6000610380511215612282576000610380525b6104a0516103e0526104a0516103a05261046051610480516104a05161044051808210156122af57600080fd5b8082039050905080820282158284830414176122ca57600080fd5b80905090509050670de0b6b3a7640000808204905090508181830110156122f057600080fd5b808201905090506103c0526103408051600181818301101561231157600080fd5b80820190509050815250426104a051141561233457436103c05261238f5661237f565b6004610340516c01431e0fae6d7217caa0000000811061235357600080fd5b026004016103608051825580602001516001830155806040015160028301558060600151600383015550505b8151600101808352811415612150575b50506103405160035560006101405118156124765761038080516102a05161022051808203808060008112156123c157195b607f1c156123ce57600080fd5b905090509050808201808060008112156123e457195b607f1c156123f157600080fd5b905090509050815250610360805161028051610200518082038080600081121561241757195b607f1c1561242457600080fd5b9050905090508082018080600081121561243a57195b607f1c1561244757600080fd5b9050905090508152506000610380511215612463576000610380525b6000610360511215612476576000610360525b6004610340516c01431e0fae6d7217caa0000000811061249557600080fd5b026004016103608051825580602001516001830155806040015160028301558060600151600383015550506000610140511815612695574261018051111561256757610300805161022051808201808060008112156124f057195b607f1c156124fd57600080fd5b905090509050815250610180516101c05114156125445761030080516102a0518082038080600081121561252d57195b607f1c1561253a57600080fd5b9050905090508152505b610300516c050c783eb9b5c84000000000066101805160e05260c052604060c020555b426101c05111156125d257610180516101c05111156125d25761032080516102a0518082038080600081121561259957195b607f1c156125a657600080fd5b905090509050815250610320516c050c783eb9b5c84000000000066101c05160e05260c052604060c020555b6c050c783eb9b5c84000000000056101405160e05260c052604060c02054600181818301101561260157600080fd5b808201905090506104c0526104c0516c050c783eb9b5c84000000000056101405160e05260c052604060c02055426102c052436102e05260046104c051633b9aca00811061264e57600080fd5b026c050c783eb9b5c84000000000046101405160e05260c052604060c020016102808051825580602001516001830155806040015160028301558060600151600383015550505b6101e051565b610200526101405261016052610180526101a0526101c0526101e0526102206101a0805182528060200151826020015250506001546102605261026051610160518181830110156126eb57600080fd5b808201905090506001556102806102208051825280602001518260200152505061022080516101605160405181111561272357600080fd5b8082018080600081121561273357195b607f1c1561274057600080fd5b905090509050815250600061018051181561275e5761018051610240525b60026101405160e05260c052604060c020610220805182558060200151600183015550506101405161016051610180516101a0516101c0516101e05161020051610220516102405161026051610280516102a051610140516102c0526102e061028080518252806020015182602001525050610320610220805182528060200151826020015250506103405161032051610300516102e0516102c05160065801611e0c565b6102a05261028052610260526102405261022052610200526101e0526101c0526101a052610180526101605261014052600050600061016051181561289757602061038060646323b872dd6102c052610140516102e052306103005261016051610320526102dc60006000545af161287a57600080fd5b601f3d1161288757600080fd5b6000506103805161289757600080fd5b610160516102c0526101e0516102e052426103005261024051610140517f4566dfc29f6f11d13a418c26a02bef7c28bae749d4de47e4e6a7cddea6730d5960606102c0a3610260516102c05261026051610160518181830110156128fa57600080fd5b808201905090506102e0527f5e2aa66efd74cce82b21852e317e5490d9ecc9e6bb953ae24d90851258cc2f5c60406102c0a161020051565b61018052610140526101605260006101a052610160516101c0526101e060006080818352015b6101c0516101a05110151561296c57612a1d565b6101a0516101c05181818301101561298357600080fd5b80820190509050600181818301101561299b57600080fd5b80820190509050600280820490509050610200526101405160036004610200516c01431e0fae6d7217caa000000081106129d457600080fd5b0260040101541115156129ee57610200516101a052612a0d565b61020051600180821015612a0157600080fd5b808203905090506101c0525b8151600101808352811415612958575b50506101a05160005260005161018051565b6101e0526101405261016052610180526101a0526101c0526102006101408051825280602001518260200152806040015182604001528060600151826060015250506102405162093a808082049050905062093a808082028215828483041417612a9857600080fd5b80905090509050610280526102a0600060ff818352015b610280805162093a80818183011015612ac757600080fd5b8082019050905081525060006102c0526101c051610280511115612af2576101c05161028052612b15565b6c050c783eb9b5c84000000000066102805160e05260c052604060c020546102c0525b610200805161022051610280516102405180821015612b3357600080fd5b80820390509050604051811115612b4957600080fd5b80820280806000811215612b5957195b607f1c15612b6657600080fd5b90509050905080820380806000811215612b7c57195b607f1c15612b8957600080fd5b9050905090508152506101c051610280511415612ba557612bed565b61022080516102c05180820180806000811215612bbe57195b607f1c15612bcb57600080fd5b90509050905081525061028051610240525b8151600101808352811415612aaf575b50506000610200511215612c02576000610200525b610200516000811215612c1457600080fd5b6000526000516101e051565b610296612eb603610296600039610296612eb6036000f3";
