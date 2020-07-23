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
  first_name: '',
  last_name: '',
  email: '',
  ///// DROPDOWN /////
  password: '',
  ///// RADIO BUTTONS /////
  termsOfService: false,
  
}
const initialFormErrors = {
  first_name: '',
  last_name: '',
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
    const url = 'https://reqres.in/api/users'
    axios.get(url)
      .then( res => {
        setUsersInSystem(res.data.data)

      })
      .catch( err => {
        debugger
      })
  }
    //functions for forms.js
  const postNewUser = newUser => {
    const url = 'https://reqres.in/api/users'
    axios.post(url, newUser)
      .then( res => {
        console.log(res)
        setUsersInSystem([res.data.data, ...usersInSystem])
        setFormValues(initialFormValues)
      })
  }
  const inputChange = (name, value) => {
    yup
      //match name key on the formSchema
      .reach(formSchema, name)
      //we can then run validate using the value
      .validate(value)
      // if the validation is successful, we can clear the error message
      .then(() => {
        setFormErrors({
          ...formErrors, [name]: ""
        })
      })
      /* if the validation is unsuccessful, we can set the error message to the message returned from yup (that we created in our schema) */
      .catch( err => {
        setFormErrors({
          ...formErrors, [name]: err.errors[0],
        })
      })

    setFormValues({
      ...formValues,
      [name]:value //not an array. [ ] are acting like `${ }`
    })
  }
  const checkboxChange = (name, isChecked) => {
    //add checkbox input on formValues state
    setFormValues({
      ...formValues,
      [name]:isChecked
    })
  }
  const submit = () => {
    //prepare new user data how the system accepts it
    const newUser = {
      first_name: formValues.first_name.trim(),
      last_name: formValues.last_name.trim(),
      email: formValues.email.trim(),
      password: formValues.password.trim(),
      termsOfService: formValues.termsOfService,
    }
    postNewUser(newUser)
  }//end of functions for forms.js
  const displayAllUsers = () =>{
    return usersInSystem.map(user => {
       return <User details={user} />
     })
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

    {
      usersInSystem.map(user => {
        debugger
         return <User details={user} />
      })
    }
    </div>
  );
}

export default App;
