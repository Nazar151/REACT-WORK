import React, {useState} from 'react'


// inputs (for each create 2 versions- class based and functional based)

// create controlled and uncontrolled select component
// create controlled and uncontrolled checkbox
// create controlled and uncontrolled radio

export const Chapter1 = () => {
    const options = [
        { value: 'blues', label: 'Blues' },
        { value: 'rock', label: 'Rock' },
        { value: 'jazz', label: 'Jazz' },
        { value: 'orchestra', label: 'Orchestra' }
    ];



    return(
        <div>
            <h2>this is select</h2>
            <select options = {options}/>

        </div>
    )
}