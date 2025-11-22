// ===== SKRYPT 1: Animacja liczników statystyk =====
// Źródło inspiracji: Counter Animation (zmodyfikowany)
function animujLicznik(element, cel, czas) {
    let aktualnaWartosc = 0;
    const krok = cel / (czas / 16);
    const licznik = setInterval(() => {
        aktualnaWartosc += krok;
        if (aktualnaWartosc >= cel) {
            element.textContent = cel;
            clearInterval(licznik);
        } else {
            element.textContent = Math.floor(aktualnaWartosc);
        }
    }, 16);
}

// Uruchom animację gdy element jest widoczny
const obserwatorStatystyk = new IntersectionObserver((wpisy) => {
    wpisy.forEach(wpis => {
        if (wpis.isIntersecting) {
            const statystyki = document.querySelectorAll('.statystyka');
            statystyki.forEach((stat, indeks) => {
                const cel = parseInt(stat.dataset.cel);
                const elementLiczby = stat.querySelector('.liczba');
                setTimeout(() => {
                    animujLicznik(elementLiczby, cel, 2000);
                }, indeks * 200);
            });
            obserwatorStatystyk.unobserve(wpis.target);
        }
    });
});

document.addEventListener('DOMContentLoaded', () => {
    const sekcjaStatystyk = document.querySelector('.statystyki-container');
    if (sekcjaStatystyk) {
        obserwatorStatystyk.observe(sekcjaStatystyk);
    }
});

// ===== SKRYPT 2: Karuselka wskazówek =====
let aktualnySlajd = 0;

function pokazSlajd(numer) {
    const slajdy = document.querySelectorAll('.wskazowka-slajd');
    
    if (numer >= slajdy.length) {
        aktualnySlajd = 0;
    }
    if (numer < 0) {
        aktualnySlajd = slajdy.length - 1;
    }
    
    slajdy.forEach(slajd => {
        slajd.classList.remove('aktywny');
    });
    
    slajdy[aktualnySlajd].classList.add('aktywny');
}

function zmienSlajd(kierunek) {
    aktualnySlajd += kierunek;
    pokazSlajd(aktualnySlajd);
}

// Automatyczne przełączanie slajdów
let autoSlajd = setInterval(() => {
    zmienSlajd(1);
}, 5000);

// Zatrzymaj auto-przełączanie gdy użytkownik kliknie przycisk
document.querySelectorAll('.kontrolki-karuselki button').forEach(btn => {
    btn.addEventListener('click', () => {
        clearInterval(autoSlajd);
        autoSlajd = setInterval(() => {
            zmienSlajd(1);
        }, 5000);
    });
});

// ===== SKRYPT 3: Przycisk "Wróć do góry" =====
window.onscroll = function() {
    const przyciskGora = document.getElementById('przycisk-gora');
    if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
        przyciskGora.style.display = 'block';
    } else {
        przyciskGora.style.display = 'none';
    }
};

function scrollDoGory() {
    const pozycja = document.documentElement.scrollTop || document.body.scrollTop;
    if (pozycja > 0) {
        window.requestAnimationFrame(scrollDoGory);
        window.scrollTo(0, pozycja - pozycja / 8);
    }
}

// ===== SKRYPT 4: Symulator pogody/warunków =====
function aktualizujWarunkiHodowlane() {
    const temperatura = document.getElementById('temp-pokojowa');
    const wilgotnosc = document.getElementById('wilgotnosc');
    const wskazowka = document.getElementById('wskazowka-dnia');
    
    // Symulacja zmiennych warunków
    const tempWartosc = 18 + Math.floor(Math.random() * 8); // 18-25°C
    const wilgotnoscWartosc = 45 + Math.floor(Math.random() * 25); // 45-70%
    
    if (temperatura) temperatura.textContent = tempWartosc + '°C';
    if (wilgotnosc) wilgotnosc.textContent = wilgotnoscWartosc + '%';
    
    // Wskazówki w zależności od warunków
    const wskazowki = [];
    
    if (tempWartosc < 20) {
        wskazowki.push('⚠️ Temperatura niska - niektóre rośliny tropikalne mogą potrzebować cieplejszego miejsca.');
    } else if (tempWartosc > 24) {
        wskazowki.push('☀️ Wysoka temperatura - zapewnij dodatkowe nawadnianie.');
    } else {
        wskazowki.push('✅ Temperatura optymalna dla większości roślin.');
    }
    
    if (wilgotnoscWartosc < 50) {
        wskazowki.push('💧 Niska wilgotność - rozważ opryskiwanie roślin.');
    } else if (wilgotnoscWartosc > 65) {
        wskazowki.push('💨 Wysoka wilgotność - zapewnij dobrą wentylację.');
    } else {
        wskazowki.push('✅ Wilgotność idealna.');
    }
    
    if (wskazowka) {
        wskazowka.innerHTML = wskazowki.join('<br>');
    }
}

