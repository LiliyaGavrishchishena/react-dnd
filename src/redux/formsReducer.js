import types from './formsActionTypes';

export default function postReducer(state = [], { type, payload }) {
  switch (type) {
    case types.FETCH_SUCCESS:
      return payload;

    case types.DELETE_SUCCESS:
      return state.filter(id => id !== payload);

    default:
      return state;
  }
}
