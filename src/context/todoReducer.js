export const initialState = [
  // {id: Math.random(), text: "Yo!", done: true}
];

export const todoReducer = (state, action) => {

  switch (action.type) {
    case 'INIT':
      return action.payload;
    case 'ADD':
      // [...state, {id: Math.random(), text: action.text, done: false}]
      return [...state, action.payload]
    case 'DELETE':
      return state.filter((todo) => todo.id !== action.id)
    case 'TOGGLE':
      return state.map(todo => 
        todo.id === action.id ? {...todo, done: !todo.done} : todo)
    default:
      return state
  }
};