// Aktualizuj warunki co 10 sekund
setInterval(aktualizujWarunkiHodowlane, 10000);
document.addEventListener('DOMContentLoaded', aktualizujWarunkiHodowlane);

// ===== SKRYPT 5: Baza danych roślin =====
const bazaRoslin = [
    {
        nazwa: 'Monstera deliciosa',
        kategoria: 'latwe',
        swiatlo: 'jasne rozproszone',
        podlewanie: 'umiarkowane',
        opis: 'Idealna dla początkujących, duże dziurawe liście'
    },
    {
        nazwa: 'Sansewieria',
        kategoria: 'latwe',
        swiatlo: 'każde',
        podlewanie: 'rzadkie',
        opis: 'Bardzo wytrzymała, nie wymaga dużo uwagi'
    },
    {
        nazwa: 'Pothos',
        kategoria: 'latwe',
        swiatlo: 'jasne rozproszone',
        podlewanie: 'umiarkowane',
        opis: 'Szybko rosnąca pnącza, oczyszcza powietrze'
    },
    {
        nazwa: 'Fikus',
        kategoria: 'srednie',
        swiatlo: 'jasne bezpośrednie',
        podlewanie: 'umiarkowane',
        opis: 'Eleganckie drzewo, wymaga stałego miejsca'
    },
    {
        nazwa: 'Paproć',
        kategoria: 'srednie',
        swiatlo: 'cień/półcień',
        podlewanie: 'częste',
        opis: 'Lubi wilgoć i cień, dekoracyjne liście'
    },
    {
        nazwa: 'Storczyk',
        kategoria: 'trudne',
        swiatlo: 'jasne rozproszone',
        podlewanie: 'specjalne',
        opis: 'Piękne kwiaty, wymaga szczególnej pielęgnacji'
    },
    {
        nazwa: 'Kaktus',
        kategoria: 'latwe',
        swiatlo: 'jasne bezpośrednie',
        podlewanie: 'rzadkie',
        opis: 'Sukulenty, minimalna pielęgnacja'
    },
    {
        nazwa: 'Aloes',
        kategoria: 'latwe',
        swiatlo: 'jasne bezpośrednie',
        podlewanie: 'rzadkie',
        opis: 'Właściwości lecznicze, łatwy w uprawie'
    },
    {
        nazwa: 'Begonia',
        kategoria: 'srednie',
        swiatlo: 'jasne rozproszone',
        podlewanie: 'umiarkowane',
        opis: 'Kolorowe liście lub kwiaty, ozdoba wnętrz'
    },
    {
        nazwa: 'Filodendron',
        kategoria: 'latwe',
        swiatlo: 'jasne rozproszone',
        podlewanie: 'umiarkowane',
        opis: 'Różne odmiany, łatwy w uprawie'
    }
];

// ===== SKRYPT 6: Wyszukiwarka roślin =====
function wyszukajRosline() {
    const zapytanie = document.getElementById('pole-wyszukiwania').value.toLowerCase();
    const kontenerWynikow = document.getElementById('wyniki-wyszukiwania');
    
    if (!zapytanie) {
        kontenerWynikow.innerHTML = '<p style="color: #999;">Wpisz nazwę rośliny aby wyszukać...</p>';
        return;
    }
    
    const wyniki = bazaRoslin.filter(roslina => 
        roslina.nazwa.toLowerCase().includes(zapytanie) ||
        roslina.opis.toLowerCase().includes(zapytanie) ||
        roslina.kategoria.toLowerCase().includes(zapytanie)
    );
    
    if (wyniki.length === 0) {
        kontenerWynikow.innerHTML = '<p style="color: #e65100;">Nie znaleziono roślin pasujących do zapytania.</p>';
        return;
    }
    
    let html = '<div style="display: grid; gap: 1rem; margin-top: 1rem;">';
    wyniki.forEach(roslina => {
        html += `
            <div style="background: white; padding: 1rem; border-radius: 8px; border-left: 4px solid #43a047;">
                <h4 style="color: #2e7d32; margin-bottom: 0.5rem;">${roslina.nazwa}</h4>
                <p style="color: #666; margin-bottom: 0.5rem;">${roslina.opis}</p>
                <div style="display: flex; gap: 1rem; font-size: 0.9rem; color: #888;">
                    <span>☀️ ${roslina.swiatlo}</span>
                    <span>💧 ${roslina.podlewanie}</span>
                </div>
            </div>
        `;
    });
    html += '</div>';
    
    kontenerWynikow.innerHTML = html;
}

