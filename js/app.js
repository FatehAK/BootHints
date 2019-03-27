/* eslint-disable prefer-reflect */

"use strict";

//Enable Tooltips
$(function () {
    $('[data-toggle="tooltip"]').tooltip();
});

$('.btnthree').tooltip({
    offset: '15'
});

//Enable Popovers
$(function () {
    $('[data-toggle="popover"]').popover();
});

$('.popthree').popover({
    trigger: 'focus'
});

//Enable Toast
$(function () {
    $('.toast').toast();
});

$('.toastelem').toast({
    autohide: false
});

$('.toastelem').toast('show');

//Enable Validation
(function () {
    window.addEventListener('load', function () {
        // Fetch all the forms we want to apply custom Bootstrap validation styles to
        const forms = document.querySelector('.myForm');
        // Loop over them and prevent submission
        Array.prototype.filter.call(forms, function (form) {
            form.addEventListener('submit', function (event) {
                if (form.checkValidity() === false) {
                    event.preventDefault();
                    event.stopPropagation();
                }
                form.classList.add('was-validated');
            }, false);
        });
    }, false);
}());

const myDefTxt = document.querySelector('#myDefTxt');
myDefTxt.setCustomValidity("Hi, this is custom message");

//Dynamic Modal
$('#myModal4').on('show.bs.modal', function (evt) {
    let button = $(evt.relatedTarget);
    let myText = button.data('text');
    const modal = $(this);
    modal.find('p').text(myText);
});

//Smooth Scroll
const myIds = [
    'Nav',
    'Alerts',
    'Badges',
    'Buttons',
    'Spinners',
    'Progress-Bars',
    'Breadcrumbs',
    'Pagination',
    'Tooltips',
    'Popovers',
    'Toasts',
    'Jumbotrons',
    'Media-Objects',
    'List-Groups',
    'Scrollspy',
    'Dropdowns',
    'Collapse',
    'Modals',
    'Cards',
    'Forms',
    'Input-Groups'
];

const comp = document.querySelector('.component');

for (let i = 0; i < 21; i++) {
    const list = document.createElement('li');
    const anchor = document.createElement('a');
    anchor.classList.add('link-style');
    myIds[i] = myIds[i].replace('-', ' ');
    anchor.innerHTML = myIds[i];
    list.appendChild(anchor);
    comp.appendChild(list);
}

//Event Delegation
comp.addEventListener('click', function (evt) {
    document.querySelector('#' + evt.target.innerHTML.replace(' ', '-')).scrollIntoView({
        behavior: 'smooth'
    });
}, false);

//Scroll to Top
const scrlButton = document.querySelector('#scrlButton');

scrlButton.addEventListener('click', function () {
    document.querySelector('#scrlTarget').scrollIntoView({
        behavior: 'smooth'
    });
});

function scrollFunction() {
    if (window.scrollY > 900) {
        scrlButton.style.display = "block";
    } else {
        scrlButton.style.display = "none";
    }
}

window.onscroll = function () {
    scrollFunction();
};
