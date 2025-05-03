'use client';

import { useParams } from 'next/navigation';
import useSWR from 'swr';
import { useState } from 'react';
import { gigsApi, applicationsApi } from '@/api/client';
import type { Gig } from '@/api';
import { useRouter } from 'next/navigation';
import { useAuth } from '../../../../contexts/providers/AuthProvider';

export default function GigDetailPage() {
  const { id } = useParams();
  const gigId = Number(id);
  const { isAuthenticated } = useAuth();
  const router = useRouter();

  if (!isAuthenticated) {
   router.push('/login');
   return null;
 }

  const { data: gig, error, isLoading } = useSWR<Gig>(
    gigId ? ['gig', gigId] : null,
    () => gigsApi.gigsRetrieve(gigId).then(res => res.data)
  );

  const [applying, setApplying] = useState(false);
  const [applied, setApplied]   = useState(false);
  const [errMsg, setErrMsg]     = useState('');

  const handleApply = async () => {
    setErrMsg('');
    setApplying(true);
    try {
      await applicationsApi.applicationsCreate({ gig: gigId, user: 0, applied_at: '', status: '' })
        .then(res => res.data);
      setApplied(true);
    } catch (e: any) {
      setErrMsg('応募に失敗しました。');
    } finally {
      setApplying(false);
    }
  };

  if (isLoading) return <div className="p-4">読み込み中…</div>;
  if (error)      return <div className="p-4 text-red-500">案件情報を取得できませんでした。</div>;
  if (!gig)      return <div className="p-4 text-gray-500">案件が存在しません。</div>;

  return (
    <div className="max-w-2xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-4">{gig.title}</h1>
      <p className="mb-4 whitespace-pre-line">{gig.description}</p>
      <p className="mb-2"><strong>予算：</strong>¥{gig.budget}</p>
      <p className="mb-2"><strong>期限：</strong>{new Date(gig.deadline).toLocaleDateString()}</p>
      <p className="mb-6 text-sm text-gray-500">
        公開日：{new Date(gig.created_at).toLocaleDateString()}
      </p>

      {errMsg && <p className="text-red-500 mb-4">{errMsg}</p>}
      <button
        onClick={handleApply}
        disabled={applying || applied}
        className={`px-4 py-2 rounded text-white ${
          applying || applied
            ? 'bg-gray-400 cursor-not-allowed'
            : 'bg-blue-600 hover:bg-blue-700'
        }`}
      >
        {applying ? '応募中…' : applied ? '応募済み' : '応募する'}
      </button>
    </div>
  );
}
