-- Deploy mateHub:02-insert-test-data to pg

BEGIN;



-- USER insert

INSERT INTO "user"( "email", "password","nickname","dateofbirth","description","avatar","banner") VALUES
        ( 'test1@gmail.com', 'test1','test1login',timestamp '1987-07-29',' ','avatar1.png','banner1.png'),
        ( 'test2@gmail.com', 'test2','test2login',timestamp '1987-05-10','desc2 ','avatar2.png','banner2.png'),
        ( 'test3@gmail.com', 'test3','test3login',timestamp '1987-07-08','desc3 ','avatar3.png','banner3.png');




-- GAME insert

INSERT INTO "game"( "name", "image","order") VALUES
        ( 'Counter Strike GO', 'cs.png',2),
        ( 'League of legend', 'lol.png',3),
        ( 'Alexandra Ledermann :Passion Cheval', 'al.png',1);

-- LEVEL insert

INSERT INTO "level"( "label", "icon","game_id") VALUES
        ( 'bronze ponney', 'bp.png',3),
        ( 'silver ponney', 'sp.png',3),
        ( 'platine ponney', 'pp.png',3),
        ( 'Silver 1', 'sil.png',2),
        ( 'Silver 2', 'sil2.png',2),
        ( 'platinium 1', 'pla1.png',2),
        ( 'platinium 2', 'pla2.png',2),
        ( 'Nova 1', 'Nov1.png',1),
        ( 'Nova 2', 'Nov2.png',1),
        ( 'Nova 3', 'Nov3.png',1);

-- LANG insert

INSERT INTO "lang"( "label", "icon") VALUES
        ('Fr', 'fr.png'),
        ('En', 'en.png'),
        ('It', 'it.png'),
        ('Es', 'es.png');

-- EVENT insert

INSERT INTO "event"( "user_id", "game_id","event_time","duration","player_count","player_max","description","status","vocal") VALUES
        ( 1, 1, timestamp '2020-08-22 09:00:00', '04:00', 1,5,'Compétitif full team', 0,'discord.gg/invitenumber'),
         ( 1, 1, timestamp '2020-10-22 09:00:00', '04:00', 1,5,'Compétitif full team', 0,'discord.gg/invitenumber'),
         ( 1, 2, timestamp '2020-10-22 09:00:00', '04:00', 1,5,'Compétitif full team', 0,'discord.gg/invitenumber'),
        ( 2, 2, timestamp '2020-08-16 09:00:00', '04:00', 1,10,'Duo Q', 3 ,'discord.gg/invitenumber');

--INSERT INTO "event"( "user_id", "game_id","event_time","duration","player_count","description","status","vocal") VALUES
        --( 1, 1, timestamp '2020-10-22 09:00:00', '04:00', 2,'test insert', 0,'discord.gg/invitenumber');



-- M_2_M_EVENT_has_LANG insert

INSERT INTO "M_EVENT_has_LANG"( "event_id", "lang_id") VALUES
        (1,2),
        (1,1),
        (2,1);


-- M_USER_has_GAME insert

INSERT INTO "M_USER_has_GAME"( "user_id", "game_id","level_id","IGN") VALUES
        (1,1,4,'{"id": "IGN3"}'),
        (2,2,7,'{"id": "IGN4"}'),
        (2,1,8,'{"id": "IGN5"}');

-- M_USER_has_EVENT insert

INSERT INTO "M_USER_has_EVENT"( "user_id", "event_id","status","message") VALUES
        (1,2,1,'Hey mate, i would love to participate! Check my profile ! from id 2'),
        (2,1,2,'Hey mate, i would love to participate! Check my profile ! from id 3'),
        (1,1,1,'Hey mate 2eme, i would love to participate! Check my profile ! from id 1 '),
        (1,2,1,'Hey mate 2eme, i would love to participate! Check my profile ! from id 2'),
        (2,1,2,'Hey mate 2eme, i would love to participate! Check my profile ! from id 3'),
        (1,1,1,'Hey mate 3eme, i would love to participate! Check my profile ! from id 1 '),
        (1,2,1,'Hey mate 3eme, i would love to participate! Check my profile ! from id 2'),
        (2,1,2,'Hey mate 3eme, i would love to participate! Check my profile ! from id 3');
COMMIT;


INSERT INTO user_access."M_USER_has_EVENT"( "user_id", "event_id","status","message") VALUES
        (4,2,1,'Hey mate, i would love to participate! Check my profile ! from id 2'),
        (4,1,2,'Hey mate, i would love to participate! Check my profile ! from id 3')