import {combineReducers} from 'redux';
import count from './count';
import article from './article';
const rootReducer = combineReducers({
    count,
    article
});
export default rootReducer;