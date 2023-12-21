import React, { useEffect } from 'react';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles(() => ({
  canvas: {
    position: 'fixed',
    top: 0,
    left: 0,
    zIndex: -1,
  },
}));

const RainCanvas: React.FC = () => {
  const classes = useStyles();

  useEffect(() => {
    const canvas = document.querySelector('canvas') as HTMLCanvasElement;
    const ctx = canvas.getContext('2d');

    if (!ctx) {
      console.error('Canvas context not available.');
      return;
    }

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const letters = 'ABCDEFGHIJKLMNOPQRSTUVXYZABCDEFGHIJKLMNOPQRSTUVXYZABCDEFGHIJKLMNOPQRSTUVXYZABCDEFGHIJKLMNOPQRSTUVXYZABCDEFGHIJKLMNOPQRSTUVXYZABCDEFGHIJKLMNOPQRSTUVXYZ';
    const lettersArray = letters.split('');

    const fontSize = 20;
    const columns = canvas.width / fontSize;
    const rows = Math.ceil(canvas.height / fontSize);
    const density = 2; // Adjust this value for the rain density

    const drops: number[][] = Array.from({ length: columns }, () => []);

    for (let i = 0; i < columns; i++) {
      for (let j = 0; j < rows * density; j++) {
        drops[i][j] = Math.random() * canvas.height;
      }
    }

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      for (let i = 0; i < columns; i++) {
        for (let j = 0; j < drops[i].length; j++) {
          const text = lettersArray[Math.floor(Math.random() * lettersArray.length)];
          const opacity = (j + 1) / (rows * density); // Increase opacity with depth
          ctx.fillStyle = `rgba(0, 255, 0, ${opacity})`;
          ctx.fillText(text, i * fontSize, drops[i][j]);
          drops[i][j] += fontSize;

          if (drops[i][j] > canvas.height && Math.random() > 0.99) {
            drops[i][j] = 0;
          }
        }
      }
    };

    const intervalId = setInterval(draw, 53);

    return () => clearInterval(intervalId);
  }, []);

  return <canvas className={classes.canvas}></canvas>;
};

export default RainCanvas;
