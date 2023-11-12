export function isValidCardNumber(number) {
    const numArray = number.split('').reverse();
    let total = 0;
  
    for(let i = 0; i < numArray.length; i++) {
        let num = numArray[i] * (i % 2 === 0 ? 1 : 2);
  
        if (num > 9) {
            num -= 9;
        }
        
        total += num;
    }
  
    return total % 10 === 0;
  }
  
  export function identifyCardType(number) {
    const cardNumber = number.replace(/[\s-]/g, '');

    if (/^4\d{15,18}$/.test(cardNumber)) {
      return 'visa';
    } else if (/^5[1-5]|27\d{14}$/.test(cardNumber)) {
      return 'mastercard';
    } else if (/^34\d{13}$/.test(cardNumber)) {
      return 'americanexpress';
    } else if (/^6011\d{12,15}$/.test(cardNumber)) {
      console.log('discover')
      return 'discover';
    } else if (/^35\d{14,17}$/.test(cardNumber)) {
      return 'jcb';
    } else if (/^62\d{14,17}$/.test(cardNumber)) {
      return 'unionpay';
    } else if (/^22\d{14}$/.test(cardNumber)) {
      return 'mir';
    } else {
      return 'error';
    }
  }
  