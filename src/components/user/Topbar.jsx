import React, { useState } from "react";
import { Switch, Row, Col, Button, notification, Modal, Input } from "antd";
import { useEditor } from "@craftjs/core";
import copy from "copy-to-clipboard";
import lz from "lzutf8";

export const Topbar = () => {
  const { actions, query, enabled } = useEditor((state) => ({
    enabled: state.options.enabled,
  }));

  const [modalOpen, setModalOpen] = useState(false);
  const [stateToLoad, setStateToLoad] = useState("");

  return (
    <div
      style={{
        padding: "8px",
        margin: "24px 0 8px",
        backgroundColor: "#cbe8e7",
      }}
    >
      <Row align="middle">
        <Col flex="auto">
          <span style={{ marginRight: 8 }}>Enable</span>
          <Switch
            checked={enabled}
            onChange={(value) =>
              actions.setOptions((options) => (options.enabled = value))
            }
          />
        </Col>
        <Button
          size="small"
          type="default"
          onClick={() => {
            try {
              const json = query.serialize(); // Fetch serialized state
              console.log("Serialized State:", json); // Debugging log
              if (!json || json === "{}") {
                throw new Error("Editor state is empty or not available");
              }
              const compressed = lz.encodeBase64(lz.compress(json)); // Compress and encode
              copy(compressed); // Copy to clipboard
              notification.success({ message: "State copied to clipboard" });
            } catch (err) {
              console.error("Error copying state:", err);
              notification.error({
                message: "Error copying state",
                description: err.message,
              });
            }
          }}
        >
          Save Output
        </Button>
        <Button size="small" type="default" onClick={() => setModalOpen(true)}>
          Preview
        </Button>
        <Modal
          title="Load State"
          open={modalOpen}
          onCancel={() => setModalOpen(false)}
          footer={[
            <Button key="cancel" onClick={() => setModalOpen(false)}>
              Cancel
            </Button>,
            <Button
              key="load"
              type="primary"
              onClick={() => {
                try {
                  const decompressed = lz.decompress(
                    lz.decodeBase64(stateToLoad)
                  );
                  console.log("Decompressed State:", decompressed); // Debugging log
                  actions.deserialize(decompressed); // Load state into editor
                  notification.success({
                    message: "State loaded successfully",
                  });
                  setModalOpen(false);
                } catch (err) {
                  console.error("Error loading state:", err);
                  notification.error({
                    message: "Error loading state",
                    description: "Please ensure the input is valid.",
                  });
                }
              }}
            >
              Load
            </Button>,
          ]}
        >
          <Input.TextArea
            placeholder="Paste the copied state here"
            value={stateToLoad}
            onChange={(e) => setStateToLoad(e.target.value)}
            rows={4}
          />
        </Modal>
      </Row>
    </div>
  );
};
