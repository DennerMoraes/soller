import '../src/styles/global.scss';
import { BrowserRouter as Router } from 'react-router-dom';
import Header from './components/layout/Header/Header.jsx';
import Footer from './components/layout/Footer/Footer.jsx';
import RoutesComponent from './routes/RoutesComponent.jsx';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <main>
          <RoutesComponent />
        </main>
      </div>
      <Footer footerDesc={'@ 2023 Soller, Inc. All rights reserved.'} />
    </Router>
  );
}

export default App;