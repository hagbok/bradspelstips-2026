// ============================================================
//  Brädspelstips 2026 – speldata
//  Lägg till ett nytt spel genom att kopiera ett block i GAMES
//  och ändra värdena. Sätt  isNew: true  för att få "Nytt 2026"-märket.
//
//  Fält:
//   name     Spelets namn
//   alt      (valfritt) alternativt namn, t.ex. svensk titel
//   cat      Kategori-id (se CATEGORIES nedan)
//   players  Antal spelare, t.ex. "2-5"
//   time     Speltid, t.ex. "30-60 min"
//   age      Rekommenderad ålder enligt lådan, t.ex. "8+"
//   rating   Snittbetyg på BoardGameGeek (1-10), ungefärligt
//   weight   "Tyngd"/komplexitet på BoardGameGeek (1-5), ungefärligt
//   bgg      Länk till spelet på BoardGameGeek
//   extra    (valfritt) lista med fler länkar: [{ label, url }]
//   text     Beskrivning (stycken separeras med \n\n)
//   isNew    (valfritt) true för nya tips 2026
// ============================================================

const CATEGORIES = [
  { id: "strategi", name: "Strategispel", icon: "♜" },
  { id: "party", name: "Partyspel & frågespel", icon: "🎉" },
  { id: "tarning", name: "Tärningsspel", icon: "🎲" },
  { id: "abstrakt", name: "Abstrakta spel", icon: "◆" },
  { id: "samarbete", name: "Samarbetsspel", icon: "🤝" },
  { id: "tva", name: "För två", icon: "♥" },
  { id: "snabba", name: "Snabba kortspel", icon: "🃏" },
];

