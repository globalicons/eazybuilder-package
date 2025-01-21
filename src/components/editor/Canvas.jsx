import React from 'react';
import { useEditor } from '../../context/EditorContext';
import { Button } from '../base/Button';
import { Container } from '../base/Container';
import { Card } from '../composite/Card';
import { Image } from '../base/Image';
import { Text } from '../base/Text';
import { ElementWrapper } from './ElementWrapper';
import { editorStyles } from '../../utils/styles';

const componentMap = {
  BUTTON: Button,
  CONTAINER: Container,
  CARD: Card,
  IMAGE: Image,
  TEXT: Text,
};

export const Canvas = () => {
  const { elements } = useEditor();

  const renderElement = (element) => {
    const Component = componentMap[element.type];
    if (!Component) return null;

    return (
      <ElementWrapper key={element.id} element={element}>
        <Component {...element.props} />
      </ElementWrapper>
    );
  };

  return (
    <div 
      className="canvas" 
      style={{ 
        ...editorStyles.canvas,
        position: 'relative',
        height: '80vh',
        overflow: 'hidden'
      }}
    >
      {elements.map(renderElement)}
    </div>
  );
}; 