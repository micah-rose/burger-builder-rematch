import React, {Component} from 'react';
import Person from './Person/Person';

class Persons extends Component {
    // static getDerivedStateFromProps(props, state){
    //     console.log("PersonsJS get derived state from props");
    //     return state;
    // }

    shouldComponentUpdate(nextProps, nextState){
        console.log("PersonsJS should component update");
        return true;
    }

    getSnapshotBeforeUpdate(prevProps, prevState){
        console.log("PersonsJS get snapshop before update");
        return {message: "Snapshot!"};
    }

    componentDidUpdate(prevProps, prevState, snapshot){
        console.log("PersonsJS component did update");
        console.log(snapshot);
    }

    componentWillUnmount() {
        console.log("{PersonsJS component will unmount");
    }


  render(){
    console.log("PersonsJS rendering...");
    return this.props.persons.map((person, index) => {
          return <Person 
          click={() => this.props.clicked(index)}
          name={person.name} 
          age={person.age}
          key={person.id}
          changed={(event) => this.props.changed(event, person.id)}/>
        }
      );
  }
}

export default Persons;