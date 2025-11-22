// ===== BAZA DANYCH ROŚLIN DO GALERII =====
const roslinyCalosc = [
    // ROŚLINY DLA POCZĄTKUJĄCYCH
    {
        id: 1,
        nazwa: 'Monstera deliciosa',
        nazwaLacinska: 'Monstera deliciosa',
        kategorie: ['latwe', 'zielone', 'oczyszczajace'],
        ikona: '<img src = "../obrazki/storczyk.png">',
        poziom: 'latwe',
        swiatlo: 'Jasne rozproszone',
        podlewanie: 'Umiarkowane (co 7-10 dni)',
        temperatura: '18-28°C',
        wilgotnosc: '60-70%',
        wysokosc: 'Do 3m w domu',
        opis: 'Monstera deliciosa, potocznie zwana dziurką lub filodendronem dziurawym, to jedna z najpopularniejszych roślin doniczkowych. Charakteryzuje się dużymi, dziurawymi liśćmi, które nadają wnętrzu tropikalny charakter. Jest bardzo odporna i wybaczy początkującym wiele błędów. Świetnie sprawdza się jako roślina wolnostojąca lub pnącza przy podporze.'
    },
    {
        id: 2,
        nazwa: 'Sansewieria',
        nazwaLacinska: 'Sansevieria trifasciata',
        kategorie: ['latwe', 'zielone', 'oczyszczajace'],
        ikona: '🗡️',
        poziom: 'latwe',
        swiatlo: 'Dowolne (toleruje cień)',
        podlewanie: 'Rzadkie (co 14-21 dni)',
        temperatura: '15-30°C',
        wilgotnosc: '40-50%',
        wysokosc: '30-120cm',
        opis: 'Sansewieria, zwana również językiem teściowej lub meczem, to praktycznie niezniszczalna roślina. Toleruje zaniedbanie, słabe światło i rzadkie podlewanie. Jest idealna dla zapracowanych osób i tych, którzy często wyjeżdżają. Co więcej, produkuje tlen w nocy, więc świetnie nadaje się do sypialni. Dostępne są odmiany o różnej wysokości i wzorach na liściach.'
    },
    {
        id: 3,
        nazwa: 'Pothos Złocisty',
        nazwaLacinska: 'Epipremnum aureum',
        kategorie: ['latwe', 'zielone', 'oczyszczajace'],
        ikona: '🌱',
        poziom: 'latwe',
        swiatlo: 'Jasne rozproszone do półcienia',
        podlewanie: 'Umiarkowane (co 7-10 dni)',
        temperatura: '18-28°C',
        wilgotnosc: '50-70%',
        wysokosc: 'Pnącza do kilku metrów',
        opis: 'Pothos, znany również jako złotokwiat, to szybko rosnąca pnącza idealna do zawieszenia w doniczce lub jako roślina wspinająca się. Ma piękne, sercowate liście z żółtymi lub białymi przebarwieniami. Jest bardzo łatwa w uprawie i doskonale oczyszcza powietrze. Można ją łatwo rozmnażać przez sadzonki w wodzie.'
    },
    {
        id: 4,
        nazwa: 'Zamiokulkas',
        nazwaLacinska: 'Zamioculcas zamiifolia',
        kategorie: ['latwe', 'zielone'],
        ikona: '🌿',
        poziom: 'latwe',
        swiatlo: 'Cień do jasnego',
        podlewanie: 'Bardzo rzadkie (co 14-28 dni)',
        temperatura: '18-26°C',
        wilgotnosc: '40-60%',
        wysokosc: '60-90cm',
        opis: 'Zamiokulkas to roślina sukkulentowa, która magazynuje wodę w swoich mięsistych korzeniach. Dzięki temu przetrwa nawet długie okresy suszy. Ma błyszczące, ciemnozielone liście ułożone w pióropusze. Jest idealna dla zapominalskich i początkujących. Toleruje różne warunki świetlne i rzadko choruje.'
    },
    {
        id: 5,
        nazwa: 'Chlorophytum',
        nazwaLacinska: 'Chlorophytum comosum',
        kategorie: ['latwe', 'zielone', 'oczyszczajace'],
        ikona: '🎋',
        poziom: 'latwe',
        swiatlo: 'Jasne rozproszone',
        podlewanie: 'Umiarkowane (co 5-7 dni)',
        temperatura: '15-25°C',
        wilgotnosc: '40-60%',
        wysokosc: '30-50cm',
        opis: 'Zielistka, zwana również trawką, to klasyczna roślina domowa znana z lat 70. i 80. Tworzy rozety długich, wąskich liści w kolorze zielonym z białymi pasami. Wyrzuca długie wąsy z małymi roślinkami, które można łatwo ukorzeniać. Świetnie oczyszcza powietrze z toksyn.'
    },
    
    // ROŚLINY KWITNĄCE
    {
        id: 6,
        nazwa: 'Storczyk Falenopsis',
        nazwaLacinska: 'Phalaenopsis',
        kategorie: ['kwitnace', 'srednie'],
        ikona: '🦋',
        poziom: 'srednie',
        swiatlo: 'Jasne rozproszone',
        podlewanie: 'Specjalne (zanurzanie co 7-10 dni)',
        temperatura: '18-25°C',
        wilgotnosc: '60-80%',
        wysokosc: '30-60cm',
        opis: 'Storczyk falenopsis to najpopularniejszy storczyk doniczkowy, dostępny w wielu kolorach. Kwitnie przez 2-4 miesiące, wyrzucając długie pędy z dużymi, egzotycznymi kwiatami. Wymaga specjalnej pielęgnacji - rośnie w korze, a nie w ziemi, i podlewa się go przez zanurzanie doniczki w wodzie. Po przekwitnieniu można wywołać ponowne kwitnienie.'
    },
    {
        id: 7,
        nazwa: 'Skrzydłokwiat',
        nazwaLacinska: 'Spathiphyllum',
        kategorie: ['kwitnace', 'latwe', 'oczyszczajace'],
        ikona: '☮️',
        poziom: 'latwe',
        swiatlo: 'Półcień do jasnego',
        podlewanie: 'Częste (co 3-5 dni)',
        temperatura: '18-25°C',
        wilgotnosc: '60-80%',
        wysokosc: '30-100cm',
        opis: 'Skrzydłokwiat to popularna roślina o białych, eleganckich kwiatach przypominających pokrywę. Kwitnie wielokrotnie w ciągu roku. Jest jedną z najlepszych roślin oczyszczających powietrze według badań NASA. Lubi wilgoć i daje wyraźny sygnał, gdy potrzebuje wody - liście opadają, ale po podlaniu szybko się prostują.'
    },
    {
        id: 8,
        nazwa: 'Begonia',
        nazwaLacinska: 'Begonia',
        kategorie: ['kwitnace', 'srednie'],
        ikona: '🌺',
        poziom: 'srednie',
        swiatlo: 'Jasne rozproszone',
        podlewanie: 'Umiarkowane (co 5-7 dni)',
        temperatura: '18-24°C',
        wilgotnosc: '50-70%',
        wysokosc: '20-60cm',
        opis: 'Begonie to różnorodna grupa roślin - niektóre mają piękne kwiaty, inne ozdobne liście. Begonie królewskie mają wspaniałe, kolorowe liście z metalicznym połyskiem. Begonie bulwiaste mają duże, pełne kwiaty. Wymagają uważnego podlewania - nie lubią mokrych liści, co może prowadzić do grzybicy.'
    },
    {
        id: 9,
        nazwa: 'Anturium',
        nazwaLacinska: 'Anthurium andreanum',
        kategorie: ['kwitnace', 'srednie'],
        ikona: '❤️',
        poziom: 'srednie',
        swiatlo: 'Jasne rozproszone',
        podlewanie: 'Umiarkowane (co 5-7 dni)',
        temperatura: '20-28°C',
        wilgotnosc: '70-80%',
        wysokosc: '40-80cm',
        opis: 'Anturium, zwane flamingo flower, ma charakterystyczne, błyszczące, sercowate kwiaty w kolorze czerwonym, różowym lub białym. Kwitnie przez cały rok przy odpowiednich warunkach. Pochodzi z tropikalnych lasów, więc lubi wysoką wilgotność i ciepło. Idealna do ciepłych pomieszczeń z nawilżaczem.'
    },
    {
        id: 10,
        nazwa: 'Kalanchoe',
        nazwaLacinska: 'Kalanchoe blossfeldiana',
        kategorie: ['kwitnace', 'latwe', 'sukulenty'],
        ikona: '🌼',
        poziom: 'latwe',
        swiatlo: 'Jasne, toleruje słońce',
        podlewanie: 'Rzadkie (co 10-14 dni)',
        temperatura: '15-25°C',
        wilgotnosc: '40-50%',
        wysokosc: '15-30cm',
        opis: 'Kalanchoe to sukulentowa roślina kwitnąca, dostępna w wielu kolorach - czerwonym, pomarańczowym, różowym, żółtym. Tworzy gęste skupienia małych kwiatów. Jest bardzo łatwa w uprawie, toleruje zaniedbanie i rzadkie podlewanie. Kwitnie przez wiele tygodni, a po przekwitnieniu można wywołać ponowne kwitnienie przez umieszczenie w ciemności.'
    },

    // ROŚLINY ZIELONE
    {
        id: 11,
        nazwa: 'Fikus Sprężysty',
        nazwaLacinska: 'Ficus elastica',
        kategorie: ['zielone', 'srednie', 'oczyszczajace'],
        ikona: '🌳',
        poziom: 'srednie',
        swiatlo: 'Jasne rozproszone',
        podlewanie: 'Umiarkowane (co 7-10 dni)',
        temperatura: '18-26°C',
        wilgotnosc: '50-60%',
        wysokosc: 'Do 2m w domu',
        opis: 'Fikus sprężysty to eleganckie drzewko z dużymi, błyszczącymi liśćmi. Dostępny w odmianach zielonych, ciemnofioletowych i pstrych. Nie lubi zmian miejsca - może zrzucić liście po przeprowadzce. Wymaga stabilnych warunków i regularnego czyszczenia liści. Świetnie oczyszcza powietrze.'
    },
    {
        id: 12,
        nazwa: 'Dracena',
        nazwaLacinska: 'Dracaena marginata',
        kategorie: ['zielone', 'latwe', 'oczyszczajace'],
        ikona: '🎋',
        poziom: 'latwe',
        swiatlo: 'Jasne rozproszone do półcienia',
        podlewanie: 'Umiarkowane (co 7-14 dni)',
        temperatura: '18-24°C',
        wilgotnosc: '40-60%',
        wysokosc: '1-2m',
        opis: 'Dracena to popularne drzewko pokojowe o długich, wąskich liściach ułożonych w rozety na końcach pędów. Jest bardzo wytrzymała i toleruje różne warunki. Istnieje wiele odmian o różnych kolorach i wzorach liści. Świetnie nadaje się do biur i większych pomieszczeń.'
    },
    {
        id: 13,
        nazwa: 'Paproć Nefrolepis',
        nazwaLacinska: 'Nephrolepis exaltata',
        kategorie: ['zielone', 'srednie'],
        ikona: '🌿',
        poziom: 'srednie',
        swiatlo: 'Półcień',
        podlewanie: 'Częste (co 2-4 dni)',
        temperatura: '18-24°C',
        wilgotnosc: '70-90%',
        wysokosc: '30-90cm',
        opis: 'Paproć pokojowa to klasyczna roślina wisząca lub stojąca z pięknymi, ażurowymi liśćmi. Pochodzi z wilgotnych lasów, więc wymaga wysokiej wilgotności i częstego podlewania. Idealna do łazienek. Nie lubi suchego powietrza - końcówki liści brązowieją. Należy regularnie opryskiwać.'
    },
    {
        id: 14,
        nazwa: 'Filodendron Pnący',
        nazwaLacinska: 'Philodendron scandens',
        kategorie: ['zielone', 'latwe', 'oczyszczajace'],
        ikona: '🍃',
        poziom: 'latwe',
        swiatlo: 'Jasne rozproszone do półcienia',
        podlewanie: 'Umiarkowane (co 7-10 dni)',
        temperatura: '18-27°C',
        wilgotnosc: '50-70%',
        wysokosc: 'Pnącza do kilku metrów',
        opis: 'Filodendron pnący to szybko rosnąca pnącza z sercowatymi liśćmi. Bardzo łatwa w uprawie i wybaczająca błędy. Może rosnąć jako roślina wisząca lub wspinająca się po podporze. Doskonale oczyszcza powietrze. Łatwo się rozmnaża przez sadzonki.'
    },
    {
        id: 15,
        nazwa: 'Calathea',
        nazwaLacinska: 'Calathea ornata',
        kategorie: ['zielone', 'trudne'],
        ikona: '🎨',
        poziom: 'trudne',
        swiatlo: 'Półcień',
        podlewanie: 'Częste (co 3-5 dni)',
        temperatura: '18-24°C',
        wilgotnosc: '70-90%',
        wysokosc: '40-80cm',
        opis: 'Calathea to roślina o niezwykle dekoracyjnych liściach z różnymi wzorami i kolorami - od różowego przez fioletowy po zielony. Liście składają się wieczorem i rozkładają rano. Jest kapryśna - wymaga wysokiej wilgotności, stałej temperatury i wody bez chloru. Dla doświadczonych hodowców.'
    },

    // SUKULENTY I KAKTUSY
    {
        id: 16,
        nazwa: 'Grubosz Jajowaty',
        nazwaLacinska: 'Crassula ovata',
        kategorie: ['sukulenty', 'latwe'],
        ikona: '💚',
        poziom: 'latwe',
        swiatlo: 'Jasne, toleruje słońce',
        podlewanie: 'Rzadkie (co 14-21 dni)',
        temperatura: '15-25°C',
        wilgotnosc: '30-50%',
        wysokosc: '30-90cm',
        opis: 'Grubosz, zwany drzewkiem szczęścia, to sukulent przypominający miniaturowe drzewko z mięsistymi, okrągłymi liśćmi. Jest bardzo łatwy w uprawie i może żyć dziesiątki lat. Wymaga rzadkiego podlewania i dużo światła. Przy odpowiednich warunkach może zakwitnąć białymi lub różowymi kwiatami.'
    },
    {
        id: 17,
        nazwa: 'Aloes Zwyczajny',
        nazwaLacinska: 'Aloe vera',
        kategorie: ['sukulenty', 'latwe'],
        ikona: '🌵',
        poziom: 'latwe',
        swiatlo: 'Jasne bezpośrednie',
        podlewanie: 'Rzadkie (co 14-21 dni)',
        temperatura: '15-28°C',
        wilgotnosc: '30-50%',
        wysokosc: '30-60cm',
        opis: 'Aloes to sukulent o długich, mięsistych liściach pełnych żelu o właściwościach leczniczych. Może być stosowany na oparzenia i rany. Jest bardzo łatwy w uprawie, lubi dużo światła i rzadkie podlewanie. Szybko się rozmnaża, wyrzucając boczne odrosty.'
    },
    {
        id: 18,
        nazwa: 'Echeveria',
        nazwaLacinska: 'Echeveria elegans',
        kategorie: ['sukulenty', 'latwe'],
        ikona: '🌹',
        poziom: 'latwe',
        swiatlo: 'Jasne bezpośrednie',
        podlewanie: 'Rzadkie (co 14-21 dni)',
        temperatura: '15-25°C',
        wilgotnosc: '30-40%',
        wysokosc: '10-20cm',
        opis: 'Echeveria to sukulent tworzący piękne rozety przypominające kamienne róże. Dostępna w wielu odmianach o różnych kolorach - od niebieskiego przez szary po różowy. Jest bardzo dekoracyjna i łatwa w uprawie. Idealna do kompozycji z innymi sukulentami.'
    },
    {
        id: 19,
        nazwa: 'Kaktus Mammillaria',
        nazwaLacinska: 'Mammillaria',
        kategorie: ['sukulenty', 'latwe'],
        ikona: '🌵',
        poziom: 'latwe',
        swiatlo: 'Jasne bezpośrednie',
        podlewanie: 'Bardzo rzadkie (co 21-28 dni)',
        temperatura: '15-28°C, zimą 10-15°C',
        wilgotnosc: '30-40%',
        wysokosc: '10-30cm',
        opis: 'Mammillaria to jeden z najpopularniejszych kaktusów, tworzący kuliste lub cylindryczne kształty pokryte kolcami. Przy odpowiedniej zimowej przerwie kwitnie wiosną koroną małych, kolorowych kwiatów. Wymaga minimalnej pielęgnacji - dużo światła i bardzo rzadkiego podlewania.'
    },
    {
        id: 20,
        nazwa: 'Sedum (Rozchodnik)',
        nazwaLacinska: 'Sedum morganianum',
        kategorie: ['sukulenty', 'latwe'],
        ikona: '💚',
        poziom: 'latwe',
        swiatlo: 'Jasne rozproszone',
        podlewanie: 'Rzadkie (co 14 dni)',
        temperatura: '18-26°C',
        wilgotnosc: '30-50%',
        wysokosc: '30-60cm (wisząca)',
        opis: 'Rozchodnik ogonowy to wisząca roślina sukkulentowa z długimi pędami pokrytymi mięsistymi, niebiesko-zielonymi liśćmi. Wygląda spektakularnie w wiszącej doniczce. Jest bardzo łatwy w uprawie, toleruje zaniedbanie. Świetny do suchych, słonecznych miejsc.'
    },

    // ROŚLINY EGZOTYCZNE
    {
        id: 21,
        nazwa: 'Alocasia',
        nazwaLacinska: 'Alocasia amazonica',
        kategorie: ['egzotyczne', 'zielone', 'trudne'],
        ikona: '🐘',
        poziom: 'trudne',
        swiatlo: 'Jasne rozproszone',
        podlewanie: 'Umiarkowane (co 5-7 dni)',
        temperatura: '20-28°C',
        wilgotnosc: '70-85%',
        wysokosc: '40-90cm',
        opis: 'Alocasia, zwana uszy słonia, ma efektowne, duże liście w kształcie strzałek z białymi żyłkami. Jest kapryśna - wymaga wysokiej wilgotności, ciepła i jasnego światła. Nie toleruje przeciągów ani gwałtownych zmian warunków. Zimą może przejść w stan spoczynku i zrzucić liście.'
    },
    {
        id: 22,
        nazwa: 'Strelicja',
        nazwaLacinska: 'Strelitzia reginae',
        kategorie: ['egzotyczne', 'kwitnace', 'trudne'],
        ikona: '🦜',
        poziom: 'trudne',
        swiatlo: 'Jasne bezpośrednie',
        podlewanie: 'Umiarkowane (co 7-10 dni)',
        temperatura: '18-28°C',
        wilgotnosc: '50-70%',
        wysokosc: '1-2m',
        opis: 'Strelicja, zwana rajskim ptakiem, ma spektakularne, egzotyczne kwiaty przypominające głowę kolorowego ptaka. Wymaga dużo światła i przestrzeni. Kwitnie tylko dojrzałe rośliny (minimum 5-6 lat). Potrzebuje dużej doniczki i regularnego nawożenia. Efektowna, ale wymagająca.'
    },
    {
        id: 23,
        nazwa: 'Bananowiec',
        nazwaLacinska: 'Musa',
        kategorie: ['egzotyczne', 'zielone', 'srednie'],
        ikona: '🍌',
        poziom: 'srednie',
        swiatlo: 'Jasne bezpośrednie',
        podlewanie: 'Częste (co 3-5 dni)',
        temperatura: '20-30°C',
        wilgotnosc: '60-80%',
        wysokosc: '1-3m',
        opis: 'Bananowiec doniczkowy to egzotyczna roślina o ogromnych, dekoracyjnych liściach. Niektóre odmiany mogą owocować w warunkach domowych. Wymaga dużo miejsca, światła i wody. Szybko rośnie i potrzebuje regularnego nawożenia. Idealny do tworzenia tropikalnej atmosfery.'
    },
    {
        id: 24,
        nazwa: 'Mioszak',
        nazwaLacinska: 'Dionaea muscipula',
        kategorie: ['egzotyczne', 'trudne'],
        ikona: '🪰',
        poziom: 'trudne',
        swiatlo: 'Jasne bezpośrednie (min 4h słońca)',
        podlewanie: 'Specjalne (woda destylowana)',
        temperatura: '20-30°C, zimą 5-15°C',
        wilgotnosc: '60-80%',
        wysokosc: '10-20cm',
        opis: 'Muchołówka to mięsożerna roślina łapiąca owady w pułapki-liście. Fascynująca, ale bardzo wymagająca. Potrzebuje destylowanej wody, słonecznego miejsca i zimy w chłodzie. Nie można dotykać pułapek dla zabawy - każde zamknięcie kosztuje roślinę energię. Dla doświadczonych hodowców.'
    },
    {
        id: 25,
        nazwa: 'Nepenthes',
        nazwaLacinska: 'Nepenthes',
        kategorie: ['egzotyczne', 'trudne'],
        ikona: '🏺',
        poziom: 'trudne',
        swiatlo: 'Jasne rozproszone',
        podlewanie: 'Częste, woda miękka',
        temperatura: '20-30°C',
        wilgotnosc: '70-90%',
        wysokosc: '30cm-kilka metrów',
        opis: 'Nepenthes to roślina mięsożerna tworząca dzbanuszki-pułapki na owady. Jest jedną z najefektowniejszych roślin doniczkowych. Wymaga bardzo wysokiej wilgotności, najlepiej w terrarium. Dzbanuszki muszą być częściowo wypełnione wodą. Dla zaawansowanych hodowców roślin mięsożernych.'
    },

    // WIĘCEJ POPULARNYCH ROŚLIN
    {
        id: 26,
        nazwa: 'Pilea Peperomioides',
        nazwaLacinska: 'Pilea peperomioides',
        kategorie: ['latwe', 'zielone'],
        ikona: '🥞',
        poziom: 'latwe',
        swiatlo: 'Jasne rozproszone',
        podlewanie: 'Umiarkowane (co 7-10 dni)',
        temperatura: '15-25°C',
        wilgotnosc: '50-60%',
        wysokosc: '30-40cm',
        opis: 'Pilea, zwana rośliną pieniążek chiński, ma okrągłe liście przypominające monety. Stała się modna w ostatnich latach dzięki mediom społecznościowym. Jest łatwa w uprawie i szybko produkuje odrosty, którymi można się dzielić z przyjaciółmi. Lubi jasne miejsce i regularne obracanie.'
    },
    {
        id: 27,
        nazwa: 'Maranta',
        nazwaLacinska: 'Maranta leuconeura',
        kategorie: ['zielone', 'srednie'],
        ikona: '🙏',
        poziom: 'srednie',
        swiatlo: 'Półcień',
        podlewanie: 'Częste (co 4-6 dni)',
        temperatura: '18-25°C',
        wilgotnosc: '60-80%',
        wysokosc: '30-40cm',
        opis: 'Maranta, zwana modliszką, ma pięknie wzorzyste liście, które składają się pionowo wieczorem jak do modlitwy. Pochodzi z tropikalnych lasów, więc lubi wilgoć i ciepło. Wymaga uważnego podlewania i wysokiej wilgotności. Idealna do terrariów lub ciepłych, wilgotnych pomieszczeń.'
    },
    {
        id: 28,
        nazwa: 'Peperomia',
        nazwaLacinska: 'Peperomia caperata',
        kategorie: ['latwe', 'zielone'],
        ikona: '🍃',
        poziom: 'latwe',
        swiatlo: 'Jasne rozproszone',
        podlewanie: 'Umiarkowane (co 7-10 dni)',
        temperatura: '18-24°C',
        wilgotnosc: '50-60%',
        wysokosc: '20-40cm',
        opis: 'Peperomia to kompaktowa roślina o mięsistych liściach dostępnych w wielu odmianach - gładkie, pomarszczone, okrągłe, lancetowate. Jest bardzo łatwa w uprawie i zajmuje mało miejsca. Idealna na parapety i małe przestrzenie. Nie lubi przelania.'
    },
    {
        id: 29,
        nazwa: 'Hoja Mięsista',
        nazwaLacinska: 'Hoya carnosa',
        kategorie: ['kwitnace', 'srednie', 'sukulenty'],
        ikona: '⭐',
        poziom: 'srednie',
        swiatlo: 'Jasne rozproszone',
        podlewanie: 'Rzadkie (co 10-14 dni)',
        temperatura: '18-25°C',
        wilgotnosc: '50-70%',
        wysokosc: 'Pnącza do kilku metrów',
        opis: 'Hoja to pnącza sukkulentowa o woskowych liściach i spektakularnych, pachnących kwiatach w kształcie gwiazdek. Kwiaty wydzielają nektar. Jest dość łatwa w uprawie, ale wymaga czasu i cierpliwości - zakwita dopiero dorosła roślina. Pędy kwiatowe nie należy usuwać, bo na nich ponownie zakwitnie.'
    },
    {
        id: 30,
        nazwa: 'Syngonium',
        nazwaLacinska: 'Syngonium podophyllum',
        kategorie: ['latwe', 'zielone'],
        ikona: '🏹',
        poziom: 'latwe',
        swiatlo: 'Jasne rozproszone do półcienia',
        podlewanie: 'Umiarkowane (co 5-7 dni)',
        temperatura: '18-26°C',
        wilgotnosc: '50-70%',
        wysokosc: '60cm-2m',
        opis: 'Syngonium to szybko rosnąca pnącza o strzałkowatych liściach. Młode rośliny mają liście o innym kształcie niż dorosłe. Dostępny w wielu odmianach - zielone, różowe, białe. Jest bardzo łatwy w uprawie i może rosnąć jako roślina wisząca lub wspinająca się.'
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
    
    // Filtruj i renderuj rośliny do odpowiednich kategorii
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
    // Aktualizuj przyciski
    document.querySelectorAll('.przycisk-filtr').forEach(btn => {
        btn.classList.remove('aktywny');
    });
    event.target.classList.add('aktywny');
    
    // Pokaż/ukryj kategorie
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
        document.querySelectorAll('.karta-rosliny').forEach(karta => {
            karta.style.display = 'block';
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
    
    // Ukryj wszystkie sekcje najpierw
    document.querySelectorAll('.kategoria-sekcja').forEach(s => s.style.display = 'none');
    
    karty.forEach(karta => {
        const id = parseInt(karta.dataset.id);
        const roslina = roslinyCalosc.find(r => r.id === id);
        
        const czyPasuje = 
            roslina.nazwa.toLowerCase().includes(zapytanie) ||
            roslina.nazwaLacinska.toLowerCase().includes(zapytanie) ||
            roslina.opis.toLowerCase().includes(zapytanie) ||
            roslina.kategorie.some(k => k.includes(zapytanie));
        
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