import React, {useEffect} from 'react';
import classes from './Cockpit.css'

const Cockpit = (props) => {
    useEffect(() => {
        console.log("CockpitJS use effect");
        const timer = setTimeout(() => {
            alert("SAVED DATA TO CLOUD");
        }, 1000);
        return () => {
            clearTimeout(timer);
            console.log("CockpitJS clean up work in useEffect");
        }
    }, [])

    useEffect(() => {
    console.log("CockpitJS 2nd use effect");
    return () => {
        console.log("CockpitJS clean up work in 2nd useEffect");
    }
 })

    const assignedClasses = [];
    let btnClass = '';
    if (props.showPersons){
        btnClass = classes.Red;
    }

    if (props.persons.length <= 2){
      assignedClasses.push(classes.red);
    }
    if(props.persons.length <= 1){
      assignedClasses.push(classes.bold);
    }

    return (
        <div className={classes.Cockpit}>
        <p className={assignedClasses.join(' ')}>This is really working!</p>  
        <button className={btnClass} onClick={props.clicked}>
        Toggle Persons
        </button>
        </div>
    );
}

export default Cockpit;