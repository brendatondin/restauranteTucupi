import React from 'react'

const FormEdit = ({handleChange, value}) => {
    return (
        <form>
            <input type='text' value={value.nomeCliente} onChange={({target}) => handleChange('nomeCliente', target)}/>
            <input type='text' value={value.data} onChange={({target}) => handleChange('data', target)}/>
            <input type='text' value={value.hora} onChange={({target}) => handleChange('hora', target)}/>
            <input type='text' value={value.lugares} onChange={({target}) => handleChange('lugares', target)}/>

        </form>
    )
}

export default FormEdit