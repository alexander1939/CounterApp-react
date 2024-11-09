import React from 'react'
import ReactDOM from 'react-dom/client'
import { FirstApp } from './firstApp'
import { CounterApp } from './CounterApp'

import './styles.css'

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <FirstApp title='Titulo' subtitle='Subtitulo' />
    </React.StrictMode>

);
