import React, { useRef, useEffect, useCallback, useState } from 'react';
import { 
  DrawingStyled,
  Canvas,
} from './DrawingStyled';
import useCanvas from '../../hooks/useCanvas';


function resizeCanvas(canvas) {
  const { width, height } = canvas.getBoundingClientRect();

  if(canvas.width !== width || canvas.height !== height) {
    const { devicePixelRatio: ratio = 1 } = window;
    const context = canvas.getContext('2d');
    canvas.width = width * ratio;
    canvas.height = height * ratio;
    context.scale(ratio, ratio);
    return true;
  }

  return false;
}

const Drawing = (props) => {

  const canvasRef = useRef(null);
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);
  const [isPainting, setIsPainting] = useState(false);

  const startPaint = useCallback((event: MouseEvent) => {
    setIsPainting(true);
    let coordinates = getCoordinates(event);
    setX(coordinates[0]);
    setY(coordinates[1]);
  }, []);

  const paint = useCallback(
    (event: MouseEvent) => {
      if (isPainting) {
        let [newX, newY] = getCoordinates(event);
        drawLine(x, y, newX, newY);
        setX(newX);
        setY(newY);
      }
    },
    [isPainting, x, y]
  );

  const exitPaint = useCallback(() => {
    setIsPainting(false);
  }, []);

  useEffect(() => {
    console.log("mount");
    const canvas: HTMLCanvasElement = canvasRef.current;
    canvas.addEventListener("mousedown", startPaint);
    canvas.addEventListener("mousemove", paint);
    canvas.addEventListener("mouseup", exitPaint);
    canvas.addEventListener("mouseleave", exitPaint);
    return () => {
      console.log("umount");
      canvas.removeEventListener("mousedown", startPaint);
      canvas.removeEventListener("mousemove", paint);
      canvas.removeEventListener("mouseup", exitPaint);
      canvas.removeEventListener("mouseleave", exitPaint);
    };
  }, [startPaint, exitPaint, paint]);

  const getCoordinates = (event: MouseEvent) => {
    if (["mousedown", "mousemove"].includes(event.type)) {
      const canvas: HTMLCanvasElement = canvasRef.current;
      return [event.pageX - canvas.offsetLeft, event.pageY - canvas.offsetTop];
    }
  };

  const drawLine = (firstX, firstY, secondX, secondY) => {
    const canvas: HTMLCanvasElement = canvasRef.current;
    const context = canvas.getContext("2d");
    context.strokeStyle = "red";
    context.lineJoin = "round";
    context.lineWidth = 5;

    context.beginPath();
    context.moveTo(secondX, secondY);
    context.lineTo(firstX, firstY);
    context.closePath();

    context.stroke();
  };


  return (
    <DrawingStyled>
      <Canvas
        ref={canvasRef} 
        width={window.innerWidth} 
        height={window.innerHeight}
      />
    </DrawingStyled>
  );
}

export default Drawing;