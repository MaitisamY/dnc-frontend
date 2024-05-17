import { Outlet } from 'react-router-dom';
import { AdminProvider } from '../../hooks/useAdminProvider';

const AdminProviderWrapper = () => (
    <AdminProvider>
        <Outlet />
    </AdminProvider>
);

export default AdminProviderWrapper;