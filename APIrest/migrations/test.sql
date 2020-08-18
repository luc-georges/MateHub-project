SELECT "user".id, "user".nickname ,"game".name AS "playing" ,"level".label AS "RANK"  from "user" 
    JOIN "M_USER_has_GAME"  ON "user".id = "M_USER_has_GAME".user_id 
    JOIN "game"  ON "M_USER_has_GAME".game_id = "game".id 
    JOIN "level" ON "M_USER_has_GAME".level_id = "level".id 
  WHERE "user".id = 1;


SELECT "user".nickname,"game".name, "level".label  
    FROM "user" 
    JOIN "M_USER_has_GAME" ON "M_USER_has_GAME".user_id = 1 AND "M_USER_has_GAME".game_id =  2
    JOIN "game" ON "game".id = 2
    JOIN "level" ON "level".id = "M_USER_has_GAME".level_id AND "level".game_id = 2
    WHERE "user".id = 1;


SELECT e.id AS "event_id", 
        u.id AS "user_id", 
        u.nickname AS "creator", 
        g.name AS "game_name",
        e.game_id, 
        e.event_time AS "starting",
        e.duration , 
        e.player_count,
         e.description, 
         e.status, 
         e.vocal
    FROM user_access."event" e
    JOIN user_access."user" u ON u.id = e.user_id
    JOIN user_access."game" g ON g.id = e.game_id
    JOIN user_access."M_USER_has_GAME" uhg ON u.id = uhg.user_id AND uhg.game_id = e.game_id
    JOIN user_access."level" l ON l.id = uhg.level_id
    WHERE e.id = 1;

    JOIN user_access."level" l ON l.id = uhg.level_id AND l.game_id = e.game_id


all event 
    level du user
    

  CREATE type UserGameLevel as ("nickname" TEXT ,"name" TEXT, "label" TEXT );
  CREATE FUNCTION getUserGameLevel("USER_ID" INT, "GAME_ID" INT)
 RETURNS SETOF UserGameLevel 
    AS
$body$
  SELECT "user".nickname, "game".name, "level".label  
    FROM "user" 
    JOIN "M_USER_has_GAME" ON "M_USER_has_GAME".user_id = "USER_ID" AND "M_USER_has_GAME".game_id = "GAME_ID"
    JOIN "game" ON "game".id = "GAME_ID"
    JOIN "level" ON "level".id = "M_USER_has_GAME".level_id AND "level".game_id = "GAME_ID"
    WHERE "user".id = "USER_ID";

$body$

language SQL STRICT;







 static async getUserGameLevel(USER_id, GAME_id) {
        try {
            const result = await client.query(`SELECT * FROM "${this.tablename}" WHERE id = $1`, [id])
            if(result.rows.length === 0){
                return null
            };
            
            return new this(result.rows[0]);

        } catch (error) {
            console.log(error)
        }

    }

