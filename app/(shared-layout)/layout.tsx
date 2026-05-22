import { Navbar } from '@/components/web/Navbar'
import { ConvexClientProvider } from "@/components/ConvexClientProvider";

export default function SharedLayout({ children }: { children: React.ReactNode }) {
    return (
        <ConvexClientProvider>
            <Navbar />
            {children}
        </ConvexClientProvider>
    )
}
