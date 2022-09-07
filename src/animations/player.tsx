import Lottie from "lottie-web";
import React, { useEffect, useRef } from "react";

type IClass = {
  style: any;
}

const Player = ({style}:IClass) => {
  const container = useRef<any>(null);
  useEffect(() => {
    Lottie.loadAnimation({
      container: container.current,
      renderer: "svg",
      loop: true,
      autoplay: true,
      animationData: require("../animations/player.json"),
    });
    return () => {
      Lottie.destroy();
    };
  }, []);
  return <div className={style} ref={container}></div>;
};

export default Player
