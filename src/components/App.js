import React, { useReducer } from 'react'

import 'bootstrap/dist/css/bootstrap.min.css';

import EventForm from './EventForm'
import Events    from './Events'
import reducer   from '../reducers'

//https://getbootstrap.com/docs/5.0/getting-started/webpack/
const App = () => {
  const [state, dispatch] = useReducer(reducer, [])
  return (
    <div className='container-fluid'>
      <EventForm state={state} dispatch={dispatch}/>
      <Events state={state} dispatch={dispatch}/>
    </div>
  );
}
export default App;
