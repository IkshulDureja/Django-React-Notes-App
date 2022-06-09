import './App.css';
import Header from './components/Header';
import NotesListPage from './pages/NotesListPage';
import {HashRouter as Router, Routes, Route} from "react-router-dom";
import NotePage from './pages/NotePage';

function App() {
  return (
    <Router>
      <div className='container dark'>
        <div className="app">
          <Header/>
          <Routes>
          <Route path="/" element={<NotesListPage/>}> </Route>
          <Route path="note/:id" element={<NotePage/>}></Route>
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
