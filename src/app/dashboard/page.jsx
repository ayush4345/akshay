import Dashboard from '@/components/Dashboard';

export const metadata = {
    title: 'Dashboard - The only Poker guide you need',
    description: '',
    openGraph: {
        title: 'Dashboard - The only Poker guide you need',
        description: '',
        type: 'website',
        // images: [
        //     {
        //         url: 'https://yourdomain.com/images/dashboard-og-image.jpg',
        //         width: 1200,
        //         height: 630,
        //         alt: 'Poker Dashboard',
        //     },
        // ],
    },
};

export default function DashboardPage() {
    return (
        <Dashboard />
    );
}