import React from 'react';
import { useState } from 'react';

export default function UserForm() {
    const [firstName, setfirstName] = useState('');
    const [lastName, setlastName] = useState('');

    return(
        <>
            <form>
                <div>
                    <label>First Name</label>
                    <input 
                    value={firstName} 
                    onChange={e =>setfirstName(e.target.value)} 
                    type='text' />
                </div>

                <div>
                    <label>Last Name</label>
                    <input 
                    value={lastName} 
                    onChange={e =>setlastName(e.target.value)}
                    type='text' />
                </div>

                <button>Submit</button>
            </form>
        </>
    )
}