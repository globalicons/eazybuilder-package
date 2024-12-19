import { Layout } from 'antd';
import { EditorProvider } from './context/EditorContext';
import { Toolbox } from './components/editor/Toolbox';
import { Canvas } from './components/editor/Canvas';
import Topbar from './components/editor/Topbar';
import { ErrorBoundary } from './components/ErrorBoundary';
import './index.css';

const { Sider, Content } = Layout;

function App() {
  return (
    <ErrorBoundary>
      <EditorProvider>
        <Layout>
          <Topbar />
          <Layout>
            <Sider width={200} theme="light">
              <ErrorBoundary>
                <Toolbox />
              </ErrorBoundary>
            </Sider>
            <Content style={{ padding: '24px' }}>
              <ErrorBoundary>
                <Canvas />
              </ErrorBoundary>
            </Content>
          </Layout>
        </Layout>
      </EditorProvider>
    </ErrorBoundary>
  );
}

export default App;
