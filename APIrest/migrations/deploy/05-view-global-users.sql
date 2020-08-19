-- Deploy mateHub:05-view-global-users to pg

BEGIN;

CREATE VIEW getTopusers AS
        SELECT 
        u.id AS "user_id",
        u.nickname AS "name", 
    FROM user_access."user" u
    JOIN user_access."event" u ON u.id = e.user_id
    JOIN user_access."game" g ON g.id = e.game_id
    JOIN user_access."M_USER_has_GAME" uhg ON u.id = uhg.user_id AND uhg.game_id = e.game_id
    ORDER BY e.event_time DESC

COMMIT;
