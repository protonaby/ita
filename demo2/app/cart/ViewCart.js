import {TemplateCart} from './TemplateCart.js';

export class ViewCart {

    constructor() {
        this.domBody = document.querySelector('body');
        this.domBody.insertAdjacentHTML("afterbegin", TemplateCart.getCartTemplate());
        this.domCartPanel = document.querySelector('.cartPanel');
        this.domCartHeader = document.querySelector('.cartHeader');
    }

    addClickRemoveBtnsListeners(removeFunc) {
        this.domRmoveBtns = document.querySelectorAll('.removeBtn');
        if (this.domRmoveBtns)
            this.domRmoveBtns.forEach(btn => btn.addEventListener('click', (event) => {
                removeFunc(Number(event.target.dataset.id));
            }));
    }

    addClickOrderBtnListener(orderFunc) {
        this.domOrderBtn = document.querySelector('.orderBtn');
        if (!this.domOrderBtn) return;
        this.domOrderBtn.addEventListener('click', () => {
            orderFunc();
        })
    }

    addClickBackBtnListener(backFunc) {
        this.domOrderBackBtn = document.querySelector('.orderBackBtn');
        this.domOrderBackBtn.addEventListener('click', () => {
            backFunc();
        })
    }

    addClickCloseBtnListener(closeFunc) {
        this.domOrderCloseBtn = document.querySelector('.closeBtn');
        this.domOrderCloseBtn.addEventListener('click', () => {
            closeFunc();
        })
    }

  addSubmitListener(submitFunc) {
    this.submit = document.querySelector('.submitBtn');
    this.submit.addEventListener('click', () => {
      submitFunc();
    })
  }

    renderCart(pets) {
        let cartHtml = '';
        if (!pets.length) {
            cartHtml = TemplateCart.getEmptyCartMessageTemplate();
        } else {
            cartHtml = pets.map(pet => {
                return TemplateCart.getCartItemTemplate(pet);
            }).join('');
            let totalCost = pets.reduce((a, b) => a + (b['price'] || 0), 0).toFixed(2);
            cartHtml += TemplateCart.getTotalCostTemplate(totalCost);
        }
        this.domCartPanel.innerHTML = cartHtml;
        this.domCartHeader.innerHTML = 'Shopping Cart';
    }

    toggleCart() {
        $('.ui.sidebar')
            .sidebar('toggle');
    }

    renderOrderForm() {
        this.domCartHeader.innerHTML = 'Shopping Cart > Order';
        this.domCartPanel.innerHTML = TemplateCart.getOrderFormTemplate();
        setTimeout("document.querySelector('.ui.bottom.sidebar').scrollTo({top: 0, behavior: 'smooth'})", 100);
        this.addValidationRules();
    }

    addValidationRules() {
      $('.ui.form')
        .form({
          on: 'blur',
          fields: {
            name: {identifier: 'name', rules: [{type: 'empty', prompt: 'Please specify Name'}]},
            address: {identifier: 'address', rules: [{type: 'empty', prompt: 'Please specify Address'}]},
            email: {identifier: 'email', rules: [{type: 'email', prompt: 'Please specify a valid E-mail'}]},
            phone: {
              identifier: 'phone', rules: [{
                type: 'regExp[/^\\s*((\\+?\\s*(\\(\\s*)?3)?[\\s-]*(\\(\\s*)?8[\\s-]*)?(\\(\\s*)?0[\\s\\-\\(]*[1-9][\\s-]*\\d(\\s*\\))?([\\s-]*\\d){7}\\s*$/]',
                prompt: 'Please specify a valid Phone Number'
              }]
            },
          }
        });
    }
}
