// import { MAIN_MENU_LOAD } from '../actionTypes';

const initialState = [
    { id: 1, title: 'glavnaya' },
]

export const mainMenu = (state = initialState, { type, payload }: any) => {
    switch (type) {
        default:
            return state;
    }
}