import { FC } from "react";
import {
  BlockHash,
  BlockIcon,
  BlockNumber,
  BlockTimestamp,
  Container,
  KeysNonce,
  LeftSide,
  RightSide,
} from "./styles";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import { Icon32 } from "../Icon";
import { BlockWithNonce } from "../../types/state";
dayjs.extend(relativeTime);

interface BlockRowProps {
  blockWithNonce: BlockWithNonce;
}

const BlockRow: FC<BlockRowProps> = ({ blockWithNonce }) => {
  const timeCreatedFromNow = (timestamp: string) => {
    return dayjs
      .unix(Number(BigInt(timestamp.slice(0, timestamp.length - 1))))
      .fromNow();
  };

  return (
    <Container>
      <BlockIcon>
        <Icon32.BoxClosed />
      </BlockIcon>
      <LeftSide>
        <BlockNumber>{blockWithNonce.block?.number?.toString()}</BlockNumber>
        <BlockTimestamp>
          {timeCreatedFromNow(blockWithNonce.block?.timestamp.toString())}
        </BlockTimestamp>
      </LeftSide>

      <RightSide>
        <BlockHash>
          {blockWithNonce.block?.hash?.slice(0, 8) +
            "..." +
            blockWithNonce.block?.hash?.slice(-5)}
        </BlockHash>
        <KeysNonce>Nonce: {blockWithNonce.nonce}</KeysNonce>
      </RightSide>
    </Container>
  );
};

export default BlockRow;
