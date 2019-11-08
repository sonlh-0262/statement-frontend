
import React, {Component} from 'react';
import CreatableSelect from 'react-select/creatable';
import PlaceModal from './PlaceModal';
import {connect} from 'react-redux';
import axios from 'axios';
import _ from 'lodash';
import statements from '../reducers/statementReducer';
import {addStatement} from '../actions/statementActions';

class StatementForm extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      title: '',
      description: '',
      categories: [],
      selected_categories: [],
      place: '',
      show_modal: false,
      latLng: {lat: 21.202160, lng: 105.906600}
    }
  }

  componentDidMount() {
    axios.get('http://localhost:3000/api/categories')
    .then(response => {
      this.setState({categories: response.data.categories})
    })
    .catch(error => console.log(error))
  }

  general_actegories(category){
    const {label, value, id} = category

    return {category_id: parseInt(id), category_attributes: {id: parseInt(id), name: label}}
  }

  handleSubmit(event){
    event.preventDefault();
    
    const {title, description, place, selected_categories} =  this.state;
    const {lat, lng} =  this.state.latLng;
    const category_statements_attributes = _.map(selected_categories, this.general_actegories)

    const statement = {
      title,
      description,
      lat,
      lng,
      place,
      category_statements_attributes
   }

    axios.post('http://localhost:3000/api/statements', {statement})
      .then(response => {
        this.props.addStatement(response.data.statement)
        this.reFreshForm()
      })
      .catch(error => console.log(error))
  }

  reFreshForm = () => {
    this.setState({title: '', description: '', lat: '', lng: '', place: '', selected_categories: []})
  }

  handleChange(event){
    let target = event.target;
    let name = target.name;
    let value = target.value;
    this.setState({
      [name] : value
    })
  }

  handleChangeSelectCategory = (selected) => {
    this.setState({selected_categories: selected})
  }

  handleHideShowModal = (value) => {
    this.setState({show_modal: !this.state.show_modal})
  }

  handleGetLocationFromModal = (location) => {
    this.setState({latLng: location.latLng, place: location.address})
  }

  handleHideShowModal = (value) => {
    this.setState({show_modal: !this.state.show_modal})
  }

  render(){
    const {place, title, description, selected_categories, categories} = this.state;

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
                  value={title}
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
                  value={description}
                />
              </div>
              <div className="form-group pb-1">
                <label htmlFor="statemente_title">Categories:</label>
                <CreatableSelect
                  isMulti
                  name="categories"
                  value={selected_categories}
                  options={categories}
                  className="basic-multi-select"
                  classNamePrefix="select"
                  onChange={this.handleChangeSelectCategory}
                />
              </div>
              <div className="form-group">
                <label htmlFor="statemente_title">Place:</label>
                <div className="input-group">
                  <div className="input-group-prepend">
                    <span className="input-group-text"></span>
                  </div>
                  <input type="text" defaultValue={place} className="form-control" placeholder="Please select a place!" onClick={this.handleHideShowModal}/>
                  {this.state.show_modal && (<PlaceModal
                    address={this.state.place}
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
