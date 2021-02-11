import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Header } from './components/header/Header';
// import { Home } from './components/home/Home';
import { Board } from './components/board/Board';
import './index.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Route exact path="/" component={Board} />
      </div>
    </Router>
  );
}

export default App;
