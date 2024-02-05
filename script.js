const scriptURL = 'https://script.google.com/macros/s/AKfycbymxTLRldJ7lOE2ZtkH-MFoBM2oqgKwALUHxmk9SPkBfy78F00AOKT0o1ZGioLXwPxY4Q/exec'
const scriptURLEnfado = 'https://script.google.com/macros/s/AKfycbyMSQE6Njwd_k3bie7lRgXUj-HKbhPej8L2aUEPMASzDzzBEdo_jgoWFuNHdsLiFJoJGQ/exec'
const scriptFrase = 'https://script.google.com/macros/s/AKfycbw5mWKutRNVnSKH8A5kZkLqltRbZj97bKQwzLqmLgnzBo08k6xquNSyeztO9E-y8v0_/exec'
const scriptChiste = 'https://script.google.com/macros/s/AKfycbw59ko55iS2uRDYFMhi6yhd-QetTB1VptHpuFEjDARE-v5qAHnMd0ubNs9cVHDu_nLH/exec'
const scriptFoto = 'https://script.google.com/macros/s/AKfycbyoFxqiYGRuP_l5T0kkIn4xYw0UJ6Q3Tc8GRfCKqvdTDZZGNfQtFnI8hcG52O5IcEZw/exec'

const clipForm = document.getElementById("clipForm");
const enfadoForm = document.getElementById("enfadoForm");
const fraseForm = document.getElementById("fraseForm");
const chisteForm = document.getElementById("chisteForm");
const fotoForm = document.getElementById("fotoForm");

clipForm.addEventListener('submit', handleSubmit);
enfadoForm.addEventListener('submit', handleSubmitEnfado);
fraseForm.addEventListener('submit', handleSubmitFrase);
chisteForm.addEventListener('submit', handleSubmitChiste);
fotoForm.addEventListener('submit', handleSubmitFoto);

function handleSubmit(e) {
    e.preventDefault();
    const form = e.target;
    fetch(scriptURL, { method: 'POST', body: new FormData(form) })
        .then(response => alert("Thank you! Your form is submitted successfully."))
        .then(() => { window.location.reload(); })
        .catch(error => console.error('Error!', error.message))
}

function handleSubmitEnfado(e) {
    e.preventDefault();
    const form = e.target;
    fetch(scriptURLEnfado, { method: 'POST', body: new FormData(form) })
        .then(response => alert("Thank you! Your form is submitted successfully."))
        .then(() => { window.location.reload(); })
        .catch(error => console.error('Error!', error.message))
}

function handleSubmitFrase(e) {
    e.preventDefault();
    const form = e.target;
    fetch(scriptFrase, { method: 'POST', body: new FormData(form) })
        .then(response => alert("Thank you! Your form is submitted successfully."))
        .then(() => { window.location.reload(); })
        .catch(error => console.error('Error!', error.message))
}

function handleSubmitChiste(e) {
    e.preventDefault();
    const form = e.target;
    fetch(scriptChiste, { method: 'POST', body: new FormData(form) })
        .then(response => alert("Thank you! Your form is submitted successfully."))
        .then(() => { window.location.reload(); })
        .catch(error => console.error('Error!', error.message))
}

function handleSubmitFoto(e) {
    e.preventDefault();
    const form = e.target;
    fetch(scriptFoto, { method: 'POST', body: new FormData(form) })
        .then(response => alert("Thank you! Your form is submitted successfully."))
        .then(() => { window.location.reload(); })
        .catch(error => console.error('Error!', error.message))
}

