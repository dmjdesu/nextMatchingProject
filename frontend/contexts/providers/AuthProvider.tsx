// src/app/providers/AuthProvider.tsx
'use client';

import { createContext, useState, useContext, useEffect, ReactNode } from 'react';
import { useRouter } from 'next/navigation';
import { Configuration, AuthApiFactory } from '@/api';  // 生成済みクライアントのパスに合わせて

interface AuthContextType {
  isAuthenticated: boolean;
  login: (username: string, password: string) => Promise<void>;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: ReactNode }) {
  const router = useRouter();
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  // マウント時に localStorage のトークンをチェック
  useEffect(() => {
    const token = localStorage.getItem('access');
    if (token) setIsAuthenticated(true);
  }, []);

  // ログイン関数
  const login = async (username: string, password: string) => {
    const config = new Configuration({
      basePath: process.env.NEXT_PUBLIC_API_BASE_URL,
    });
    const authApi = AuthApiFactory(config);
    const res = await authApi
      .authTokenCreate({ username, password, access: '', refresh: '' });
    const { access, refresh } = res.data;
    localStorage.setItem('access', access);
    localStorage.setItem('refresh', refresh);
    setIsAuthenticated(true);
    router.push('/gigs');  // ログイン後に一覧へリダイレクト
  };

  // ログアウト関数
  const logout = () => {
    localStorage.removeItem('access');
    localStorage.removeItem('refresh');
    setIsAuthenticated(false);
    router.push('/login');
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

// Hook で使いやすく
export function useAuth() {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error('useAuth must be used inside AuthProvider');
  return ctx;
}
