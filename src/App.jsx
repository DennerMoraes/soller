import Home from '../src/pages/Home.jsx';
import '../src/styles/global.scss';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header/Header.jsx';
import Footer from './components/Footer/Footer.jsx';

function App() {
  return (
    <Router>
      <div className="App">
      <Header />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </main>
      </div>
      <Footer footerDesc={'@ 2023 Soller, Inc. All rights reserved.'}/>
    </Router>
  );
}

export default App;
