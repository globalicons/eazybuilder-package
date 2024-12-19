import { theme } from 'antd';

export const Container = ({ 
  background,
  padding = 0,
  children,
  style = {},
  className = ""
}) => {
  const { token } = theme.useToken();

  return (
    <div
      className={className}
      style={{ 
        margin: "5px 0", 
        padding: `${padding}px`,
        background: background || token.colorFillQuaternary,
        borderRadius: token.borderRadius,
        flexWrap: 'wrap',
        alignItems: 'center',
        ...style
      }}
    >
      {children}
    </div>
  );
}; 