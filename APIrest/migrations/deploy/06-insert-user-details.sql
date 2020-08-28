-- Deploy mateHub:06-insert-user-details to pg

BEGIN;
CREATE type user_profile_data as ( "_user_id" INT ,
                            "_nickname" TEXT, 
                            "_age" DOUBLE PRECISION, 
                            "_description" TEXT, 
                            "_avatar" TEXT,
                            "_banner" TEXT , 
                            "_games" JSON,
                            "_event_created" JSON,
                            "has_events" JSON
                            );

-- Function to get all DAtas from a specifique event param: (event_id)
CREATE FUNCTION getUserData("USER_ID" INT)
 RETURNS SETOF user_profile_data 
    AS
$body$

SELECT u.id AS "_user_id",  
        u.nickname AS "_nickname", 
        --get age  from date of birth
        (SELECT EXTRACT(YEAR FROM AGE(u."dateofbirth" ))) AS "_age",
        u.description AS "_description",
        u.avatar AS "_avatar",
        u.banner AS "_banner", 
        -- Game object containing Gameid's and game stats  from each games 
       (SELECT 
                json_agg(
                    json_build_object(
                        'game_id', g.id, 
                        'game_name', g.name, 
                        'ign', uhg."IGN",
                        'stats', uhg."stats"
                                            )) as games
                        FROM user_access."M_USER_has_GAME" uhg 
                            JOIN user_access."game" g ON g.id = uhg.game_id
                            WHERE uhg.user_id = "USER_ID"
            GROUP by u.id) AS games,
            --  object containing all event created for this user 
             (SELECT 
                array_to_json(array_agg(
                    r.*)) FROM( SELECT
                         e."id" AS "event_id", 
                         g."name" AS "game_name",
                         g."id" AS "game_id", 
                         e."event_time" ,
                         e."duration",
                         (SELECT (e.event_time) + e.duration AS "end" ) AS "end" ,
                         e."player_count",
                         e."player_max",
                         e."description",
                         e."status",
                        --  object containing languages link to this event
                         (SELECT  array_to_json(array_agg(
                                langs.*)) FROM(
                             SELECT l.id,l.label ,l.icon
                              FROM user_access."lang" l 
                        JOIN user_access."M_EVENT_has_LANG" ehl ON ehl.event_id = e.id 
                              WHERE l.id = ehl.lang_id) AS "langs" ) AS "lang",
                        e."vocal"
                        FROM user_access."event" e
                        JOIN user_access."game" g ON g.id = e.game_id
                        JOIN user_access."user" u ON e.user_id = u.id
                         WHERE e.user_id = "USER_ID"
                                GROUP by e.id,u.id,g.name,g.id
                        )r 
                        ) AS "_event_created" ,
                        --  object containing all event  this user is tagged in
            (SELECT  
                array_to_json(array_agg(
                    z.*)) FROM( SELECT 
                        uhe."event_id" AS "event_id",
                        g."name" AS "game_name",
                        g."id"   AS "game_id",  
                        uhe."message", 
                        evvt."event_time", 
                        evvt."duration",
                         (SELECT (evvt.event_time) + evvt.duration AS "end" ) AS "end" ,
                        evvt."player_count", 
                        evvt."player_max", 
                        evvt."description", 
                        evvt."status",
                        --  object containing languages link to this event
                        (SELECT  array_to_json(array_agg(
                    events_lang.*)) FROM(
                             SELECT l.id,l.label ,l.icon
                              FROM user_access."lang" l 
                        JOIN user_access."event" evt ON evt.id = uhe.event_id
                        JOIN user_access."M_EVENT_has_LANG" ehl ON ehl.event_id = evt.id 
                              WHERE l.id = ehl.lang_id) AS "events_lang" )AS "Lang", 
                        evvt."vocal" 
                        FROM user_access."M_USER_has_EVENT" uhe
                        JOIN user_access."event" evvt ON evvt.id = uhe.event_id
                        JOIN user_access."game" g ON g.id = evvt.game_id
                            WHERE uhe.user_id = u.id
                                GROUP by u.id, uhe.event_id,g.name, g.id, evvt.event_time, evvt.duration, evvt.player_count, evvt.player_max,
                                evvt.description, evvt.status, evvt.vocal,uhe.message
                                 ) z
             ) AS "_has_events"
            
                                FROM user_access."user" u
                        WHERE u.id ="USER_ID";


$body$

language SQL STABLE ;

COMMIT;
