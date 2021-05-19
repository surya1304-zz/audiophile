import * as actionTypes from "./actionTypes";

const INITIAL_STATE = {
    data: [],
};

export const reducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case actionTypes.addData:
            return {
                ...state,
                data: action.payload,
            };

        default:
            return state;
    }
};
