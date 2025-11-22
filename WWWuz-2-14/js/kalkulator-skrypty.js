// ===== FUNKCJE POMOCNICZE =====

function aktualizujWartosc(idSuwaka, idWartosci, jednostka) {
    const wartosc = document.getElementById(idSuwaka).value;
    document.getElementById(idWartosci).textContent = wartosc + jednostka;
}

function pokazWynik(idWyniku) {
    const elementWyniku = document.getElementById(idWyniku);
    elementWyniku.classList.add('widoczny');
    elementWyniku.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
}

// ===== KALKULATOR 1: CZĘSTOTLIWOŚĆ PODLEWANIA =====

function obliczPodlewanie() {
    const typRosliny = document.getElementById('typ-rosliny').value;
    const rozmiarDoniczki = parseInt(document.getElementById('rozmiar-doniczki').value);
    const temperatura = parseInt(document.getElementById('temperatura').value);
    const wilgotnosc = parseInt(document.getElementById('wilgotnosc').value);
    const naslonecznienie = document.getElementById('naslonecznienie').value;
    const poraRoku = document.getElementById('pora-roku').value;
    
    // Bazowa częstotliwość dla różnych typów roślin (dni)
    let bazowaCzestotliwosc;
    switch(typRosliny) {
        case 'sukulenty':
            bazowaCzestotliwosc = 14;
            break;
        case 'tropikalne':
            bazowaCzestotliwosc = 7;
            break;
        case 'paprocie':
            bazowaCzestotliwosc = 3;
            break;
        case 'kwitnace':
            bazowaCzestotliwosc = 5;
            break;
        default:
            bazowaCzestotliwosc = 7;
    }
    
    // Modyfikatory
    let mnoznik = 1.0;
    
    // Rozmiar doniczki (mniejsze szybciej schną)
    if (rozmiarDoniczki < 15) mnoznik *= 0.7;
    else if (rozmiarDoniczki > 30) mnoznik *= 1.3;
    
    // Temperatura (wyższa = szybsze parowanie)
    if (temperatura < 18) mnoznik *= 1.3;
    else if (temperatura > 25) mnoznik *= 0.7;
    
    // Wilgotność (niższa = szybsze schnięcie)
    if (wilgotnosc < 40) mnoznik *= 0.7;
    else if (wilgotnosc > 70) mnoznik *= 1.3;
    
    // Nasłonecznienie
    if (naslonecznienie === 'slabe') mnoznik *= 1.4;
    else if (naslonecznienie === 'mocne') mnoznik *= 0.6;
    
    // Pora roku
    if (poraRoku === 'zima') mnoznik *= 1.5;
    else if (poraRoku === 'lato') mnoznik *= 0.7;
    
    const czestotliwoscDni = Math.round(bazowaCzestotliwosc * mnoznik);
    const iloscWody = Math.round((rozmiarDoniczki / 10) * 100); // ml
    
    // Wskazówki
    let wskazowki = [];
    
    if (temperatura > 26) {
        wskazowki.push('🌡️ Wysoka temperatura - obserwuj roślinę częściej, może potrzebować więcej wody.');
    }
    if (wilgotnosc < 40) {
        wskazowki.push('💨 Niska wilgotność - rozważ opryskiwanie liści (jeśli roślina to lubi).');
    }
    if (naslonecznienie === 'mocne' && typRosliny !== 'sukulenty') {
        wskazowki.push('☀️ Mocne słońce - w upalne dni może być potrzebne częstsze podlewanie.');
    }
    if (typRosliny === 'paprocie' && wilgotnosc < 60) {
        wskazowki.push('🌿 Paprocie potrzebują wysokiej wilgotności - postaw doniczkę na podstawce z mokrymi kamykami.');
    }
    
    wskazowki.push('💡 Zawsze sprawdzaj wilgotność podłoża palcem przed podlaniem!');
    wskazowki.push('💧 Podlewaj do momentu aż woda wycieknie przez otwory w dnie, a po 15 min wylej nadmiar.');
    
    const nazwyRoslin = {
        'sukulenty': 'Sukulenty i kaktusy',
        'tropikalne': 'Rośliny tropikalne',
        'paprocie': 'Paprocie',
        'kwitnace': 'Rośliny kwitnące'
    };
    
    document.getElementById('wynik-podlewanie').innerHTML = `
        <h3>📊 Wyniki obliczeń dla: ${nazwyRoslin[typRosliny]}</h3>
        <div class="wynik-glowny">Podlewaj co ${czestotliwoscDni} dni</div>
        <p><strong>Szacowana ilość wody:</strong> około ${iloscWody} ml na jedno podlanie</p>
        <p><strong>Miesięczne zużycie wody:</strong> około ${Math.round(iloscWody * (30/czestotliwoscDni))} ml</p>
        
        <div class="wykres-kontener">
            <h4>Częstotliwość podlewania w porównaniu do innych czynników:</h4>
            ${utworzWykres('Twoja częstotliwość', czestotliwoscDni, 21)}
            ${utworzWykres('Optymalna dla typu', bazowaCzestotliwosc, 21)}
        </div>
        
        <div class="wskazowki-wyniku">
            <h4>💡 Wskazówki i porady:</h4>
            ${wskazowki.map(w => `<p>• ${w}</p>`).join('')}
        </div>
    `;
    
    pokazWynik('wynik-podlewanie');
}

