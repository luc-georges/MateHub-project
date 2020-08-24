-- Deploy mateHub:06-insert-user-details to pg

BEGIN;
CREATE type user_profile_data as ( "_user_id" INT ,
                            "_nickname" TEXT, 
                            "_DOB" TIMESTAMPTZ, 
                            "_description" TEXT, 
                            "_avatar" TEXT,
                            "_banner" TEXT , 
                            "_games" JSON);

-- Function to get all DAtas from a specifique event param: (event_id)
CREATE FUNCTION getUserData("USER_ID" INT)
 RETURNS SETOF user_profile_data 
    AS
$body$

SELECT u.id AS "_user_id",  
        u.nickname AS "_nickname", 
        u."DOB" AS "_DOB",
        u.description AS "_description",
        u.avatar AS "_avatar",
        u.banner AS "_banner", 
        (SELECT 
        json_agg(
            json_build_object(
                'id', g.id, 
                'name', g.name, 
                'ign', uhg."IGN",
                'stats', uhg."stats"
            )
        ) as games
    FROM user_access."M_USER_has_GAME" uhg 
     JOIN user_access."game" g ON g.id = uhg.game_id
     WHERE uhg.user_id = u.id
    GROUP by u.id) as games
    FROM user_access."user" u
    WHERE u.id =1;


$body$

language SQL STABLE ;



COMMIT;

CREATE FUNCTION getUserData("USER_ID" INT)
 RETURNS SETOF user_profile_data 
    AS
$body$

SELECT u.id AS "_user_id",  
        u.nickname AS "_nickname", 
        u."DOB" AS "_DOB",
        u.description AS "_description",
        u.avatar AS "_avatar",
        u.banner AS "_banner", 
        (SELECT 
        json_agg(
            json_build_object(
                'id', g.id, 
                'name', g.name, 
                'ign', uhg."IGN",
                'stats', uhg."stats"
            )
        ) as games
    FROM user_access."M_USER_has_GAME" uhg 
     JOIN user_access."game" g ON g.id = uhg.game_id
     WHERE uhg.user_id = u.id
    GROUP by u.id) as games
    FROM user_access."user" u
    WHERE u.id =1;


$body$

language SQL STABLE ;