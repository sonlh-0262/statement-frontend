import * as actions from '../constants/statementTypes'
import statements from '../reducers/statementReducer'

export function addStatement(statement){
  return {
    type: actions.ADD_STATEMENT,
    statement
  }
}