function utworzWykres(etykieta, wartosc, maksimum) {
    const procent = Math.min((wartosc / maksimum) * 100, 100);
    return `
        <div class="pasek-wykresu">
            <div class="etykieta-paska">${etykieta}:</div>
            <div class="pasek" style="width: ${procent}%">${wartosc} dni</div>
        </div>
    `;
}

// ===== KALKULATOR 2: DAWKA NAWOZU =====

function obliczNawoz() {
    const pojemnoscDoniczki = parseFloat(document.getElementById('pojemnosc-doniczki').value);
    const stezenieNawozu = parseFloat(document.getElementById('stezenie-nawozu').value);
    const czestotliwosc = parseInt(document.getElementById('czestotliwosc-nawoz').value);
    const typRosliny = parseFloat(document.getElementById('typ-rosliny-nawoz').value);
    
    // Obliczenia
    const iloscWodyDoNawozenia = pojemnoscDoniczki * 0.5; // 50% pojemności doniczki
    const dawkaNawozu = stezenieNawozu * iloscWodyDoNawozenia * typRosliny;
    const dawkaMiesieczna = dawkaNawozu * (30 / czestotliwosc);
    const ilorazNawozenia = Math.floor(30 / czestotliwosc);
    
    // Koszt szacunkowy (1 litr nawozu ~30 zł)
    const kosztMiesieczny = (dawkaMiesieczna / 1000) * 30;
    const kosztRoczny = kosztMiesieczny * 6; // Nawożenie przez 6 miesięcy
    
    const opisTypu = {
        '1': 'Rośliny zielone (standardowe nawożenie)',
        '1.2': 'Rośliny kwitnące (zwiększone nawożenie)',
        '0.5': 'Sukulenty (zredukowane nawożenie)',
        '0.8': 'Rośliny młode (ostrożne nawożenie)'
    };
    
    let porady = [];
    
    if (dawkaNawozu > 50) {
        porady.push('⚠️ Duża dawka - upewnij się, że podłoże jest wilgotne przed nawożeniem!');
    }
    
    if (czestotliwosc === 7) {
        porady.push('📅 Nawożenie co tydzień - możesz rozważyć zmniejszenie dawki o połowę.');
    }
    
    porady.push('🌱 Nie nawożymy zimą (październik-luty) - rośliny są w spoczynku.');
    porady.push('💧 Zawsze rozcieńczaj nawóz zgodnie z instrukcją producenta.');
    porady.push('✅ Młode rośliny i świeżo przesadzone nawozi się dopiero po 4-6 tygodniach.');
    
    document.getElementById('wynik-nawoz').innerHTML = `
        <h3>📊 Zalecenia nawożenia</h3>
        <p><strong>Typ rośliny:</strong> ${opisTypu[typRosliny.toString()]}</p>
        <div class="wynik-glowny">${dawkaNawozu.toFixed(1)} ml nawozu + ${iloscWodyDoNawozenia.toFixed(1)} l wody</div>
        <p><strong>Częstotliwość:</strong> Co ${czestotliwosc} dni</p>
        
        <div class="wykres-kontener">
            <h4>Harmonogram nawożenia:</h4>
            <table class="harmonogram-tabela">
                <tr>
                    <th>Okres</th>
                    <th>Ilość nawozu</th>
                    <th>Liczba nawożeń</th>
                </tr>
                <tr>
                    <td>Jeden miesiąc</td>
                    <td>${dawkaMiesieczna.toFixed(1)} ml</td>
                    <td>${ilorazNawozenia} razy</td>
                </tr>
                <tr>
                    <td>Sezon (6 miesięcy)</td>
                    <td>${(dawkaMiesieczna * 6).toFixed(0)} ml</td>
                    <td>${ilorazNawozenia * 6} razy</td>
                </tr>
            </table>
        </div>
        
        <div class="ramka-info">
            <h4>💰 Szacunkowy koszt</h4>
            <p>Miesięcznie: około ${kosztMiesieczny.toFixed(2)} zł</p>
            <p>Sezon wegetacyjny (6 mies.): około ${kosztRoczny.toFixed(2)} zł</p>
            <p style="font-size: 0.9rem; margin-top: 0.5rem;">*Przy założeniu kosztu 1 litra nawozu ~30 zł</p>
        </div>
        
        <div class="wskazowki-wyniku">
            <h4>💡 Porady ekspertów:</h4>
            ${porady.map(p => `<p>• ${p}</p>`).join('')}
        </div>
    `;
    
    pokazWynik('wynik-nawoz');
}

