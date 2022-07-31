import { mainMenu } from './mainMenu';
import { categoryFilms } from './categoryFilms';

import { combineReducers } from "redux";
import { catalogFilms } from './CatelogFilms';

export default () =>
    combineReducers({
        mainMenu,
        categoryFilms,
        catalogFilms,
    })
