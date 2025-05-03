// src/app/login/page.tsx
'use client';

import { useState } from 'react';
import { useAuth } from '../../../contexts/providers/AuthProvider';

export default function LoginPage() {
  const { login } = useAuth();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    try {
      await login(username, password);
    } catch {
      setError('ログインに失敗しました。ユーザー名とパスワードを確認してください。');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-sm bg-white p-6 rounded shadow"
      >
        <h1 className="text-2xl mb-4 text-center">ログイン</h1>
        {error && <p className="text-red-500 mb-2">{error}</p>}
        <label className="block mb-2">
          <span className="text-gray-700">ユーザー名</span>
          <input
            type="text"
            value={username}
            onChange={e => setUsername(e.target.value)}
            className="mt-1 block w-full border rounded px-2 py-1"
            required
          />
        </label>
        <label className="block mb-4">
          <span className="text-gray-700">パスワード</span>
          <input
            type="password"
            value={password}
            onChange={e => setPassword(e.target.value)}
            className="mt-1 block w-full border rounded px-2 py-1"
            required
          />
        </label>
        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
        >
          ログイン
        </button>
      </form>
    </div>
  );
}
