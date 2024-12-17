import { FC } from "react";
import { Block } from "viem";
import { BlockRowWrapper, EmptyState, Table } from "./styles";
import BlockRow from "../BlockRow";
import ContentPanel from "../ContentPanel";

interface BlocksTableProps {
  blocks: Block[];
  loading: boolean;
  onChoose(block: Block): void;
}

const BlocksTable: FC<BlocksTableProps> = ({ blocks, loading, onChoose }) => {
  return (
    <ContentPanel title="Latest Blocks">
      <Table>
        {blocks.map((block) => (
          <BlockRowWrapper key={block.number} onClick={() => onChoose(block)}>
            <BlockRow block={block} />
          </BlockRowWrapper>
        ))}

        {loading && <EmptyState>Blocks are loading...</EmptyState>}
        {!loading && !blocks.length && <EmptyState>No blocks yet</EmptyState>}
      </Table>
    </ContentPanel>
  );
};

export default BlocksTable;
