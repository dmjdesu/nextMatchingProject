'use client';

import { useState } from 'react';
import useSWR from 'swr';
import Link from 'next/link';
import { gigsApi } from '@/api/client';
import type { Gig } from '@/api'; 
import { useRouter } from 'next/navigation';
import { useAuth } from '../../../contexts/providers/AuthProvider';

export default function GigsListPage() {
  const [search, setSearch] = useState('');
  const [ordering, setOrdering] = useState('');
  const { isAuthenticated } = useAuth();
  const router = useRouter();

 if (!isAuthenticated) {
   router.push('/login');
   return null;
 }

  const { data: gigs, error, isLoading } = useSWR(
    ['gigs', search, ordering],
    () => gigsApi.gigsList(ordering || undefined, search || undefined).then(res => res.data)
  );

  if (isLoading) return <div className="p-4">読み込み中…</div>;
  if (error)      return <div className="p-4 text-red-500">エラーが発生しました</div>;

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-4">案件一覧</h1>

      <div className="flex mb-4">
        <input
          type="text"
          value={search}
          onChange={e => setSearch(e.target.value)}
          placeholder="キーワード検索"
          className="flex-1 border rounded-l px-3 py-1"
        />
        <select
          value={ordering}
          onChange={e => setOrdering(e.target.value)}
          className="border rounded-r px-2 py-1"
        >
          <option value="">並び替えなし</option>
          <option value="-created_at">新着順</option>
          <option value="created_at">古い順</option>
          <option value="-budget">予算：高い順</option>
          <option value="budget">予算：低い順</option>
          <option value="deadline">期限：早い順</option>
          <option value="-deadline">期限：遅い順</option>
        </select>
      </div>

      <table className="min-w-full border">
        <thead className="bg-gray-100 text-left">
          <tr>
            <th className="px-4 py-2">タイトル</th>
            <th className="px-4 py-2">予算</th>
            <th className="px-4 py-2">期限</th>
          </tr>
        </thead>
        <tbody>
          {gigs?.map((gig: Gig) => (
            <tr key={gig.id} className="border-b hover:bg-gray-50">
              <td className="px-4 py-2">
                <Link href={`/gigs/${gig.id}`} className="text-blue-600 hover:underline">
                  {gig.title}
                </Link>
              </td>
              <td className="px-4 py-2">¥{gig.budget}</td>
              <td className="px-4 py-2">{new Date(gig.deadline).toLocaleDateString()}</td>
            </tr>
          ))}
          {gigs && gigs.length === 0 && (
            <tr>
              <td colSpan={3} className="px-4 py-2 text-center text-gray-500">
                案件が見つかりませんでした。
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}
