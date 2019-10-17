import React, {Component} from 'react';

class DashBoard extends Component {
  render(){
    return (
      <div className="col-md-12">
        <div className="col-md-1"></div>
        <div className="col-md-11">
          <div className="col-md-12">
            <div className="col-md-1 pull-left">DASHBOARD</div>
            <div className="col-md-1 pull-right">
              <a href="/">iAgree</a> > Home
            </div>
            <div></div>
          </div>
        </div>
      </div>
    )
  }
}
 export default DashBoard;
