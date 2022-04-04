import * as ActionType from "./constants";

const initialState = {
    loading: false,
    data: null,
    error: null,
    userEdit: []
}

const editUserReducer = (state = initialState, action) => {
    switch (action.type) {
        case ActionType.EDIT_USER_REQUEST: {
            state.loading = true;
            state.data = null;
            state.error = null;
            return {...state}
        }
        case ActionType.EDIT_USER_SUCCESS: {
            state.loading = false;
            state.data = action.payload;
            state.error = null;
            return {...state}
        }
        case ActionType.EDIT_USER_FAILED: {
            state.loading = false;
            state.data = null;
            state.error = action.payload;
            return {...state}
        }
        case ActionType.GET_INFO_USER:{
            state.userEdit = action.payload
            return {...state}
        }
        default:
            return {...state};
    }
}

export default editUserReducer