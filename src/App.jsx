import './App.css';
import { Header } from './components/core/Header.jsx';
import { StartButton } from './components/core/StartButton.jsx';
import { Body } from './components/core/Body.jsx';

import { useState } from 'react';

function App() {
  const [started, setStarted] = useState(false);

  return (
    <div className='bg-darkMain min-h-screen'>
      <Header />
      {started ? <Body /> : <StartButton onClick={() => setStarted(true)} />}
    </div>
  );
}

export default App;
