import React, { useEffect, useState } from 'react'

const App = (props) => {
  const [state, setState] = useState(props)
  const { name, price } = state

  // 第一引数に関数 
  // レンダリングの後で実行される = ComponentDidMountと似ている
  useEffect(() => {
    console.log('This is licke componentDidMount or componentDidUpdate.')
  })

  // 最初のレンダリングの時だけに限定
  // useEffectはコンポーネントの中に何個でもかける
  // 第２引数に空文字をあげるだけでcomponentDidMountとほぼ同じになる
  useEffect(() => {
    console.log('This is licke componentDidMount.')
  }, [])


  // 特定の状態が変更した時だけ呼ばれるようにする
  useEffect(() => {
    console.log('This callback is for name only.')
  }, [name])

  return (
    <>
      <p>現在の{name}は、{price}です。</p>
      <button onClick={() => setState({...state, price: price + 1})}>+1</button>
      <button onClick={() => setState({...state, price: price - 1})}>-1</button>
      <button onClick={() => setState(props)}>Reset</button> {/*状態が変更しない場合は、更新されない*/}
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
