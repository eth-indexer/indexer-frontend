import { FC, useEffect, useMemo, useState } from "react";
import MainLayout from "../../layouts/MainLayout";
import BlocksTable from "../../components/BlocksTable";
import {
  SearchInputWraper,
  ContentWrapper,
  BlocksPanelWrapper,
} from "./styles";

import SearchInput from "../../components/SearchInput/SearchInput";
import StateView from "../../components/StateView/StateView";
import useBlocks from "../../hooks/blocks/useBlocks";
import { BlockWithNonce } from "../../types/state";

const Scanner: FC = () => {
  const { blocksWithNonce, blocksLoading, refetch } = useBlocks();
  const [searchValue, setSearchValue] = useState("");
  const [currentBlock, setCurrentBlock] = useState<BlockWithNonce | null>(null);

  useEffect(() => {
    const interval = setInterval(() => {
      refetch();
    }, 2000);
    return () => {
      clearInterval(interval);
    };
  }, [refetch]);

  const filteredBlocks = useMemo(() => {
    let result = blocksWithNonce;

    if (searchValue) {
      result = result.filter((blockWithNonce) => {
        return (
          blockWithNonce.block.hash?.includes(searchValue.trim()) ||
          blockWithNonce.block.number?.toString().includes(searchValue.trim())
        );
      });
    }

    return result.sort((a, b) => {
      if (a.block.number && b.block.number) {
        return a.block.number > b.block.number ? -1 : 1;
      }
      return 0;
    });
  }, [blocksWithNonce, searchValue]);

  const handleBlockChoose = (block: BlockWithNonce) => {
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
            blocksWithNonce={filteredBlocks}
            loading={blocksLoading}
          />
        </BlocksPanelWrapper>
        <StateView blockWithNonce={currentBlock} />
      </ContentWrapper>
    </MainLayout>
  );
};

export default Scanner;
