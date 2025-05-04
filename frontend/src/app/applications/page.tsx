'use client';

import useSWR from 'swr';
import Link from 'next/link';
import { applicationsApi } from '@/api/client';
import type { Application } from '@/api';
import { useRouter } from 'next/navigation';
import { useAuth } from '../../../contexts/providers/AuthProvider';
import { useEffect } from 'react';

export default function ApplicationsPage() {
    const { isAuthenticated } = useAuth();
    const router = useRouter();

    useEffect(() => {
        if (!isAuthenticated) {
        router.push('/login');
        }
    }, [isAuthenticated, router]);
  const currentUserId = Number(localStorage.getItem('user_id') ?? 0);

  const { data: apps, error, isLoading } = useSWR(
    currentUserId ? ['applications', currentUserId] : null,
    () => applicationsApi.applicationsList(undefined, undefined).then(res => res.data)
  );

  if (isLoading) return <div className="p-4">読み込み中…</div>;
  if (error)      return <div className="p-4 text-red-500">応募履歴を取得できませんでした。</div>;
  if (!apps || apps.length === 0) {
    return <div className="p-4 text-gray-600">まだ応募した案件はありません。</div>;
  }

  return (
    <div className="max-w-3xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-4">応募履歴</h1>
      <table className="min-w-full border">
        <thead className="bg-gray-100 text-left">
          <tr>
            <th className="px-4 py-2">案件ID</th>
            <th className="px-4 py-2">応募日時</th>
            <th className="px-4 py-2">ステータス</th>
          </tr>
        </thead>
        <tbody>
          {apps.map((app: Application) => (
            <tr key={app.id} className="border-b">
              <td className="px-4 py-2">
                <Link href={`/gigs/${app.gig}`} className="text-blue-600 hover:underline">
                  {app.gig}
                </Link>
              </td>
              <td className="px-4 py-2">{new Date(app.applied_at).toLocaleString()}</td>
              <td className="px-4 py-2">{app.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
