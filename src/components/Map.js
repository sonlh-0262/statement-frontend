import React, {Component} from 'react';
import Place from './Place';

class Map extends Component {
  render(){
    return(
      <div className="col-md-6 float-left p-3">
        <div className="card">
          <div className="card-header">
            <span className="text-success"><strong>MAP</strong></span>
          </div>
          <div className="card-body">
            <Place />
          </div>
        </div>
      </div>
    )
  }
}

export default Map;
