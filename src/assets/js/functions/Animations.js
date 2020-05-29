import ScrollReveal from "scrollreveal";

/**
 * Lance une animation pour faire apparaître un élément depuis un tableau d'élément
 * Launches an animation to make an element appear from an element array
 * @param {NodeList[]} elements
 * @param {Array} animationType
 * @constructor
 */
export function RevealElements(elements, animationType) {
    document.querySelectorAll(elements).forEach((elem) => {
        ScrollReveal().reveal(elem, animationType)
    })
}