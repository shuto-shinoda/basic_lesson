// rafce(React Componentのスニペット): reactのアロー関数のfunctional Component
import React, {useState, useEffect} from 'react';

const CleanUp: React.FC = () => {
  const [currentNum, setCurrentNum] = useState(0);
  const incrementNum = () =>{
    console.log("MOuse event invoked !");
    // CurrentNumを+1する処理
    setCurrentNum((preNumber)=>preNumber+1);
  };

  useEffect(() => {
    console.log("useEffect in CleanUp invoked!");
    // addEventListener: userがマウスをクリックした時に実行される関数を登録できる
    // incrementNum: クリックする度に関数が実行される
    window.addEventListener("mousedown", incrementNum);
    // Cleanup関数実行（countupコンポーネントがアンマウントされる時に呼び出せれる関数を追加できる）
    return() => {
      console.log("Cleanup invoked !");
      window.removeEventListener("mousedown", incrementNum);
    };
  },[])
  return <div>{currentNum}</div>
};

export default CleanUp
