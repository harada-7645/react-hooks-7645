import React, { useState } from 'react'

const App = (props) => {
  const [state, setState] = useState(props)
  const { name, price } = state
  return (
    <>
      <p>現在の{name}は、{price}です。</p>
      <button onClick={() => setState({...state, price: price + 1})}>+1</button>
      <button onClick={() => setState({...state, price: price - 1})}>-1</button>
      <button onClick={() => setState(props)}>Reset</button>
      <input value={name} type='text' onChange={e => setState({...state, name: e.target.value})}/>
    </>
  );
}

// 初期化
App.defaultProps = {
  name: 'サンプル',
  price: 1000
}
export default App;
