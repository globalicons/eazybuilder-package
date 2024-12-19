export const COMPONENT_TYPES = {
  BUTTON: 'BUTTON',
  TEXT: 'TEXT',
  CONTAINER: 'CONTAINER',
  CARD: 'CARD',
  IMAGE: 'IMAGE'
};

export const DEFAULT_PROPS = {
  [COMPONENT_TYPES.BUTTON]: {
    children: 'Click me',
    size: 'small'
  },
  [COMPONENT_TYPES.TEXT]: {
    children: 'Edit this text'
  },
  [COMPONENT_TYPES.CONTAINER]: {
    padding: 20
  },
  [COMPONENT_TYPES.CARD]: {
    title: 'New Card',
    subtitle: 'Card subtitle'
  },
  [COMPONENT_TYPES.IMAGE]: {}
}; 