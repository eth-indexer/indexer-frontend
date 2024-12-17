import { useQuery } from "@tanstack/react-query";
import StateService from "../../services/StateService";
import { BlockWithNonce } from "../../types/state";

const useBlocks = () => {
  const query = useQuery({
    queryKey: ["blocks"],
    queryFn: async () => {
      return StateService.getAllBlocks();
    },
  });
  return {
    blocksWithNonce: query.isSuccess
      ? query.data.data.map(
          (blockWithNonce) =>
            ({
              block: blockWithNonce.block
                ? JSON.parse(blockWithNonce.block)
                : null,
              nonce: blockWithNonce.nonce,
            } as BlockWithNonce)
        )
      : [],
    blocksLoading: query.isLoading,
    refetch: query.refetch,
  };
};

export default useBlocks;
