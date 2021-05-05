// useState: https://qiita.com/seira/items/f063e262b1d57d7e78b4
// useEffect: https://qiita.com/seira/items/e62890f11e91f6b9653f
import React, {useState, useEffect} from 'react';
import { Counter } from './features/counter/Counter';
import './App.css';

// React.FC(React.FunctionComponent):型引数で渡した型と共にchildren?: React.ReactNodeというpropsを受け取ることができます。
// children: 受け取った子要素を出力する
const App: React.FC = () => {
  // string型とnumber型を選択する場合 | で区切る
  const [status, setStatus] = useState<string | number>("text");
  // eventオブジェクトのデータ型(input)
  const [input, setInput] = useState("");
  const [counter,setCounter] = useState(0);

  // eventオブジェクトを受け取ってinput stateを更新
  const onChangeHandler = (e:React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  };
  useEffect(() => {
    // useEffectが実行されているか確かめる為のlog
    console.log("useEffect in App invoked!");
    // document.title(ブラウザのタイトル)
    document.title = `current value is ${counter}`;
    // [counter]でuseEffectの処理をcounterに限定する事が出来る
    // []が空の場合は１度だけ実行される
  },[counter]);
  return (
    <div className="App">
      <header className="App-header">
        {/* statusを表示（text), クリックするとstatusが更新される(1) */}
        <h4>{status}</h4>
        <button onClick={() => setStatus(1)}>Button</button>
        {/* フォームに入力するとinput stateが更新されて即座に更新される */}
        <h4>{input}</h4>
        <input type="text" value={input} onChange={onChangeHandler}/>
        {/* Incrementをクリックする度にstateが増加していく */}
        <h4>{counter}</h4>
        <button onClick={()=>setCounter((preCounter)=>preCounter+1)}>
          Increment
        </button>
        <Counter />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <span>
          <span>Learn </span>
          <a
            className="App-link"
            href="https://reactjs.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            React
          </a>
          <span>, </span>
          <a
            className="App-link"
            href="https://redux.js.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Redux
          </a>
          <span>, </span>
          <a
            className="App-link"
            href="https://redux-toolkit.js.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Redux Toolkit
          </a>
          ,<span> and </span>
          <a
            className="App-link"
            href="https://react-redux.js.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            React Redux
          </a>
        </span>
      </header>
    </div>
  );
}

export default App;
