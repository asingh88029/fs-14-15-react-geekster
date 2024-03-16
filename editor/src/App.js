import logo from './logo.svg';
import './App.css';
import '@toast-ui/editor/dist/toastui-editor.css';

import { Editor } from '@toast-ui/react-editor';
import { useEffect, useState, useRef } from 'react';

function App() {

  const paragraphRef = useRef(null)
  const [value, setValue] = useState("Hello")

  // const [name, setName] = useState("");

  // useEffect(()=>{
  //   const localStorageName = localStorage.getItem("name");
  //   if(localStorageName){
  //     setName(localStorageName)
  //   }
  // }, [])

  return (
    <>
      {/* <div className="App">
        <input type='text' value={name} onChange={(e)=>{
          setName(e.target.value);
        }}/>
        <button onClick={()=>{
          localStorage.setItem("name", name)
        }}>SAVE</button>
      </div> */}
      <p>{value}</p>
      <button onClick={()=>{
        // paragraphRef.current.innerText = "Hi"
        setValue("Hi")
      }}>Change</button>
      <button onClick={()=>{
      }}>Hide</button>
    </>
  );
}

export default App;
