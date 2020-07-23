import React, { useState, useEffect} from 'react';
import axios from 'axios'
import * as yup from 'yup'
import './App.css';

//components
import Forms from './components/Forms'
import formSchema from './validation/formSchema'
import User from './components/users'

//inital 1 renden values
const initialFormValues = {
  ///// TEXT INPUTS /////
  name: '',
  email: '',
  ///// DROPDOWN /////
  password: '',
  ///// RADIO BUTTONS /////
  termsOfService: false,
  
}
const initialFormErrors = {
  name: '',
  email: '',
  password: '',
}
const initialUsers = []
const initialDisabled = true

function App() {
  //states
  const [usersInSystem, setUsersInSystem] = useState(initialUsers)// array of friend objects
  const [formValues, setFormValues] = useState(initialFormValues) // object
  const [formErrors, setFormErrors] = useState(initialFormErrors) // object
  const [disabled, setDisabled] = useState(initialDisabled)       // boolean

  //helper functions
  const getUsers = () => {

  }
    //functions for forms.js
  const postNewFriend = newUser => {

  }
  const inputChange = (name, value) => {

  }
  const checkboxChange = (name, isChecked) => {

  }
  const submit = () => {

  }//end of functions for forms.js
  const displayAllUsers = () =>{
     (usersInSystem.map(user => <User key={user.id} details={user} />))
  }
  //useEffects- rerender components
  useEffect(() => {
    getUsers()
  }, [])

    //ADJUST THE STATUS OF `disabled` EVERY TIME `formValues` CHANGES
  useEffect(() => {
    formSchema.isValid(formValues).then(valid => {
      setDisabled(!valid)
    })
  }, [formValues])

  return (
    <div className="container">
      
    <Forms 
      values={formValues}
      inputChange={inputChange}
      checkboxChange={checkboxChange}
      submit={submit}
      disabled={disabled}
      errors={formErrors}
    />

    {displayAllUsers}
    </div>
  );
}

export default App;
