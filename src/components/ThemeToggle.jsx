// src/components/ThemeToggle.jsx
"use client";

import { useState, useEffect } from 'react';
import { Sun, Moon } from 'lucide-react';

const ThemeToggle = () => {
  const [mounted, setMounted] = useState(false);
  const [theme, setTheme] = useState(() => {
    if (typeof window !== 'undefined') {
      const savedTheme = localStorage.getItem('theme');
      return savedTheme || 'dark';
    }
    return 'dark';
  });

  // This effect runs only on the client, after the component has mounted
  useEffect(() => {
    setMounted(true);
  }, []);

  // Apply the theme to the body and save to localStorage
  useEffect(() => {
    document.body.classList.remove('light', 'dark');
    document.body.classList.add(theme);
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prevTheme => (prevTheme === 'dark' ? 'light' : 'dark'));
  };
  
  // Don't render anything until the component has mounted on the client
  if (!mounted) {
    return null;
  }

  return (
    <button onClick={toggleTheme} variant="outline" size="icon">
      {theme === 'dark' ? (
        <Sun className="h-[1.2rem] w-[1.2rem] text-accent" />
      ) : (
        <Moon className="h-[1.2rem] w-[1.2rem] text-accent" />
      )}
    </button>
  );
};

export default ThemeToggle;