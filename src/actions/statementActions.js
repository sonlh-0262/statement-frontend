import * as actions from '../constants/statementTypes'

export function addStatement(statement){
  return {
    type: actions.ADD_STATEMENT,
    statement
  }
}

export function loadAllStatements(statements){
  return {
    type: actions.LOAD_ALL_SATEMENT,
    statements
  }
}