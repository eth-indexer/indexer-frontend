import { FC } from "react";
import ContentPanel from "../ContentPanel";
import {
  EmptyState,
  InfoRow,
  InfoTitle,
  InfoValue,
  OperatorInfo,
  StateBlockHash,
  StateViewContent,
} from "./styles";
import useStateByBlock from "../../hooks/blocks/useStateByBlock";
import Spinner from "../Spinner";
import { BlockWithNonce } from "../../types/state";

interface StateViewProps {
  blockWithNonce: BlockWithNonce | null;
}

const StateView: FC<StateViewProps> = ({ blockWithNonce }) => {
  const { state, stateLoading, isError } = useStateByBlock({
    blockHash: blockWithNonce?.block?.hash?.toString(),
  });

  const getKeysInfo = (keys: string) => {
    return keys.replace(/0x/g, "").match(/.{1,96}/g)?.length;
  };

  const parseBigIntFromString = (bigIntString: string) => {
    return BigInt(bigIntString.slice(0, bigIntString.length - 1));
  };

  const panelTitle = state ? `State for block ${state.block.number}` : "State";

  return (
    <ContentPanel title={panelTitle}>
      <StateViewContent>
        {isError && !stateLoading && !state && (
          <EmptyState>Block not found</EmptyState>
        )}

        {stateLoading && !state && (
          <EmptyState>
            <Spinner /> Loading...
          </EmptyState>
        )}

        {!isError && !stateLoading && !state && (
          <EmptyState>Choose a block or type it's hash or number</EmptyState>
        )}

        {state && (
          <>
            <StateBlockHash>Block hash: {state.block.hash}</StateBlockHash>
            {state.keys.map((keys) => (
              <OperatorInfo key={keys.operatorId}>
                <InfoTitle>
                  Operator id: {Number(parseBigIntFromString(keys.operatorId))}
                </InfoTitle>
                <InfoRow>
                  Keys count: <InfoValue>{getKeysInfo(keys.keys[0])}</InfoValue>
                </InfoRow>
                <InfoRow>
                  Keys used:
                  <InfoValue>{keys.keys[2].filter(Boolean).length}</InfoValue>
                </InfoRow>
              </OperatorInfo>
            ))}
          </>
        )}
      </StateViewContent>
    </ContentPanel>
  );
};

export default StateView;