// Wyszukiwanie po naciśnięciu Enter
document.addEventListener('DOMContentLoaded', () => {
    const poleWyszukiwania = document.getElementById('pole-wyszukiwania');
    if (poleWyszukiwania) {
        poleWyszukiwania.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') {
                wyszukajRosline();
            }
        });
    }
});

// ===== SKRYPT 7: Losowa roślina dnia =====
function losujRoslineDnia() {
    const elementRoslinaDnia = document.getElementById('roslina-dnia');
    if (!elementRoslinaDnia) return;
    
    const dzisiaj = new Date().getDate();
    const indeks = dzisiaj % bazaRoslin.length;
    const roslina = bazaRoslin[indeks];
    
    const obrazkiRoslin = {
        'Monstera deliciosa': 'monstera.jpg',
        'Sansewieria': 'sansewieria.jpg',
        'Pothos': 'pothos.jpg',
        'Fikus': 'fikus.jpg',
        'Paproć': 'paproc.jpg',
        'Storczyk': 'storczyk.jpg',
        'Kaktus': 'kaktus.jpg',
        'Aloes': 'aloes.jpg',
        'Begonia': 'begonia.jpg',
        'Filodendron': 'filodendron.jpg'
    };
    
    elementRoslinaDnia.innerHTML = `
        <img src="obrazki/${obrazkiRoslin[roslina.nazwa]}" alt="${roslina.nazwa}" class="img-widget" onerror="this.src='obrazki/placeholder.jpg'">
        <p><strong>${roslina.nazwa}</strong></p>
        <p class="opis-krotki">${roslina.opis}</p>
    `;
}

document.addEventListener('DOMContentLoaded', losujRoslineDnia);

// ===== SKRYPT 8: Efekt parallax dla tła =====
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const tlo = document.getElementById('animowane-tlo');
    if (tlo) {
        tlo.style.transform = `translateY(${scrolled * 0.5}px)`;
    }
});

// ===== SKRYPT 9: Podświetlanie aktywnej sekcji w menu =====
function aktualizujAktywneMenu() {
    const sekcje = document.querySelectorAll('section[id]');
    const linkiMenu = document.querySelectorAll('#menu-glowne a');
    
    let aktualnaSekcja = '';
    
    sekcje.forEach(sekcja => {
        const gora = sekcja.offsetTop;
        const wysokosc = sekcja.clientHeight;
        if (window.pageYOffset >= gora - 200) {
            aktualnaSekcja = sekcja.getAttribute('id');
        }
    });
    
    linkiMenu.forEach(link => {
        link.classList.remove('aktywny');
        if (link.getAttribute('href').includes(aktualnaSekcja)) {
            link.classList.add('aktywny');
        }
    });
}

window.addEventListener('scroll', aktualizujAktywneMenu);

// ===== SKRYPT 10: Animacja wejścia elementów =====
const obserwatorAnimacji = new IntersectionObserver((wpisy) => {
    wpisy.forEach(wpis => {
        if (wpis.isIntersecting) {
            wpis.target.style.opacity = '1';
            wpis.target.style.transform = 'translateY(0)';
        }
    });
}, {
    threshold: 0.1
});

document.addEventListener('DOMContentLoaded', () => {
    const kartyRozdzialow = document.querySelectorAll('.karta-rozdzialu');
    kartyRozdzialow.forEach((karta, indeks) => {
        karta.style.opacity = '0';
        karta.style.transform = 'translateY(20px)';
        karta.style.transition = `all 0.6s ease ${indeks * 0.1}s`;
        obserwatorAnimacji.observe(karta);
    });
});

console.log('🌿 Skrypty poradnika roślin załadowane pomyślnie!');