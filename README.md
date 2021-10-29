Er is gekozen om document.createElement te gebruiken inplaats van de jquery versie vanwegen dit onderzoek: https://stackoverflow.com/questions/268490/jquery-document-createelement-equivalent dit is dan ook gesplitst naar de app/modules/pagesHTML.js

We hebben gebruik gemaakt van de volgende libraries:
socket.io - jquery - bootstrap - fortawesome/fontawesome-free

vanwegen te wijnig tijd hebben we de volgende onderdelen niet goed of niet af kunnen krijgen.

-   het sluiten van de javascript functies en het afsluiten van de javascript imports.
-   een upload functie om het in de server te uploaden
-   aan het einde van de game op een goede manier terug joinen in de lobby je joint nu wel terug maar je ziet de andere spelers niet en de berichten worden vaker verstuurt.
-   de score van de verschillende spelers word nog niet goed weer gegeven in een leaderboard

# Javascript-eind-opdracht

Welkom bij onze javascript eindopdracht.

## Client

De client applicatie in de `app` folder dient gehost te worden op een webserver naar keuze.

Om het te hosten, run eerst `npm i` in de `app` folder om de dependancies te installeren, en wijs de webserver naar de root directory `Javascript-eind-opdracht` de applicatie is beschikbaar op `url/app`

## Server

Om de socket server te draaien, open de `server` folder, en installeer de dependancies met `npm i`.

Om de socket server te hosten, type `node .` om de server te starten met de standaardconfiguratie.

De server applicatie draait standaard op port 8080.

## Configuratie

In de client en webserver bovenin dient de variable port naar elkaar verwijzen, en de websocket url naar het juiste domein verwijzen. Standaard zal alles direct werken op localhost.
