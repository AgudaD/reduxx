import { ADD_TODO } from "../Constants/action-types";

const initialState = {
   todos:[
       { 
           id: 1,
           description:"Make a lot of money",
           isDone: false,
       },
       {
           id: 2,
           description:"Make some more",
           isDone: false,
       },

   ],
};

const todoReducer = (state = initialState, action) => {
       switch(action.type){
           case ADD_TODO: 
           return{
               todos: [...state.todos, action.payload]
       }
       default:
       return state;
   };
}
export default todoReducer;

