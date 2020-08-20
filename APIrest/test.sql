SELECT e.id AS "event_id", 
        u.id AS "user_id", 
        u.nickname AS "creator", 
        g.name AS "game_name",
        e.game_id, 
        e.event_time AS "starting",
        e.duration , 
        e.player_count,
         e.description,
         la.label,
         la.icon, 
         e.status, 
         e.vocal,
         l.id,
         l.label
    FROM user_access."event" e
    JOIN user_access."user" u ON u.id = e.user_id
    JOIN user_access."game" g ON g.id = e.game_id
    JOIN user_access."M_EVENT_has_LANG" ehl ON e.id = ehl.event_id
    JOIN user_access."lang" la ON la.id = ehl.lang_id
    JOIN user_access."M_USER_has_GAME" uhg ON u.id = uhg.user_id AND uhg.game_id = e.game_id
    JOIN user_access."level" l ON l.id = uhg.level_id
    WHERE e.id = "EVENT_ID";

   SELECT * FROM user_access.event e
   JOIN user_access."M_USER_has_EVENT" m ON m.user_id = e.user_id
   JOIN user_access.user u ON u.id = m.user_id
   WHERE u.id = 1;
