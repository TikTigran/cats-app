import types from "./common.types";

const INITIAL_STATE = {
  categories: [],
  catsData: [],
  isLoading: false,
  errorMessage: "",
};

const commonReducer = (state = INITIAL_STATE, action) => {
  const { type, payload } = action;
  switch (type) {
    case types.GET_CATEGORIES_ASYNC_START:
      return { ...state, isLoading: true };
    case types.GET_CATEGORIES_ASYNC_SUCCESS:
      return { ...state, isLoading: false, categories: payload };
    case types.GET_CATEGORIES_ASYNC_FAILURE:
      return { ...state, isLoading: false };

    case types.GET_DATA_ASYNC_START:
      return { ...state, isLoading: true };
    case types.GET_DATA_ASYNC_SUCCESS:
      return { ...state, isLoading: false, catsData: payload };
    case types.GET_DATA_ASYNC_FAILURE:
      return { ...state, isLoading: false, errorMessage: payload };

    default:
      return state;
  }
};

export default commonReducer;
