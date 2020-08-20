-- Deploy mateHub:04-function-event to pg

BEGIN;

-- Type for geteventdata functions
CREATE type event_data as ( "_event_id" INT ,
                            "_user_id" INT, 
                            "_creator" TEXT, 
                            "_game_name" TEXT, 
                            "_game_id" INT,
                            "_starting" TIMESTAMPTZ , 
                            "_duration" INTERVAL,
                            "_player_count" INT,
                            "_player_max" INT,
                            "_description" TEXT,
                            "_status" INT,
                            "_vocal" TEXT,
                            "_level_id" INT,
                            "_label" TEXT ,
                            "_lang" JSON,
                            "_end" TIMESTAMPTZ);

-- Function to get all DAtas from a specifique event param: (event_id)
CREATE FUNCTION getEventData("EVENT_ID" INT)
 RETURNS SETOF event_data 
    AS
$body$

SELECT e.id AS "_event_id", 
        u.id AS "_user_id", 
        u.nickname AS "_creator", 
        g.name AS "_game_name",
        e.game_id AS "_game_id",
        e.event_time AS "_starting",
        e.duration AS "_duration", 
        e.player_count AS "_player_count",
        e.player_max AS "_player_max",
         e.description AS "_description",
         e.status AS "_status", 
         e.vocal AS "_vocal",
         l.id AS "_level_id",
         l.label AS "_level_label",
         (SELECT json_object_agg(la.label, la.icon) FROM user_access."lang" la
        JOIN user_access."M_EVENT_has_LANG" ehl ON ehl.event_id = e.id WHERE la.id = ehl.lang_id
                 ) AS "_lang",
       (SELECT (e.event_time) + e.duration AS "end" )
    FROM user_access."event" e
    JOIN user_access."user" u ON u.id = e.user_id
    JOIN user_access."game" g ON g.id = e.game_id
    JOIN user_access."M_USER_has_GAME" uhg ON u.id = uhg.user_id AND uhg.game_id = e.game_id
    JOIN user_access."level" l ON l.id = uhg.level_id

    WHERE e.id ="EVENT_ID"
       ORDER BY e.event_time DESC

$body$

language SQL STABLE
SET search_path TO user_access ;

-- Function to get all DAtas from all events param: NO PARAM NEEDED
CREATE FUNCTION getAllEventData()
 RETURNS SETOF event_data 
    AS
$body$

SELECT e.id AS "_event_id", 
        u.id AS "_user_id", 
        u.nickname AS "_creator", 
        g.name AS "_game_name",
        e.game_id AS "_game_id",
        e.event_time AS "_starting",
        e.duration AS "_duration", 
        e.player_count AS "_player_count",
        e.player_max AS "_player_max",
         e.description AS "_description",
         e.status AS "_status", 
         e.vocal AS "_vocal",
         l.id AS "_level_id",
         l.label AS "_level_label",
         (SELECT json_object_agg(la.label, la.icon) FROM user_access."lang" la
        JOIN user_access."M_EVENT_has_LANG" ehl ON ehl.event_id = e.id WHERE la.id = ehl.lang_id
                 ) AS "_lang",
       (SELECT (e.event_time) + e.duration AS "end" )
    FROM user_access."event" e
    JOIN user_access."user" u ON u.id = e.user_id
    JOIN user_access."game" g ON g.id = e.game_id
    JOIN user_access."M_USER_has_GAME" uhg ON u.id = uhg.user_id AND uhg.game_id = e.game_id
    JOIN user_access."level" l ON l.id = uhg.level_id
    ORDER BY e.event_time DESC
    


$body$

language SQL STABLE
SET search_path TO user_access ;


COMMIT;
