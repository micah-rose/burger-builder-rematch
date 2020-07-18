import React, {PureComponent} from 'react';
import Person from './Person/Person';

class Persons extends PureComponent {
    // static getDerivedStateFromProps(props, state){
    //     console.log("PersonsJS get derived state from props");
    //     return state;
    // }

    // shouldComponentUpdate(nextProps, nextState){
    //     console.log("PersonsJS should component update");
    //     if (nextProps.persons !== this.props.persons || 
    //         nextProps.changed !== this.props.changed || 
    //         nextProps.clicked !== this.props.clicked){
    //         return true;
    //     } else {
    //         return false;
    //     }
    // }

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
          return (
            <Person 
            click={() => this.props.clicked(index)}
            name={person.name} 
            age={person.age}
            key={person.id}
            changed={(event) => this.props.changed(event, person.id)}
            />
          )
        });
    }
}

export default Persons;