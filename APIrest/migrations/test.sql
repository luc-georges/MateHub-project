SELECT "user".id, "user".nickname ,"game".name AS "playing" ,"level".label AS "RANK"  from "user" 
    JOIN "M_USER_has_GAME"  ON "user".id = "M_USER_has_GAME".user_id 
    JOIN "game"  ON "M_USER_has_GAME".game_id = "game".id 
    JOIN "level" ON "M_USER_has_GAME".level_id = "level".id 
  WHERE "user".id = 1;


SELECT "event".id,
        "game".name AS "Playing", 
        "event".description,
        "event".duration,
        "level".label,
        "user".nickname AS "Event Creator",
        (SELECT count(*) FROM "M_USER_has_EVENT" WHERE "event".id = "M_USER_has_EVENT".event_id AND "M_USER_has_EVENT".status = 1 ) AS "Participating" 

    FROM "event" 
    JOIN "user" ON "user".id = "event".user_id
    JOIN "game" ON "game".id = "event".game_id
    JOIN "M_USER_has_GAME" ON "M_USER_has_GAME".game_id = "game".id
    JOIN "level" ON "level".id = "M_USER_has_GAME".level_id
    JOIN "M_EVENT_has_LANG" ON "M_EVENT_has_LANG".event_id = "event".id
    JOIN "lang" ON "lang".id = "M_EVENT_has_LANG".lang_id
    WHERE "event".id = 1;

    
 
