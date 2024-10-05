import React from "react";
import { BackgroundBeamsWithCollision } from "./ui/background-beams-with-collision";
import GridComponents from "./grid";


export function BackgroundBeamsWithCollisionDemo() {
  return (
    (<BackgroundBeamsWithCollision className="w-full">
      <>
        <GridComponents />
      </>
    </BackgroundBeamsWithCollision>)
  );
}
