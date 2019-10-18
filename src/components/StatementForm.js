
import React, {Component} from 'react';
import Location from './Location';
import Select from 'react-select/creatable';

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
      category: null,
      place: ''
    }
  }

  handleSubmit(event){
    var formData = new FormData();
    event.preventDefault();
    
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

  render(){
    return(
      <div className="col-md-6 float-left p-3">
        <div className="card">
          <div className="card-header"><span className="text-success"><strong>ADD STATEMENT</strong></span></div>
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
                <Location />
              </div>
              <button type="submit" className="btn btn-success pull-right">Submit</button>
            </form>
          </div>
        </div>
      </div>
    )
  }
}

export default StatementForm;
