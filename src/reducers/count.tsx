// interface Action {
//     type: String,
//     payload: Object
// }
let initState = {count: 10};
const count = (state = initState, action:any) => {
    switch(action.type){
        case 'ADDNUMBER':
            return {
                ...state,
                ...{
                    count: state.count+1
                }
            }
        case 'MINNUMBER':
            return {
                ...state,
                ...{
                    count: state.count-1
                }
            }
        case 'ADDTWO':
            return {
                ...state,
                ...{
                    count: state.count + action.payload.two
                }
            }
        default: 
        return state;
    }
}
export default count;