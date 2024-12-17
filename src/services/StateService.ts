import apiClient from "../shared/apiClient";
import { BlockQuery, StateQuery } from "../types/state";

const StateService = {
  async getAllBlocks() {
    return apiClient<BlockQuery[]>({
      url: `/blocks`,
      method: "GET",
    });
  },

  async getBlockByNumber(blockNumber: bigint) {
    return apiClient<BlockQuery>({
      url: `/blocks?blockNumber${blockNumber}`,
      method: "GET",
    });
  },

  async getBlockByHash(blockHash: string) {
    return apiClient<BlockQuery>({
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
