import { isRegExp } from "util";

export default class Boxes {
    constructor(elem) {
        this.elem = document.querySelectorAll(elem);
    }

    listenForTrigger(selector) {
        const triggers = document.querySelectorAll(selector);

        triggers.forEach((trigger) => {
            trigger.addEventListener('click', (e) => {
                const color = e.target.getAttribute('data-trigger');
                
                if(color !== 'reset') {
                    this.setColor(color);
                } else {
                    this.reset();
                }
            });
        })
    }

    setColor(color) {
        for(let i = 0; i < this.elem.length; i++) {
            const box = this.elem[i];
        
            if(box.getAttribute('data-color') !== 'reset') {
                box.classList = 'box box-' + color;
            }
        }
    }

    reset() {
        for(let i = 0; i < this.elem.length; i++) {
            const box = this.elem[i];
            const color = box.getAttribute('data-color');
            box.classList = 'box box-' + color;
        }
    }

    init() {
        this.listenForTrigger('.js--trigger');
    }
} 