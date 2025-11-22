// ===== BAZA DANYCH ROŚLIN DO GALERII =====
const roslinyCalosc = [
    // ROŚLINY DLA POCZĄTKUJĄCYCH
    {
        id: 1,
        nazwa: 'Monstera deliciosa',
        nazwaLacinska: 'Monstera deliciosa',
        kategorie: ['latwe', 'zielone', 'oczyszczajace'],
        ikona: '<img src="../obrazki/monstera.png" alt="Monstera deliciosa">',
        poziom: 'latwe',
        swiatlo: 'Jasne rozproszone',
        podlewanie: 'Umiarkowane (co 7-10 dni)',
        temperatura: '18-28°C',
        wilgotnosc: '60-70%',
        wysokosc: 'Do 3m w domu',
        opis: 'Monstera deliciosa, potocznie zwana dziurką, to jedna z najpopularniejszych roślin doniczkowych. Charakteryzuje się dużymi, dziurawymi liśćmi.'
    },
    {
        id: 2,
        nazwa: 'Sansewieria',
        nazwaLacinska: 'Sansevieria trifasciata',
        kategorie: ['latwe', 'zielone', 'oczyszczajace'],
        ikona: '<img src="../obrazki/sansewieria.png" alt="Sansewieria">',
        poziom: 'latwe',
        swiatlo: 'Dowolne (toleruje cień)',
        podlewanie: 'Rzadkie (co 14-21 dni)',
        temperatura: '15-30°C',
        wilgotnosc: '40-50%',
        wysokosc: '30-120cm',
        opis: 'Sansewieria, zwana językiem teściowej, to praktycznie niezniszczalna roślina.'
    },
    {
        id: 3,
        nazwa: 'Pothos Złocisty',
        nazwaLacinska: 'Epipremnum aureum',
        kategorie: ['latwe', 'zielone', 'oczyszczajace'],
        ikona: '<img src="../obrazki/pothos.png" alt="Pothos">',
        poziom: 'latwe',
        swiatlo: 'Jasne rozproszone do półcienia',
        podlewanie: 'Umiarkowane (co 7-10 dni)',
        temperatura: '18-28°C',
        wilgotnosc: '50-70%',
        wysokosc: 'Pnącza do kilku metrów',
        opis: 'Pothos to szybko rosnąca pnącza idealna do zawieszenia.'
    },
    {
        id: 4,
        nazwa: 'Zamiokulkas',
        nazwaLacinska: 'Zamioculcas zamiifolia',
        kategorie: ['latwe', 'zielone'],
        ikona: '<img src="../obrazki/zamiokulkas.png" alt="Zamiokulkas">',
        poziom: 'latwe',
        swiatlo: 'Cień do jasnego',
        podlewanie: 'Bardzo rzadkie (co 14-28 dni)',
        temperatura: '18-26°C',
        wilgotnosc: '40-60%',
        wysokosc: '60-90cm',
        opis: 'Zamiokulkas magazynuje wodę w korzeniach i przetrwa długie okresy suszy.'
    },
    {
        id: 5,
        nazwa: 'Chlorophytum',
        nazwaLacinska: 'Chlorophytum comosum',
        kategorie: ['latwe', 'zielone', 'oczyszczajace'],
        ikona: '<img src="../obrazki/chlorophytum.png" alt="Chlorophytum">',
        poziom: 'latwe',
        swiatlo: 'Jasne rozproszone',
        podlewanie: 'Umiarkowane (co 5-7 dni)',
        temperatura: '15-25°C',
        wilgotnosc: '40-60%',
        wysokosc: '30-50cm',
        opis: 'Zielistka, klasyczna roślina domowa, świetnie oczyszcza powietrze.'
    },
    
    // ROŚLINY KWITNĄCE
    {
        id: 6,
        nazwa: 'Storczyk Falenopsis',
        nazwaLacinska: 'Phalaenopsis',
        kategorie: ['kwitnace', 'srednie'],
        ikona: '<img src="../obrazki/storczyk.png" alt="Storczyk">',
        poziom: 'srednie',
        swiatlo: 'Jasne rozproszone',
        podlewanie: 'Specjalne (zanurzanie co 7-10 dni)',
        temperatura: '18-25°C',
        wilgotnosc: '60-80%',
        wysokosc: '30-60cm',
        opis: 'Najpopularniejszy storczyk doniczkowy, kwitnie przez 2-4 miesiące.'
    },
    {
        id: 7,
        nazwa: 'Skrzydłokwiat',
        nazwaLacinska: 'Spathiphyllum',
        kategorie: ['kwitnace', 'latwe', 'oczyszczajace'],
        ikona: '<img src="../obrazki/skrzydlokwiat.png" alt="Skrzydłokwiat">',
        poziom: 'latwe',
        swiatlo: 'Półcień do jasnego',
        podlewanie: 'Częste (co 3-5 dni)',
        temperatura: '18-25°C',
        wilgotnosc: '60-80%',
        wysokosc: '30-100cm',
        opis: 'Popularna roślina o białych kwiatach, świetnie oczyszcza powietrze.'
    },
    {
        id: 8,
        nazwa: 'Begonia',
        nazwaLacinska: 'Begonia',
        kategorie: ['kwitnace', 'srednie'],
        ikona: '<img src="../obrazki/begonia.png" alt="Begonia">',
        poziom: 'srednie',
        swiatlo: 'Jasne rozproszone',
        podlewanie: 'Umiarkowane (co 5-7 dni)',
        temperatura: '18-24°C',
        wilgotnosc: '50-70%',
        wysokosc: '20-60cm',
        opis: 'Różnorodna grupa roślin z pięknymi kwiatami lub ozdobnymi liśćmi.'
    },
    {
        id: 9,
        nazwa: 'Anturium',
        nazwaLacinska: 'Anthurium andreanum',
        kategorie: ['kwitnace', 'srednie'],
        ikona: '<img src="../obrazki/anturium.png" alt="Anturium">',
        poziom: 'srednie',
        swiatlo: 'Jasne rozproszone',
        podlewanie: 'Umiarkowane (co 5-7 dni)',
        temperatura: '20-28°C',
        wilgotnosc: '70-80%',
        wysokosc: '40-80cm',
        opis: 'Charakterystyczne czerwone, błyszczące kwiaty, kwitnie przez cały rok.'
    },
    {
        id: 10,
        nazwa: 'Kalanchoe',
        nazwaLacinska: 'Kalanchoe blossfeldiana',
        kategorie: ['kwitnace', 'latwe', 'sukulenty'],
        ikona: '<img src="../obrazki/kalanchoe.png" alt="Kalanchoe">',
        poziom: 'latwe',
        swiatlo: 'Jasne, toleruje słońce',
        podlewanie: 'Rzadkie (co 10-14 dni)',
        temperatura: '15-25°C',
        wilgotnosc: '40-50%',
        wysokosc: '15-30cm',
        opis: 'Sukulentowa roślina kwitnąca dostępna w wielu kolorach.'
    },

    // ROŚLINY ZIELONE
    {
        id: 11,
        nazwa: 'Fikus Sprężysty',
        nazwaLacinska: 'Ficus elastica',
        kategorie: ['zielone', 'srednie', 'oczyszczajace'],
        ikona: '<img src="../obrazki/fikus.png" alt="Fikus">',
        poziom: 'srednie',
        swiatlo: 'Jasne rozproszone',
        podlewanie: 'Umiarkowane (co 7-10 dni)',
        temperatura: '18-26°C',
        wilgotnosc: '50-60%',
        wysokosc: 'Do 2m w domu',
        opis: 'Eleganckie drzewko z dużymi, błyszczącymi liśćmi.'
    },
    {
        id: 12,
        nazwa: 'Dracena',
        nazwaLacinska: 'Dracaena marginata',
        kategorie: ['zielone', 'latwe', 'oczyszczajace'],
        ikona: '<img src="../obrazki/dracena.png" alt="Dracena">',
        poziom: 'latwe',
        swiatlo: 'Jasne rozproszone do półcienia',
        podlewanie: 'Umiarkowane (co 7-14 dni)',
        temperatura: '18-24°C',
        wilgotnosc: '40-60%',
        wysokosc: '1-2m',
        opis: 'Popularne drzewko pokojowe o długich, wąskich liściach.'
    },
    {
        id: 13,
        nazwa: 'Paproć Nefrolepis',
        nazwaLacinska: 'Nephrolepis exaltata',
        kategorie: ['zielone', 'srednie'],
        ikona: '<img src="../obrazki/paproc.png" alt="Paproć">',
        poziom: 'srednie',
        swiatlo: 'Półcień',
        podlewanie: 'Częste (co 2-4 dni)',
        temperatura: '18-24°C',
        wilgotnosc: '70-90%',
        wysokosc: '30-90cm',
        opis: 'Klasyczna paproć z pięknymi, ażurowymi liśćmi, wymaga wysokiej wilgotności.'
    },
    {
        id: 14,
        nazwa: 'Filodendron Pnący',
        nazwaLacinska: 'Philodendron scandens',
        kategorie: ['zielone', 'latwe', 'oczyszczajace'],
        ikona: '<img src="../obrazki/filodendron.png" alt="Filodendron">',
        poziom: 'latwe',
        swiatlo: 'Jasne rozproszone do półcienia',
        podlewanie: 'Umiarkowane (co 7-10 dni)',
        temperatura: '18-27°C',
        wilgotnosc: '50-70%',
        wysokosc: 'Pnącza do kilku metrów',
        opis: 'Szybko rosnąca pnącza z sercowatymi liśćmi, bardzo łatwa w uprawie.'
    },
    {
        id: 15,
        nazwa: 'Calathea',
        nazwaLacinska: 'Calathea ornata',
        kategorie: ['zielone', 'trudne'],
        ikona: '<img src="../obrazki/calathea.png" alt="Calathea">',
        poziom: 'trudne',
        swiatlo: 'Półcień',
        podlewanie: 'Częste (co 3-5 dni)',
        temperatura: '18-24°C',
        wilgotnosc: '70-90%',
        wysokosc: '40-80cm',
        opis: 'Roślina o dekoracyjnych liściach, które składają się wieczorem.'
    },

    // SUKULENTY I KAKTUSY
    {
        id: 16,
        nazwa: 'Grubosz Jajowaty',
        nazwaLacinska: 'Crassula ovata',
        kategorie: ['sukulenty', 'latwe'],
        ikona: '<img src="../obrazki/grubosz.png" alt="Grubosz">',
        poziom: 'latwe',
        swiatlo: 'Jasne, toleruje słońce',
        podlewanie: 'Rzadkie (co 14-21 dni)',
        temperatura: '15-25°C',
        wilgotnosc: '30-50%',
        wysokosc: '30-90cm',
        opis: 'Drzewko szczęścia, sukulent przypominający miniaturowe drzewko.'
    },
    {
        id: 17,
        nazwa: 'Aloes Zwyczajny',
        nazwaLacinska: 'Aloe vera',
        kategorie: ['sukulenty', 'latwe'],
        ikona: '<img src="../obrazki/aloes.png" alt="Aloes">',
        poziom: 'latwe',
        swiatlo: 'Jasne bezpośrednie',
        podlewanie: 'Rzadkie (co 14-21 dni)',
        temperatura: '15-28°C',
        wilgotnosc: '30-50%',
        wysokosc: '30-60cm',
        opis: 'Sukulent o właściwościach leczniczych, żel z liści leczy oparzenia.'
    },
    {
        id: 18,
        nazwa: 'Echeveria',
        nazwaLacinska: 'Echeveria elegans',
        kategorie: ['sukulenty', 'latwe'],
        ikona: '<img src="../obrazki/echeveria.png" alt="Echeveria">',
        poziom: 'latwe',
        swiatlo: 'Jasne bezpośrednie',
        podlewanie: 'Rzadkie (co 14-21 dni)',
        temperatura: '15-25°C',
        wilgotnosc: '30-40%',
        wysokosc: '10-20cm',
        opis: 'Piękne rozety przypominające kamienne róże, idealna do kompozycji.'
    },
    {
        id: 19,
        nazwa: 'Kaktus Mammillaria',
        nazwaLacinska: 'Mammillaria',
        kategorie: ['sukulenty', 'latwe'],
        ikona: '<img src="../obrazki/kaktus.png" alt="Kaktus">',
        poziom: 'latwe',
        swiatlo: 'Jasne bezpośrednie',
        podlewanie: 'Bardzo rzadkie (co 21-28 dni)',
        temperatura: '15-28°C, zimą 10-15°C',
        wilgotnosc: '30-40%',
        wysokosc: '10-30cm',
        opis: 'Popularny kaktus, przy odpowiedniej zimowej przerwie kwitnie wiosną.'
    },
    {
        id: 20,
        nazwa: 'Sedum',
        nazwaLacinska: 'Sedum morganianum',
        kategorie: ['sukulenty', 'latwe'],
        ikona: '<img src="../obrazki/sedum.png" alt="Sedum">',
        poziom: 'latwe',
        swiatlo: 'Jasne rozproszone',
        podlewanie: 'Rzadkie (co 14 dni)',
        temperatura: '18-26°C',
        wilgotnosc: '30-50%',
        wysokosc: '30-60cm (wisząca)',
        opis: 'Rozchodnik ogonowy, wisząca roślina z mięsistymi liśćmi.'
    },

    // ROŚLINY EGZOTYCZNE
    {
        id: 21,
        nazwa: 'Alocasia',
        nazwaLacinska: 'Alocasia amazonica',
        kategorie: ['egzotyczne', 'zielone', 'trudne'],
        ikona: '<img src="../obrazki/alocasia.png" alt="Alocasia">',
        poziom: 'trudne',
        swiatlo: 'Jasne rozproszone',
        podlewanie: 'Umiarkowane (co 5-7 dni)',
        temperatura: '20-28°C',
        wilgotnosc: '70-85%',
        wysokosc: '40-90cm',
        opis: 'Uszy słonia, efektowne liście w kształcie strzałek z białymi żyłkami.'
    },
    {
        id: 22,
        nazwa: 'Strelicja',
        nazwaLacinska: 'Strelitzia reginae',
        kategorie: ['egzotyczne', 'kwitnace', 'trudne'],
        ikona: '<img src="../obrazki/strelicja.png" alt="Strelicja">',
        poziom: 'trudne',
        swiatlo: 'Jasne bezpośrednie',
        podlewanie: 'Umiarkowane (co 7-10 dni)',
        temperatura: '18-28°C',
        wilgotnosc: '50-70%',
        wysokosc: '1-2m',
        opis: 'Rajski ptak, spektakularne kwiaty przypominające głowę ptaka.'
    },
    {
        id: 23,
        nazwa: 'Bananowiec',
        nazwaLacinska: 'Musa',
        kategorie: ['egzotyczne', 'zielone', 'srednie'],
        ikona: '<img src="../obrazki/bananowiec.png" alt="Bananowiec">',
        poziom: 'srednie',
        swiatlo: 'Jasne bezpośrednie',
        podlewanie: 'Częste (co 3-5 dni)',
        temperatura: '20-30°C',
        wilgotnosc: '60-80%',
        wysokosc: '1-3m',
        opis: 'Egzotyczna roślina o ogromnych liściach, niektóre odmiany owocują.'
    },
    {
        id: 24,
        nazwa: 'Pilea',
        nazwaLacinska: 'Pilea peperomioides',
        kategorie: ['latwe', 'zielone'],
        ikona: '<img src="../obrazki/pilea.png" alt="Pilea">',
        poziom: 'latwe',
        swiatlo: 'Jasne rozproszone',
        podlewanie: 'Umiarkowane (co 7-10 dni)',
        temperatura: '15-25°C',
        wilgotnosc: '50-60%',
        wysokosc: '30-40cm',
        opis: 'Pieniążek chiński, modna roślina z okrągłymi liśćmi jak monety.'
    },
    {
        id: 25,
        nazwa: 'Maranta',
        nazwaLacinska: 'Maranta leuconeura',
        kategorie: ['zielone', 'srednie'],
        ikona: '<img src="../obrazki/maranta.png" alt="Maranta">',
        poziom: 'srednie',
        swiatlo: 'Półcień',
        podlewanie: 'Częste (co 4-6 dni)',
        temperatura: '18-25°C',
        wilgotnosc: '60-80%',
        wysokosc: '30-40cm',
        opis: 'Modliszka, liście składają się pionowo wieczorem jak do modlitwy.'
    },
    {
        id: 26,
        nazwa: 'Peperomia',
        nazwaLacinska: 'Peperomia caperata',
        kategorie: ['latwe', 'zielone'],
        ikona: '<img src="../obrazki/peperomia.png" alt="Peperomia">',
        poziom: 'latwe',
        swiatlo: 'Jasne rozproszone',
        podlewanie: 'Umiarkowane (co 7-10 dni)',
        temperatura: '18-24°C',
        wilgotnosc: '50-60%',
        wysokosc: '20-40cm',
        opis: 'Kompaktowa roślina o mięsistych liściach, zajmuje mało miejsca.'
    },
    {
        id: 27,
        nazwa: 'Hoja Mięsista',
        nazwaLacinska: 'Hoya carnosa',
        kategorie: ['kwitnace', 'srednie', 'sukulenty'],
        ikona: '<img src="../obrazki/hoja.png" alt="Hoja">',
        poziom: 'srednie',
        swiatlo: 'Jasne rozproszone',
        podlewanie: 'Rzadkie (co 10-14 dni)',
        temperatura: '18-25°C',
        wilgotnosc: '50-70%',
        wysokosc: 'Pnącza do kilku metrów',
        opis: 'Pnącza sukkulentowa z pachnącymi, gwiaździstymi kwiatami.'
    },
    {
        id: 28,
        nazwa: 'Syngonium',
        nazwaLacinska: 'Syngonium podophyllum',
        kategorie: ['latwe', 'zielone'],
        ikona: '<img src="../obrazki/syngonium.png" alt="Syngonium">',
        poziom: 'latwe',
        swiatlo: 'Jasne rozproszone do półcienia',
        podlewanie: 'Umiarkowane (co 5-7 dni)',
        temperatura: '18-26°C',
        wilgotnosc: '50-70%',
        wysokosc: '60cm-2m',
        opis: 'Szybko rosnąca pnącza o strzałkowatych liściach.'
    },
    {
        id: 29,
        nazwa: 'Fittonia',
        nazwaLacinska: 'Fittonia albivenis',
        kategorie: ['zielone', 'srednie'],
        ikona: '<img src="../obrazki/fittonia.png" alt="Fittonia">',
        poziom: 'srednie',
        swiatlo: 'Półcień',
        podlewanie: 'Częste (co 2-4 dni)',
        temperatura: '18-24°C',
        wilgotnosc: '70-80%',
        wysokosc: '10-15cm',
        opis: 'Nerwnica, miniaturowa roślina z kolorowymi żyłkami na liściach.'
    },
    {
        id: 30,
        nazwa: 'Tradeskancja',
        nazwaLacinska: 'Tradescantia zebrina',
        kategorie: ['latwe', 'zielone'],
        ikona: '<img src="../obrazki/tradeskancja.png" alt="Tradeskancja">',
        poziom: 'latwe',
        swiatlo: 'Jasne rozproszone',
        podlewanie: 'Umiarkowane (co 5-7 dni)',
        temperatura: '15-25°C',
        wilgotnosc: '40-60%',
        wysokosc: '20-40cm (wisząca)',
        opis: 'Trzykrotka, roślina wisząca z kolorowymi, pasiastymi liśćmi.'
    }
];

