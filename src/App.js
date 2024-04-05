import {Routes,Route} from 'react-router-dom';

import Home from './Pages/Home.jsx'
import Header from './components/Header.jsx';
import Details from './Pages/Details.jsx';


function App() {
  
  return (
    <div className="App">
      <header className="App-header">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/movie/:id" element={<Details />} />
        </Routes>
      </header>
    </div>
  );
}

export default App;
