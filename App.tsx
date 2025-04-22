import React, { useState } from 'react';
import Header from './components/Header';
import WifiCard from './components/WifiCard';
import ThemeSwitcher from './components/ThemeSwitcher';
import { ThemeProvider } from './contexts/ThemeContext';

function App() {
  const [networkName, setNetworkName] = useState('');
  const [password, setPassword] = useState('');
  
  return (
    <ThemeProvider>
      <div className="min-h-screen flex flex-col bg-accent transition-colors duration-300">
        <Header />
        <main className="flex-1 container mx-auto p-4 flex flex-col items-center justify-center">
          <div className="max-w-3xl w-full animate-slide-up">
            <div className="mb-6 flex justify-end">
              <ThemeSwitcher />
            </div>
            <WifiCard 
              networkName={networkName}
              password={password}
              onNetworkNameChange={setNetworkName}
              onPasswordChange={setPassword}
            />
          </div>
        </main>
        <footer className="py-4 text-center text-primary-light text-sm">
          © {new Date().getFullYear()} WiFi Card Generator. All rights reserved.
        </footer>
      </div>
    </ThemeProvider>
  );
}

export default App;