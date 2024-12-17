import { Block } from "viem";

export type KeysWithOperator = {
  operatorId: string;
  keys: [string, string, boolean[]];
};

export type State = {
  block: Block;
  keys: KeysWithOperator[];
};

export type BlockWithNonce = {
  block: Block;
  nonce: string;
};

export type StateQuery = {
  block: string;
  keys: string;
};

export type BlockQuery = {
  block: string;
  nonce: string;
};
