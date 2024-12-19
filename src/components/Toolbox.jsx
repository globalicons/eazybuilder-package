import { Element, useEditor } from "@craftjs/core";
import { Button as AntButton, Typography, Space, Card } from "antd";
import { Container } from "./user/Container";
import { Card as UserCard } from "./user/Card";
import { Button } from "./user/Button";
import { Text } from "./user/Text";
import { Image }from "./user/Image";
import { Delete } from "./user/Delete";

const { Title } = Typography;

export const Toolbox = () => {
  const { connectors } = useEditor();

  return (
    <Space direction="vertical" style={{ width: '100%' }} size="large">
      <Title level={4}>Components</Title>
      <Card size="small">
        <Space direction="vertical" style={{ width: '100%' }} size="small">
          <AntButton
            ref={(ref) => connectors.create(ref, <Button size="small">Click me</Button>)}
            type="dashed"
            block
          >
            Button
          </AntButton>
          
          <AntButton
            ref={(ref) => connectors.create(ref, <Text text="Hi world" />)}
            type="dashed"
            block
          >
            Text
          </AntButton>
          
          <AntButton
            ref={(ref) => connectors.create(ref, <Element is={Container} padding={20} canvas />)}
            type="dashed"
            block
          >
            Container
          </AntButton>
          
          <AntButton
            ref={(ref) => connectors.create(ref, <UserCard />)}
            type="dashed"
            block
          >
            Card
          </AntButton>

          {/* new image */}
          <AntButton
            ref={(ref) => connectors.create(ref, <Image />)}
            type="dashed"
            block
          >
            Image
          </AntButton>

          {/* Delete button */}
          <Delete/>

        </Space>
      </Card>
    </Space>
  );
};
