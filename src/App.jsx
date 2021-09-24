import './App.css';
import Review from './components/Review';

function App() {
  return (
    <main className="App">
      <div className='container'>
        <section className="title">
          <h2>Our Reviews</h2>
          <div className="underline"></div>
          <Review />
        </section>
      </div>
    </main>
  );
}

export default App;
