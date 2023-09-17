import './App.css';
import Card from './components/Card/Card';

function App() {
  return (
    <div className="App">
    <Card title="300" price="300" speed="10"></Card>
    <Card title="450" price="450" speed="50"></Card>
    <Card title="550" price="550" speed="100" isTop></Card>
    <Card title="1000" price="1000" speed="1000"></Card>
    </div>
  );
}

export default App;
