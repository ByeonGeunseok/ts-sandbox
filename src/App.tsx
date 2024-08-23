import './App.css';
import ActionButton from './components/ActionButton';
import { JustUtil } from './utils/JustUtil';

function App() {
  return (
    <div className="App">
          <ActionButton label= 'first' func={() => {
            JustUtil();
          }}/>
          <ActionButton label= 'segundo'/>
          <ActionButton label= '세번째'/>
          <ActionButton label= '四番目'/>
    </div>
  );
}

export default App;
