-- Deploy mateHub:05-view-global-users to pg

BEGIN;


CREATE VIEW getTopusers AS

        SELECT DISTINCT ON (e.user_id) "user_id" AS "_user_id",
        us.nickname AS "_name",
        us.avatar AS "_avatar",
        us.banner AS "_banner",
        (SELECT COUNT(id) FROM user_access."event" ev WHERE us.id = ev.user_id) AS "_total_events",
        (SELECT COUNT (CASE WHEN g.id = 1 THEN 1 END) ) AS "_total_cs",
        (SELECT COUNT (CASE WHEN g.id = 2 THEN 1 END) ) AS "_total_lol"
    FROM user_access."user" us
    JOIN user_access."event" e  ON us.id = e.user_id 
    JOIN user_access."game"  g ON  e.game_id = g.id
    GROUP BY  e.user_id, us.nickname, us.id ;


COMMIT;
