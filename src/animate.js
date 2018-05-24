import anime from 'animejs';

export function translate(element) {
  anime({
    targets: element,
    translateX: 80,
    translateY: 20,
    scale: 1.5,
    duration: 1000,
    direction: 'alternate',
    easing: 'easeOutQuad',
    loop: true
  });
}