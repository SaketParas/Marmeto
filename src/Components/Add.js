import React, { Component } from 'react';
import axios from 'axios';


class Add extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            persons: []
        }
    }
    componentDidMount() {
        axios.get(`https://api.postalpincode.in/pincode/{Pincode}`)
          .then(res => {
              console.log(res);
              
            const persons = res.data;
            console.log(persons);
            
            this.setState({ persons });
          })
      }
    render() {
        return (
            <div>
                Add page
            </div>
        )
    }
}

export default Add
