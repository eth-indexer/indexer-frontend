import { Block } from "viem";
import apiClient from "../shared/apiClient";
import { StateQuery } from "../types/state";

const StateService = {
  async getAllBlocks() {
    return apiClient<Block[]>({
      url: `/blocks`,
      method: "GET",
    });
  },

  async getBlockByNumber(blockNumber: bigint) {
    return apiClient<Block[]>({
      url: `/blocks?blockNumber${blockNumber}`,
      method: "GET",
    });
  },

  async getBlockByHash(blockHash: string) {
    return apiClient<Block[]>({
      url: `/blocks?blockHash=${blockHash}`,
      method: "GET",
    });
  },

  async getStateByBlockNumber(blockNumber: bigint) {
    return apiClient<StateQuery>({
      url: `/states?blockNumber${blockNumber}`,
      method: "GET",
    });
  },

  async getStateByBlockHash(blockHash: string) {
    return apiClient<StateQuery>({
      url: `/state?blockHash=${blockHash}`,
      method: "GET",
    });
  },
};

export default StateService;
