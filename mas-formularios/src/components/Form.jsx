import React, { useState } from 'react';

function Form () {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [hasBeenSubmitted, setHasBeenSubmitted] = useState(false);
    //error validations - begin
    const [firstNameError, setFirstNameError] = useState("");
    const [lastNameError, setLastNameError] = useState("");
    const [emailError, setEmailError] = useState("");
    const [passwordError, setPasswordError] = useState("");
    const [confirmPasswordError, setConfirmPasswordError] = useState("");
    //error validations - end
    const sendData = (e) => {
        e.preventDefault();
        const newUser = { firstName, lastName, email, password, confirmPassword };
        console.log("Welcome", newUser);
        setHasBeenSubmitted( true );
    };

    const formMessage = () => {
        if( hasBeenSubmitted ) {
        return "Thank you for submitting the form!";
    } else {
        return "Welcome, please submit the form";
	}
    };

    const validateFirstName = (e) => {
        setFirstName(e.target.value);
        if(e.target.value.length < 2) {
            setFirstNameError("El campo debe tener al menos 2 caracteres");
        } else {
            setFirstNameError("");
        }
    }

    const validateLastName = (e) => {
        setLastName(e.target.value);
        if(e.target.value.length < 2) {
            setLastNameError("El campo debe tener al menos 2 caracteres");
        } else {
            setLastNameError("");
        }
    }

    const validateEmail = (e) => {
        setEmail(e.target.value);
        if(e.target.value.length < 5) {
            setEmailError("El campo debe tener al menos 5 caracteres");
        } else {
            setEmailError("");
        }
    }

    const validatePassword = (e) => {
        setPassword(e.target.value);
        if(e.target.value.length < 8) {
            setPasswordError("La contraseña debe tener al menos 8 caracteres");
        } else {
            setPasswordError("");
        }
    }

    const validateConfirmPassword = (e) => {
        setConfirmPassword(e.target.value);
        let flagError = false;
        if(e.target.value.length < 8) {
            setConfirmPasswordError("La contraseña debe tener al menos 8 caracteres");
            flagError = true;
        }
        if(e.target.value !== password) {
            setConfirmPasswordError("Las contraseñas deben coincidir");
            flagError = true;            
        }
        if(!flagError){
            setConfirmPasswordError("");
        }
    }

    return (
        <form onSubmit={ sendData }>
            <h3>{ formMessage() }</h3>
            <h2>Formulario</h2>
            <br/>
            <div className='form-group'>
                <label htmlFor="firstName">First Name: </label>
                <input placeholder="Search..." type="text" onChange={ validateFirstName }/>
                {
                    firstNameError ?
                    <p style={{color:'red'}}>{ firstNameError }</p> :
                    ''
                }
            </div>
            <br/>
            <div className='form-group'>
                <label htmlFor="lastName">Last Name: </label>
                <input placeholder="Search..." type="text" onChange={ validateLastName }/>
                {
                    lastNameError ?
                    <p style={{color:'red'}}>{ lastNameError }</p> :
                    ''
                }
            </div>
            <br/>
            <div className='form-group'>
                <label htmlFor="email">Email: </label>
                <input placeholder="Search..." type="text" onChange={ validateEmail }/>
                {
                    emailError ?
                    <p style={{color:'red'}}>{ emailError }</p> :
                    ''
                }
            </div>
            <br/>
            <div className='form-group'>
                <label htmlFor="password">Password: </label>
                <input placeholder="Search..." type="password" onChange={ validatePassword }/>
                {
                    passwordError ?
                    <p style={{color:'red'}}>{ passwordError }</p> :
                    ''
                }
            </div>
            <br/>
            <div className='form-group'>
                <label htmlFor="confirmPassword">Confirm Password: </label>
                <input placeholder="Search..." type="password" onChange={ validateConfirmPassword }/>
                {
                    confirmPasswordError ?
                    <p style={{color:'red'}}>{ confirmPasswordError }</p> :
                    ''
                }
            </div>
            <br/>
            <input className='button' type="submit" value="Create User" />
        </form>
    );
};

export default Form;
