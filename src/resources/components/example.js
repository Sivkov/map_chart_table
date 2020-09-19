import React, { Component } from 'react';
import Alert from 'react-bootstrap/Alert';

export class Example extends Component  {
  constructor(props) {
    super(props);
    this.charTypeChange = this.charTypeChange.bind(this);
  }

  charTypeChange (){
    alert()

  }


  render() {
    return (
      <Alert dismissible variant="danger" onClick={  this.charTypeChange }>
        <Alert.Heading>Oh snap! You got an error!</Alert.Heading>
        <p>
          Change this and that and try again.
        </p>
      </Alert>
    )
    }

}
export default Example;