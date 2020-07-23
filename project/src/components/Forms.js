import React from 'react';


export default function Forms({values, inputChange, checkboxChange, submit, disabled, errors}){
    //event handlers

    return(
        <div>
            {/* Name */}
            <label>Name&nbsp;
                <input 
                    value={}
                    onChange={}
                    name={}
                    type={}
                />
            </label>

            {/* Email */}
            <label>Email &nbsp;
                <input 
                    value={}
                    onChange={}
                    name={}
                    type={}
                />
            </label>
            {/* Password */}
            <label>Password &nbsp;
                <input 
                    value={}
                    onChange={}
                    name={}
                    type={}
                />
            </label>
            {/* Terms of Service (checkbox) */}
            <label>Terms of Service&nbsp;
                <input 
                    onChange={}
                    name={}
                    type={}
                    checked={}
                />
            </label>
            {/* A Submit button to send our form data to the server */}

        </div>
    )
}