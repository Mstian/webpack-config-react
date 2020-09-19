import {GETARTICLE} from '../constants';
let initState: any = {
    articleList: []
};
const getArticle = (state = initState, action: any) => {
    switch(action.type) {
        case GETARTICLE:
            return {
                ...state,
                ...state.articleList = action.payload.data

            }
        default:
            return state;
    }
} 
export default getArticle;