import { FC } from "react";
import { Block } from "viem";
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
dayjs.extend(relativeTime);

interface BlockRowProps {
  block: Block;
}

const BlockRow: FC<BlockRowProps> = ({ block }) => {
  return (
    <Container>
      <BlockIcon>
        <Icon32.BoxOpen />
      </BlockIcon>
      <LeftSide>
        <BlockNumber>{block.number?.toString()}</BlockNumber>
        <BlockTimestamp>
          {dayjs.unix(Number(block.timestamp)).fromNow()}
        </BlockTimestamp>
      </LeftSide>

      <RightSide>
        <BlockHash>
          {block.hash?.slice(0, 8) + "..." + block.hash?.slice(-5)}
        </BlockHash>
        <KeysNonce>Nonce: 4123</KeysNonce>
      </RightSide>
    </Container>
  );
};

export default BlockRow;
