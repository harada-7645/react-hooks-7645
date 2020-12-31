import React, { useState, useReducer } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import reducer from '../reducers'

//https://getbootstrap.com/docs/5.0/getting-started/webpack/
const App = () => {
  // 第2引数 初期化
  // 第3引数 初期化時に実行したい関数を渡すことができる
  const [state, dispatch] = useReducer(reducer, [])
  const [title, setTitle] = useState('')
  const [body,  setBody] = useState('')
  const addEvent = e => {
    e.preventDefault()
    dispatch({
      type: 'CREATE_EVENT',
      title,
      body
    })
    setTitle('')
    setBody('')
  }
  return (
    <div className='container-fluid'>
      <h4>イベント作成フォーム</h4>
      <form>
        <div className='form-group'>
          <label htmlFor='formEventTitle'>タイトル</label>
          <input className='form-control' id='formEventTitle' onChange={e => setTitle(e.target.value)}/>
        </div>
        <div className='form-group'>
          <label htmlFor='formEventBody'>ボディー</label>
          <textarea className='form-control' id='formEventBody' onChange={e => setBody(e.target.value)} />
        </div>
        <div>
          <button className='btn btn-primary' onClick={addEvent}>イベントを作成する</button>
          <button className='btn btn-danger'>全てのイベントを削除する</button>
        </div>
      </form>
      <h4>イベント一覧</h4>
      <table className='table table-hover'>
        <thead>
          <tr>
            <th>ID</th>
            <th>タイトル</th>
            <th>ボディー</th>
          </tr>
        </thead>
        <tbody>
        </tbody>
      </table>
    </div>
  );
}
export default App;
