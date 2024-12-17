import { FC } from "react";
import { Block } from "viem";
import { BlockRowWrapper, EmptyState, Table } from "./styles";
import BlockRow from "../BlockRow";
import ContentPanel from "../ContentPanel";

interface BlocksTableProps {
  blocks: Block[];
}

const BlocksTable: FC<BlocksTableProps> = ({ blocks }) => {
  return (
    <ContentPanel title="Latest Blocks">
      <Table>
        {blocks.map((block) => (
          <BlockRowWrapper>
            <BlockRow key={block.hash} block={block} />
          </BlockRowWrapper>
        ))}

        {blocks.length === 0 && <EmptyState>Blocks are loading...</EmptyState>}
      </Table>
    </ContentPanel>
  );
};

export default BlocksTable;
