import './App.css';
import ActionButton from './components/ActionButton';

function App() {
  function alertFunc() {
    alert('run!');
  }

  return (
    <div className="App">
          <ActionButton label= 'first' func= {alertFunc}/>
          <ActionButton label= 'segundo'/>
          <ActionButton label= '세번째'/>
          <ActionButton label= '四番目'/>
    </div>
  );
}

export default App;
