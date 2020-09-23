import React, { useRef, useEffect, useCallback, useState } from 'react';
import { 
  DrawingStyled,
  Canvas,
  ButtonsContainer,
  Button,
  ColorInput
} from './DrawingStyled';
import { useWindowSize } from '../../hooks/useWindowSize';
import { BsBrush } from "react-icons/bs";
import { RiEraserFill, RiDeleteBin7Fill, RiArrowGoBackLine, RiSave3Fill } from "react-icons/ri";

const Drawing = (props) => {

  /*initial parameters for app*/
  const initialSize = 10;
  const initialColor = 'black';
  const initialDivider = 1.5;

  const canvasRef = useRef(null);
  const inputColorRef = useRef(null);
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);
  const [isPainting, setIsPainting] = useState(false);
  const [color, setColor] = useState(initialColor);
  const [size, setSize] = useState(initialSize);
  const [points, setPoints] = useState([]);
  const [width, height] = useWindowSize(initialDivider);
  const [canvasImg, setCanvasImg] = useState(null);

  const drawLine = (x1, y1, x2, y2) => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    ctx.beginPath();
    ctx.moveTo(x1, y1);
    ctx.lineTo(x2, y2);
    ctx.strokeStyle = color;
    ctx.lineWidth = size;
    ctx.stroke();
  };

  const drawCircle = (x, y) => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    ctx.beginPath();
    ctx.arc(x, y, size / 2, 0, Math.PI * 2);
    ctx.fillStyle = color;
    ctx.fill();
  };

  const startPaint = useCallback((event) => {
    setIsPainting(true);
    let newX = event.offsetX;
    let newY = event.offsetY;
    setX(newX);
    setY(newY);
    setPoints(points => [...points, {x: newX, y: newY, size: size, color: color, mode: "begin"}]);
  }, [color, size]);

  const paint = useCallback(
    (event) => {
      if(isPainting) {
        const canvas = canvasRef.current;
        let newX = event.offsetX;
        let newY = event.offsetY;
        drawCircle(newX, newY);
        drawLine(x, y, newX, newY);
        setX(newX);
        setY(newY);
        setPoints(points => [...points, {x: newX, y: newY, size: size, color: color, mode: "draw"}]);
        setCanvasImg(canvas.toDataURL('image/png'));
      }
    },
    [isPainting, x, y, color, size, drawCircle, drawLine]
  );

  const exitPaint = useCallback((event) => {
    let newX = event.offsetX;
    let newY = event.offsetY;
    setPoints(points => [...points, {x: newX, y: newY, size: size, color: color, mode: "end"}]);
    setIsPainting(false);
    setX(undefined);
    setY(undefined);
  }, [color, size]);

  useEffect(() => {
    /*mount painting*/
    const canvas = canvasRef.current;
    canvas.addEventListener("mousedown", startPaint);
    canvas.addEventListener("mousemove", paint);
    canvas.addEventListener("mouseup", exitPaint);
    canvas.addEventListener("mouseleave", exitPaint);
    return () => {
    /*unmount painting*/
      canvas.removeEventListener("mousedown", startPaint);
      canvas.removeEventListener("mousemove", paint);
      canvas.removeEventListener("mouseup", exitPaint);
      canvas.removeEventListener("mouseleave", exitPaint);
    };
  }, [startPaint, exitPaint, paint]);

  const getCoordinates = (event) => {
    if(["mousedown", "mousemove"].includes(event.type)) {
      const canvas = canvasRef.current;
      return [event.pageX - canvas.offsetLeft, event.pageY - canvas.offsetTop];
    }
  };

  const clearCanvas = () => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    setPoints(points => []);
  }

  const brush = () => {
    setSize(initialSize);
    setColor(initialColor);
    changeColor();
  }

  const eraser = () => {
    setSize(initialSize * 4);
    setColor('white');
  }

  const saveImg = () => {
    localStorage.removeItem('canvasImg');
    localStorage.setItem('canvasImg', canvasImg);
    setCanvasImg(localStorage.getItem('canvasImg'));
  }

  const redrawCanvas = () => {

    if(points.length === 0) { 
      console.log('no points'); 
      return
    }

    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    for(let i = 0; i < points.length; i++) {
      let pt = points[i];
      let begin = false;

      if(ctx.lineWidth !== pt.size) {
        ctx.lineWidth = pt.size;
        begin = true;
      }

      if(ctx.strokeStyle !== pt.color) {
        ctx.strokeStyle = pt.color;
        begin = true;
      }

      if(pt.mode === "begin" && begin) {
        ctx.beginPath();
        ctx.moveTo(pt.x, pt.y);
      }

      ctx.lineTo(pt.x, pt.y);
      
      if(pt.mode === "end" || (i === points.length - 1)) {
        ctx.stroke();
      }
    }

    ctx.stroke();
  }

  const undoLast = () => {
    if(points.length === 0) {
      console.log('undo return');
      return;
    } else {
      points.pop();
      setPoints(points => [...points]);
      redrawCanvas();
      console.log('redraw');
    }
  }

  const changeColor = () => {
    let newColor = inputColorRef.current.value;
    setColor(newColor);
  }


  return (
    <DrawingStyled>
      <Canvas
        ref={canvasRef} 
        width={width} 
        height={height}
      />
      <ButtonsContainer>
        <Button onClick={undoLast} title={'undo'}>
          <RiArrowGoBackLine />
        </Button>
        <Button onClick={brush} title={'brush'}>
          <BsBrush />
        </Button>
        <Button onClick={eraser} title={'eraser'}>
          <RiEraserFill />
        </Button>
        <Button onClick={clearCanvas} title={'clear all'}>
          <RiDeleteBin7Fill />
        </Button>
        <Button onClick={saveImg} title={'save image'}>
          <RiSave3Fill />
        </Button>
        <ColorInput 
          ref={inputColorRef} 
          type="color" 
          onChange={changeColor} 
          title={'color picker'}
        />
      </ButtonsContainer>
    </DrawingStyled>
  );
}

export default Drawing;