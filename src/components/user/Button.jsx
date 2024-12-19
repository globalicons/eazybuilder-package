import { Button as AntDButton } from "antd";
import { useNode } from "@craftjs/core";
import { useEffect, useState } from "react";
import ContentEditable from "react-contenteditable";

export const Button = ({ size, variant, color, children }) => {
  const {
    connectors: { connect, drag },
    hasSelectedNode,
    actions: { setProp },
  } = useNode((state) => ({
    hasSelectedNode: state.events.selected,
  }));

  const [editable, setEditable] = useState(false);

  useEffect(() => {
    console.log("Selection state for Button:", hasSelectedNode); // Debug selection state
    if (!hasSelectedNode) setEditable(false);
  }, [hasSelectedNode]);

  return (
    <div
      ref={(ref) => connect(drag(ref))}
      onClick={() => setEditable(true)}
      style={{ display: "inline-block",
        border: hasSelectedNode ? "2px solid red" : "1px solid transparent",
       }}
    >
      <AntDButton
        size={size}
        variant={variant}
        color={color}
        style={{ margin: "0 2px" }}
      >
        <ContentEditable
          disabled={!editable}
          html={children}
          onChange={(e) =>
            setProp(
              (props) =>
                (props.children = e.target.value.replace(/<\/?[^>]+(>|$)/g, ""))
            )
          }
          tagName="span"
        />
      </AntDButton>
    </div>
  );
};

Button.craft = {
  displayName: "Button",
  rules: {
    canDrag: true,
  },
};
