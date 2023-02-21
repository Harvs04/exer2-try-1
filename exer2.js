function hasNumber(pass1, pass2) {
    let hasNum1 = false;
    let hasNum2 = false;
    for (let i = 0; i < pass1.length; i++) {
        if (pass1.charAt(i).charCodeAt() >= 48 && pass1.charAt(i).charCodeAt() <= 57) hasNum1 = true;
        else continue;
    }
    for (let i = 0; i < pass2.length; i++) {
        if (pass2.charAt(i).charCodeAt() >= 48 && pass2.charAt(i).charCodeAt() <= 57) hasNum2 = true;
        else continue;
    }

    if (hasNum1 == true && hasNum2 == true) return true;
    return false;
}

function hasUpper(pass1, pass2) {
    let hasUp1 = false;
    let hasUp2 = false;
    for (let i = 0; i < pass1.length; i++) {
        if (pass1.charAt(i).charCodeAt() >= 65 && pass1.charAt(i).charCodeAt() <= 90) hasUp1 = true;
        else continue;
    }
    for (let i = 0; i < pass2.length; i++) {
        if (pass2.charAt(i).charCodeAt() >= 65 && pass2.charAt(i).charCodeAt() <= 90) hasUp2 = true;
        else continue;
    }

    if (hasUp1 == true && hasUp2 == true) return true;
    return false;
}

function hasLower(pass1, pass2) {
    let hasLow1 = false;
    let hasLow2 = false;
    for (let i = 0; i < pass1.length; i++) {
        if (pass1.charAt(i).charCodeAt() >= 97 && pass1.charAt(i).charCodeAt() <= 122) hasLow1 = true;
        else continue;
    }
    for (let i = 0; i < pass2.length; i++) {
        if (pass2.charAt(i).charCodeAt() >= 97 && pass2.charAt(i).charCodeAt() <= 122) hasLow2 = true;
        else continue;
    }

    if (hasLow1 == true && hasLow2 == true) return true;
    return false;
}

function validatePassword(pass1, pass2) {
    if (pass1.length >= 8 && pass2.length >= 8) {
        if (hasNumber(pass1, pass2) == true) {
            if (hasUpper(pass1, pass2)) {
                if (hasLower(pass1, pass2)) {
                    if (pass1 === pass2) {
                        return true;
                    } else return false;
                } else return false;
            } else return false;
        } else return false;
    } else return false;
}

console.log(validatePassword("helloworld", "hello"));
console.log(validatePassword("hello", "hello"));
console.log(validatePassword("hello1234", "hello1234"));
console.log(validatePassword("Hello1234", "Hello1234"));
console.log(validatePassword("HELLO1234", "HELLO1234"));


function reverse(pass1) {
    let reversed = "";
    for (let i = pass1.length; i >= 0; i--) {
        reversed += pass1.charAt(i);
    }
    return reversed;
}

console.log(reverse("harvey lloyd martinez"));


function storePassword(name, pass1, pass2) {
    if (validatePassword(pass1, pass2) == true) {
        const person = {
            name: name,
            password: reverse(pass1)
        };
        return person;
    } 
    const person = {
        name: name,
        password: pass1
    };
    return person;
}

console.log(storePassword("Kat", "Pass1234", "Pass1234"));
console.log(storePassword("Kat", "Pass123", "Pass12345"));