// ===== KALKULATOR 3: PRZESADZANIE =====

function obliczPrzesadzanie() {
    const obecnaDoniczka = parseInt(document.getElementById('obecna-doniczka').value);
    const szybkoscWzrostu = document.getElementById('szybkosc-wzrostu').value;
    const czasOdPrzesadzenia = parseInt(document.getElementById('czas-od-przesadzenia').value);
    
    const objawy = {
        korzenie: document.getElementById('objaw-korzenie').checked,
        szybkie: document.getElementById('objaw-szybkie').checked,
        wzrost: document.getElementById('objaw-wzrost').checked,
        stabilnosc: document.getElementById('objaw-stabilnosc').checked
    };
    
    const liczbaObjawow = Object.values(objawy).filter(v => v).length;
    
    // Zalecany czas między przesadzeniami
    let zalecanyOkres;
    switch(szybkoscWzrostu) {
        case 'wolny':
            zalecanyOkres = 36; // 3 lata
            break;
        case 'umiarkowany':
            zalecanyOkres = 24; // 2 lata
            break;
        case 'szybki':
            zalecanyOkres = 12; // 1 rok
            break;
    }
    
    // Ocena potrzeby przesadzenia
    let pilnosc = 0;
    let ocena = '';
    let kolor = '';
    
    if (czasOdPrzesadzenia >= zalecanyOkres) pilnosc += 30;
    if (czasOdPrzesadzenia >= zalecanyOkres * 1.5) pilnosc += 20;
    
    pilnosc += liczbaObjawow * 15;
    
    if (objawy.korzenie) pilnosc += 10;
    if (objawy.stabilnosc) pilnosc += 10;
    
    if (pilnosc >= 60) {
        ocena = 'PILNE - Przesadź natychmiast!';
        kolor = '#d32f2f';
    } else if (pilnosc >= 40) {
        ocena = 'WKRÓTCE - Zaplanuj przesadzenie w ciągu miesiąca';
        kolor = '#f57c00';
    } else if (pilnosc >= 20) {
        ocena = 'WKRÓTCE - Obserwuj roślinę, przesadzenie może być potrzebne';
        kolor = '#fbc02d';
    } else {
        ocena = 'NIE TERAZ - Roślina nie wymaga przesadzenia';
        kolor = '#388e3c';
    }
    
    const nowaDoniczka = obecnaDoniczka + (obecnaDoniczka < 20 ? 3 : 5);
    const iloscPodloza = Math.round((nowaDoniczka / 10) ** 2 * Math.PI * 1.2); // litry, przybliżona objętość
    
    let instrukcje = [
        '1. Przygotuj nową doniczkę (większą o 3-5 cm) z otworami drenażowymi',
        '2. Umieść warstwę drenażu (keramzyt, żwir) na dnie',
        '3. Dodaj świeże podłoże odpowiednie dla Twojej rośliny',
        '4. Delikatnie wyjmij roślinę ze starej doniczki, rozluźnij korzenie',
        '5. Umieść w nowej doniczce i dosyp ziemi dookoła',
        '6. Lekko ugniataj podłoże i obficie podlej',
        '7. Przez 2 tygodnie trzymaj w półcieniu, nie nawożuj przez miesiąc'
    ];
    
    let wskazowki = [];
    if (objawy.korzenie) wskazowki.push('🌱 Korzenie w otworach to wyraźny znak przepełnienia doniczki.');
    if (objawy.szybkie) wskazowki.push('💧 Szybkie przesychanie może oznaczać zbyt małą doniczkę.');
    if (objawy.wzrost) wskazowki.push('📏 Zahamowanie wzrostu często wynika z braku miejsca na korzenie.');
    if (objawy.stabilnosc) wskazowki.push('⚖️ Przewracanie się to znak, że roślina przerośnie doniczkę.');
    
    wskazowki.push('🗓️ Najlepszy czas na przesadzanie: wiosna (marzec-maj)');
    wskazowki.push('🚫 Nie przesadzaj podczas kwitnienia ani zimą');
    
    document.getElementById('wynik-przesadzanie').innerHTML = `
        <h3>📊 Analiza potrzeby przesadzenia</h3>
        <div class="wynik-glowny" style="color: ${kolor}">${ocena}</div>
        <p><strong>Pilność przesadzenia:</strong> ${pilnosc}%</p>
        <p><strong>Czas od ostatniego przesadzenia:</strong> ${czasOdPrzesadzenia} miesięcy (zalecany interwał: ${zalecanyOkres} miesięcy)</p>
        <p><strong>Wykrytych objawów:</strong> ${liczbaObjawow}/4</p>
        
        <div class="wykres-kontener">
            <h4>Wskaźnik potrzeby przesadzenia:</h4>
            <div class="pasek-wykresu">
                <div class="etykieta-paska">Pilność:</div>
                <div class="pasek" style="width: ${Math.min(pilnosc, 100)}%; background: linear-gradient(90deg, ${kolor} 0%, ${kolor}CC 100%);">
                    ${pilnosc}%
                </div>
            </div>
        </div>
        
        ${pilnosc >= 40 ? `
        <div class="ramka-info">
            <h4>🪴 Zalecenia dotyczące nowej doniczki</h4>
            <p><strong>Obecna średnica:</strong> ${obecnaDoniczka} cm</p>
            <p><strong>Zalecana nowa średnica:</strong> ${nowaDoniczka} cm</p>
            <p><strong>Potrzebna ilość podłoża:</strong> około ${iloscPodloza} litrów</p>
        </div>
        
        <div class="wskazowki-wyniku">
            <h4>📋 Krok po kroku - jak przesadzić:</h4>
            ${instrukcje.map(i => `<p>${i}</p>`).join('')}
        </div>
        ` : ''}
        
        <div class="wskazowki-wyniku">
            <h4>💡 Dodatkowe wskazówki:</h4>
            ${wskazowki.map(w => `<p>• ${w}</p>`).join('')}
        </div>
    `;
    
    pokazWynik('wynik-przesadzanie');
}

