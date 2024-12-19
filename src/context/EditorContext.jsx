import { createContext, useContext, useReducer, useState } from 'react';

// Create the context
const EditorContext = createContext();

// Define initial state
const initialState = {
  elements: [],
  selectedElement: null,
  isEditMode: true
};

// Define reducer
const editorReducer = (state, action) => {
  switch (action.type) {
    case 'SET_SELECTED_ELEMENT':
      return { ...state, selectedElement: action.payload };
    case 'ADD_ELEMENT':
      return { ...state, elements: [...state.elements, action.payload] };
    case 'REMOVE_ELEMENT':
      return { 
        ...state, 
        elements: state.elements.filter(el => el.id !== action.payload) 
      };
    case 'TOGGLE_EDIT_MODE':
      return { ...state, isEditMode: !state.isEditMode };
    case 'LOAD_LAYOUT':
      return { ...state, elements: action.payload };
    case 'UPDATE_ELEMENT':
      return {
        ...state,
        elements: state.elements.map(el => 
          el.id === action.payload.id 
            ? { ...el, ...action.payload.updates }
            : el
        )
      };
    default:
      return state;
  }
};

// Add the useEditor hook
export const useEditor = () => {
  const context = useContext(EditorContext);
  if (!context) {
    throw new Error('useEditor must be used within an EditorProvider');
  }
  return context;
};

export function EditorProvider({ children }) {
  const [state, dispatch] = useReducer(editorReducer, initialState);
  const [layout, setLayout] = useState([]);

  const value = {
    ...state,
    selectElement: (elementId) => {
      dispatch({ type: 'SET_SELECTED_ELEMENT', payload: elementId });
    },
    addElement: (element) => {
      dispatch({ type: 'ADD_ELEMENT', payload: element });
    },
    removeElement: (elementId) => {
      dispatch({ type: 'REMOVE_ELEMENT', payload: elementId });
    },
    toggleEditMode: () => {
      dispatch({ type: 'TOGGLE_EDIT_MODE' });
    },
    saveLayout: () => {
      return layout;
    },
    loadLayout: (layoutData) => {
      if (Array.isArray(layoutData)) {
        setLayout(layoutData);
        dispatch({ type: 'LOAD_LAYOUT', payload: layoutData });
      } else {
        console.error('Invalid layout data:', layoutData);
      }
    },
    updateElement: (elementId, updates) => {
      dispatch({
        type: 'UPDATE_ELEMENT',
        payload: { id: elementId, updates }
      });
    }
  };

  return (
    <EditorContext.Provider value={value}>
      {children}
    </EditorContext.Provider>
  );
} 