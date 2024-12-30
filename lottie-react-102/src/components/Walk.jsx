import { useLottie, useLottieInteractivity } from 'lottie-react';
import Walking from '../assets/lotties/Animation - 1735530853763.json';

const options = {
  animationData: Walking,
  autoPlay: !true,
};

const style = {
  height: 400,
  border: 'solid',
};

const Walk = () => {
  const lottieObj = useLottie(options, style);
  const Animation = useLottieInteractivity({
    lottieObj,
    mode: 'cursor',
    actions: [
      {
        position: { x: [0, 0.5], y: [0, 0.5] },
        type: 'seek',
        frames: [0, 24],
      },
      {
        position: { x: -1, y: -1 },
        type: 'loop',
        frames: [0, 24],
      },
    ],
  });

  return Animation;
};

export default Walk;
