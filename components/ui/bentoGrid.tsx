import { cn } from "@/lib/utils";
import React, { useState } from "react";
import { GlobeDemo } from "../gridGlobe";
import Image from "next/image";
import { CompareDemo } from "../gridCompare";
import { TabsDemo } from "../gridTab";
import { BackgroundGradientAnimationDemo } from "../gridBackground";
import MagicButton from "../MagicButton";

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
        "grid grid-cols-1 md:grid-cols-6 lg:grid-cols-5 md:grid-row-7 gap-4 lg:gap-8 mx-auto ",
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
        "row-span-1 relative overflow-hidden rounded-3xl border border-white/[0.1] group/bento hover:shadow-xl transition duration-200 shadow-input dark:shadow-none justify-between flex flex-col space-y-4",
        id === 1 && "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[6vh]",
        id === 2 && "lg:col-span-2 md:col-span-3 md:row-span-2 h-[30vh] mt-10",
        id === 3 && "lg:col-span-2 md:col-span-3 md:row-span-2 ",
        id === 4 && "lg:col-span-2 md:col-span-3 md:row-span-1 w-[88%] ",
        id === 5 && "md:col-span-3 md:row-span-2 h-[90vh] ",
        id === 6 && "lg:col-span-2 md:col-span-3 md:row-span-1 ",
        className || ""
      )}
    >
      <div className={`${id === 6} flex justify-center h-full`}>
        {id === 1 && (
          <div className="w-full h-full absolute">
            <Image
              src="/images/b1.svg"
              alt="Picture of the mac"
              width={500}
              height={500}
              quality={100}
              className="w-full h-full object-cover"
            />
          </div>
        )}

        {id === 2 && <GlobeDemo />}
        {id === 3 && (
          <div>
            <Image
              src="/images/code.jpg"
              alt="code"
              width={200}
              height={200}
              className="w-full h-full object-cover absolute"
            />
          </div>
        )}
        {id === 4 && (
          <div>
            <CompareDemo />
          </div>
        )}
        {id === 5 && (
          <div className=" w-full h-full absolute bottom-0 justify-end flex items-center bg-[#202020]">
            <TabsDemo />
          </div>
        )}
        {id === 6 && (
          <div className="absolute top-0 ">
            <BackgroundGradientAnimationDemo />
            <div className="mt-5 relative">
              <div className={`absolute z-[100] -bottom-5 right-0 ${copied ? "block" : "block"}`}>
                <MagicButton
                  title={copied ? "Email Copied" : "Copy Email"}
                  icon={copied ? "���" : "���"}
                  position="left"
                  handleClick={handleCopy}
                  otherClasses="!bg-[#161A31]"
                   
                />
              </div>
            </div>
          </div>
        )}
      </div>

      <div className="group-hover/bento:translate-x-2 transition duration-200 relative md:h-full px-5 p-5 lg:p-10  flex flex-col ">
        <div className="`font-sans text-lg lg:text-3xl max-w-96 font-bold text-white z-10">
          {title}
        </div>
        <div className="font-sans font-extralight text-white">
          {description}
        </div>
      </div>
    </div>
  );
};
