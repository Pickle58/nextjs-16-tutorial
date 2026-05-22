import { buttonVariants } from "@/components/ui/button";
import { ArrowLeftIcon } from "lucide-react";
import Link from "next/link";

import { ConvexClientProvider } from "@/components/ConvexClientProvider";

export default function AuthLayout({ children }: { children: React.ReactNode }) {
    return (
        <div className="min-h-screen flex items-center justify-center">
            <div className="absolute top-5 left-5">
                <Link href="/" className={buttonVariants({ variant: "secondary" })}>
                    <ArrowLeftIcon className="w-4 h-4" />
                    Back
                </Link>
                
            </div>
            <div className="w-full max-w-md p-4 mx-auto">
                <ConvexClientProvider>
                    {children}
                </ConvexClientProvider>
            </div>
        </div>
    )
}