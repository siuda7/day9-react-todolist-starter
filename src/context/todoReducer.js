export const initialState = [
  {id: Date.now(), text: "the first todo", done: false},
  {id: Date.now(), text: "the second todo", done: false},
];

export const todoReducer = (state, action) => {

  const {type, text} = action

  switch (type) {
    case 'ADD':
      return [...state, {id: Math.random(), text: text, done: false}]
    default:
      return state
  }
};