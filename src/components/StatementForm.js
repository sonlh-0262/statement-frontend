
import React, {Component} from 'react';
import Select from 'react-select/creatable';
import PlaceModal from './PlaceModal';
import {connect} from 'react-redux';
import axios from 'axios'
import statements from '../reducers/statementReducer';
import {addStatement} from '../actions/statementActions'

const colourOptions = [
  { value: 'chocolate', label: 'Chocolate' },
  { value: 'strawberry', label: 'Strawberry' },
  { value: 'vanilla', label: 'Vanilla' },
];

class StatementForm extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      title: '',
      description: '',
      category: [],
      address: '',
      show_modal: false,
      latLng: {lat: 21.202160, lng: 105.906600}
    }
  }

  componentDidMount(){
    console.log("statements:",this.props.statements, this.props)
  }

  handleSubmit(event){
    const {title, description, category, address} =  this.state;
    const {lat, lng} =  this.state.latLng;

    const data = {

    }

    event.preventDefault();
    this.props.addStatement(2)

    // axios.post('/api/statements/', {data})
    //   .then(response => {
    //     this.props.addStatement(response.statement)
    //   })
    //   .catch(error => console.log(error))
  }

  handleChange(event){
    let target = event.target;
    let name = target.name;
    let value = target.value;
    this.setState({
      [name] : value
    })
  }

  handleChangeSelectCategory(event){
    if(event){
      this.setState({category: event})
    }
  }

  handleHideShowModal = (value) => {
    this.setState({show_modal: !this.state.show_modal})
  }

  handleGetLocationFromModal = (location) => {
    this.setState({latLng: location.latLng, address: location.address})
  }

  render(){
    const {address, title, description, category} = this.state;
    return(
      <div className="col-md-6 float-left p-3">
        <div className="card">
          <div className="card-body">
            <form onSubmit={this.handleSubmit.bind(this)}>
              <div className="form-group">
                <label htmlFor="statemente_title">Title:</label>
                <input 
                  type="text"
                  className="form-control"
                  id="statemente_title"
                  placeholder="Enter title"
                  onChange={this.handleChange.bind(this)}
                  name="title"
                  />
              </div>
              <div className="form-group">
                <label htmlFor="FormControlTextarea">Description:</label>
                <textarea 
                  className="form-control"
                  id="FormControlTextarea"
                  rows="3"
                  placeholder="Description"
                  onChange={this.handleChange.bind(this)}
                  name="description"
                />
              </div>
              <div className="form-group pb-1">
                <label htmlFor="statemente_title">Category:</label>
                <Select
                  // defaultValue={[colourOptions[2], colourOptions[1]]}
                  isMulti
                  name="categories"
                  options={colourOptions}
                  className="basic-multi-select"
                  classNamePrefix="select"
                  onChange={this.handleChangeSelectCategory.bind(this)}
                />
              </div>
              <div className="form-group">
                <label htmlFor="statemente_title">Place:</label>
                <div className="input-group">
                  <div className="input-group-prepend">
                    <span className="input-group-text"></span>
                  </div>
                  <input type="text" defaultValue={address} className="form-control" placeholder="Please select a place!" onClick={this.handleHideShowModal}/>
                  {this.state.show_modal && (<PlaceModal
                    address={this.state.address}
                    latLng={this.state.latLng}
                    handleHideShowModal={this.handleHideShowModal} show_modal={this.state.show_modal} 
                    handleGetLocationFromModal={this.handleGetLocationFromModal}
                    />)}
                </div>
              </div>
              <button type="submit" className="btn btn-success pull-right">Submit</button>
            </form>
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {statements: state.statementReducer}
}

const mapDispatchToProps = {
  addStatement
}

export default connect(mapStateToProps, mapDispatchToProps)(StatementForm);
