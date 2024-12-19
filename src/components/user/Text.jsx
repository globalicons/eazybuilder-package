import { useNode } from "@craftjs/core";
import { useEffect, useState } from "react";
import ContentEditable from "react-contenteditable";

export const Text = ({ text, fontSize }) => {
  const {
    connectors: { connect, drag },
    hasSelectedNode,
    hasDraggedNode,
    actions: { setProp },
  } = useNode((state) => ({
    hasSelectedNode: state.events.selected,
    hasDraggedNode: state.events.dragged,
  }));

  const [editable, setEditable] = useState(false);

   useEffect(() => {
     !hasSelectedNode && setEditable(false);
   }, [hasSelectedNode]);

  return (
    <div ref={(ref) => connect(drag(ref))} onClick={() => setEditable(true)}
    className={hasSelectedNode ? "node-selected" : ""}
    >
      <ContentEditable
        disabled={!editable}
        html={text}
        onChange={(e) =>
          setProp(
            (props) =>
              (props.text = e.target.value.replace(/<\/?[^>]+(>|$)/g, ""))
          )
        }
        tagName="p"
        style={{ fontSize: `${fontSize}px` }}
      />
    </div>
  );
}

Text.craft = {
  rules: {
    canDrag: (node) => node.data.props.text != "Drag",
  },
}