// ===== FUNKCJE DO RENDEROWANIA GALERII =====

function stworzKarteRosliny(roslina) {
    return `
        <div class="karta-rosliny" data-kategorie="${roslina.kategorie.join(' ')}" data-id="${roslina.id}" onclick="pokazSzczegoly(${roslina.id})">
            <div class="obrazek-rosliny">
                ${roslina.ikona}
            </div>
            <div class="tresc-karty">
                <h3>${roslina.nazwa}</h3>
                <p class="nazwa-lacinska">${roslina.nazwaLacinska}</p>
                <div class="etykiety-rosliny">
                    <span class="etykieta ${roslina.poziom}">${
                        roslina.poziom === 'latwe' ? 'Łatwe' : 
                        roslina.poziom === 'srednie' ? 'Średnie' : 
                        'Trudne'
                    }</span>
                    ${roslina.kategorie.includes('oczyszczajace') ? '<span class="etykieta">Oczyszcza powietrze</span>' : ''}
                </div>
                <div class="wymagania-skrot">
                    <span title="Światło">☀️ ${roslina.swiatlo.split(' ')[0]}</span>
                    <span title="Podlewanie">💧 ${roslina.podlewanie.split(' ')[0]}</span>
                </div>
            </div>
        </div>
    `;
}

function zaladujGalerie() {
    const siatkaLatwe = document.getElementById('siatka-latwe');
    const siatkaKwitnace = document.getElementById('siatka-kwitnace');
    const siatkaZielone = document.getElementById('siatka-zielone');
    const siatkaEgzotyczne = document.getElementById('siatka-egzotyczne');
    
    const latwe = roslinyCalosc.filter(r => r.kategorie.includes('latwe'));
    const kwitnace = roslinyCalosc.filter(r => r.kategorie.includes('kwitnace'));
    const zielone = roslinyCalosc.filter(r => r.kategorie.includes('zielone') && !r.kategorie.includes('latwe'));
    const egzotyczne = roslinyCalosc.filter(r => r.kategorie.includes('egzotyczne'));
    
    if (siatkaLatwe) siatkaLatwe.innerHTML = latwe.map(r => stworzKarteRosliny(r)).join('');
    if (siatkaKwitnace) siatkaKwitnace.innerHTML = kwitnace.map(r => stworzKarteRosliny(r)).join('');
    if (siatkaZielone) siatkaZielone.innerHTML = zielone.map(r => stworzKarteRosliny(r)).join('');
    if (siatkaEgzotyczne) siatkaEgzotyczne.innerHTML = egzotyczne.map(r => stworzKarteRosliny(r)).join('');
}

