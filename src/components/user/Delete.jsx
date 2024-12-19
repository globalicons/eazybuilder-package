import React from "react";
import { useEditor } from "@craftjs/core";
import { Button as AntButton } from "antd";

export const Delete = () => {
  const { actions, query } = useEditor();

  const handleDelete = () => {
    // Extract selected node IDs from the state
    const selectedNodeIds = Object.keys(query.getState().nodes).filter(
      (id) => query.node(id).isSelected()
    );

    if (selectedNodeIds.length > 0) {
      console.log("Deleting nodes:", selectedNodeIds);

      selectedNodeIds.forEach((id) => {
        const node = query.node(id).get();
        if (node) {
          actions.delete(id);
        } else {
          console.warn(`Node with ID ${id} does not exist.`);
        }
      });
    } else {
      console.error("No nodes selected for deletion.");
    }
  };

  return (
    <AntButton type="primary" danger onClick={handleDelete}>
      Delete Item
    </AntButton>
  );
};
