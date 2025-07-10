function sendMessage() {
const firstName_lastname = document.getElementById('firstName_lastname').value;
const email = document.getElementById('email').value;
const subject = document.getElementById('subject').value;
const message = document.getElementById('message').value;

if (!firstName_lastname) {
    alert('Lütfen Adınızı ve Soyadınızı giriniz.');
    return;
}
if (!email) {
    alert('Lütfen E-Posta adresinizi giriniz.');
    return;
}
if (!subject) {
    alert('Lütfen başlık giriniz.');
    return;
}
if (!message) {
    alert('Lütfen mesajınızı giriniz.');
    return;
}

document.getElementById('successMessage').style.display = 'block';
document.getElementById('responseText').innerHTML = `
    Sayın <b>${firstName_lastname}</b>, <b>${subject}</b> konulu "<i>${message}</i>" mesajınız tarafımıza ulaşmıştır. 
    Sizinle en kısa sürede iletişime geçeceğiz. <br>`;
}

document.getElementById("hamburger").addEventListener("click", function() {
    const menu = document.getElementById("mobileMenu");
    menu.classList.toggle("show");
});

