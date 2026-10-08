import { animate, scroll, inView } from "motion"

window.motionAnimate = animate;

var animationStack = [];

function addToStack(element, animation, options) {
    console.log('Adding animation to stack:', animation, element);
    animationStack.push({ element, animation, options });
}

function playFirstInStack() {
    if (animationStack.length > 0) {
        const { element, animation, options } = animationStack.shift();
        animate(element, animation, options).finished.then(() => {
            element.classList.add('animated');
        });
        window.setTimeout(playFirstInStack, options.duration * 150);
    } else {
        window.setTimeout(playFirstInStack, 100);
    }
}

window.addEventListener('load', function () {

    inView(".slide-in", (element) => {
        addToStack(element, { translateY: [200, 0], opacity: [0, 1] }, { duration: 1.4, ease: [0.22, 1, 0.36, 1] });
    })

    inView(".bounce-in", (element) => {
        addToStack(element, { scale: [0.8, 1], opacity: [0, 1] }, { duration: 1.4, ease: [0.22, 1, 0.36, 1] });
    })

    playFirstInStack();

})