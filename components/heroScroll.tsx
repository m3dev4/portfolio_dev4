"use client";
import React from "react";
import {ContainerScroll} from "./ui/container-scroll-animation";
import Image from "next/image";

export function HeroScrollDemo() {
    const srcImg = 'https://assets.website-files.com/63493089c13c20961b45f04f/634be407a7ad04301074717e_hero.webp'
    return (
        <div className="flex flex-col overflow-hidden">
            <ContainerScroll>
                <Image
                    src={srcImg}
                    alt="hero"
                    height={720}
                    width={1400}
                    className="mx-auto w-full h-full rounded-2xl object-cover object-left-top"
                    draggable={false}
                />
            </ContainerScroll>
        </div>
    );
}
