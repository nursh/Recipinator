function createStore(initialState, reducer) {
  let state = initialState;
  const listeners = [];

  const getState = () => (state);
  const subscribe = listener => (listeners.push(listener));
  const dispatch = (action) => {
    state = reducer(state, action);
    listeners.map(listen => listen());
  };

  const clearState = () => { state = initialState; };

  return {
    getState,
    subscribe,
    dispatch,
    clearState,
  };
}


const initialState = {
  main: {
    title: '',
    description: '',
    prepTime: 0,
    cookingTime: 0,
    totalTime: 0,
  },
  directions: [],
  ingredients: [],
  keywords: [],
  imageUrl: '',
};


const reducer = (state, action) => {
  const { directions, ingredients, keywords, main, imageUrl } = state;
  if (action.type === 'MAIN') {
    return {
      directions,
      ingredients,
      keywords,
      imageUrl,
      main: {
        title: action.fields.title,
        description: action.fields.description,
        prepTime: action.fields.prepTime,
        cookingTime: action.fields.cookingTime,
      },
    };
  } else if (action.type === 'DIRECTIONS') {
    return {
      main,
      keywords,
      ingredients,
      imageUrl,
      directions: [...directions, action.direction],
    };
  } else if (action.type === 'INGREDIENTS') {
    return {
      main,
      keywords,
      directions,
      imageUrl,
      ingredients: [...ingredients, action.ingredient],
    };
  } else if (action.type === 'KEYWORDS') {
    return {
      main,
      directions,
      ingredients,
      imageUrl,
      keywords: [...keywords, action.keyword],
    };
  } else if (action.type === 'URL') {
    return {
      main,
      directions,
      ingredients,
      keywords,
      imageUrl: action.imageUrl,
    };
  }
  return state;
};


const store = createStore(initialState, reducer);
module.exports = {
  store,
};