// ===== KALKULATOR 4: NASŁONECZNIENIE =====

function obliczNaslonecznienie() {
    const orientacja = document.getElementById('orientacja-okna').value;
    const odleglosc = parseFloat(document.getElementById('odleglosc-okno').value);
    const zasloniecie = document.getElementById('zasloniecie').value;
    const pietro = document.getElementById('pietro').value;
    
    // Bazowy poziom światła dla orientacji (0-100)
    let poziomSwiatla;
    switch(orientacja) {
        case 'polnocne':
            poziomSwiatla = 30;
            break;
        case 'wschodnie':
            poziomSwiatla = 60;
            break;
        case 'poludniowe':
            poziomSwiatla = 90;
            break;
        case 'zachodnie':
            poziomSwiatla = 70;
            break;
    }
    
    // Modyfikatory
    poziomSwiatla -= (odleglosc * 10); // Każdy metr odległości zmniejsza o 10%
    
    switch(zasloniecie) {
        case 'cienka':
            poziomSwiatla *= 0.8;
            break;
        case 'gruba':
            poziomSwiatla *= 0.5;
            break;
        case 'drzewo':
            poziomSwiatla *= 0.6;
            break;
    }
    
    if (pietro === 'parter') poziomSwiatla *= 0.85;
    else if (pietro === '4+') poziomSwiatla *= 1.1;
    
    poziomSwiatla = Math.max(10, Math.min(100, poziomSwiatla));
    
    // Określenie kategorii światła
    let kategoriaSwiatla, opisKategorii, odpowiednieRosliny;
    
    if (poziomSwiatla >= 70) {
        kategoriaSwiatla = 'Bardzo jasne / Bezpośrednie słońce';
        opisKategorii = 'Idealne miejsce dla roślin słoncolubnych';
        odpowiednieRosliny = ['Kaktusy i sukulenty', 'Krotony', 'Aloes', 'Grubosz', 'Kalanchoe', 'Cytryna'];
    } else if (poziomSwiatla >= 50) {
        kategoriaSwiatla = 'Jasne rozproszone';
        opisKategorii = 'Najlepsze miejsce dla większości roślin domowych';
        odpowiednieRosliny = ['Monstera', 'Filodendron', 'Pothos', 'Skrzydłokwiat', 'Fikus', 'Dracena'];
    } else if (poziomSwiatla >= 30) {
        kategoriaSwiatla = 'Półcień';
        opisKategorii = 'Odpowiednie dla roślin tolerujących mniej światła';
        odpowiednieRosliny = ['Paprocie', 'Zamiokulkas', 'Aspidistra', 'Aglaonema', 'Sansewieria'];
    } else {
        kategoriaSwiatla = 'Cień';
        opisKategorii = 'Trudne warunki, tylko najbardziej odporne gatunki';
        odpowiednieRosliny = ['Zamiokulkas', 'Aspidistra', 'Sansewieria (wolniej rośnie)'];
    }
    
    const orientacjeOpisy = {
        'polnocne': 'Północne okna zapewniają łagodne, rozproszone światło przez cały dzień',
        'wschodnie': 'Wschodnie okna dają delikatne poranne słońce - idealne dla większości roślin',
        'poludniowe': 'Południowe okna zapewniają najwięcej bezpośredniego słońca',
        'zachodnie': 'Zachodnie okna dają intensywne popołudniowe słońce'
    };
    
    let porady = [];
    
    if (poziomSwiatla < 40) {
        porady.push('💡 Rozważ użycie lamp do wzrostu roślin (LED)');
        porady.push('📍 Umieść rośliny jak najbliżej okna');
    }
    
    if (poziomSwiatla > 80 && zasloniecie === 'brak') {
        porady.push('⚠️ Intensywne słońce latem może szkodzić - rozważ cienką firanką');
    }
    
    if (odleglosc > 2) {
        porady.push('📏 Odległość większa niż 2m znacznie zmniejsza ilość światła');
    }
    
    porady.push('🔄 Obracaj rośliny co tydzień o 1/4 obrotu dla równomiernego wzrostu');
    porady.push('🧹 Czyść liście regularnie - kurz blokuje światło');
    
    document.getElementById('wynik-naslonecznienie').innerHTML = `
        <h3>📊 Analiza nasłonecznienia</h3>
        <div class="wynik-glowny">Poziom światła: ${Math.round(poziomSwiatla)}%</div>
        <p><strong>Kategoria:</strong> ${kategoriaSwiatla}</p>
        <p><strong>Orientacja:</strong> ${orientacjeOpisy[orientacja]}</p>
        
        <div class="wykres-kontener">
            <h4>Porównanie poziomów światła:</h4>
            ${utworzWykres('Twoje miejsce', Math.round(poziomSwiatla), 100)}
            ${utworzWykres('Jasne rozproszone', 60, 100)}
            ${utworzWykres('Bezpośrednie słońce', 85, 100)}
        </div>
        
        <div class="ramka-info">
            <h4>🌿 Odpowiednie rośliny dla tego miejsca</h4>
            <p style="font-size: 1.1rem;"><strong>${opisKategorii}</strong></p>
            <ul style="margin-left: 1.5rem; margin-top: 0.8rem;">
                ${odpowiednieRosliny.map(r => `<li>${r}</li>`).join('')}
            </ul>
        </div>
        
        <div class="wskazowki-wyniku">
            <h4>💡 Porady dotyczące oświetlenia:</h4>
            ${porady.map(p => `<p>• ${p}</p>`).join('')}
        </div>
    `;
    
    pokazWynik('wynik-naslonecznienie');
}

