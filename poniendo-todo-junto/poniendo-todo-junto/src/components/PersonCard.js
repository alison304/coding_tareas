import React from 'react';
import ButtonPersonCard from './ButtonPersonCard';

class PersonCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      age: 0
    }
  }

  updateAge = () => {
    let { age } = this.state;
    if (age === 0) {
      age = Number(this.props.age);
    }
    this.setState({
        age: age + 1
    })
  }

  render() {
    const { age } = this.state;
    return (
        <>
            <h1>{this.props.lastName}, {this.props.firstName}</h1>
            {age === 0 ? <p>Age: {this.props.age}</p> : <p>Age: {age}</p>}            
            <p>Hair Color: {this.props.hairColor}</p>
            <ButtonPersonCard
              updateAge={this.updateAge}
              firstName={this.props.firstName}
              lastName={this.props.lastName}
            />
        </>
    )
  }
}

export default PersonCard;