// ===== FUNKCJE FILTROWANIA =====

function filtrujRosliny(kategoria) {
    document.querySelectorAll('.przycisk-filtr').forEach(btn => {
        btn.classList.remove('aktywny');
    });
    event.target.classList.add('aktywny');
    
    const sekcje = document.querySelectorAll('.kategoria-sekcja');
    
    if (kategoria === 'wszystkie') {
        sekcje.forEach(sekcja => sekcja.style.display = 'block');
        document.querySelectorAll('.karta-rosliny').forEach(karta => karta.style.display = 'block');
    } else if (kategoria === 'sukulenty') {
        sekcje.forEach(sekcja => sekcja.style.display = 'none');
        document.querySelectorAll('.karta-rosliny').forEach(karta => {
            const kategorie = karta.dataset.kategorie;
            if (kategorie.includes('sukulenty')) {
                karta.style.display = 'block';
                karta.parentElement.parentElement.parentElement.style.display = 'block';
            } else {
                karta.style.display = 'none';
            }
        });
    } else if (kategoria === 'oczyszczajace') {
        sekcje.forEach(sekcja => sekcja.style.display = 'none');
        document.querySelectorAll('.karta-rosliny').forEach(karta => {
            const kategorie = karta.dataset.kategorie;
            if (kategorie.includes('oczyszczajace')) {
                karta.style.display = 'block';
                karta.parentElement.parentElement.parentElement.style.display = 'block';
            } else {
                karta.style.display = 'none';
            }
        });
    } else {
        sekcje.forEach(sekcja => {
            if (sekcja.id === kategoria) {
                sekcja.style.display = 'block';
            } else {
                sekcja.style.display = 'none';
            }
        });
    }
}

