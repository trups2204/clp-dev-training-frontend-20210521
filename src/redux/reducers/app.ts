import { AnyAction } from 'redux';

const initialState = {};

export const ACTIONS = {
  SET_EXAMPLE: 'SET_EXAMPLE',
};

export const reducer = (state = initialState, action: Record<string, any>): Record<string, any> | null => {
  switch (action.type) {
    case ACTIONS.SET_EXAMPLE:
      return { ...state, error: action.error };
    default: {
      return state;
    }
  }
};

export const setExample = (json: Record<string, any>): AnyAction => ({
  type: ACTIONS.SET_EXAMPLE,
  payload: {
    json,
  },
});
