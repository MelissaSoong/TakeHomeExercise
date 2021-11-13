import React from 'react';
import TextField from "@material-ui/core/TextField";
import { Link } from 'react-router-dom';

import './layout.scss';

export default class Form extends React.Component{
    constructor(props){
        super(props);

    this.state = {value: 'Kuala Lumpur'};
    this.handleChange = this.handleChange.bind(this);
  }

    handleChange(event) {
        this.setState({value: event.target.value});
    }

    render(){
        return(
            <div className="Form">
                
                <form onSubmit={this.handleSubmit}>
                    <TextField 
                        id="standard-basic"
                        label="Your API Key"
                        style={{ width: '230px'}}
                        InputLabelProps={{style: {fontWeight: 'bolder', color: '#F96D77'}}}
                        InputProps={{style: {fontSize:'13px'}}}
                        variant="standard"
                        defaultValue="ff9f895b2e884d6680530135202710"
                    />

                    <br></br>
                    <br></br>

                    <label>
                        City Name <br></br>
                        <select value={this.state.value} onChange={this.handleChange} style={{width: '230px'}}>            
                            <option>Kuala Lumpur</option>
                            <option>Singapore</option>
                        </select>
                    </label>

                </form>

                <br></br>
                <br></br>
                
                <Link to="/Temperature" className="button">Submit</Link>

            </div>
        );
    }
    
      
    
}