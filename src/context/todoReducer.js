export const initialState = [
  {id: Math.random(), text: "the first todo", done: false},
  {id: Math.random(), text: "the second todo", done: false},
];

export const todoReducer = (state, action) => {

  switch (action.type) {
    case 'ADD':
      return [...state, {id: Math.random(), text: action.text, done: false}]
    case 'DELETE':
      return [...state.filter((todo) => todo.id !== action.id)]
    default:
      return state
  }
};