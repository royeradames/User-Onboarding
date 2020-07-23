import React from 'react';


export default function Forms({values, inputChange, checkboxChange, submit, disabled, errors}){
    //event handlers
    const onSubmit = e => {
        e.preventDefault()
        submit()
    }
    const onCheckboxChange = e => {
        const {name, checked} = e.target
        checkboxChange(name, checked)
    }

    const onInputChange = e => {
        const {name, value} = e.target
        inputChange(name, value)
    }
    return(
        <form className='form container'  onSubmit={onSubmit}>
            {/* First Name */}
            <label>First name&nbsp;
                <input 
                    value={values.first_name}
                    onChange={onInputChange}
                    name='first_name'
                    type='text'
                />
            </label>
            {/* Last Name */}
            <label>Last name&nbsp;
                <input 
                    value={values.last_name}
                    onChange={onInputChange}
                    name='last_name'
                    type='text'
                />
            </label>

            {/* Email */}
            <label>Email &nbsp;
                <input 
                    value={values.email}
                    onChange={onInputChange}
                    name='email'
                    type='email'
                />
            </label>
            {/* Password */}
            <label>Password &nbsp;
                <input 
                    value={values.password}
                    onChange={onInputChange}
                    name='password'
                    type='password'
                />
            </label>
            {/* Terms of Service (checkbox) */}
            <label>Terms of Service&nbsp;
                <input 
                    onChange={onCheckboxChange}
                    name='termsOfService'
                    type='checkbox'
                    checked={values.termsOfService === true}
                />
            </label>
            {/* A Submit button to send our form data to the server */}
            <button disabled={disabled} className='btn btn-disabled'>Submit</button>

            {/* Display errors */}
            <div className='errors'>
                <div>{errors.first_name}</div>
                <div>{errors.last_name}</div>
                <div>{errors.email}</div>
                <div>{errors.password}</div>
                <div>{errors.termsOfService}</div>
            </div>
        </form>
    )
}