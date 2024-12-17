import { useQuery } from "@tanstack/react-query";
import StateService from "../../services/StateService";
import { State, StateQuery } from "../../types/state";

type StatesQuery = {
  blockNumber?: bigint;
  blockHash?: string;
};

const useStateByBlock = ({ blockNumber, blockHash }: StatesQuery) => {
  const query = useQuery({
    queryKey: ["states", { blockNumber, blockHash }],
    queryFn: async () => {
      const transformData = (data: StateQuery): State => {
        return {
          block: JSON.parse(data.block),
          keys: JSON.parse(data.keys),
        };
      };

      if (blockNumber) {
        return StateService.getStateByBlockNumber(blockNumber).then(
          (res) => transformData(res.data) as State
        );
      } else if (blockHash) {
        return StateService.getStateByBlockHash(blockHash).then(
          (res) => transformData(res.data) as State
        );
      }
      return null;
    },
    enabled: !!blockHash || !!blockNumber,
  });

  return {
    state: query.isSuccess ? query.data : null,
    stateLoading: query.isLoading,
    refetch: query.refetch,
    isSuccess: query.isSuccess,
    isError: query.isError,
  };
};

export default useStateByBlock;
