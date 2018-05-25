import anime from 'animejs';

export function translate(element) {
  anime({
    targets: element,
    translateX: 1400,
    translateY: -10,
    rotate: 360,
    scale: 1.3,
    duration: 3000,
    direction: 'alternate',
    easing: 'easeOutQuad',
    loop: true
  });
}