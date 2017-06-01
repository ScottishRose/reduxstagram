function postComments(state = [], action) {
  switch(action.type){
    case 'ADD_COMMENT':
    //return the new state with the new comment
    return [...state, {
      user: action.author,
      text: action.comment
    }];
    case 'REMOVE_COMMENT':
    //we need to retrun the new state without the deleted comment
      return [
        ...state.slice(0, action.i),
        //after deleted one
        ...state.slice(action.i + 1)
      ]
      return state;
    default:
    return state;
  }
  return state;
}

function comments(state = [], action) {
  if(typeof action.postId !== 'undefined') {
    return {
      //take the current state
      ...state,
      //overwrite this post with a new one
      [action.postId]: postComments(state[action.postId], action)
    }
  }
  return state;
}

export default comments;
