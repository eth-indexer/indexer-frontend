import { FC } from "react";
import { BlockRowWrapper, EmptyState, Table } from "./styles";
import BlockRow from "../BlockRow";
import ContentPanel from "../ContentPanel";
import { BlockWithNonce } from "../../types/state";

interface BlocksTableProps {
  blocksWithNonce: BlockWithNonce[];
  loading: boolean;
  onChoose(block: BlockWithNonce): void;
}

const BlocksTable: FC<BlocksTableProps> = ({
  blocksWithNonce,
  loading,
  onChoose,
}) => {
  return (
    <ContentPanel
      title={`Latest Blocks ${
        blocksWithNonce.length ? blocksWithNonce.length : ""
      }`}
      loading={loading}
    >
      <Table>
        {blocksWithNonce.map((blockWithNonce) => (
          <BlockRowWrapper
            key={blockWithNonce.block?.number}
            onClick={() => onChoose(blockWithNonce)}
          >
            <BlockRow blockWithNonce={blockWithNonce} />
          </BlockRowWrapper>
        ))}
        {!loading && !blocksWithNonce.length && (
          <EmptyState>No blocks yet</EmptyState>
        )}
      </Table>
    </ContentPanel>
  );
};

export default BlocksTable;
