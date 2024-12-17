import { FC } from "react";
import { Block } from "viem";
import ContentPanel from "../ContentPanel";
import { EmptyState, StateViewContent } from "./styles";
import useStateByBlock from "../../hooks/blocks/useStateByBlock";

interface StateViewProps {
  block: Block | null;
}

const StateView: FC<StateViewProps> = ({ block }) => {
  const { state, stateLoading, isError } = useStateByBlock({
    blockHash: block?.hash?.toString(),
  });

  const panelTitle = state ? `State of block ${state.block.number}` : "State";

  return (
    <ContentPanel title={panelTitle}>
      <StateViewContent>
        {isError && !stateLoading && !state && (
          <EmptyState>Block not found</EmptyState>
        )}

        {stateLoading && !state && <EmptyState>Loading...</EmptyState>}

        {!isError && !stateLoading && !state && (
          <EmptyState>Choose a block or type it's hash or number</EmptyState>
        )}

        {state && (
          <div>
            <div>keys data</div>
          </div>
        )}
      </StateViewContent>
    </ContentPanel>
  );
};

export default StateView;
