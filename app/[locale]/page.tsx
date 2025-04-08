import { redirect } from 'next/navigation';
import { Locale } from '@/i18n/locale';

export default function Home({ params: { locale } }: { params: { locale: Locale } }) {
  redirect(`/${locale}/docs/getting-started`);
} 