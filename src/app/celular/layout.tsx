import Footer from "../components/Footer";
import BottomNavigation from "../components/BottomNavigation";

export default function CelularLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <div className="min-h-screen flex flex-col">
            <main className="flex-grow pb-20">
                {children}
            </main>
            <Footer isMobile={true} />
            <BottomNavigation />
        </div>
    );
}
