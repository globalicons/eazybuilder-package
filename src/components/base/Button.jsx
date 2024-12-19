import { useState } from 'react';
import PropTypes from 'prop-types';
import { Button as AntDButton } from "antd";
import { componentPropTypes } from '../../types/propTypes';

export const Button = ({ 
  size = "middle", 
  variant = "default", 
  color,
  children,
  onClick,
  style = {},
  className = ""
}) => {
  const [isEditing, setIsEditing] = useState(false);
  const [text, setText] = useState(children);

  const handleDoubleClick = (e) => {
    e.stopPropagation();
    setIsEditing(true);
  };

  const handleBlur = () => {
    setIsEditing(false);
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      setIsEditing(false);
    }
  };

  return (
    <AntDButton
      size={size}
      variant={variant}
      color={color}
      onClick={!isEditing ? onClick : undefined}
      style={{ margin: "0 2px", ...style }}
      className={className}
      onDoubleClick={handleDoubleClick}
    >
      {isEditing ? (
        <input
          value={text}
          onChange={(e) => setText(e.target.value)}
          onBlur={handleBlur}
          onKeyDown={handleKeyDown}
          autoFocus
          style={{
            background: 'transparent',
            border: 'none',
            outline: 'none',
            color: 'inherit',
            width: '100%'
          }}
        />
      ) : (
        text
      )}
    </AntDButton>
  );
};

Button.propTypes = {
  ...componentPropTypes.base,
  ...componentPropTypes.button
}; 