const GAMES = [
  // ---------------- Strategispel ----------------
  {
    name: "Ticket to Ride",
    cat: "strategi",
    players: "2-5", time: "30-60 min", age: "8+", rating: 7.4, weight: 1.8,
    bgg: "https://boardgamegeek.com/boardgame/9209/ticket-ride",
    text: "Enkelt och ganska snabbt spel där man bygger tåglinjer mellan städer i USA. Kan du förbinda städerna på dina uppdragskort får du en massa extrapoäng. Ofta är det någon som råkar bygga precis där du ville så du får ta en liten omväg, men hinner du innan någon får slut på tåg? Ett mycket bra spel som uppskattas av de flesta. Det finns flera uppföljare som komplicerar reglerna på olika sätt (Ticket to Ride: Europa, Ticket to Ride: Asia m.fl.). Jag rekommenderar grundspelet till att börja med.",
  },
  {
    name: "Carcassonne",
    cat: "strategi",
    players: "2-5", time: "30-45 min", age: "7+", rating: 7.4, weight: 1.9,
    bgg: "https://boardgamegeek.com/boardgame/822/carcassonne",
    text: "Lägg brickor på bordet så att kanterna passar mot övriga. Om du vill kan du sedan placera en figur för att ta besittning av en stad/väg/kloster/äng på brickan du lade. När nya brickor läggs kan du utöka poängen för din besittning. Ett ganska enkelt spel med lite lagom gruff för att få till sina byggen och försöka ta över de andras. Det finns massor av expansioner för att bygga ut med fler sorters brickor och pjäser – skaffa den blåa grundboxen!",
  },
  {
    name: "Catan",
    alt: "The Settlers of Catan",
    cat: "strategi",
    players: "3-4", time: "60-120 min", age: "10+", rating: 7.1, weight: 2.3,
    bgg: "https://boardgamegeek.com/boardgame/13/catan",
    text: "Kolonisera ön Catan med vägar, byar och städer. Varje drag slår man två tärningar för att se vilka rutor som ger resurser till de spelare som har hus runtom, vilket gör att man är delaktig även under de andras drag. Ofta saknar du den sista resursen för att bygga något och byteshandel mellan spelarna är en stor del av spelet. Först till 10 poäng vinner (poäng ges för städer, byar, kort m.m.).\n\nEtt lite matigare spel med stenhård konkurrens, men ett av de mest sålda brädspelen i världen. Även här finns expansioner så skaffa grundboxen – det finns flera versioner av den så fråga för säkerhets skull. Notera att det är för 3-4 spelare.",
  },
  {
    name: "Kingdomino",
    cat: "strategi",
    players: "2-4", time: "15 min", age: "8+", rating: 7.3, weight: 1.2,
    bgg: "https://boardgamegeek.com/boardgame/204583/kingdomino",
    text: "Snabbt, enkelt men lite utmanande. Konkurrera om att välja brickor till ditt rike och pussla sedan ihop dem på det mest poänggivande sättet. Det är så snabbt att det ofta blir flera partier.",
  },
  {
    name: "Diamant",
    cat: "strategi",
    players: "3-8", time: "30 min", age: "8+", rating: 7.0, weight: 1.1,
    bgg: "https://boardgamegeek.com/boardgame/15512/diamant",
    text: "Ett kul och snabbt spel av typen ”push-your-luck”, vilket innebär att du satsar och tar allt större risk att förlora allt. Fick välförtjänt Guldtärningen för årets spel 2018 – det hade det kunnat få redan 2007 då den första svenska versionen kom ut… Stort plus att det fungerar bra på 3-8 spelare!",
  },
  {
    name: "Splendor",
    cat: "strategi",
    players: "2-4", time: "30 min", age: "10+", rating: 7.4, weight: 1.8,
    bgg: "https://boardgamegeek.com/boardgame/148228/splendor",
    text: "Plocka diamanter för att köpa fler diamanter och samla rätt kombinationer för att kunna köpa korten före dina motspelare. Gemytlig kapplöpning till 15 poäng, har spelats mycket hemma. Även här har det kommit en expansion i en liknande låda – ta den med herren på och skaffa damen om du fastnar lika hårt som min familj :)",
  },

  // ---------------- Partyspel & frågespel ----------------
  {
    name: "När då då?",
    alt: "Chronology",
    cat: "party",
    players: "2-8", time: "30 min", age: "10+", rating: 6.3, weight: 1.1,
    bgg: "https://boardgamegeek.com/boardgame/834/chronology",
    text: "Snabbt, enkelt frågespel där du ska placera händelser, uppfinningar m.m. i tidsordning. Du behöver alltså inte veta det exakta årtalet! I vilken ordning kom t.ex. färg-tv, Koreakriget och Volvo 740? Mycket Sverige och 1900-tal. Först att placera 10 kort i rätt ordningsföljd vinner. Kan även spelas med reglerna till Timeline nedan. Svenska versionen finns i ganska många affärer.",
  },
  {
    name: "Bezzerwizzer Timeline",
    alt: "Timeline",
    cat: "party",
    players: "2-8", time: "15-30 min", age: "8+", rating: 6.5, weight: 1.1,
    bgg: "https://boardgamegeek.com/boardgame/337617/bezzerwizzer-timeline",
    extra: [{ label: "Timeline (original)", url: "https://boardgamegeek.com/boardgame/128664/timeline" }],
    text: "Frågespel där du ska placera händelser, uppfinningar m.m. i tidsordning. Liknar ”När då då?” ovan fast med mer historiska frågor. Här ska man bli av med sina fyra kort genom att placera dem rätt på en gemensam tidslinje. Ju fler kort som spelats, desto fler att förhålla sig till.\n\nBezzerwizzer har köpt upp Timeline och gjort en egen version där de lagt till möjligheter att satsa på hur andra gissar m.m. Det är troligen bara denna version du hittar i butikerna, men det är också ett spel som varmt rekommenderas.",
  },
  {
    name: "Codenames",
    cat: "party",
    players: "4-8", time: "15 min", age: "10+", rating: 7.6, weight: 1.2,
    bgg: "https://boardgamegeek.com/boardgame/178900/codenames",
    text: "Favoritspelet hemma ett tag. Spelas i två lag så jag tycker att man behöver vara minst 4 för att undvika specialregler. Ett antal kort med ord läggs i ett rutmönster och varje lag ska hitta ”sina” ord. En spelare från varje lag ska försöka ge sitt lag ledtrådar som leder dem till rätt ord. Mycket underhållande och kan spelas tillsammans av olika åldrar. Det finns flera varianter, som vanligt är grundspelet bäst.",
  },
  {
    name: "Dixit",
    cat: "party",
    players: "3-6", time: "30 min", age: "8+", rating: 7.3, weight: 1.2,
    bgg: "https://boardgamegeek.com/boardgame/39856/dixit",
    text: "Välj ett av de unika och fantasifulla korten på din hand och säg ett ord, en fras eller ett uttryck som är en lagom svår ledtråd. Övriga spelare väljer det kort från sina händer som matchar det du sagt bäst. Alla kort blandas dolt och vänds upp. Nu gäller det för medspelarna att gissa vilket kort som var ditt. Själv får du inga poäng om ingen eller alla gissar rätt, så det gäller att hitta en bra nivå på sin ledtråd. Mycket roligt associationsspel som kan spelas av olika åldrar på lika villkor.",
  },
  {
    name: "GiftTRAP",
    cat: "party",
    players: "3-8", time: "45 min", age: "12+", rating: 6.6, weight: 1.2,
    bgg: "https://boardgamegeek.com/boardgame/23686/gifttrap",
    text: "Passar bäst för sällskap som känner varandra ganska väl. Ett antal kort med beskrivningar av presenter läggs på bordet. Alla spelare ska nu dolt välja en present till varje medspelare, och varje present får bara ges bort en gång. Man ska även ranka de tre man själv önskar sig mest samt den man absolut inte vill ha. När alla är klara vänder man upp korten, matchar presenter med önskningar och delar ut poäng på två skalor: lyckade presenter till andra och mottagna presenter. Mer socialt än utmanande, men brukar alltid leda till lite insikter.",
  },

  // ---------------- Tärningsspel ----------------
  {
    name: "That's Pretty Clever!",
    alt: "Ganz schön clever",
    cat: "tarning",
    players: "1-4", time: "30 min", age: "8+", rating: 7.6, weight: 1.9,
    bgg: "https://boardgamegeek.com/boardgame/244522/s-pretty-clever",
    text: "Sugen på Yatzy? Testa detta istället! Ett klurigt tärningsspel där man turas om att slå och spara tärningar i olika färger som samlar poäng på olika sätt. Du har taktiska val hela spelet och är involverad i andras drag eftersom du får använda de tärningar som motspelarna får över.\n\nDet finns flera varianter med lite olika regler men samma grundtänk (Twice as Clever!, Clever Cubed, Clever 4Ever).",
  },
  {
    name: "Pickomino",
    cat: "tarning",
    players: "2-7", time: "20-30 min", age: "8+", rating: 6.7, weight: 1.2,
    bgg: "https://boardgamegeek.com/boardgame/15818/pickomino",
    text: "Slå tärningar och lägg sedan ALLA tärningar av en siffra du INTE valt tidigare åt sidan. Det gäller att komma upp i en totalsumma som räcker för att erövra en av brickorna på bordet (eller ännu hellre en av motspelarnas). Dessutom måste du spara minst en mask (värd fem poäng). Gemytligt tärningsspel.",
  },
  {
    name: "Las Vegas",
    cat: "tarning",
    players: "2-5", time: "30 min", age: "8+", rating: 7.0, weight: 1.1,
    bgg: "https://boardgamegeek.com/boardgame/117959/las-vegas",
    text: "Slå dina tärningar och sätt sedan alla med en siffra du väljer på motsvarande casino (1-6). Flest tärningar på varje casino får pengarna som ligger där när alla fått ut sina tärningar. Man tar dock först bort alla som kommit lika! Om två spelare har 3 tärningar var på samma casino tas de därmed bort och spelaren med 1 tärning där tar potten. Mycket skadeglädje, speciellt när någon råkar slå precis det de inte vill placera ut med sina sista tärningar.",
  },

  // ---------------- Abstrakta spel ----------------
  {
    name: "Azul",
    cat: "abstrakt",
    players: "2-4", time: "30-45 min", age: "8+", rating: 7.7, weight: 1.8,
    bgg: "https://boardgamegeek.com/boardgame/230802/azul",
    text: "Turas om att plocka brickor från ett gemensamt förråd och pussla in dem på din spelplan. Du måste ta alla av samma färg från den fabrik du plockar ifrån och försöker hitta de som passar dig bäst – de du inte får plats med ger minuspoäng. Lite placeringsregler gör att du begränsas i möjligheter efter några rundor och kan börja snegla på hur du bäst ställer till det för dina medspelare. Vackert, ganska snabbt, funkar bra med 2-4 spelare, kul!",
  },
  {
    name: "Set",
    cat: "abstrakt",
    players: "1-20", time: "30 min", age: "6+", rating: 6.0, weight: 1.1,
    bgg: "https://boardgamegeek.com/boardgame/1198/set",
    text: "Försök hitta 3 kort som alla är lika/olika i fyra kriterier (färg, form, fyllning och antal) före motståndarna. Snabb hjärngympa för alla som gillar en abstrakt utmaning. Notera att man kan vara många!",
  },
  {
    name: "Helt Genialt",
    alt: "Ingenious",
    cat: "abstrakt",
    players: "1-4", time: "45 min", age: "10+", rating: 7.2, weight: 1.9,
    bgg: "https://boardgamegeek.com/boardgame/9674/ingenious",
    text: "Placera brickor för att samla poäng i sex färger, men bara din sämsta färg räknas i slutet! Ska du plocka 7 poäng i din medelstarka färg eller 1 i din svagaste? Kul kamp med lite möjligheter till elakhet. Funkar bra på 2-4.",
  },
  {
    name: "Blokus",
    cat: "abstrakt",
    players: "2-4", time: "20 min", age: "5+", rating: 6.9, weight: 1.4,
    bgg: "https://boardgamegeek.com/boardgame/2453/blokus",
    text: "Lägg tetrisliknande brickor på ett bräde. Varje bit måste nudda dina tidigare bitar med ett hörn. Försök få ut alla dina bitar samtidigt som du blockerar motspelarna. Bäst på 4. Det finns några varianter med andra bitar, men jag tycker det blir svåröverskådligt med hexagoner eller trianglar – kör på fyrkanterna!",
  },
  {
    name: "Ricochet Robots",
    cat: "abstrakt",
    players: "1-99", time: "30 min", age: "10+", rating: 7.0, weight: 2.0,
    bgg: "https://boardgamegeek.com/boardgame/51/ricochet-robots",
    text: "Fyra robotar står på ett bräde och kan flyttas som torn i schack – utan broms. Uppdraget: att klura ut hur man kan flytta en av dem till en speciell ruta. När någon har en lösning säger man antalet drag och vänder ett timglas; övriga har nu mindre än en minut på sig att hitta en snabbare lösning. Klurig men snabb hjärngympa som fungerar med många deltagare (99!).",
  },

  // ---------------- Samarbetsspel ----------------
  {
    name: "The Crew",
    alt: "The Quest for Planet Nine",
    cat: "samarbete",
    players: "2-5", time: "20 min", age: "10+", rating: 7.8, weight: 2.0,
    bgg: "https://boardgamegeek.com/boardgame/284083/the-crew-the-quest-for-planet-nine",
    text: "Ett stickspel (som whist) där man samarbetar! Kortleken har 4 färger med 1-9 samt trumf 1-4 som fördelas till spelarna. Det finns en uppdragsbok med 50 uppdrag i stigande svårighetsgrad. Ett uppdrag kan vara att en spelare ska vinna ett stick med en röd 5:a, och därefter ska nästa spelare vinna ett stick med en röd 7:a. Spela som vanlig whist och få det att hända. För lätt? Glömde jag säga att ni inte får kommunicera (förutom en ledtråd om ett kort någon gång under spelet)?\n\nFantastiskt spel för 2-5 spelare. Man kör så många uppdrag man vill och kan fortsätta nästa gång man träffas.",
  },
  {
    name: "Forbidden Island",
    cat: "samarbete",
    players: "2-4", time: "30 min", age: "10+", rating: 6.8, weight: 1.7,
    bgg: "https://boardgamegeek.com/boardgame/65244/forbidden-island",
    text: "Ni befinner er på en sjunkande ö och måste samarbeta för att hålla ön flytande tillräckligt länge för att hinna gräva upp fyra skatter och ta er till helikoptern. Alla har en specialegenskap som det gäller att utnyttja på bästa sätt. Kan spelas med olika svårighetsgrader. Stressen ökar med vattennivån och alla kan bara vinna eller förlora tillsammans. Spelat mest med 8-12-åringar, men de första partierna är riktigt underhållande för vuxna också.",
  },
  {
    name: "Exit – The Game",
    cat: "samarbete",
    players: "1-4", time: "60-120 min", age: "12+", rating: 7.0, weight: 2.3,
    bgg: "https://boardgamegeek.com/boardgame/203420/exit-game-abandoned-cabin",
    text: "Ett spel du spelar en gång och sedan ger bort. Det handlar om problemlösning och påminner om escape rooms. Spelet innehåller ett antal kort med gåtor/problem av vitt skilda slag, där en lösning ger dig tillgång till nästa utmaning. Räkna med en 1-2 timmars intensiv gruppövning. Det finns många boxar översatta till svenska med olika svårighetsgrader.",
  },
  {
    name: "Hanabi",
    cat: "samarbete",
    players: "2-5", time: "25 min", age: "8+", rating: 7.0, weight: 1.7,
    bgg: "https://boardgamegeek.com/boardgame/98778/hanabi",
    text: "Ett samarbetsspel där ni tillsammans ska spela ut kort från 1-5 i fem färger. Problemet är att du inte får se dina egna kort. Lyckligtvis får du ge ledtrådar till medspelarna om vilka färger och siffror de har, men inte samtidigt. Ledtrådarna är begränsade och ni måste kasta kort för att få nya. Hur många lyckas ni spela ut rätt innan leken tar slut? Det medföljer en expansion som gör det ännu svårare. Jag har spelat det många gånger med både barn (8+) och vuxna med behållning.",
  },
  {
    name: "Pandemic",
    cat: "samarbete",
    players: "2-4", time: "45 min", age: "8+", rating: 7.5, weight: 2.4,
    bgg: "https://boardgamegeek.com/boardgame/30549/pandemic",
    extra: [{ label: "Pandemic Legacy: Season 1", url: "https://boardgamegeek.com/boardgame/161936/pandemic-legacy-season-1" }],
    text: "Ett samarbetsspel där ni ska försöka stoppa olika sjukdomar från att spridas i världen. Tiden är knapp, de sprider sig och nya utbrott hotar ständigt. Res dit det behövs bäst, bygg forskningsbaser och försök hitta botemedel i tid. Alla spelare har unika specialegenskaper som det gäller att utnyttja på bästa sätt.\n\nPandemic Legacy är spelet för dig som kommer att spela flera partier med samma personer. Efter varje parti förändras spelet: du får lägga till nya kort, kasta kort(!), klistra klistermärken med t.ex. nya platser på spelplanen och liknande. Det är en resa man gör tillsammans som varar 12-24 partier. Många tycker dessa spel är fantastiska.",
  },
  {
    name: "MicroMacro: Crime City",
    cat: "samarbete",
    players: "1-4", time: "15-45 min", age: "12+", rating: 7.3, weight: 1.1,
    bgg: "https://boardgamegeek.com/boardgame/318977/micromacro-crime-city",
    text: "Spelet består av en STOR karta och 16 kuvert med detektivfall i olika svårighetsnivåer. Kartan visar en myllrande stad, och ditt uppdrag kan t.ex. vara att lokalisera en butik som blivit rånad, följa spåret av sedlar för att hitta var tjuvarna kastade sin förklädnad och slutligen hitta deras hus. Kartan visar vad invånarna gör vid olika tidpunkter samtidigt och du kan därför följa vad som hänt. Ett annorlunda, klurigt spel som passar perfekt att spela med barnen.",
  },

  // ---------------- För två ----------------
  {
    name: "Patchwork",
    cat: "tva",
    players: "2", time: "15-30 min", age: "8+", rating: 7.6, weight: 1.6,
    bgg: "https://boardgamegeek.com/boardgame/163412/patchwork",
    text: "Tight pusselspel för två. Samla tetrisliknande lappar till ditt lapptäcke och försök få dem att täcka hela ytan. Men bitar kostar både knappar (pengar) och tid. Du behöver plocka bitar som ger dig inkomster, men ska du ta dem fast de passar dåligt? Och kanske tar en bit så liten tid att sy att du hinner göra flera drag i rad? Försök hinna först till bonusbitarna och se till att din motspelare precis inte har råd med de bitar som erbjuds. Pust, mycket att tänka på trots sin enkelhet. Mitt favoritspel för två.",
  },
  {
    name: "Mr. Jack",
    cat: "tva",
    players: "2", time: "30 min", age: "9+", rating: 7.1, weight: 2.1,
    bgg: "https://boardgamegeek.com/boardgame/21763/mr-jack",
    text: "Underhållande katt-och-råtta-lek där en spelare ska försöka klura ut vem av de misstänkta som är mördaren och den andra ska försöka fly. Man turas om att flytta de åtta misstänkta som alla har olika egenskaper. När man flyttat två var måste mördaren avslöja om hen syns eller är dold i skuggorna. Mörkret sänker sig och lamporna släcks. Detektiven har 8 rundor på sig att hitta den skyldige. Kul, utmanande, lagom långt. Ofta vill man spela en gång till med ombytta roller.",
  },
  {
    name: "Santorini",
    cat: "tva",
    players: "2-4", time: "20 min", age: "8+", rating: 7.5, weight: 1.7,
    bgg: "https://boardgamegeek.com/boardgame/194655/santorini",
    text: "Ett klurigt spel där du flyttar en av dina två pjäser, bygger torn och försöker komma upp till tredje våningen – först upp vinner. Du kan försegla torn med en kupol för att hindra motståndaren, och det handlar om att blockera och bygga så du hinner upp innan du blir stoppad. Varje parti drar du dessutom ett kort med en av 40 grekiska gudar som ger dig en unik egenskap, t.ex. att du kan knuffa en annan spelare, röra dig snabbare eller hoppa högt. Ett snabbt, trevligt spel med stor variation.",
  },

  // ---------------- Snabba kortspel ----------------
  {
    name: "No Thanks!",
    cat: "snabba",
    players: "3-7", time: "20 min", age: "8+", rating: 7.1, weight: 1.1,
    bgg: "https://boardgamegeek.com/boardgame/12942/no-thanks",
    text: "Enkelt, snabbt och elakt kul. Turas om att ta ett kort (minuspoäng!) eller köp dig fri med ett chip. Den som tar kortet får alla chip som ligger på det, men hur länge vågar du vänta? Finns i flera upplagor med olika askar men är samma spel.",
  },
  {
    name: "For Sale",
    cat: "snabba",
    players: "3-6", time: "30 min", age: "8+", rating: 7.1, weight: 1.3,
    bgg: "https://boardgamegeek.com/boardgame/172/sale",
    text: "Kortspel i två faser. I första fasen köper man fastigheter och i andra fasen säljer man dem så dyrt som möjligt. Försök tajma dina kort så att motspelarna köper för dyrt och säljer för billigt. Mest pengar i slutet vinner.",
  },
  {
    name: "Love Letter",
    cat: "snabba",
    players: "2-6", time: "20 min", age: "10+", rating: 7.2, weight: 1.2,
    bgg: "https://boardgamegeek.com/boardgame/277085/love-letter",
    text: "Ett snabbt, klurigt kortspel. Alla får ett av ca 20 kort. Sedan turas man om att dra ett kort och spela ett av de två kort man nu har på hand. Varje spelat kort har en effekt som står på kortet, t.ex. gissa en annan spelares kort – är det rätt åker hen ut. Eller titta på någons kort, tvinga någon att byta o.s.v. Ju fler spelade kort, desto fler slutsatser kan du dra om vad de andra har. Spelet blir bara djupare ju mer man spelar. Lite tur och utslagning, men varje runda är snabb så man kommer snabbt tillbaka.",
  },
  {
    name: "Colt Super Express",
    cat: "snabba",
    players: "3-7", time: "20 min", age: "8+", rating: 6.9, weight: 1.3,
    bgg: "https://boardgamegeek.com/boardgame/299027/colt-super-express",
    text: "Kortversionen av Colt Express. Alla är cowboys på ett rullande tåg där vagnarna lossnar en efter en. Varje runda väljer du tre kort som ”programmerar” vad din figur ska göra: vända sig, gå, klättra eller skjuta. Sedan turas man om att vända sina kort och utföra draget. Sist kvar på tåget med mest pengar vinner. Expansionen med häst och reflex rekommenderas och följer med den svenska versionen. Ett snabbt, roligt spel med mycket skadeglädje.",
  },

  // ================= NYHETER 2026 =================
  // Skriv din text i  text: ""  för varje spel nedan.
  // Tills texten är ifylld visas "Text kommer snart…" på sidan.
  {
    name: "Cascadia",
    cat: "strategi", isNew: true,
    players: "1-4", time: "30-45 min", age: "10+", rating: 7.9, weight: 1.9,
    bgg: "https://boardgamegeek.com/boardgame/295947/cascadia",
    text: "",
  },
  {
    name: "Hitster",
    cat: "party", isNew: true,
    players: "2-10", time: "30 min", age: "16+", rating: 7.4, weight: 1.0,
    bgg: "https://boardgamegeek.com/boardgame/318243/hitster",
    text: "",
  },
  {
    name: "Decrypto",
    cat: "party", isNew: true,
    players: "3-8", time: "15-45 min", age: "12+", rating: 7.7, weight: 1.8,
    bgg: "https://boardgamegeek.com/boardgame/225694/decrypto",
    text: "",
  },
  {
    name: "Kluster",
    cat: "abstrakt", isNew: true,
    players: "1-4", time: "10-20 min", age: "14+", rating: 6.5, weight: 1.0,
    bgg: "https://boardgamegeek.com/boardgame/277458/kluster",
    text: "",
  },
  {
    name: "Sky Team",
    cat: "samarbete", isNew: true,
    players: "2", time: "15 min", age: "12+", rating: 7.9, weight: 1.9,
    bgg: "https://boardgamegeek.com/boardgame/373106/sky-team",
    text: "",
  },
  {
    name: "Bomb Busters",
    cat: "samarbete", isNew: true,
    players: "2-5", time: "30 min", age: "10+", rating: 8.0, weight: 1.9,
    bgg: "https://boardgamegeek.com/boardgame/413246/bomb-busters",
    text: "",
  },
  {
    name: "The Fellowship of the Ring: Trick-Taking Game",
    cat: "samarbete", isNew: true,
    players: "1-4", time: "20 min", age: "10+", rating: 8.0, weight: 2.0,
    bgg: "https://boardgamegeek.com/geeksearch.php?action=search&objecttype=boardgame&q=Fellowship+of+the+Ring+Trick-Taking",
    text: "",
  },
  {
    name: "Scout",
    cat: "snabba", isNew: true,
    players: "2-5", time: "15 min", age: "9+", rating: 7.8, weight: 1.4,
    bgg: "https://boardgamegeek.com/boardgame/291453/scout",
    text: "",
  },
  {
    name: "Point Salad",
    cat: "snabba", isNew: true,
    players: "2-6", time: "15-30 min", age: "8+", rating: 7.2, weight: 1.2,
    bgg: "https://boardgamegeek.com/boardgame/274960/point-salad",
    text: "",
  },
];

const SHOPS = {
  physical: [
    { name: "Alphaspel", info: "Sparbanksvägen 14, Hägerstensåsen", url: "https://alphaspel.se/" },
    { name: "Dragon's Lair", info: "Sveavägen 118", url: "https://www.dragonslair.se/" },
    { name: "SF-bokhandeln", info: "Västerlånggatan 48 (översta våningen)", url: "https://www.sfbok.se/" },
  ],
  online: [
    { name: "World of Board Games", url: "https://www.worldofboardgames.com/" },
    { name: "Webhallen", url: "https://www.webhallen.com/se/category/3777-Bradspel" },
    { name: "Unispel", url: "https://unispel.com/produkt-kategori/bradspel/" },
    { name: "Spelexperten", url: "https://www.spelexperten.com/" },
  ],
  prices: [
    { name: "Brädspelspriser", url: "https://bradspelspriser.se/" },
  ],
  abroad: [
    { name: "Milan-Spiele (Tyskland)", url: "https://www.milan-spiele.de/" },
  ],
};
