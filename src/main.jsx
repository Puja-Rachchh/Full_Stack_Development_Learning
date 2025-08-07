import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
//import './hello.css'
import './index.css'

import App from './App.jsx'
import EventDemo from './EventDemo.jsx'
import Counter from './counter.jsx'
import CounterNew from './CounterNew.jsx'
import Sum from './Sum.jsx'
import HookDemo from './HookDemo.jsx'
import Sum2 from './sum2.jsx'
import RegisterHooks from './RegisterHooks.jsx'
import RegisterClass from './RegisterClass.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App/>
  </StrictMode>,
)
