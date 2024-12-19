import PropTypes from 'prop-types';

export const componentPropTypes = {
  base: {
    style: PropTypes.object,
    className: PropTypes.string,
  },
  
  button: {
    size: PropTypes.oneOf(['small', 'middle', 'large']),
    variant: PropTypes.string,
    color: PropTypes.string,
    children: PropTypes.node,
    onClick: PropTypes.func,
  },
  
  container: {
    background: PropTypes.string,
    padding: PropTypes.number,
    children: PropTypes.node,
  },
  
  card: {
    title: PropTypes.string,
    subtitle: PropTypes.string,
    background: PropTypes.string,
    padding: PropTypes.number,
    actions: PropTypes.arrayOf(PropTypes.object),
    children: PropTypes.node,
  },
  
  image: {
    src: PropTypes.string,
    alt: PropTypes.string,
    onImageChange: PropTypes.func,
    showUploader: PropTypes.bool,
  },
  
  text: {
    initialText: PropTypes.string,
    fontSize: PropTypes.number,
  }
}; 