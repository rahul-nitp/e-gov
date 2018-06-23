import React, { Component } from "react";
import './content.css'

export default class Flexi extends Component{
    constructor(props){
        super(props)
        this.state={
            textVal: '',
            dropDownVal: 'Maharashtra'
        }
        this.renderJSON_UI = this.renderJSON_UI.bind(this)
        this.onValuesSelected = this.onValuesSelected.bind(this)
        this.handleTextChange = this.handleTextChange.bind(this)
        this.handleDDChange = this.handleDDChange.bind(this)
    }

    
    handleDDChange(event){
        this.setState({dropDownVal: event.target.value})

    }
    handleTextChange(event){
        this.setState({textVal: event.target.value})
    }
    onValuesSelected(){
        var name =this.state.textVal;
        var stateName = this.state.dropDownVal;
        this.props.onSubmit(name, stateName)
    }
    renderJSON_UI(){
        let model = this.props.config;
        return(
            <div>
            {
                model.items.map(item => {
                    if(item.type === "TextFeild") {
                      return(
                      <input className='form-control' key={item.name} type="text" onChange={this.handleTextChange} label={item.label} placeholder={item.name} />
                      )
                    }
                    if (item.type === "DropDown") {
                      return (
                        <select className='selectpicker' key={item.type} onChange={this.handleDDChange}  >
                          {
                              item.values.map(value => <option key={value} value={this.state.value}> {value} </option>)
                          }
                        </select>
                      );
                    }
                    return <div>{item.label}</div>;
                  })
            }
            </div>
        )
    }

    
    render(){
        var returnForm = this.renderJSON_UI();
        return(
            <div>
                <button  className='btn-primary' onClick={this.onValuesSelected} > <h3>Submit</h3> </button>
                {returnForm}
            </div>
        )
    }
}

