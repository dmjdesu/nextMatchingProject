// src/api/client.ts
import { Configuration, GigsApiFactory, ApplicationsApiFactory } from '@/api'; // 生成コードのパスに合わせて調整

// 認証：Bearer トークンを自動付与
const config = new Configuration({
  basePath: process.env.NEXT_PUBLIC_API_BASE_URL,
  accessToken: () => localStorage.getItem('access') ?? '',
});

// API インスタンスをエクスポート
export const gigsApi = GigsApiFactory(config);
export const applicationsApi = ApplicationsApiFactory(config);