// ===== WYSZUKIWARKA =====

function wyszukajWGalerii() {
    const zapytanie = document.getElementById('wyszukiwanie-galeriii').value.toLowerCase();
    const karty = document.querySelectorAll('.karta-rosliny');
    const licznik = document.getElementById('licznik-wynikow');
    let znalezione = 0;
    
    if (!zapytanie) {
        karty.forEach(karta => karta.style.display = 'block');
        licznik.style.display = 'none';
        document.querySelectorAll('.kategoria-sekcja').forEach(s => s.style.display = 'block');
        return;
    }
    
    document.querySelectorAll('.kategoria-sekcja').forEach(s => s.style.display = 'none');
    
    karty.forEach(karta => {
        const id = parseInt(karta.dataset.id);
        const roslina = roslinyCalosc.find(r => r.id === id);
        
        const czyPasuje = 
            roslina.nazwa.toLowerCase().includes(zapytanie) ||
            roslina.nazwaLacinska.toLowerCase().includes(zapytanie) ||
            roslina.opis.toLowerCase().includes(zapytanie);
        
        if (czyPasuje) {
            karta.style.display = 'block';
            karta.parentElement.parentElement.parentElement.style.display = 'block';
            znalezione++;
        } else {
            karta.style.display = 'none';
        }
    });
    
    licznik.style.display = 'block';
    licznik.textContent = `Znaleziono ${znalezione} roślin${znalezione === 1 ? 'ę' : znalezione < 5 ? 'y' : ''}`;
}

