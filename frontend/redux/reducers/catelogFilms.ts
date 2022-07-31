import { LOAD_CATALOG_FILMS } from '../actionTypes';

const initialState:any[] = []

export const catalogFilms = (state = initialState, { type, payload }: any) => {
    switch (type) {
        case LOAD_CATALOG_FILMS:
            console.log('return - payload', payload)
            return payload;
        default:
            return state;
    }
}