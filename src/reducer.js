function reducer(state, action) {
  switch (action.type) {
    case "setLoading": {
      return { ...state, loading: action.loading };
    }

    case "setCocktails": {
      return { ...state, cocktails: action.cocktails };
    }

    case "setSearchText": {
      return { ...state, searchText: action.searchText };
    }

    case "update_all": {
      const { type, ...restStates } = action;
      return { ...state, ...restStates };
    }

    default: {
      throw new Error(`Action type ${action.type} not supported`);
    }
  }
}

export default reducer;
