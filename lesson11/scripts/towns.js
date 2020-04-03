const requestURL = 'https://byui-cit230.github.io/weather/data/towndata.json';

fetch(requestURL)
.then(function (response) {
    return response.json();
})
.then (function (jsonObject) {

    console.table(jsonObject);//temporary checking
    const towns = jsonObject['towns'];
    for (let i = 0; i < towns.length; i++){
        
        let h2 = document.createElement('h2');
        let h3 = document.createElement('h3');
        let p1 = document.createElement('p');
        let p2 = document.createElement('p');
        let p3 = document.createElement('p');
        let image = document.createElement('img');
        
        h2.textContent = towns[i].name;
        h3.textContent = towns[i].motto;
        p1.textContent = 'Year Founded: ' + towns[i].yearFounded;
        p2.textContent = 'Population: ' + towns[i].currentPopulation;
        p3.textContent = 'Average Rainfall: ' + towns[i].averageRainfall;

        // image.setAttribute('data-src', 'images/300x400Low.jpg')
        // image.setAttribute('src', 'images/townImages/' + towns[i].photo);

        image.setAttribute('src', 'images/townImages/' + towns[i].photo);
        image.setAttribute('alt', towns[i].photo)
        
        
        // card.appendChild(h2);
        // card.appendChild(h3);
        // card.appendChild(p1);
        // card.appendChild(p2);
        // card.appendChild(p3);
        // card.appendChild(image);
        
        


        let PrestonTownName = 'Preston';
        let FishHavenTownName = 'Fish Haven';
        let SodaSpringsTownName = 'Soda Springs';

        // console.log('PrestonTownName');
        let eventsSS = document.createElement('section');
        let eventsP = document.createElement('section');
        let eventsFH = document.createElement('section');


        if (SodaSpringsTownName === towns[i].name){
            let eventsSodaSprings = document.createElement('p');
            eventsSodaSprings.textContent = towns[i].events;
            eventsSS.appendChild(eventsSodaSprings);
            document.querySelector('div.eventsSodaSprings').appendChild(eventsSodaSprings);
        } 
        
        if (FishHavenTownName === towns[i].name){
            let eventsFishHaven = document.createElement('p');
            eventsFishHaven.textContent = towns[i].events;
            eventsFH.appendChild(eventsFishHaven);
            document.querySelector('div.eventsFishHaven').appendChild(eventsFishHaven);
        } 
        
        if (PrestonTownName === towns[i].name){
            let eventsPreston = document.createElement('p');
            eventsPreston.textContent = towns[i].events;
            eventsP.appendChild(eventsPreston);
            document.querySelector('div.eventsPreston').appendChild(eventsPreston);
        } 

    }
})