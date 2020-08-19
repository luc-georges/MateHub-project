-- Deploy mateHub:05-view-global-users to pg

BEGIN;


CREATE VIEW getTopusers AS

        SELECT  us."id" AS "_user_id",
                us.nickname AS "_name",
                us.avatar AS "_avatar",
                us.banner AS "_banner",
                COUNT(DISTINCT e.id) as "_total_events",
                COUNT(*) FILTER (WHERE g.id = 1 ) AS "_total_cs",
                COUNT(*) FILTER (WHERE g.id = 2) AS "_total_lol"
            FROM user_access."user" us 
            JOIN user_access."event" e ON us.id = e.user_id 
            JOIN user_access."game"  g ON e.game_id = g.id
        GROUP BY us.id 
        ORDER BY "_total_events" DESC;
COMMIT;
