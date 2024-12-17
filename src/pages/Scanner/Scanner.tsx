import { FC, useEffect, useMemo, useState } from "react";
import MainLayout from "../../layouts/MainLayout";
import BlocksTable from "../../components/BlocksTable";
import {
  SearchInputWraper,
  ContentWrapper,
  BlocksPanelWrapper,
} from "./styles";
import { Block } from "viem";

import { createPublicClient, http } from "viem";
import { holesky } from "viem/chains";
import SearchInput from "../../components/SearchInput/SearchInput";
import StateView from "../../components/StateView/StateView";

export const publicClient = createPublicClient({
  chain: holesky,
  transport: http(
    "http://hr6vb81d1ndsx-rpc-5-holesky-geth.tooling-nodes.testnet.fi"
  ),
});

const Scanner: FC = () => {
  const [blocks, setBlocks] = useState<Block[]>([]);
  const [searchValue, setSearchValue] = useState("");

  useEffect(() => {
    publicClient.getBlock().then((block) => {
      setBlocks([
        block,
        { ...block, number: block.number + 1n },
        { ...block, number: block.number + 2n },
        { ...block, number: block.number + 3n },
        { ...block, number: block.number + 4n },
        { ...block, number: block.number + 5n },
        { ...block, number: block.number + 6n },
        { ...block, number: block.number + 7n },
      ]);
    });
  }, []);

  const filteredBlocks = useMemo(() => {
    if (!searchValue) {
      return blocks;
    }

    return blocks.filter((block) => {
      return (
        block.hash?.includes(searchValue) ||
        block.number?.toString().includes(searchValue)
      );
    });
  }, [blocks, searchValue]);

  return (
    <MainLayout>
      <SearchInputWraper>
        <SearchInput value={searchValue} onChange={setSearchValue} />
      </SearchInputWraper>

      <ContentWrapper>
        <BlocksPanelWrapper>
          <BlocksTable blocks={filteredBlocks} />
        </BlocksPanelWrapper>
        <StateView />
      </ContentWrapper>
    </MainLayout>
  );
};

export default Scanner;
