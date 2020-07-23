import React from 'react';


export default function Forms({values, inputChange, checkboxChange, submit, disabled, errors}){
    //event handlers
    const onSubmit = e => {
        e.preventDefault()
        submit()
    }
    const onCheckboxChange = e => {

    }

    const onInputChange = e => {

    }
    return(
        <div>
            {/* Name */}
            <label>Name&nbsp;
                <input 
                    value={values.name}
                    onChange={onInputChange}
                    name='name'
                    type='text'
                />
            </label>

            {/* Email */}
            <label>Email &nbsp;
                <input 
                    value={values.email}
                    onChange={onInputChange}
                    name='email'
                    type='text'
                />
            </label>
            {/* Password */}
            <label>Password &nbsp;
                <input 
                    value={values.password}
                    onChange={onInputChange}
                    name='password'
                    type='text'
                />
            </label>
            {/* Terms of Service (checkbox) */}
            <label>Terms of Service&nbsp;
                <input 
                    onChange={onCheckboxChange}
                    name='Terms of Service'
                    type='checkbox'
                    checked={values.termsOfService === true}
                />
            </label>
            {/* A Submit button to send our form data to the server */}
            <button disable={disabled}>Submit</button>
        </div>
    )
}