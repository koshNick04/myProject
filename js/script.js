document.addEventListener('DOMContentLoaded', function() {
    document.querySelectorAll('.ese').forEach(function(element) {
        element.addEventListener('click', function(event) {
            document.querySelectorAll('.scriti').forEach(function(scritElement) {
                scritElement.classList.add('ese_activ');
            });
        });
    });
});

document.addEventListener('DOMContentLoaded', function() {
    document.querySelectorAll('.ese').forEach(function(element) {
        element.addEventListener('click', function(event) {
            document.querySelectorAll('.ese').forEach(function(scritElement) {
                scritElement.classList.add('scriti_ese');
            });
        });
    });
});

document.addEventListener('DOMContentLoaded', function() {
    document.querySelectorAll('.scriti_deistv').forEach(function(element) {
        element.addEventListener('click', function(event) {
            document.querySelectorAll('.scriti').forEach(function(scritElement) {
                scritElement.classList.remove('ese_activ');
            });
        });
    });
});

document.addEventListener('DOMContentLoaded', function() {
    document.querySelectorAll('.scriti_deistv').forEach(function(element) {
        element.addEventListener('click', function(event) {
            document.querySelectorAll('.scriti_ese').forEach(function(scritElement) {
                scritElement.classList.remove('scriti_ese');
            });
        });
    });
});


document.addEventListener('DOMContentLoaded', function() {
    document.querySelectorAll('.heder_lable').forEach(function(element) {
        element.addEventListener('click', function(event) {
            document.querySelectorAll('.dropdown_prof').forEach(function(scritElement) {
                scritElement.classList.toggle('dropdown_prof_hiden');
            });
        });
    });
});

let answer = confirm ("Вам есть 18?");
let isClose = (answer);

if (isClose){
    console.log("привет")
} else {console.log("пока")}