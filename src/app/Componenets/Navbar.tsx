import React from 'react';
import Link from 'next/link';

function App() {
  return (
      <div>
        <nav className="bg-gray-800 p-4">
          <ul className="max-w-7xl mx-auto flex justify-between items-center text-white">
          <div className="text-4xl font-bold">
          <Link href="/">Savourly</Link>
        </div>
            <li><Link className="a" href="/">Home</Link></li>
            <li><Link className="a" href="/About">About</Link></li>
            <li><Link className="a" href="/Contact">Contact</Link></li>
          </ul>
        </nav>
      </div>
  );
}

export default App;
