import './App.css';
import Button from './component/Button';
import Card from './component/Card';

import AnkitImage from './assest/image/ankit.jpeg'

function App() {

  console.log("test", AnkitImage)

  const students = [{name : "Ankit Singh", profile : AnkitImage}]

  return (
    <div>
      <h2>I am React</h2>
      {students.map((e, index)=><Card imageSRC={e.profile} name={e.name} key={index}/>)}
    </div>
  );
}

export default App;
