import { Block } from "viem";

export type State = {
  block: Block;
  keys: string[];
};

export type StateQuery = {
  block: string;
  keys: string;
};
