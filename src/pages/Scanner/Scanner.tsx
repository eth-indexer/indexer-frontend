import { FC, useEffect, useMemo, useState } from "react";
import MainLayout from "../../layouts/MainLayout";
import BlocksTable from "../../components/BlocksTable";
import {
  SearchInputWraper,
  ContentWrapper,
  BlocksPanelWrapper,
} from "./styles";
import { Block } from "viem";

import SearchInput from "../../components/SearchInput/SearchInput";
import StateView from "../../components/StateView/StateView";
import useBlocks from "../../hooks/blocks/useBlocks";

const Scanner: FC = () => {
  const { blocks, blocksLoading, refetch } = useBlocks();
  const [searchValue, setSearchValue] = useState("");
  const [currentBlock, setCurrentBlock] = useState<Block | null>(null);

  useEffect(() => {
    const interval = setInterval(() => {
      refetch();
    }, 2000);
    return () => {
      clearInterval(interval);
    };
  }, [refetch]);

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

  const handleBlockChoose = (block: Block) => {
    setCurrentBlock(block);
  };

  return (
    <MainLayout>
      <SearchInputWraper>
        <SearchInput value={searchValue} onChange={setSearchValue} />
      </SearchInputWraper>

      <ContentWrapper>
        <BlocksPanelWrapper>
          <BlocksTable
            onChoose={(block) => handleBlockChoose(block)}
            blocks={filteredBlocks}
            loading={blocksLoading}
          />
        </BlocksPanelWrapper>
        <StateView block={currentBlock} />
      </ContentWrapper>
    </MainLayout>
  );
};

export default Scanner;
