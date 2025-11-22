let poprawneOdpowiedzi = 0;
let udzieloneOdpowiedzi = 0;

function sprawdzOdpowiedz(element) {

    const czyPoprawna = element.dataset.correct === "true";

    const rodzic = element.parentElement;
    const wszystkie = rodzic.querySelectorAll('.odpowiedz');

    // blokada kliknięć
    wszystkie.forEach(o => o.style.pointerEvents = 'none');

    if (czyPoprawna) {
        element.classList.add('poprawna');
        poprawneOdpowiedzi++;
    } else {
        element.classList.add('bledna');

        // automatyczne zaznaczenie poprawnej
        wszystkie.forEach(o => {
            if (o.dataset.correct === "true") {
                o.classList.add('poprawna');
            }
        });
    }

    udzieloneOdpowiedzi++;

    const liczbaPytan = document.querySelectorAll('.pytanie-quiz').length;

    if (udzieloneOdpowiedzi === liczbaPytan) {
        pokazWynikQuizu();
    }
}

document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('.odpowiedz').forEach(el => {
        el.addEventListener('click', () => sprawdzOdpowiedz(el));
    });
});

function pokazWynikQuizu() {
    const wynikDiv = document.getElementById('wynik-quiz');
    const punktySpan = document.getElementById('punkty-quiz');
    const ocenaP = document.getElementById('ocena-quiz');

    punktySpan.textContent = poprawneOdpowiedzi;

    let ocena;
    if (poprawneOdpowiedzi === 8) ocena = 'Perfekcyjnie! Ogrodniczy geniusz!';
    else if (poprawneOdpowiedzi >= 6) ocena = 'Bardzo dobrze! Znasz się!';
    else if (poprawneOdpowiedzi >= 3) ocena = 'Może być, ale zawsze można lepiej.';
    else ocena = 'Przeglądnij poradnik jeszcze raz. Rośliny ci wybaczą.';

    ocenaP.textContent = ocena;

    wynikDiv.style.display = 'block';
    wynikDiv.scrollIntoView({ behavior: 'smooth' });
}