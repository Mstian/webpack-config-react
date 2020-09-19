import {GETARTICLE} from '../constants';
import axios from '../utils/axios';

function receiveArticle(json: any) {
    return {
        type: GETARTICLE,
        payload: {
            data: json
        }
    }
}

export const getArticle = () => {
    return (dispatch:any) => {
        return axios.get('http://www.tianleilei.cn/api/comment/get',{}).then((data)=>{
            console.log(data,'list');
            dispatch(receiveArticle(data));
        })
    }
}

