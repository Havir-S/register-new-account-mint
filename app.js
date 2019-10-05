
//small icon setup
let setup = (() => {
  document.getElementById('password-bad').style.display = 'none';
  document.getElementById('phone-bad').style.display = 'none';
  document.getElementById('user-bad').style.display = 'none';
  document.getElementById('confirm-password-bad').style.display = 'none';
})();


//TOOLTIP
function addInfo(x) {
  x.parentNode.children[2].style.display = 'block';
}

function deleteInfo(x) {
  x.parentNode.children[2].style.display = 'none';
}


let inputs = document.getElementsByTagName('input');

for (i = 0; i < inputs.length; i++ ) {
  inputs[i].onfocus = function() {
    addInfo(this);
  }
  inputs[i].onblur = function() {
    deleteInfo(this);
  }
};


// VALIDATION

let icons = document.querySelectorAll('.icons'),
  validateForm = function (e) {e.preventDefault()};


let passwordCheckFieldset = document.querySelector('#password-confirm-fieldset');

let emailRegex = new RegExp(/\w+@.\w+.\w+/),
emailInput = document.getElementById('email');

let checkEmail = (e) => {
  if (emailRegex.test(e.value)) {
    console.log('ding');
    if (emailInput.classList.contains('error-border')) {
      emailInput.classList.remove('error-border');
    }
    document.getElementById('user-bad').style.display = 'none';
    document.getElementById('user-good').style.display = 'block';
    document.getElementById('emailWarning').style.display = 'none';
    emailInput.classList.add('correct-border');
  } else {
    console.log('dong');
    if (emailInput.classList.contains('correct-border')) {
      emailInput.classList.remove('correct-border');
    }
    document.getElementById('user-bad').style.display = 'block';
    document.getElementById('user-good').style.display = 'none';
    document.getElementById('emailWarning').style.display = 'block';
    emailInput.classList.add('error-border');
  }
}

let phoneInput = document.getElementById('phone');
let checkPhone = (e, x) => {
  if (e.value.match(/\D/)) {
    if (phoneInput.classList.contains('correct-border')) {
      phoneInput.classList.remove('correct-border');
    }
    document.getElementById('phoneWarning').style.display = 'block';
    document.getElementById('phone-bad').style.display = 'block';
    document.getElementById('phone-good').style.display = 'none';
    phoneInput.classList.add('error-border');
  } else {
    if (phoneInput.classList.contains('error-border')) {
      phoneInput.classList.remove('error-border');
    }
    document.getElementById('phoneWarning').style.display = 'none';
    document.getElementById('phone-bad').style.display = 'none';
    document.getElementById('phone-good').style.display = 'block';
    phoneInput.classList.add('correct-border');
  }
}


let errorDivPassword = document.querySelector('.password-error-div'),
 lowerCase = new RegExp(/[a-z]/),
 upperCase = new RegExp(/[A-Z]/),
 numbers = new RegExp(/[0-9]/),
 symbols = new RegExp(/[!@#$%^&*(),.?":{}|<>]/),
 characterLength = document.getElementById('characterLength'),
 characterCases = document.getElementById('characterCases'),
 characterNumber = document.getElementById('characterNumber'),
 characterSymbol = document.getElementById('characterSymbol'),
 testValue,
 pass = document.getElementById('password');

let checkPassword = (e) => {
  testValue = e.value;
  //ACTIVATE PASSWORD CONFIRM
  if (!passwordCheckFieldset.style.display) {
    document.getElementsByClassName('password-error-div')[0].style.display = 'block';
    passwordCheckFieldset.style.display = 'block';
  }


  //LENGTH CHECK
  if(e.value.length < 8 ) {
    if (characterLength.classList.contains('correct')) {
      characterLength.classList.remove('correct');
    }
    characterLength.classList.add('error');
  } else if (e.value.length >= 8) {
    if (characterLength.classList.contains('error')) {
      characterLength.classList.remove('error');
    }
    characterLength.classList.add('correct');
  }

  //CASE CHECK
  if (lowerCase.test(e.value) && upperCase.test(e.value)) {
    if (characterCases.classList.contains('error')) {
      characterCases.classList.remove('error');
    }
    characterCases.classList.add('correct');
  } else {
    if (characterCases.classList.contains('correct')) {
      characterCases.classList.remove('correct');
    }
    characterCases.classList.add('error');
  }

  //NUMBER CHECK
  if (e.value.match(numbers)) {
    if (characterNumber.classList.contains('error')) {
      characterNumber.classList.remove('error');
    }
    characterNumber.classList.add('correct');
  } else {
    if (characterNumber.classList.contains('correct')) {
      characterNumber.classList.remove('correct');
    }
    characterNumber.classList.add('error');
  }


  //SYMBOL CHECK
  if (e.value.match(symbols)) {
    if (characterSymbol.classList.contains('error')) {
      characterSymbol.classList.remove('error');
    }
    characterSymbol.classList.add('correct');
  } else {
    if (characterSymbol.classList.contains('correct')) {
      characterSymbol.classList.remove('correct');
    }
    characterSymbol.classList.add('error');
  }

  if ( e.value.length >= 8 && e.value.match(symbols) && e.value.match(numbers) && lowerCase.test(e.value) && upperCase.test(e.value) ) {
    pass.classList.remove('error-border');
    pass.classList.add('correct-border');
    document.getElementById('password-bad').style.display = 'none';
    document.getElementById('password-good').style.display = 'block';
  } else {
    pass.classList.remove('correct-border');
    pass.classList.add('error-border');
    document.getElementById('password-bad').style.display = 'block';
    document.getElementById('password-good').style.display = 'none';
  }

}


let passwordCheck = (e) => {
  if (e.value == pass.value ) {
    if(e.classList.contains("error-border")) {
      e.classList.remove('error-border');
    }
    document.getElementById('confirm-password-bad').style.display = 'none';
    document.getElementById('confirm-password-good').style.display = 'block';
    e.classList.add('correct-border');
  } else {
    if(e.classList.contains("correct-border")) {
      e.classList.remove('correct-border');
    }
    document.getElementById('confirm-password-bad').style.display = 'block';
    document.getElementById('confirm-password-good').style.display = 'none';
    e.classList.add('error-border');
  }
}

//BRANCHING

let checkVal = function (e) {
  switch(e.id) {
    case"email":
    checkEmail(e);
    break;
    case"phone":
    checkPhone(e, event);
    break;
    case"password":
    checkPassword(e);
    break;
    case"confirm-password":
    passwordCheck(e);
    break;
    default:
    break;
  }
}






var i;
for (i = 0; i < inputs.length; i++) {
  inputs['password'].addEventListener('keyup', function() {
    checkVal(this);
  });
  inputs[i].addEventListener('change', function() {
    checkVal(this);
  });
}


document.forms[0].addEventListener('submit', function() {
  validateForm(event);
})
