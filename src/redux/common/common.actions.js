import types from "./common.types";
import commonApi from "./common.api";

// CATEGORIES
const getCategoriesAsyncStart = () => ({
  type: types.GET_CATEGORIES_ASYNC_START,
});
const getCategoriesAsyncSuccess = (categories) => ({
  type: types.GET_CATEGORIES_ASYNC_SUCCESS,
  payload: categories,
});
const getCategoriesAsyncFailure = (errorMessage) => ({
  type: types.GET_CATEGORIES_ASYNC_FAILURE,
  payload: errorMessage,
});

export const getCategoriesAsync = () => async (dispatch) => {
  dispatch(getCategoriesAsyncStart());
  try {
    const response = await commonApi.getCategories();
    const categories = response.data;
    dispatch(getCategoriesAsyncSuccess(categories));
  } catch (error) {
    dispatch(getCategoriesAsyncFailure(error.message));
  }
};
