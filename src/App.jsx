import { BrowserRouter } from 'react-router-dom';

import { About, Art, Blog, Contact, Exhibition, Fashion, Hero, History, Influence, Loader, Navbar } from './components';

function App() {
  return (
    <BrowserRouter>
      <div className="relative z-0 bg-primary">
        <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
          <Navbar />
          <Hero />
        </div>
      </div>
    </BrowserRouter>
  )
}

export default App
