const initialBlog ={
    ListView : [],
};

const blogReducer = ( state = initialBlog , action) => {
    switch (action.type) {
        case 'ADD_VIEW' : {
            const newView = [...state.ListView];
            const newListView = newView.filter(x => x.id !== action.payload.id);
            newListView.unshift(action.payload);
            return{
                ...state,
                ListView: newListView, 
            }
        }
        default:
            return state;
    }
}
export default blogReducer;   