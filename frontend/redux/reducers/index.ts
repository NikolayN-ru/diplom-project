import { mainMenu } from './mainMenu';
import { categoryFilms } from './categoryFilms';

import { combineReducers } from "redux";
import { catalogFilms } from './catelogFilms';

export default () =>
    combineReducers({
        mainMenu,
        categoryFilms,
        catalogFilms,
    })
