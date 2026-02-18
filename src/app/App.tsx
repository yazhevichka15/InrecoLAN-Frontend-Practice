import { BrowserRouter } from 'react-router-dom';
import { Footer } from '../widgets/Footer';

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen flex flex-col">
        <main className="flex-1"> </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;