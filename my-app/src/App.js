import React, {useState} from "react"
import './App.css';

function App() {
  const [isLogin, setUser] = useState(false)
  const onClickHandler = () => {
  //   if (isLogin === false){
  //     setUser(true)
  //   } else {
  //     setUser(false)
  //   }
  setUser(!isLogin)
  }

  return (
    <div className="App">
      {isLogin === true ? "pham duc thien" : "login"}
      <button onClick={onClickHandler}>{isLogin === true ? "Logut" : "Login"}</button>
    </div>
  );
}

export default App;
