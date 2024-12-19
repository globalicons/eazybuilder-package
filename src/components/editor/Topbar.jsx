import React, { useState } from "react";
import { Switch, Row, Col, Button, notification, Modal, Input } from "antd";
import { useEditor } from "../../context/EditorContext";
import copy from "copy-to-clipboard";
import lz from "lzutf8";

export const Topbar = () => {
  const { selectElement, addElement, removeElement, toggleEditMode, saveLayout, loadLayout, updateElement } = useEditor();

  const [modalOpen, setModalOpen] = useState(false);
  const [jsonInput, setJsonInput] = useState("");

  const handleModalOk = () => {
    try {
      if (!jsonInput.trim()) {
        notification.error({ message: 'Please paste a layout JSON' });
        return;
      }

      const layoutData = JSON.parse(jsonInput);
      console.log('Parsed layout data:', layoutData); // Debug log

      if (Array.isArray(layoutData)) {
        loadLayout(layoutData);
        setModalOpen(false);
        setJsonInput("");
        notification.success({ message: 'Layout loaded successfully' });
      } else {
        notification.error({ message: 'Invalid layout data' });
      }
    } catch (error) {
      console.error('Layout parsing error:', error);
      notification.error({ message: `Invalid JSON format: ${error.message}` });
    }
  };

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
            checked={true} // Assuming you want it enabled by default
            onChange={(value) => toggleEditMode()}
          />
        </Col>
        <Button
          className="copy-state-btn"
          size="small"
          type="default"
          onClick={() => {
            const json = saveLayout();
            copy(lz.encodeBase64(lz.compress(json)));
            notification.success({ message: "State copied to clipboard" });
          }}
        >
          Save Output
        </Button>
        <Button
          className="load-state-btn"
          size="small"
          type="default"
          onClick={() => setModalOpen(true)}
        >
          Preview
        </Button>
        <Modal
          title="Load state"
          open={modalOpen}
          onCancel={() => setModalOpen(false)}
          footer={[
            <Button key="cancel" onClick={() => setModalOpen(false)}>
              Cancel
            </Button>,
            <Button
              key="load"
              type="primary"
              onClick={handleModalOk}
            >
              Load
            </Button>
          ]}
        >
          <Input.TextArea
            placeholder='Paste the contents that was copied from the "Copy Current State" button'
            value={jsonInput}
            onChange={(e) => setJsonInput(e.target.value)}
            rows={4}
          />
        </Modal>
      </Row>
    </div>
  );
};

export default Topbar; // Ensure this is exported 