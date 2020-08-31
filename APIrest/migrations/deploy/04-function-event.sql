-- Deploy mateHub:04-function-event to pg

BEGIN;

-- Type for geteventdata functions
CREATE type event_data as ( "_event_id" INT,
                           "_user_id" INT,
                           "_creator" TEXT,
                           "_game_name" TEXT,
                           "_game_id" INT,
                           "_starting" TIMESTAMPTZ,
                           "_duration" INTERVAL,
                           "_player_count" INT,
                           "_player_max" INT,
                           "_description" TEXT,
                           "_status" INT,
                           "_langs" JSON,
                           "_end" TIMESTAMPTZ,
                           "_vocal" TEXT,
                           "_participant" JSON
);

-- Function to get all DAtas from a specifique event param: (event_id)
CREATE FUNCTION getEventData("EVENT_ID" INT)
 RETURNS SETOF event_data 
    AS
$body$

SELECT 
               
                         e."id" AS "_event_id", 
                         e."user_id" AS "_user_id",
                         u."nickname" AS "_creator",
                         g."name" AS "game_name",
                         g."id" AS "game_id", 
                         e."event_time" AS "starting" ,
                         e."duration" AS "_duration",
                         e."player_count" AS "_player_count",
                         e."player_max" AS "_player_max",
                         e."description" AS "_description",
                         e."status" AS "_status",
                        --  object containing languages link to this event
                         (SELECT  array_to_json(array_agg(
                                langs.*)) FROM(
                             SELECT l.id,
                             l.label ,
                             l.icon
                              FROM user_access."lang" l 
                        JOIN user_access."M_EVENT_has_LANG" ehl ON ehl.event_id = e.id 
                              WHERE l.id = ehl.lang_id) AS "langs" ) AS "lang",
                        (SELECT (e.event_time) + e.duration AS "end" ) AS "end" ,
                        e."vocal" AS "_vocal",
                        (SELECT  array_to_json(array_agg(
                                users.*)) FROM(
                             SELECT uhe.user_id,
                             uhe.event_id ,uhe.status,
                              uhe.message,
                              uu.nickname,
                              uhg.stats
                              FROM user_access."M_USER_has_EVENT" uhe
                        JOIN user_access."user" uu ON uhe.user_id = uu.id         
                        JOIN user_access."M_USER_has_GAME" uhg ON uhg.user_id = uu.id AND uhg.game_id = g.id
                              WHERE uhe.event_id = "EVENT_ID") AS "users" ) AS "users"
                        FROM user_access."event" e
                        JOIN user_access."game" g ON g.id = e.game_id
                        JOIN user_access."user" u ON e.user_id = u.id
                        WHERE e.id = "EVENT_ID"
                                GROUP by e.id,u.id,g.name,g.id
                                ORDER BY e.event_time
           

$body$

language SQL STABLE
SET search_path TO user_access ;

-- Function to get all DAtas from all events param: NO PARAM NEEDED
CREATE FUNCTION getAllEventData()
 RETURNS SETOF event_data 
    AS
$body$

                        
                        SELECT 
               
                         e."id" AS "_event_id", 
                         e."user_id" AS "_user_id",
                         u."nickname" AS "_creator",
                         g."name" AS "game_name",
                         g."id" AS "game_id", 
                         e."event_time" AS "starting" ,
                         e."duration" AS "_duration",
                         e."player_count" AS "_player_count",
                         e."player_max" AS "_player_max",
                         e."description" AS "_description",
                         e."status" AS "_status",
                        --  object containing languages link to this event
                         (SELECT  array_to_json(array_agg(
                                langs.*)) FROM(
                             SELECT l.id,
                             l.label ,
                             l.icon
                              FROM user_access."lang" l 
                        JOIN user_access."M_EVENT_has_LANG" ehl ON ehl.event_id = e.id 
                              WHERE l.id = ehl.lang_id) AS "langs" ) AS "lang",
                        (SELECT (e.event_time) + e.duration AS "end" ) AS "end" ,
                        e."vocal" AS "_vocal",
                        (SELECT  array_to_json(array_agg(
                                users.*)) FROM(
                             SELECT uhe.user_id,
                             uhe.event_id ,uhe.status,
                              uhe.message,
                              uu.nickname,
                              uhg.stats
                              FROM user_access."M_USER_has_EVENT" uhe
                        JOIN user_access."user" uu ON uhe.user_id = uu.id         
                        JOIN user_access."M_USER_has_GAME" uhg ON uhg.user_id = uu.id AND uhg.game_id = g.id
                              WHERE uhe.event_id = e.id) AS "users" ) AS "users"
                        FROM user_access."event" e
                        JOIN user_access."game" g ON g.id = e.game_id
                        JOIN user_access."user" u ON e.user_id = u.id
                                GROUP by e.id,u.id,g.name,g.id
                                ORDER BY e.event_time

    


$body$

language SQL STABLE
SET search_path TO user_access ;


COMMIT;
