import { Button as AntButton, Typography, Space, Card } from "antd";
import { useEditor } from "../../context/EditorContext";
import { nanoid } from 'nanoid';

const { Title } = Typography;

const AVAILABLE_COMPONENTS = {
  BUTTON: {
    type: 'BUTTON',
    props: { children: 'Click me', size: 'small' }
  },
  TEXT: {
    type: 'TEXT',
    props: { children: 'Edit this text' }
  },
  CONTAINER: {
    type: 'CONTAINER',
    props: { padding: 20 }
  },
  CARD: {
    type: 'CARD',
    props: {
      title: 'New Card',
      subtitle: 'Card subtitle'
    }
  },
  IMAGE: {
    type: 'IMAGE',
    props: {}
  }
};

export const Toolbox = () => {
  const { addElement } = useEditor();

  const handleAddComponent = (componentType) => {
    const component = AVAILABLE_COMPONENTS[componentType];
    addElement({
      id: nanoid(),
      ...component,
      position: { x: 20, y: 20 }
    });
  };

  return (
    <Space direction="vertical" style={{ width: '100%' }} size="large">
      <Title level={4}>Components</Title>
      <Card size="small">
        <Space direction="vertical" style={{ width: '100%' }} size="small">
          {Object.keys(AVAILABLE_COMPONENTS).map((componentType) => (
            <AntButton
              key={componentType}
              onClick={() => handleAddComponent(componentType)}
              type="dashed"
              block
            >
              {componentType}
            </AntButton>
          ))}
        </Space>
      </Card>
    </Space>
  );
}; 