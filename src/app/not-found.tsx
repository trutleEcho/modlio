
import Link from "next/link";
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import Image from "next/image";
import { Separator } from "@/components/ui/separator";
import {Metadata} from "next";

export const metadata: Metadata = {
    title: "Modlio",
    description: "Opps! The page you're looking for doesn't exist.",
};

export default function NotFound() {

    return (
        <section className="w-full min-h-screen flex items-center justify-center px-4 sm:px-6 md:px-8 py-10 bg-background">
            <Card className="w-full max-w-2xl text-black/80 dark:text-white/90 rounded-xl shadow-lg px-4 sm:px-6 md:px-10 py-6 md:py-10">
                <CardHeader className="text-center space-y-4">
                    <CardTitle className="flex justify-center">
                        <Image
                            className="dark:hidden w-auto max-w-[70%] sm:max-w-[250px]"
                            src="/logo.png"
                            alt="Logo"
                            width={250}
                            height={200}
                            priority
                        />
                    </CardTitle>

                    <CardDescription className="text-muted-foreground text-base sm:text-lg">
                        Oops! The page you&#39;re looking for doesn&#39;t exist.
                    </CardDescription>
                </CardHeader>

                <CardContent className="text-center">
                    <Link href="/" passHref>
                        <Button variant="outline" className="mt-2">
                            <ArrowLeft className="mr-2 h-4 w-4" />
                            Go to Home
                        </Button>
                    </Link>

                    <Separator className="mt-8" />
                </CardContent>

                <CardFooter className="text-center flex flex-col space-y-4 pt-6">
                    <p className="text-sm text-muted-foreground text-center">
                        <span className="font-semibold">Note:</span> This page is a work in progress.
                    </p>

                    {/*<Card className="w-full bg-transparent border-none text-muted-foreground text-sm">*/}
                    {/*    <CardHeader>*/}
                    {/*        <CardDescription className="flex flex-col sm:flex-row sm:items-center justify-center gap-3 text-center">*/}
                    {/*            <span className="font-semibold">Powered by:</span>*/}
                    {/*            <div className="flex items-center gap-3 justify-center">*/}
                    {/*                <Image*/}
                    {/*                    src="/CORSW_BG_LIGHT_64x64.svg"*/}
                    {/*                    alt="Corner Softwares"*/}
                    {/*                    width={32}*/}
                    {/*                    height={32}*/}
                    {/*                    className="block dark:hidden"*/}
                    {/*                />*/}
                    {/*                <Image*/}
                    {/*                    src="/CORSW_BG_DARK_64x64.svg"*/}
                    {/*                    alt="Corner Softwares"*/}
                    {/*                    width={32}*/}
                    {/*                    height={32}*/}
                    {/*                    className="hidden dark:block"*/}
                    {/*                />*/}
                    {/*                <Link*/}
                    {/*                    href="https://github.com/vercel/next.js/tree/canary/examples/with-tailwindcss"*/}
                    {/*                    target="_blank"*/}
                    {/*                    rel="noreferrer"*/}
                    {/*                >*/}
                    {/*<span className="underline font-semibold hover:text-foreground">*/}
                    {/*  Corner Softwares*/}
                    {/*</span>*/}
                    {/*                </Link>*/}
                    {/*            </div>*/}
                    {/*        </CardDescription>*/}
                    {/*    </CardHeader>*/}
                    {/*</Card>*/}
                </CardFooter>
            </Card>
        </section>
    );
}
