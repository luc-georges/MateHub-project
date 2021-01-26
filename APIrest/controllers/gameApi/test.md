
{
    "data": {
      "_event_id": INT,
      "_user_id": INT,
      "_creator": "string contenant le nom du créateur",
      "_creator_IGN": [ // tableau contenant les détails du compte LoL
        {
          objet Json contenant les identification du compte
        }
      ],
      "_creator_stats": [ //tableau json contenant les statistiques
        {
          objet Json contenant les 13 propriété envoyé par l'API
        }
      ],
      "_game_name": "string avec nom du jeu",
      "_game_id": INT,
      "_rank": "string du rang de l'évènement",
      "_is_ranked": boolean si ranked,
      "_starting": "timestampTZ",
      "_duration": {
        //objet contenant 2 propriété (heure/ minute)
      },
      "_player_count":INT,
      "_player_max": INT,
      "_description": "String de la déscription",
      "_status": INT,
      "_langs": [ // tableau contenant les lang choisis 
                  //lors de la création de l'évènement
        { // objet contenant les détails des langues 
          "id": INT,
          "label": "String",
          "icon": "String"
        }
      ],
      "_end": "timestampTZ",
      "_vocal": "string",
      "_participant": objet contenant les détail des participant
    }
  }