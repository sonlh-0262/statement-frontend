import React, {Component} from 'react';
import Header from './Header';
import AgreeRating from './AgreeRating';
import Footer from './Footer';
import Map from './Map';
import MyStatements from './MyStatements'
import StatementForm from './StatementForm';
import SideBar from './SideBar';
import '../assets/stylesheets/dashboard.scss'

class DashBoard extends Component {
  render(){
    return (
      <React.Fragment>
        <div className="d-flex" id="wrapper">
          <SideBar />
          <div id="page-content-wrapper">
            <Header />
            <div className="container-fluid">
              <div className="row">
                <div className="col-md-12 p-2">
                  <StatementForm />
                  <MyStatements />
                  <Map />
                  <AgreeRating />
                </div>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </React.Fragment>
    )
  }
}
 export default DashBoard;
