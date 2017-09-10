function createStore(initialState, reducer) {
  let state = initialState;
  const listeners = [];

  const getState = () => (state);
  const subscribe = listener => (listeners.push(listener));
  const dispatch = (action) => {
    state = reducer(state, action);
    listeners.map(listen => listen());
  };

  return {
    getState,
    subscribe,
    dispatch,
  };
}


const initialState = {
  main: {
    title: '',
    description: '',
    imageUrl: '',
    prepTime: '',
    cookingTime: '',
  },
  directions: [],
  ingredients: [],
  keywords: [],
};


const reducer = (state, action) => {
  const { directions, ingredients, keywords, main } = state;
  if (action.type === 'MAIN') {
    return {
      directions,
      ingredients,
      keywords,
      main: {
        title: action.fields.title,
        description: action.fields.description,
        imageUrl: action.fields.imageUrl,
        prepTime: action.fields.prepTime,
        cookingTime: action.fields.cookingTime,
      },
    };
  } else if (action.type === 'DIRECTIONS') {
    return {
      main,
      keywords,
      ingredients,
      directions: [...directions, action.direction],
    };
  } else if (action.type === 'INGREDIENTS') {
    return {
      main,
      keywords,
      directions,
      ingredients: [...ingredients, action.ingredient],
    };
  } else if (action.type === 'KEYWORDS') {
    return {
      main,
      directions,
      ingredients,
      keywords: [...keywords, action.keyword],
    };
  }
  return state;
};


const store = createStore(initialState, reducer);
module.exports = {
  store,
};
