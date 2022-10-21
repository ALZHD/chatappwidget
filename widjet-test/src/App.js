import './App.css';
import Tgwidget from './components/chattappwidget/tgwidget';

function App() {
  return (
    <div className="App">
      <div className="tg_line">Telegram</div>
      <div className="App_tgwidget">
        <Tgwidget />
      </div>
    </div>
  );
}

export default App;
