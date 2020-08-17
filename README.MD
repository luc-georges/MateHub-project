# PlayTogether !

Une app qui permet de trouver facilement des 'mates' de son niveau pour jouer en ligne !!!


## Initialisation de l'API

### Sqitch

- Creer votre base de donnée en utilisant postgres
- Installer [sqitch](https://sqitch.org/download/) en global  
Une fois sqitch installé, renommer le fichier sqitch.conf.example en sqitch.conf et modifier le contenu en fonction de votre base de donnée  
- Pour déployer le contenu des migration dans votre base de donnée, utiliser la commande : ```Squitch deploy``` depuis ```projet-playtogether/APIrest``` (Pour revenir à une migration spécifique, spécifier le nom de la migration après le deploy)
- Pour revenir en arrière , utiliser la commande : ```Squitch revert```  (même manipulation pour revenir sur une migration spécifique)

