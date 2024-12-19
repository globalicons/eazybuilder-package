import { Button } from "antd";
import { DeleteOutlined } from "@ant-design/icons";
import Draggable from 'react-draggable';
import { useEditor } from "../../context/EditorContext";

export const ElementWrapper = ({ element, children }) => {
  const { selectedElement, selectElement, removeElement, isEditMode, updateElement } = useEditor();
  const isSelected = selectedElement === element.id;

  const handleDragStop = (e, data) => {
    updateElement(element.id, {
      position: {
        x: data.x,
        y: data.y
      }
    });
  };

  if (!isEditMode) {
    return (
      <div style={{ 
        position: 'absolute',
        left: element.position?.x || 0,
        top: element.position?.y || 0,
      }}>
        {children}
      </div>
    );
  }

  return (
    <Draggable
      defaultPosition={element.position || { x: 0, y: 0 }}
      onStop={handleDragStop}
      bounds="parent"
    >
      <div
        onClick={(e) => {
          e.stopPropagation();
          selectElement(element.id);
        }}
        style={{
          position: 'absolute',
          border: isSelected ? '2px solid #1890ff' : '2px solid transparent',
          padding: '4px',
          margin: '4px',
          minHeight: '30px',
          cursor: 'move',
        }}
      >
        {isSelected && (
          <Button
            icon={<DeleteOutlined />}
            size="small"
            danger
            style={{
              position: 'absolute',
              right: '-20px',
              top: '-20px',
              zIndex: 1000
            }}
            onClick={(e) => {
              e.stopPropagation();
              removeElement(element.id);
            }}
          />
        )}
        {children}
      </div>
    </Draggable>
  );
}; 