// ===== KALKULATOR 5: HARMONOGRAM PIELĘGNACJI =====

function generujHarmonogram() {
    const liczbaRoslin = parseInt(document.getElementById('liczba-roslin').value);
    const czestotliwoscPodlew = parseInt(document.getElementById('czest-podlew-harm').value);
    const czestotliwoscNawoz = parseInt(document.getElementById('czest-nawoz-harm').value);
    const czyOpryskiwanie = document.getElementById('czy-opryskiwanie').checked;
    const czyCzyszczenie = document.getElementById('czy-czyszczenie').checked;
    
    // Oblicz liczbę działań w miesiącu
    const podlewanMiesiac = Math.floor(30 / czestotliwoscPodlew);
    const nawozMiesiac = Math.floor(30 / czestotliwoscNawoz);
    const opryskiwanMiesiac = czyOpryskiwanie ? 12 : 0; // co 2-3 dni
    const czyszczenieMiesiac = czyCzyszczenie ? 4 : 0; // co tydzień
    
    const sumaZadanMiesiac = (podlewanMiesiac + nawozMiesiac + opryskiwanMiesiac + czyszczenieMiesiac) * liczbaRoslin;
    const czasMiesiac = Math.round(sumaZadanMiesiac * 5); // 5 minut na zadanie
    const czasTydzien = Math.round(czasMiesiac / 4);
    
    // Wygeneruj przykładowy harmonogram na miesiąc
    const dzisiaj = new Date();
    let harmonogram = [];
    
    for (let dzien = 1; dzien <= 30; dzien++) {
        let zadania = [];
        
        if (dzien % czestotliwoscPodlew === 0) {
            zadania.push(`Podlewanie (${liczbaRoslin} roślin)`);
        }
        
        if (dzien % czestotliwoscNawoz === 0) {
            zadania.push(`Nawożenie (${liczbaRoslin} roślin)`);
        }
        
        if (czyOpryskiwanie && dzien % 3 === 0) {
            zadania.push(`Opryskiwanie liści`);
        }
        
        if (czyCzyszczenie && dzien % 7 === 0) {
            zadania.push(`Czyszczenie liści`);
        }
        
        if (zadania.length > 0) {
            const data = new Date(dzisiaj);
            data.setDate(dzisiaj.getDate() + dzien - 1);
            const dzienTygodnia = ['Nd', 'Pn', 'Wt', 'Śr', 'Cz', 'Pt', 'So'][data.getDay()];
            
            harmonogram.push({
                dzien: dzien,
                dzienTygodnia: dzienTygodnia,
                data: `${data.getDate()}.${data.getMonth() + 1}`,
                zadania: zadania
            });
        }
    }
    
    // Podsumowanie miesięczne
    const podsumowanie = {
        podlewanie: podlewanMiesiac * liczbaRoslin,
        nawozenie: nawozMiesiac * liczbaRoslin,
        opryskiwanie: opryskiwanMiesiac * liczbaRoslin,
        czyszczenie: czyszczenieMiesiac * liczbaRoslin
    };
    
    let wskazowki = [
        '📱 Ustaw przypomnienia w telefonie aby nie zapomnieć o zadaniach',
        '📝 Prowadź notatki o stanie roślin - pomaga to dostrzec problemy wcześnie',
        '💧 Sprawdzaj zawsze wilgotność przed podlaniem - harmonogram jest tylko wytyczną',
        '🔄 Dostosuj harmonogram do pór roku - zimą podlewamy rzadziej',
    ];
    
    if (liczbaRoslin > 10) {
        wskazowki.push('🌿 Duża kolekcja - rozważ zakup automatycznego systemu podlewania');
    }
    
    if (sumaZadanMiesiac > 100) {
        wskazowki.push('⏰ To dość czasochłonna pielęgnacja - możesz uprościć harmonogram');
    }
    
    document.getElementById('wynik-harmonogram').innerHTML = `
        <h3>📊 Twój harmonogram pielęgnacji</h3>
        <div class="wynik-glowny">${czasTydzien} minut tygodniowo</div>
        <p><strong>Suma zadań w miesiącu:</strong> ${sumaZadanMiesiac}</p>
        <p><strong>Szacowany czas miesięcznie:</strong> ${czasMiesiac} minut (${Math.floor(czasMiesiac/60)}h ${czasMiesiac%60}min)</p>
        
        <div class="wykres-kontener">
            <h4>Rozkład zadań w miesiącu:</h4>
            <div class="pasek-wykresu">
                <div class="etykieta-paska">Podlewanie:</div>
                <div class="pasek" style="width: ${(podsumowanie.podlewanie/sumaZadanMiesiac)*100}%">
                    ${podsumowanie.podlewanie}x
                </div>
            </div>
            ${podsumowanie.nawozenie > 0 ? `
            <div class="pasek-wykresu">
                <div class="etykieta-paska">Nawożenie:</div>
                <div class="pasek" style="width: ${(podsumowanie.nawozenie/sumaZadanMiesiac)*100}%; background: linear-gradient(90deg, #8bc34a 0%, #689f38 100%);">
                    ${podsumowanie.nawozenie}x
                </div>
            </div>
            ` : ''}
            ${podsumowanie.opryskiwanie > 0 ? `
            <div class="pasek-wykresu">
                <div class="etykieta-paska">Opryskiwanie:</div>
                <div class="pasek" style="width: ${(podsumowanie.opryskiwanie/sumaZadanMiesiac)*100}%; background: linear-gradient(90deg, #4fc3f7 0%, #0288d1 100%);">
                    ${podsumowanie.opryskiwanie}x
                </div>
            </div>
            ` : ''}
            ${podsumowanie.czyszczenie > 0 ? `
            <div class="pasek-wykresu">
                <div class="etykieta-paska">Czyszczenie:</div>
                <div class="pasek" style="width: ${(podsumowanie.czyszczenie/sumaZadanMiesiac)*100}%; background: linear-gradient(90deg, #ffb74d 0%, #f57c00 100%);">
                    ${podsumowanie.czyszczenie}x
                </div>
            </div>
            ` : ''}
        </div>
        
        <div class="wykres-kontener">
            <h4>📅 Szczegółowy harmonogram na najbliższe 30 dni:</h4>
            <table class="harmonogram-tabela">
                <thead>
                    <tr>
                        <th>Dzień</th>
                        <th>Data</th>
                        <th>Zadania</th>
                    </tr>
                </thead>
                <tbody>
                    ${harmonogram.slice(0, 15).map(h => `
                        <tr>
                            <td><strong>${h.dzienTygodnia}</strong> Dzień ${h.dzien}</td>
                            <td>${h.data}</td>
                            <td>
                                ${h.zadania.map(z => `<div>✓ ${z}</div>`).join('')}
                            </td>
                        </tr>
                    `).join('')}
                </tbody>
            </table>
            <p style="margin-top: 1rem; font-style: italic; color: #666;">
                Pokazano pierwsze 15 dni z zadaniami. Pełny harmonogram powtarza się cyklicznie.
            </p>
        </div>
        
        <div class="wskazowki-wyniku">
            <h4>💡 Wskazówki do harmonogramu:</h4>
            ${wskazowki.map(w => `<p>• ${w}</p>`).join('')}
        </div>
        
        <div class="ramka-info">
            <h4>📥 Chcesz zapisać harmonogram?</h4>
            <p>Możesz zrobić screenshot tej strony lub przepisać najważniejsze daty do swojego kalendarza. 
            Pamiętaj, że to tylko wytyczne - obserwuj swoje rośliny i dostosowuj harmonogram do ich potrzeb!</p>
        </div>
    `;
    
    pokazWynik('wynik-harmonogram');
}

console.log('🧮 Skrypty kalkulatorów załadowane!');