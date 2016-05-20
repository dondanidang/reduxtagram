// reducer takes in two things:
// 1. actions (info about what happened)
// 2. copy of current state

function posts(state = [], action) {
  switch(action.type) {
    case 'INCREMENT_LIKES':
      const i = action.index;
      console.log('Incrementing Likes!!');
      return [
        ...state.slice(0,i), // up until before the one we are updating
        {...state[i], likes: state[i].likes + 1},
        ...state.slice(i+1), // up until after the one we are updating
      ]
    default:
      return state;
  }
  console.log(state, action);
  return state;
}

export default posts;
