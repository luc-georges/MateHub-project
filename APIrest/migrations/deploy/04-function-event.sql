-- Deploy mateHub:04-function-event to pg

BEGIN;

-- Type of get all data from event functions
CREATE type event_data as ( "event_id" INT ,
                            "user_id" INT, 
                            "creator" TEXT, 
                            "game_name" TEXT, 
                            "game_id" INT,
                            "starting" TIMESTAMPTZ , 
                            "duration" INTERVAL,
                            "player_count" INT,
                            "description" TEXT,
                            "status" INT,
                            "vocal" TEXT,
                            "level_id" INT,
                            "label" TEXT  );

-- Function to get all DAtas from a specifique event param: (event_id)
CREATE FUNCTION getEventData("EVENT_ID" INT)
 RETURNS SETOF event_data 
    AS
$body$

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
         e.vocal,
         l.id,
         l.label
    FROM user_access."event" e
    JOIN user_access."user" u ON u.id = e.user_id
    JOIN user_access."game" g ON g.id = e.game_id
    JOIN user_access."M_USER_has_GAME" uhg ON u.id = uhg.user_id AND uhg.game_id = e.game_id
    JOIN user_access."level" l ON l.id = uhg.level_id
    WHERE e.id = "EVENT_ID";

$body$

language SQL STABLE
SET search_path TO user_access ;

-- Function to get all DAtas from all events param: NO PARAM NEEDED
CREATE FUNCTION getAllEventData()
 RETURNS SETOF event_data 
    AS
$body$

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
         e.vocal,
         l.id,
         l.label
    FROM user_access."event" e
    JOIN user_access."user" u ON u.id = e.user_id
    JOIN user_access."game" g ON g.id = e.game_id
    JOIN user_access."M_USER_has_GAME" uhg ON u.id = uhg.user_id AND uhg.game_id = e.game_id
    JOIN user_access."level" l ON l.id = uhg.level_id


$body$

language SQL STABLE
SET search_path TO user_access ;


COMMIT;
