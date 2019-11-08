import {ADD_STATEMENT, LOAD_ALL_SATEMENT} from '../constants/statementTypes';

const initSate = []

export default function statements(states = initSate, action) {
  switch(action.type){
    case ADD_STATEMENT:
      return [
        action.statement,
        ...states
      ]
    case LOAD_ALL_SATEMENT:
      return [...action.statements]
    default:
      return states;
  }
}
