import { FC } from "react";
import { Block } from "viem";
import ContentPanel from "../ContentPanel";
import { EmptyState, StateViewContent } from "./styles";

interface StateViewProps {
  state?: { block: Block; keys: string[] };
}

const StateView: FC<StateViewProps> = ({ state }) => {
  const panelTitle = state ? `State of block ${state.block.number}` : "State";

  return (
    <ContentPanel title={panelTitle}>
      <StateViewContent>
        {state ? (
          <div>
            <div>keys data</div>
          </div>
        ) : (
          <EmptyState>Choose a block or type it's hash or number</EmptyState>
        )}
      </StateViewContent>
    </ContentPanel>
  );
};

export default StateView;
