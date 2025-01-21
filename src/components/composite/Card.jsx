import { Card as AntCard } from 'antd';
import { Container } from '../base/Container';
import { Button } from '../base/Button';

export const Card = ({ 
  title,
  subtitle,
  background,
  padding = 20,
  actions,
  children,
  style = {},
  className = ""
}) => {
  return (
    <AntCard 
      style={{ background, padding, ...style }}
      className={className}
    >
      <div className="card-content">
        {title && <h3>{title}</h3>}
        {subtitle && <h4>{subtitle}</h4>}
        {children}
      </div>
      {actions && (
        <Container padding={12}>
          {actions.map((action, index) => (
            <Button key={index} {...action} />
          ))}
        </Container>
      )}
    </AntCard>
  );
}; 