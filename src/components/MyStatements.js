import React, {Component} from 'react';
import {connect} from 'react-redux';
import statements from '../reducers/statementReducer';
import _ from 'lodash';
import axios from 'axios';
import {loadAllStatements} from '../actions/statementActions';

class MyStatements extends Component {
    componentDidMount() {
      axios.get('http://localhost:3000/api/statements')
      .then(response => {
        this.props.loadAllStatements(response.data.statements)
      })
      .catch(error => console.log(error))
    }

  render(){
    const {statements} = this.props.statements;

    return(
      <div className="col-md-6 float-left p-3">
        <div className="card">
          <div className="card-header">
            <span className="text-success"><strong>MY STATEMENT</strong></span>
          </div>
          <div className="card-body">
            <table className="table table-hover">
              <thead>
                <tr>
                  <th scope="col">Statement</th>
                  <th scope="col">Agree</th>
                  <th scope="col">Comment</th>
                  <th scope="col">Action</th>
                </tr>
              </thead>
              <tbody>
                {
                  this.props.statements.map((el, index) => (
                    <tr key={el.id}>
                      <th scope="row">{index}</th>
                      <td>{el.title}</td>
                      <td>{el.agree_count}</td>
                      <td>{el.comment_count}</td>
                    </tr>
                  ))
                }
              </tbody>
            </table>
          </div>
        </div>
      </div>
    )
  }
}


function mapStateToProps(state){
  return {statements: state.statementReducer}
}

const mapDispatchToProps = {
  loadAllStatements
}

export default connect(mapStateToProps, mapDispatchToProps)(MyStatements);
