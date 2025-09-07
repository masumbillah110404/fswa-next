import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';
import AdminLoginForm from './AdminLoginForm';

export default async function AdminLoginPage() {
  const cookie = await cookies()
  const session = cookie.get('adminSession');

  if (session && session.value === 'true') {
    redirect('/admin/dashboard');
  }

  return <AdminLoginForm />;
}
