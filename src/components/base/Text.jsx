import { useState, useEffect } from "react";
import { Input } from "antd";
import { useEditor } from "../../context/EditorContext";

export const Text = ({ 
  initialText = "Edit this text",
  fontSize = 16,
  style = {},
  className = ""
}) => {
  const [text, setText] = useState(initialText);
  const [isEditing, setIsEditing] = useState(false);
  const { isEditMode } = useEditor();

  const handleDoubleClick = () => {
    if (isEditMode) {
      setIsEditing(true);
    }
  };

  const handleBlur = () => {
    setIsEditing(false);
  };

  const containerStyle = {
    width: '900px',
    minHeight: '100px',
    ...style
  };

  return (
    <div 
      className={className}
      onDoubleClick={handleDoubleClick}
      style={containerStyle}
    >
      {isEditing ? (
        <Input
          value={text}
          onChange={(e) => setText(e.target.value)}
          onBlur={handleBlur}
          autoFocus
          style={{ fontSize, ...style }}
        />
      ) : (
        <p style={{ fontSize, ...style }}>
          {text}
        </p>
      )}
    </div>
  );
}; 