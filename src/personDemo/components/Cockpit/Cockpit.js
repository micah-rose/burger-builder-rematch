import React, {useEffect, useRef, useContext} from 'react';
import classes from './Cockpit.css'
import AuthContext from '../../context/auth-context';

const Cockpit = (props) => {

    const toggleBtnRef = useRef(null);
    const authContext = useContext(AuthContext);

    console.log(authContext.authenticated);

    useEffect(() => {
        console.log("CockpitJS use effect");
        // const timer = setTimeout(() => {
        //     alert("SAVED DATA TO CLOUD");
        // }, 1000);
        toggleBtnRef.current.click();
        return () => {
            // clearTimeout(timer);
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
        <button 
        ref={toggleBtnRef} 
        className={btnClass} 
        onClick={props.clicked}>
        Toggle Persons
        </button>
        {<button onClick={authContext.login}>Login</button>}
        </div>
    );
}

export default React.memo(Cockpit);