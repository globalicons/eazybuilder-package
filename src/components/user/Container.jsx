import { useNode } from "@craftjs/core";
import { theme } from 'antd';

export const Container = ({ background, padding = 0, children }) => {
  const {
    connectors: { connect, drag }, hasSelectedNode,
  } = useNode((state) => ({
    hasSelectedNode: state.events.selected,
  }));
  
  const { token } = theme.useToken();

  return (
    <div
      ref={(ref) => connect(drag(ref))}
      className={hasSelectedNode ? "node-selected": ""}
      style={{ 
        margin: "5px 0", 
        padding: `${padding}px`,
        background: background || token.colorFillQuaternary,
        borderRadius: token.borderRadius,
        flexWrap: 'wrap',
        alignItems: 'center',
      }}
    >
      {children}
    </div>
  );
};

Container.craft = {
  displayName: 'Container',
};   
