import * as actionTypes from "./actionTypes";

export const addData = (data) => {
    return {
        type: actionTypes.addData,
        payload: data,
    };
};