// ===== MODAL ZE SZCZEGÓŁAMI =====

function pokazSzczegoly(id) {
    const roslina = roslinyCalosc.find(r => r.id === id);
    if (!roslina) return;
    
    const modal = document.getElementById('modal-rosliny');
    const tresc = document.getElementById('tresc-modal');
    
    tresc.innerHTML = `
        <div class="obrazek-modal">${roslina.ikona}</div>
        <h2>${roslina.nazwa}</h2>
        <p class="nazwa-lacinska" style="font-size: 1.2rem; margin-bottom: 1rem;">${roslina.nazwaLacinska}</p>
        
        <div class="etykiety-rosliny" style="margin-bottom: 1.5rem;">
            <span class="etykieta ${roslina.poziom}">${
                roslina.poziom === 'latwe' ? 'Łatwe w uprawie' : 
                roslina.poziom === 'srednie' ? 'Średnio trudne' : 
                'Trudne'
            }</span>
            ${roslina.kategorie.map(k => {
                if (k === 'oczyszczajace') return '<span class="etykieta">Oczyszcza powietrze</span>';
                if (k === 'kwitnace') return '<span class="etykieta">Roślina kwitnąca</span>';
                return '';
            }).join('')}
        </div>
        
        <div class="szczegoly-rosliny">
            <h3>Opis</h3>
            <p style="line-height: 1.8; text-align: justify;">${roslina.opis}</p>
            
            <h3 style="margin-top: 2rem;">Wymagania hodowlane</h3>
            <table class="tabela-szczegoly">
                <tr>
                    <th>☀️ Światło</th>
                    <td>${roslina.swiatlo}</td>
                </tr>
                <tr>
                    <th>💧 Podlewanie</th>
                    <td>${roslina.podlewanie}</td>
                </tr>
                <tr>
                    <th>🌡️ Temperatura</th>
                    <td>${roslina.temperatura}</td>
                </tr>
                <tr>
                    <th>💨 Wilgotność powietrza</th>
                    <td>${roslina.wilgotnosc}</td>
                </tr>
                <tr>
                    <th>📏 Wysokość</th>
                    <td>${roslina.wysokosc}</td>
                </tr>
            </table>
        </div>
    `;
    
    modal.style.display = 'block';
    document.body.style.overflow = 'hidden';
}

function zamknijModal(event) {
    const modal = document.getElementById('modal-rosliny');
    if (!event || event.target === modal) {
        modal.style.display = 'none';
        document.body.style.overflow = 'auto';
    }
}

// Zamknij modal przy ESC
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        zamknijModal();
    }
});

// ===== INICJALIZACJA =====

document.addEventListener('DOMContentLoaded', () => {
    zaladujGalerie();
    console.log('✅ Galeria załadowana: ' + roslinyCalosc.length + ' roślin');
});