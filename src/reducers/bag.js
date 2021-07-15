function indexOfContainingId(id, arr) {
    for (var i=0, len=arr.length; i<len; i++) {
        if (arr[i][0].id === id) { return i; }
    }
    return -1;
}

const bag = (state = [], action) => {
    //functional
    switch(action.type)
    {
        case "ADD":
            if (indexOfContainingId(action.payload[0].id, state) !== -1)
            {
                let index = indexOfContainingId(action.payload[0].id, state);
                state[index][1] = state[index][1]+1;
                return [...state];
            }
            return [...state,action.payload];
        case "REDUCE":
            if (indexOfContainingId(action.payload[0].id, state) !== -1)
            {
                let index = indexOfContainingId(action.payload[0].id, state);
                state[index][1] = state[index][1]-1;
                if (state[index][1] <= 0)
                {
                    //functional
                    state.splice(index,1);
                }
                return [...state];
            }
            return state;
        case "DELETE":
            if (indexOfContainingId(action.payload[0].id, state) !== -1)
            {
                let index = indexOfContainingId(action.payload[0].id, state);
                //functional
                state.splice(index,1);
                return [...state];
            }
            return state;
        default:
            return state;
    }
}

export default bag;