let currentPhoto = 0;
let imagesData = ['Pictures/mercedes-1.jpg', 'Pictures/scuderia-ferrari-1.jpg', 'Pictures/red-bull-racing-1.jpg', 'Pictures/mclaren-1.jpg', 'Pictures/renault-f1-team-1.jpg', 'Pictures/scuderia-alphatauri-1.jpg', 'Pictures/racing-point-1.jpg', 'Pictures/alfa-romeo-racing-1.jpg','Pictures/haas-f1-team-1.jpg', 'Pictures/williams-1.jpg'];
let imagesTitle = ['Mercedes', 'Ferrari', 'Red Bull', 'McLaren', 'Renault', 'Torro Rosso', 'Racing Point', 'Alfa Romeo', 'Haas', 'Williams'];
let imagesDescription = ['Zsinórban negyedik szezonját kezdi meg a Mercedesnél a jól bevált páros. Hamilton a világbajnoki címeket, Bottas pedig néhány győzelmet szállít a csapatnak évről évre.', 'Kimi Raikkönen távozásával felpezsdült az élet a Scuderiánál, hiszen a fiatal és sikerre éhes Charles Leclerc érkezett a helyére, aki első szezonjában jó eséllyel felül fogja múlni Sebastian Vettelt, hiszen a szezonzáró előtt 19 pont az előnye a némettel szemben.', 'Max Verstappen már ötödik szezonját fogja megkezdeni a nagycsapatnál, míg Alexander Albon az idei Belga Nagydíjon ülhetett be először a bikákhoz. Így a három nagycsapatnál jövőre nem lesz változás az idei szezon végén aktuális pilótafelállást tekintve.', 'A McLarennél Alonsót és Vandoorne-t is elengedték 2018 végén, így teljesen új felállással vágtak neki az idei évnek, és abszolút bejött nekik ez a páros. A konstruktőri negyedik helyen zárnak, s hosszú idő után végre visszaküzdötték magukat a pódiumra is idén.', 'Daniel Ricciardo tavalyi érkezése óriási durranás volt, szinte bombaként robbant a hír az F1-es világban, hogy elhagyja a Red Bullt a franciák kedvéért. Csapattársa jövőre az az Esteban Ocon lesz, aki a közvélemény fejében alighanem a tavalyi Brazil Nagydíjon történtekről maradt meg, ennek pedig Nico Hülkenberg látta legnagyobb kárát, aki számára nem jutott hely a 2020-as rajtrácson.', 'Az orosz idén harmadszor is a Toro Rosso pilótája lett, míg Gaslyt a Hungaroring után fokozta vissza a Red Bull a kiscsapathoz, így egyikük számára sem új ez a közeg, viszont borzasztóan nehéz lesz számukra kitörni, annak ellenére, hogy mindketten dobogóra juttatták idén a Toro Rossót.', 'Pereznek eddig nem volt könnyű dolga a csapattársaival szemben, hiszen Jenson Button, Nico Hülkenberg és Esteban Ocon is komoly kihívás elé állította őt, idén azonban nagyon simán lenyomta Strollt, s jövőre aligha lesz sokkal nehezebb dolga.', 'A Ferrari által protezsált Antonio Giovinazzi jövőre is a mezőny rangidősének számító Kimi Raikkönen csapattársa lesz az idén Alfa Romeo Racinggé keresztelt Sauber csapatánál, akik Perezéket szeretnék elkapni a szezonzárón.', 'Az egyetlen csapat, amelynél mindkét pilóta annyi pontot szerzett ez idáig, amilyen rajtszámmal versenyez. 2016 óta íródó történelme legrosszabb szezonját fogja zárni Günther Steiner istállója, ahol talán elkélt volna egy kis változás jövőre.', 'George Russell lehet az idei szezon egyetlen pilótája, aki pont nélkül marad, de szintén az egyetlen, aki mind a 21 időmérőn legyőzte csapattársát, Robert Kubicát, aki számára jövőre nincs hely a rajtrácson, de a hírek szerint a Haas vagy a Racing Point fejlesztési pilótája lehet. Russell csapattársa így a 24 esztendős kanadai Nicholas Latifi lesz, aki ezzel a 2020-as mezőny egyetlen újoncának mondhatja majd magát.'];

let loadPhoto = (currentPhoto) =>{
    $('#photo').attr('src', imagesData[currentPhoto]);
    $('#photo-title').text(imagesTitle[currentPhoto]);
    $('#photo-description').text(imagesDescription[currentPhoto]);
       
}

loadPhoto(currentPhoto);

$('#bal').click(()=>{
    if(currentPhoto < 10) {
        currentPhoto++;
    }
    if(currentPhoto === 10){
        currentPhoto = 0;
    }
    loadPhoto(currentPhoto);
});

loadPhoto(currentPhoto);

$('#jobb').click(()=>{
    if(currentPhoto >= 0) {
        currentPhoto--;
    }
    if(currentPhoto === -1){
        currentPhoto = 9;
    }
    loadPhoto(currentPhoto);
});
loadPhoto(currentPhoto);

imagesData.forEach((item, index)=>{
    $('.container').append(`<div class="box" imagesData-index="${index}"><div class="title"></div><img class="thumbnail" src='${item}'/></div>`);
    $('.container').on('click', '.box', (event)=>{
        let indexClick = $(event.target).closest('.box').attr('imagesData-index');
        let numberIndex = parseInt(indexClick);
        $('#photo').attr('src', imagesData[numberIndex]);
        $('#photo-title').text(imagesTitle[numberIndex]);
        $('#photo-description').text(imagesDescription[numberIndex]);
        currentPhoto = numberIndex;
        if(currentPhoto === numberIndex){
            $(`.thumbnail:eq("${currentPhoto}")`).addClass("mod");
        }else if(currentPhoto !== numberIndex){
            $(`.thumbnail:eq("${currentPhoto}")`).removeClass("mod");
        };
        
        console.log(currentPhoto);
    });

    
    /*$('title').text(imagesTitle[photoNumber]);
    $('.box').mouseover(cim() {
        $('.title').attr('title', imagesTitle[indexClick]);
        console.log('Helo');
    })*/
    
}
);
