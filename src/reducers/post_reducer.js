const postReducer = (state = { list: [{id: 1,title:'hello world!'}] }, action) => {
    console.log(action);
    switch(action.typoe) {
      case 'LOAD_POSTS':
        return {
          ...state, list: action.payload
        }
      default:
        return state;
    }
}

export default postReducer;