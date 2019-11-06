import {ADD_STATEMENT} from '../constants/statementTypes';

const initSate = [
  {
    id: 1
  }
]

export default function statements(state = initSate, action) {
  switch(action.type){
    case ADD_STATEMENT:
      console.log([
        {id: action.statement},
        ...state
      ])
      return [
        {id: action.statement.id},
        ...state
      ]
    default:
      return state;
  }
}
