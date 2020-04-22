/*let data = {
    photo: 'Pictures/mercedes-1.jpg',
    title: 'Mercedes',
    descripion: 'Lewis Hamilton - #44 Valtteri Bottas - #77   Zsinórban negyedik szezonját kezdi meg a Mercedesnél a jól bevált páros. Hamilton a világbajnoki címeket, Bottas pedig néhány győzelmet szállít a csapatnak évről évre.',
};*/

let currentPhoto = 0;
let imagesData = ['Pictures/mercedes-1.jpg', 'Pictures/scuderia-ferrari-1.jpg', 'Pictures/red-bull-racing-1.jpg', 'Pictures/mclaren-1.jpg', 'Pictures/renault-f1-team-1.jpg', 'Pictures/scuderia-alphatauri-1.jpg', 'Pictures/racing-point-1.jpg', 'Pictures/alfa-romeo-racing-1.jpg','Pictures/haas-f1-team-1.jpg', 'Pictures/williams-1.jpg'];
let imagesTitle = ['Mercedes', 'Ferrari', 'Red Bull', 'McLaren', 'Renault', 'Torro Rosso', 'Racing Point', 'Alfa Romeo', 'Haas', 'Williams'];
let imagesDescription = ['Lewis Hamilton - #44 Valtteri Bottas - #77   Zsinórban negyedik szezonját kezdi meg a Mercedesnél a jól bevált páros. Hamilton a világbajnoki címeket, Bottas pedig néhány győzelmet szállít a csapatnak évről évre.', 'Sebastian Vettel - #5 Charles Leclerc - #16    Kimi Raikkönen távozásával felpezsdült az élet a Scuderiánál, hiszen a fiatal és sikerre éhes Charles Leclerc érkezett a helyére, aki első szezonjában jó eséllyel felül fogja múlni Sebastian Vettelt, hiszen a szezonzáró előtt 19 pont az előnye a némettel szemben.', 'Alexander Albon - #23 Max Verstappen - #33    Max Verstappen már ötödik szezonját fogja megkezdeni a nagycsapatnál, míg Alexander Albon az idei Belga Nagydíjon ülhetett be először a bikákhoz. Így a három nagycsapatnál jövőre nem lesz változás az idei szezon végén aktuális pilótafelállást tekintve.', 'Lando Norris - #4 Carlos Sainz - #55    A McLarennél Alonsót és Vandoorne-t is elengedték 2018 végén, így teljesen új felállással vágtak neki az idei évnek, és abszolút bejött nekik ez a páros. A konstruktőri negyedik helyen zárnak, s hosszú idő után végre visszaküzdötték magukat a pódiumra is idén.', 'Daniel Ricciardo - #3 Esteban Ocon - #31    Daniel Ricciardo tavalyi érkezése óriási durranás volt, szinte bombaként robbant a hír az F1-es világban, hogy elhagyja a Red Bullt a franciák kedvéért. Csapattársa jövőre az az Esteban Ocon lesz, aki a közvélemény fejében alighanem a tavalyi Brazil Nagydíjon történtekről maradt meg, ennek pedig Nico Hülkenberg látta legnagyobb kárát, aki számára nem jutott hely a 2020-as rajtrácson.', 'Pierre Gasly - #10 Danyiil Kvjat - #26    Az orosz idén harmadszor is a Toro Rosso pilótája lett, míg Gaslyt a Hungaroring után fokozta vissza a Red Bull a kiscsapathoz, így egyikük számára sem új ez a közeg, viszont borzasztóan nehéz lesz számukra kitörni, annak ellenére, hogy mindketten dobogóra juttatták idén a Toro Rossót.', 'Sergio Perez - #11 Lance Stroll - #18    Pereznek eddig nem volt könnyű dolga a csapattársaival szemben, hiszen Jenson Button, Nico Hülkenberg és Esteban Ocon is komoly kihívás elé állította őt, idén azonban nagyon simán lenyomta Strollt, s jövőre aligha lesz sokkal nehezebb dolga.', 'Kimi Raikkönen - #7 Antonio Giovinazzi - #99    A Ferrari által protezsált Antonio Giovinazzi jövőre is a mezőny rangidősének számító Kimi Raikkönen csapattársa lesz az idén Alfa Romeo Racinggé keresztelt Sauber csapatánál, akik Perezéket szeretnék elkapni a szezonzárón.', 'Romain Grosjean - #8 Kevin Magnussen - #20    Az egyetlen csapat, amelynél mindkét pilóta annyi pontot szerzett ez idáig, amilyen rajtszámmal versenyez. 2016 óta íródó történelme legrosszabb szezonját fogja zárni Günther Steiner istállója, ahol talán elkélt volna egy kis változás jövőre.', 'George Russell - #63 Nicholas Latifi - #? George Russell lehet az idei szezon egyetlen pilótája, aki pont nélkül marad, de szintén az egyetlen, aki mind a 21 időmérőn legyőzte csapattársát, Robert Kubicát, aki számára jövőre nincs hely a rajtrácson, de a hírek szerint a Haas vagy a Racing Point fejlesztési pilótája lehet. Russell csapattársa így a 24 esztendős kanadai Nicholas Latifi lesz, aki ezzel a 2020-as mezőny egyetlen újoncának mondhatja majd magát.'];

let loadPhoto = (photoNumber) =>{
    $('#photo').attr('src', imagesData[photoNumber]);
    $('#photo-title').attr('title', imagesTitle[photoNumber]);
    $('#photo-description').attr('description', imagesDescription[photoNumber]);

}
loadPhoto(currentPhoto);
$('#bal').click(()=>{
    if(currentPhoto < 10) {
        currentPhoto++;
    }
    loadPhoto(currentPhoto);
});
loadPhoto(currentPhoto);
$('#jobb').click(()=>{
    if(currentPhoto >= 0) {
        currentPhoto--;
    }
    loadPhoto(currentPhoto);
});
loadPhoto(currentPhoto);