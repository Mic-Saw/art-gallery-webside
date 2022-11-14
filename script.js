const btnToLocation = document.querySelector('.btnLocation');
const btnToHome = document.querySelector('.btnHome');

if (btnToLocation) {
    btnToLocation.addEventListener('click', () => {
        window.location.replace('location.html');
    });
}

if (btnToHome) {
    btnToHome.addEventListener('click', () => {
        window.location.replace('index.html');
    });
}
