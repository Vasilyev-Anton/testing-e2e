import { isValidCardNumber, identifyCardType } from "./validators";

export class CardFormWidget {
    constructor(parentEl) {
        this.parentEl = parentEl;

        this.onSubmit = this.onSubmit.bind(this);

        this.bindToDOM();
    }

    static get markup() {
        return `
        <form class="card-form-widget">
            <div class="control">
                <input type="text" id="card-input" class="input">
                <button class="submit">Click to Validate</button>
            </div>   
        </form>
        `;
    }

    static get selector() {
        return '.card-form-widget';
    }

    static get submitSelector() {
        return '.submit';
    }

    static get inputSelector() {
        return '.input';
    }

    static get typeSelector() {
        return '#card-type';
    }

    bindToDOM() {
        this.parentEl.innerHTML = CardFormWidget.markup;

        this.element = this.parentEl.querySelector(CardFormWidget.selector);
        this.submit = this.element.querySelector(CardFormWidget.submitSelector);
        this.input = this.element.querySelector(CardFormWidget.inputSelector);
        this.typeEl = this.element.querySelector(CardFormWidget.typeSelector);

        this.element.addEventListener('submit', this.onSubmit);
    }

    onSubmit(e) {
        e.preventDefault();
    
        const value = this.input.value;
    
        if(isValidCardNumber(value)) {
            const cardTypeClass = identifyCardType(value);
            this.input.classList.add('valid');
            this.input.classList.remove('invalid');
            this.input.classList.remove('invalid-input');
    
            const cardWrappers = document.querySelectorAll('.img-wrapper');
            cardWrappers.forEach((card) => {
                card.classList.remove(
                    'active-mir', 
                    'active-visa', 
                    'active-mastercard', 
                    'active-unionpay', 
                    'active-jcb', 
                    'active-americanexpress', 
                    'active-discover',
                    'invalid-input'
                    );
                if (card.classList.contains(cardTypeClass+'-wrapper')) {
                    card.classList.add('active-'+cardTypeClass);
                }
            });    
        } else {
            this.input.classList.add('invalid');
            this.input.classList.remove('valid');
            this.input.classList.add('invalid-input');
    
            const cardWrappers = document.querySelectorAll('.img-wrapper');
            cardWrappers.forEach((card) => {
                card.classList.remove('active-mir', 'active-visa', 'active-mastercard', 'active-unionpay', 'active-jcb', 'active-americanexpress', 'active-discover', 'invalid-input');
            });
        }
    }
}
