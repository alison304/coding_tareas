import React from 'react';
import ButtonCardPersona from './ButtonCardPersona';

class CardPersona extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      age: 0
    }
  }

  updateAge = () => {
    let { age } = this.state;
    if (age === 0) {
      age = Number(this.props.defaultAge);
    }
    this.setState({
        age: age + 1
    })
  }

  render() {
    const { age } = this.state;
    return (
        <>
            <h1>{this.props.name}</h1>
            {age === 0 ? <p>Age: {this.props.defaultAge}</p> : <p>Age: {age}</p>}            
            <p>Hair Color: {this.props.hairColor}</p>
            <ButtonCardPersona
              updateAge={this.updateAge}
              friendlyName={this.props.friendlyName}              
            />
        </>
    )
  }
}

export default CardPersona;
