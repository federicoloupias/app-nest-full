import './App.css';
import NewsList from './components/NewsList';
import NavBar from './components/NavBar'

function App() {
  return (
    <div className="HnApp">
      <NavBar />
      <NewsList />
    </div>
  );
}

export default App;
