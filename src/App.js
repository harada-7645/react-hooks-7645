import React, { useState } from 'react'

const App = (props) => {
  const [name, setName] = useState(props.name)
  const [price, setPrice] = useState(props.price)
  const reset = () => {
    setPrice(props.price)
    setName(props.name)
  }
  return (
    <>
      <p>現在の{name}は、{price}です。</p>
      <button onClick={() => setPrice(price + 1)}>+1</button>
      <button onClick={() => setPrice(price - 1)}>+1</button>
      <button onClick={reset}>Reset</button>
      <input value={name} type='text' onChange={e =>　setName(e.target.value)}/>
    </>
  );
}

// 初期化
App.defaultProps = {
  name: 'サンプル',
  price: 1000
}
export default App;
