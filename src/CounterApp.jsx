import React, { useState } from 'react'
import PropTypes from 'prop-types'

//rafc atajo mpara crear un componente

export const CounterApp = ({ value }) => {


    const [counter, setCounter] = useState(value);

    const handleReset = () => [
        setCounter(value)
    ]
    const handleLess = () => {
        setCounter(counter - 1)
    }
    const handleAdd = () => {
        setCounter(counter + 1)
    }
    return (
        <>
            <h1>CounterApp</h1>
            <h2>{counter}</h2>

            <button onClick={handleAdd}>
                +1
            </button>
            <button onClick={handleLess}>
                -1
            </button>
            <button onClick={handleReset}>
                reset
            </button>
        </>

    )
}

CounterApp.propTypes = {
    value: PropTypes.number
}

