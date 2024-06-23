import React from 'react';
import './App.css';
import Navigation from "./Components/Navigation/Navigation";
import Header from "./Components/Header/Header";
import Main from "./Components/Main/Main";
import Aside from "./Components/Aside/Aside";
import Footer from "./Components/Footer/Footer";

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    // Update state so the next render will show the fallback UI.
    return { hasError: true };
  }

  render() {
    if (this.state.hasError) {
      // You can render any custom fallback UI
      return <h1>Something went wrong.</h1>;
    }

    return this.props.children; 
  }
}

function App() {
  return (
    <div className="App">
        <Header />
        <div className="grid_container">
          <ErrorBoundary>
            <Aside />
          </ErrorBoundary>
          <ErrorBoundary>
            <Main />
          </ErrorBoundary>
          <ErrorBoundary>
            <Navigation />
          </ErrorBoundary>
        </div>
        <ErrorBoundary>
          <Footer />
        </ErrorBoundary>
        </div>
  );
}

export default App;
