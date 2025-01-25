import React from "react";
import { UserText } from "./Text";
import { UserButton } from "./Button";
import { UserContainer } from "./Container";
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
      incomingNodes.every((incomingNode) => incomingNode.data.type === UserText),
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
      incomingNodes.every((incomingNode) => incomingNode.data.type === UserButton),
  },
};

export const UserCard = ({ background, padding = 20 }) => {
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
      <Element id="buttons" is={UserContainer} canvas padding={12}>
        <UserButton size="small" type="primary">
          Learn more
        </UserButton>
        <UserButton size="small" type="default">
          Cancel
        </UserButton>
      </Element>
    </AntCard>
  );
};

UserCard.craft = {
  displayName: "Card",
};