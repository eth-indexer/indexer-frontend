import { useQuery } from "@tanstack/react-query";
import StateService from "../../services/StateService";

const useBlocks = () => {
  const query = useQuery({
    queryKey: ["blocks"],
    queryFn: async () => {
      return StateService.getAllBlocks();
    },
  });

  return {
    blocks: query.isSuccess ? query.data.data : [],
    blocksLoading: query.isLoading,
    refetch: query.refetch,
  };
};

export default useBlocks;
