//App.js
import {useState} from "react";
import ListOfPlayers from './components/ListOfPlayers';
import IndianPlayers from './components/IndianPlayers';

function App() {
  const [flag,setFlag] = useState(true);


  return (
    <div className="App">
      <header className="App-header">
        <button onClick={()=>setFlag(!flag)}>flag={flag?"true":"false"}</button>
        {flag ? <ListOfPlayers /> : <IndianPlayers />}
      </header>
    </div>
  );
}

export default App;
