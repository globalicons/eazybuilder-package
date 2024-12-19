// components/user/Card.js
import { Text } from "./Text";
import { Button } from "./Button";
import { Container } from "./Container";
import { Element, useNode } from "@craftjs/core";
import { Card as AntCard } from 'antd';
import { useEffect, useState } from "react";

export const CardTop = ({ children }) => {
  const {
    connectors: { connect },
    hasSelectedNode,
  } = useNode((state) => ({
    hasSelectedNode: state.events.selected,
  }));


  return (
    <div ref={connect} 
      className={hasSelectedNode ? "node-selected" : ""}
    >
      {children}
    </div>
  );
};

CardTop.craft = {
  rules: {
    // Only accept Text
    canMoveIn: (incomingNodes) =>
      incomingNodes.every((incomingNode) => incomingNode.data.type === Text),
  },
};

export const CardBottom = ({ children }) => {
  const {
    connectors: { connect },
    hasSelectedNode,
  } = useNode((state) => ({hasSelectedNode: state.events.selected,}));


  return <div ref={connect}
          className={hasSelectedNode ? "node-selected" : ""}
  >{children}</div>;
};

CardBottom.craft = {
  rules: {
    // Only accept Buttons
    canMoveIn: (incomingNodes) =>
      incomingNodes.every((incomingNode) => incomingNode.data.type === Button),
  },
};

export const Card = ({ background, padding = 20 }) => {
  const {
    connectors: { connect },
    hasSelectedNode,
    actions: { setProp },
  } = useNode((state) => ({
    hasSelectedNode: state.events.selected,
  }));

  const [editable, setEditable] = useState(false);

  useEffect(() => {
    if (!hasSelectedNode) setEditable(false);
  }, [hasSelectedNode]);


  return (
    <AntCard style={{ background, padding }}>
      <Element id="text" is={CardTop} canvas>
        <Text text="Title" fontSize={20} />
        <Text text="Subtitle" fontSize={15} />
      </Element>
      <Element id="buttons" is={Container} canvas padding={12}>
        <Button size="small" type="primary">
          Learn more
        </Button>
        <Button size="small" type="default">
          Cancel
        </Button>
      </Element>
    </AntCard>
  );
};

Card.craft = {
  displayName: "Card",
};