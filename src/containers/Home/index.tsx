import Home from 'Components/Home'
import{withRouter} from 'react-router-dom';
import {connect} from 'react-redux';
import {getArticle} from 'Src/actions/article';
const mapStateToProps = (state: any) => {
    // console.log(state, 'home state');
    return {
        articleList: state.article.articleList
    }
}

const mapDispatchToProps = (dispatch: any) => {
    return {
        getArticle: () => {dispatch(getArticle())}
    }
}

const HomeMap:any = connect(mapStateToProps, mapDispatchToProps)(Home);

export default withRouter(HomeMap);