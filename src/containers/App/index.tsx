import App from 'Components/App';
import {withRouter} from 'react-router-dom';
import {connect} from 'react-redux';
import { addNumber, minNumber, addTwo } from 'Src/actions/count';
const mapStateToProps = (state: any) => {
    return {
        count: state.count.count
    }
}

const mapDispatchToProps = (dispatch: any) => {
    return {
        addNumber: () => {dispatch(addNumber())},
        minNumber: () => {dispatch(minNumber())},
        addTwo: (two: any) => {dispatch(addTwo(two))}
    }
}
console.log('appmapsss');
const AppMap: any = connect(mapStateToProps, mapDispatchToProps)(App);

export default withRouter(AppMap);
