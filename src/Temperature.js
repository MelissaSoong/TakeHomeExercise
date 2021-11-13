import React, { Component } from 'react';
import TextField from "@material-ui/core/TextField";


export default class Temperature extends Component {
    constructor() {
        super();
        
        this.state={
        items:[],
    }
    }

    //Trying for API Call
    // componentDidMount() {
    //     fetch("http://api.weatherapi.com/v1/current.json?key=ff9f895b2e884d6680530135202710&q=Kuala%20Lumpur")
    //         .then((res) => res.json())
    //         .then((json) => {
    //             this.setState({
    //                 items: json.current,
    //                 // DataisLoaded: true
    //             });
    //             console.log(json.current.temp_c);
    //         })
    // }

    render() {
        return (
            <div className="Form">
                <TextField 
                    id="standard-basic"
                    label="Celsius"
                    style={{ width: '230px'}}
                    InputLabelProps={{style: {fontWeight: 'bolder', color: '#F96D77'}}}
                    InputProps={{style: {fontSize:'13px'}}}
                    // value={items}
                    variant="standard"
                    />

                    <br></br>
                    <br></br>

                    <TextField 
                    id="standard-basic"
                    label="Fahrenheit"
                    style={{ width: '230px'}}
                    InputLabelProps={{style: {fontWeight: 'bolder', color: '#F96D77'}}}
                    InputProps={{style: {fontSize:'13px'}}}
                    variant="standard"
                    />

                    <div>
                        {this.state.items.map((dynamicData, temp_c) =>
                        <div>
                            {dynamicData.temp_c}
                            </div>
                        )}
   
                    </div>
                  
            </div>
        );
    }
}