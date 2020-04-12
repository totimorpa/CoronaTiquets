# CoronaTiquets

Aquesta aplicació ha estat creada pel grup **041-UPCoders_A** per a la Hackathó organitzada per decidim: **Hackovid**.

Hem volgut desenvolupar un projecte qeu ajudi als comerciants de petits comerços a poder mantenir la seva activitat en un estat d'emergència sanitària com el que estem vivin actualment a tot el món.


## Taula de continguts
- [Idea](#Idea)
  -[Repte](#Repte)
  -[Sol·lució](#Sol·lució)
- [Producte](#Producte)
-[Reptes futurs](#Reptes_futurs)
-[Equip](#Equip)


## Idea

### Repte
En aquesta situació en la que ens trobem han aparegut problemes a la societat que no hi eren abans.

Un d'aquests problemes és la necessitat de tancament de botigues que ofereixin productes i serveis no esssencials, fet que perjudica els botiguers de tot el món.

Aquesta problemàtica és especialment greu en el cas dels botiguers de proximitat, que ja comptaven amb dificultats per la competència de les grans superfícies de distribució i comercialització.

### Sol·lució

Al nostre equip vam tenir molt clar des del proncipi del **Hackovid** que el nostre objectiu era **facilitar l'apertura de comerços** locals dusant el periode de confinament in el posterior període de recuperació de la economia, sense que això impliqui un aument del risc de contagi a la població.

**CoronaTiquets** pretén fer això mateix. S'ha creat una aplicació que permetrà als usuaris **cercar la botiga** de la que volen adquirir un producte o servei, i **demanar un tiquet** per a anar-hi presencialment, en un horari en que **la botiga estarà buida** a excepció del personal i el client que hagi demanat hora.

Els botiguers crearàn un perfil per la seva botiga i podràn acceptar els tiquets de l'usuari a l'hora que podràn consultar en el seu calendari quins seran els propers clients en arribar.

Els botiguers hauràn de promoure que **només es pot accedir al seu local en cas que s'hagi fet ús de l'aplicació**. Pensem que aquesta aplicació pot ser una **bona sol·lució** per permetre obrir botigues locals durant aques periode sense afavorir un aument de contagis.

## Producte

En aquesta secció es mostren unes captures de pantalla sobre el funcionament de l'aplicació.


#### [Tutorial](https://github.com/ionic-team/ionic-conference-app/blob/master/src/app/pages/tutorial/tutorial.html)

La primera vegada que s'inicia l'aplicació l'usuari podrà veure un tutorial en el que s'explicarà l'objectiu i l'ús d el'aplicació.
| Material Design  | iOS  |
|-----------------| -----|
| ![Tutorial1](/resources/screenshots/tutorial1.jpeg) | ![Tutorial2](/resources/screenshots/tutorial2.jpeg) |



### [Schedule Page](https://github.com/ionic-team/ionic-conference-app/blob/master/src/app/pages/schedule/schedule.html)

| Material Design  | iOS  |
| -----------------| -----|
| ![Tutorial2](/resources/screenshots/ios-speakers.png) | ![Tutorial2](/resources/screenshots/tutorial2.jpeg) |

### [Speakers Page](https://github.com/ionic-team/ionic-conference-app/blob/master/src/app/pages/speaker-list/speaker-list.html)


| -----------------| -----|
| ![Android Speakers](/resources/screenshots/android-speakers.png) | ![iOS Speakers](/resources/screenshots/ios-speakers.png) |

### [Speaker Detail Page](https://github.com/ionic-team/ionic-conference-app/blob/master/src/app/pages/speaker-detail/speaker-detail.html)

| Material Design  | iOS  |
| -----------------| -----|
| ![Android Speaker Detail](/resources/screenshots/android-speaker-detail.png) | ![iOS Speaker Detail](/resources/screenshots/ios-speaker-detail.png) |

### [About Page](https://github.com/ionic-team/ionic-conference-app/blob/master/src/app/pages/about/about.html)

| Material Design  | iOS  |
| -----------------| -----|
| ![Android About](/resources/screenshots/android-about.png) | ![iOS About](/resources/screenshots/ios-about.png) |


## Deploying

### Progressive Web App

1. Un-comment [these lines](https://github.com/ionic-team/ionic2-app-base/blob/master/src/index.html#L21)
2. Run `npm run ionic:build --prod`
3. Push the `www` folder to your hosting service

### Android

1. Run `ionic cordova run android --prod`

### iOS

1. Run `ionic cordova run ios --prod`
