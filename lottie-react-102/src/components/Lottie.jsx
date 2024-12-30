import { useLottie, useLottieInteractivity } from 'lottie-react';
import Magician from '../assets/lotties/magician.json';

const style = {
  width: 400,
  height: 400,
  border: 'solid',
};

const options = {
  animationData: Magician,
  autoPlay: !true,
};

const Lottie = () => {
  const lottieObj = useLottie(options, style);
  const Animation = useLottieInteractivity({
    lottieObj,
    mode: 'cursor',
    actions: [
      {
        position: { x: [0, 0.5], y: [0, 0.5] },
        type: 'seek',
        frames: [0, 120],
      },
      {
        position: { x: -1, y: -1 },
        type: 'loop',
        frames: [60, 90],
      },
    ],
  });
  return Animation;
};

export default Lottie;
