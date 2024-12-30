import { useLottie, useLottieInteractivity } from 'lottie-react';
import Camel from '../assets/lotties/Animation - 1734923073727.json';

const style = {
  height: 800,
  border: 'solid',
};

const options = {
  animationData: Camel,
  autoplay: true,
};

const Lottie = () => {
  const lottieObj = useLottie(options, style);
  const Animation = useLottieInteractivity({
    lottieObj,
    mode: 'scroll',
    actions: [
      {
        visibility: [0.4, 0.9],
        type: 'seek',
        frames: [8, 14],
      },
      { visibility: [0.6, 0.9], type: 'stop', frames: [14, 14] },
    ],
  });
  return Animation;
};

export default Lottie;
