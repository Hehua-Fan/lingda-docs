import { redirect } from 'next/navigation';

export default function RootPage() {
  redirect('/zh/docs/getting-started');
  
  // This won't be shown due to the redirect
  return (
      <div className="h-screen">
          Hello World!
      </div>
  );
}