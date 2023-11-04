import React, {useState} from 'react'

function EditBudget(props) {
    const [value, setValue] = useState(props.budget)
    return (
        <>
        
        <input required='required' className='form-control mr-3' type='number' 
            id='name' value={value} onChange={(event) => setValue(event.target.value)}
        ></input>

        <button type='button' className='btn btn-primary'
            onClick={() => props.handleSaveClick(value)}>Save</button>
    
    </>
    )
}

export default EditBudget