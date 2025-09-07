// Protects all /admin/* routes
import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';
import AdminWrapper from './AdminWrapper';

export default async function AdminLayout({ children }) {
  const cookie = await cookies()
  const session = cookie.get('adminSession');
  if (!session || session.value !== 'true') {
    redirect('/admin-login'); 
  }

  return <AdminWrapper>{children}</AdminWrapper>;
}
