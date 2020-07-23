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
                    name='termsOfService'
                    type='checkbox'
                    checked={values.termsOfService === true}
                />
            </label>
            {/* A Submit button to send our form data to the server */}
            <button disable={disabled}>Submit</button>
        </form>
    )
}