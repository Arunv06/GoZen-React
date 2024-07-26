import './App.css';
import ErrorBoundary from './components/ErrorBoundary';
import Home from './components/Home';

function App() {
  return (
    <div className="App">
      <ErrorBoundary>
    <Home heroName='TONY' />
    </ErrorBoundary>
    
    <ErrorBoundary>
    <Home heroName='Thor' />
    </ErrorBoundary>

    <ErrorBoundary>
    <Home heroName='joker' />
    </ErrorBoundary>


    </div>
  );
}

export default App;
