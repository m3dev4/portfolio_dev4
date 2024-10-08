import {cn} from "@/lib/utils";
import React, {useState} from "react";
import {GlobeDemo} from "../gridGlobe";
import Image from "next/image";
import {CompareDemo} from "../gridCompare";
import {TabsDemo} from "../gridTab";
import {BackgroundGradientAnimationDemo} from "../gridBackground";
import MagicButton from "../MagicButton";
import {HeroScrollDemo} from "@/components/heroScroll";

export const BentoGrid = ({
    className,
    children,
}: {
    className?: string;
    children?: React.ReactNode;
}) => {
    return (
        <div
            className={cn(
                "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 mx-auto",
                className
            )}
        >
            {children}
        </div>
    );
};

export const BentoGridItem = ({
    className,
    title,
    description,
    id,
}: {
    className?: string;
    id: number;
    title?: string | React.ReactNode;
    description?: string | React.ReactNode;
}) => {
    const [copied, setCopied] = useState(false);

    const handleCopy = () => {
        const text = "m3dev4@gmail.com";
        navigator.clipboard.writeText(text);
        setCopied(true);
    };

    return (
        <div
            className={cn(
                "relative overflow-hidden rounded-3xl border border-white/[0.1] group/bento hover:shadow-xl transition duration-200 shadow-input dark:shadow-none justify-between flex flex-col space-y-4",
                id === 1 && "col-span-1 sm:col-span-2 md:col-span-3 lg:col-span-3 row-span-1 md:row-span-2 min-h-[30vh]",
                id === 2 && "col-span-1 sm:col-span-2 md:col-span-3 lg:col-span-2 row-span-1 h-[30vh]",
                id === 3 && "col-span-1 sm:col-span-2 md:col-span-3 lg:col-span-2 row-span-1",
                id === 4 && "col-span-1 sm:col-span-2 md:col-span-3 lg:col-span-2 row-span-1",
                id === 5 && "col-span-1 sm:col-span-2 md:col-span-3 row-span-2",
                id === 6 && "col-span-1 sm:col-span-2 md:col-span-3 lg:col-span-2 row-span-1",
                className || ""
            )}
        >
            <div className="flex justify-center h-full">
                {id === 1 && (
                    <div className="w-full h-full absolute">
                        <Image
                            src="/images/b1.svg"
                            alt="Picture of the mac"
                            layout="fill"
                            objectFit="cover"
                            quality={100}
                        />
                    </div>
                )}

                {id === 2 && <GlobeDemo />}
                {id === 3 && (
                    <div className="w-full h-full absolute">
                        <Image
                            src="/images/codageMan.jpg"
                            alt="code"
                            layout="fill"
                            objectFit="cover"
                            className="bg-opacity-15"
                        />
                    </div>
                )}
                {id === 4 && (
                    <div className="w-full">
                        <CompareDemo />
                    </div>
                )}
                {id === 5 && (
                    <div className="w-full h-full absolute">
                        <HeroScrollDemo />
                    </div>
                )}
                {id === 6 && (
                    <div className="absolute top-0 w-full">
                        <BackgroundGradientAnimationDemo />
                        <div className="mt-5 relative">
                            <div className={`absolute z-[100] -bottom-5 right-0 ${copied ? "block" : "block"}`}>
                                <MagicButton
                                    title={copied ? "Email Copied" : "Copy Email"}
                                    icon={copied ? "✓" : "✉"}
                                    position="left"
                                    handleClick={handleCopy}
                                    otherClasses="!bg-[#161A31]"
                                />
                            </div>
                        </div>
                    </div>
                )}
            </div>

            <div className="group-hover/bento:translate-x-2 transition duration-200 relative h-full px-4 py-6 flex flex-col justify-end">
                <div className={cn("font-sans text-base sm:text-lg lg:text-xl font-bold text-white z-10",
                    id === 5 && "flex justify-center items-center relative",
                    id === 2 && "-mt-4 sm:-mt-6"
                )}>
                    {title}
                </div>
                <div className="font-sans text-sm sm:text-base font-extralight text-white mt-2">
                    {description}
                </div>
            </div>
        </div>
    );
};
