import { createNoise3D } from "simplex-noise";
import { ReactElement, useEffect, useRef, useState } from "react";

const Background = () => {
  const [ASCII, setASCII] = useState<ReactElement[]>([]);

  const noise = createNoise3D();
  const requestRef = useRef(0);

  const grayScale =
    '$@B%8&WM#*oahkbdpqwmZO0QLCJUYXzcvunxrjft/|()1{}[]?-_+~i!lI;:,"^`. ';

  let time = 0;
  let forward = true;

  const draw = () => {
    if (time === 0) forward = true;
    else if (time === 1) forward = false;

    if (forward) time += 0.005;
    else time -= 0.005;

    for (let y = 0; y < window.innerHeight / 20; y++) {
      let row: string[] = [];

      for (let x = 0; x < window.innerWidth / 10; x++) {
        const value = noise(x / 50, y / 50, time);
        const char = grayScale.charAt(Math.floor(value * 70));

        if (char === "") {
          row = [...row, "\u00A0"];
        } else {
          row = [...row, char];
        }
      }

      setASCII((state) => [...state, <p>{...row}</p>]);
    }
  };

  const tick = () => {
    setASCII([]);
    draw();

    requestRef.current = requestAnimationFrame(tick);
  };

  useEffect(() => {
    requestRef.current = requestAnimationFrame(tick);

    return () => cancelAnimationFrame(requestRef.current);
  }, []);

  return (
    <div>
      <p></p>
      <div className="ASCII">
        {ASCII.map((row) => (
          <>{row}</>
        ))}
      </div>
    </div>
  );
};

export default Background;
