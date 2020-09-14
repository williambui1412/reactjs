const initialStatus ={
    popup : 0,
};

const statusReducer = ( state = initialStatus , action) => {
    switch (action.type) {
        case 'ON_STATUS' : {
            return {
                ...state,
                popup: 1,
            }
        }
        case 'OFF_STATUS' : {
            console.log('123123');
            return {
                ...state,
                popup: 0,
            } 
        }
        default:
            return state;
    }
}
export default statusReducer; 