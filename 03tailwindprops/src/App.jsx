import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from './assets/vite.svg';   // or '/vite.svg' if in public
import './App.css';
import Card from '../components/Card';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1 className="bg-green-400 text-black p-4 rounded-xl mb-4">
        Tailwind test
      </h1>
      <Card username="coffee with you" btnText="click me" />
      <Card username="Baby Gurlllll" />
    </>
  );
}

export default App;
