'use client';

/**
 * @file components/layout/ThemeContext.tsx
 * @description React context & hook to synchronize and manage themes (light/dark).
 * Handles user preferences and system settings reactively with SSR safety.
 */

import React, { createContext, useContext, useEffect, useState } from 'react';

export type Theme = 'light' | 'dark';

interface ThemeContextType {
  theme: Theme;
  setTheme: (theme: Theme) => void;
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  // Use 'dark' as default fallback for Server Side Rendering
  const [theme, setThemeState] = useState<Theme>('dark');
  const [mounted, setMounted] = useState(false);

  // Sync state with DOM on initial load
  useEffect(() => {
    try {
      const savedTheme = localStorage.getItem('theme') as Theme | null;
      const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      const initialTheme = savedTheme || (systemPrefersDark ? 'dark' : 'light');
      
      const root = document.documentElement;
      root.classList.remove('light', 'dark');
      root.classList.add(initialTheme);

      // Avoid synchronous setState warning inside effect body by deferring execution
      setTimeout(() => {
        setThemeState(initialTheme);
        setMounted(true);
      }, 0);
    } catch (error) {
      console.warn('Failed to initialize theme from localStorage:', error);
      setTimeout(() => {
        setMounted(true);
      }, 0);
    }
  }, []);

  const setTheme = (newTheme: Theme) => {
    setThemeState(newTheme);
    try {
      const root = document.documentElement;
      root.classList.remove('light', 'dark');
      root.classList.add(newTheme);
      localStorage.setItem('theme', newTheme);
    } catch (error) {
      console.warn('Failed to save theme choice:', error);
    }
  };

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  return (
    <ThemeContext.Provider value={{ theme, setTheme, toggleTheme }}>
      {/* 
        This prevents hydration mismatch if the user is in 'light' mode.
        We wrap it in a custom check, but maintain layout identical so that 
        content size/layout shift doesn't occur.
      */}
      <div style={{ visibility: mounted ? 'visible' : 'hidden' }} className="contents">
        {children}
      </div>
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
}
