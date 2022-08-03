import { Dispatch } from "redux";

import {
    LOAD_FILMS_CATEGORY,
    LOAD_CATALOG_FILMS,
} from "../actionTypes";

import axios from "axios";


export const loadCategoryFilm = () => async (dispatch: Dispatch) => {
    let result = await axios.get('/api1/category/').then(res => res.data)
    dispatch({
        type: LOAD_FILMS_CATEGORY,
        payload: result,
    });
};

export const loadCatalogFilms = () => async (dispatch: Dispatch) => {
    let result = await axios.get('/api1/video/').then(res => res.data)
    dispatch({
        type: LOAD_CATALOG_FILMS,
        payload: result,
    });
};
