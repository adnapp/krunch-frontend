import NavBar from './NavBar';
import MainContainer from './MainContainer';
import Footer from './Footer';
import { LoginProvider } from './Login';

function App() {
  return (
    <LoginProvider>
      <div className="App">
        <NavBar />
        <MainContainer />
        <Footer />
      </div>
    </LoginProvider>
  );
}

export default App;
