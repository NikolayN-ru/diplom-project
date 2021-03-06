import { LOAD_FILMS_CATEGORY } from '../actionTypes';

const initialState = [
    { pk: 1, title: 'none' },
]

export const categoryFilms = (state = initialState, { type, payload }: any) => {
    switch (type) {
        case LOAD_FILMS_CATEGORY:
            return payload;
        default:
            return state;
    }
}
