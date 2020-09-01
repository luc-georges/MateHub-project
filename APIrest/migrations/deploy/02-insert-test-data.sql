-- Deploy mateHub:02-insert-test-data to pg

BEGIN;



-- USER insert

INSERT INTO "user"( "email", "password","nickname","dateofbirth","description","avatar","banner") VALUES
        ( 'f@fred.fr', '$2b$10$O9KbUe8oR8HO1MN2mfa0ZO2VzrXRrpSgxk8uSg0cKktXi.KvCn.UO','Fred',timestamp '1987-07-29','Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi aperiam soluta praesentium ipsum dolor provident magnam quos quia debitis tenetur dolorem, vero eveniet quo accusamus harum mollitia molestias illo perferendis!','avatar2.png','banner1.png'),
        ( 'luc@cul.fr', '$2b$10$O9KbUe8oR8HO1MN2mfa0ZO2VzrXRrpSgxk8uSg0cKktXi.KvCn.UO','Pesty',timestamp '1987-05-10','Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi aperiam soluta praesentium ipsum dolor provident magnam quos quia debitis tenetur dolorem, vero eveniet quo accusamus harum mollitia molestias illo perferendis!desc2 ','avatar2.png','banner2.png'),
        ( 'med@med.fr', '$2b$10$O9KbUe8oR8HO1MN2mfa0ZO2VzrXRrpSgxk8uSg0cKktXi.KvCn.UO','Guillaume',timestamp '1986-09-08','Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi aperiam soluta praesentium ipsum dolor provident magnam quos quia debitis tenetur dolorem, vero eveniet quo accusamus harum mollitia molestias illo perferendis!desc3 ','avatar3.png','banner3.png'),
        ( 'meme@med.fr', '$2b$10$O9KbUe8oR8HO1MN2mfa0ZO2VzrXRrpSgxk8uSg0cKktXi.KvCn.UO','Azdazd',timestamp '1986-09-08','Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi aperiam soluta praesentium ipsum dolor provident magnam quos quia debitis tenetur dolorem, vero eveniet quo accusamus harum mollitia molestias illo perferendis!desc3 ','avatar3.png','banner3.png'),
        ( 'medmed@med.fr', '$2b$10$O9KbUe8oR8HO1MN2mfa0ZO2VzrXRrpSgxk8uSg0cKktXi.KvCn.UO','LEDJODSEMORT',timestamp '1986-09-08','Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi aperiam soluta praesentium ipsum dolor provident magnam quos quia debitis tenetur dolorem, vero eveniet quo accusamus harum mollitia molestias illo perferendis!desc3 ','avatar3.png','banner3.png');





-- GAME insert

INSERT INTO "game"( "name", "image","order") VALUES
        ('League of legend', 'lol.png',1);


-- LEVEL insert

-- LANG insert

INSERT INTO "lang"( "label", "icon") VALUES
        ('Fr', 'fr.png'),
        ('En', 'en.png'),
        ('It', 'it.png'),
        ('Es', 'es.png'),
        ('Rs', 'rs.png'),
        ('Gr', 'gr.png');

-- EVENT insert

INSERT INTO "event"( "user_id", "game_id","rank", "is_ranked","event_time","duration","player_count","player_max","description","status","vocal") VALUES
        ( 1, 1,'gold 4','true', timestamp '2020-09-22 09:00:00', '04:00', 1,5,'Compétitif full team', 0,'discord.gg/invitenumber'),
        ( 1, 1,'gold 4','true', timestamp '2020-08-10 09:00:00', '04:00', 1,5,'Compétitif full team', 0,'discord.gg/invitenumber'),
        ( 1, 1,'gold 4','true', timestamp '2020-08-11 09:00:00', '04:00', 1,5,'Compétitif full team', 0,'discord.gg/invitenumber'),
        ( 1, 1,'gold 4','true', timestamp '2020-08-12 09:00:00', '04:00', 1,5,'Compétitif full team', 0,'discord.gg/invitenumber'),
        ( 1, 1,'gold 4','true', timestamp '2020-05-22 09:00:00', '04:00', 1,5,'Compétitif full team', 0,'discord.gg/invitenumber'),
        ( 1, 1,'gold 4','true', timestamp '2020-04-22 09:00:00', '05:00', 1,3,'Compétitif full team', 0,'discord.gg/invitenumber'),
        ( 1, 1,'gold 4','true', timestamp '2020-01-22 09:00:00', '03:00', 1,2,'Compétitif full team', 0,'discord.gg/invitenumber'),
        ( 1, 1,'gold 4','true',timestamp '2020-01-22 09:00:00', '03:00', 1,2,'Compétitif full team', 0,'discord.gg/invitenumber'),
        ( 1, 1,'gold 4','true',timestamp '2020-01-22 09:00:00', '03:00', 1,2,'Compétitif full team', 0,'discord.gg/invitenumber'),
        ( 1, 1,'gold 4','true', timestamp '2020-01-22 09:00:00', '03:00', 1,2,'Compétitif full team', 0,'discord.gg/invitenumber'),
        ( 2, 1,'gold 4','true', timestamp '2021-09-22 09:00:00', '01:00', 1,5,'Compétitif full team', 0,'discord.gg/invitenumber'),
        ( 2, 1,'gold 4','true', timestamp '2021-10-22 09:00:00', '02:00', 1,4,'Compétitif full team', 0,'discord.gg/invitenumber'),
        ( 2, 1,'gold 4','true', timestamp '2021-07-22 09:00:00', '03:00', 1,5,'Compétitif full team', 0,'discord.gg/invitenumber'),
        ( 2, 1,'gold 4','true', timestamp '2021-08-25 09:00:00', '04:00', 1,3,'Compétitif full team', 0,'discord.gg/invitenumber'),
        ( 2, 1,'gold 4','true', timestamp '2021-08-22 09:00:00', '05:00', 1,5,'Compétitif full team', 0,'discord.gg/invitenumber'),
        ( 2, 1,'gold 4','true', timestamp '2021-08-21 09:00:00', '06:00', 1,2,'Compétitif full team', 0,'discord.gg/invitenumber'),
        ( 2, 1,'gold 4','true', timestamp '2021-08-23 09:00:00', '07:00', 1,5,'Compétitif full team', 0,'discord.gg/invitenumber'),
        ( 2, 1,'gold 4','true', timestamp '2021-08-21 09:00:00', '08:00', 1,5,'Compétitif full team', 0,'discord.gg/invitenumber'),
        ( 2, 1,'gold 4','true', timestamp '2021-08-28 09:00:00', '04:00', 1,2,'Compétitif full team', 0,'discord.gg/invitenumber'),
        ( 2, 1,'gold 4','true', timestamp '2021-08-27 09:00:00', '02:00', 1,5,'Compétitif full team', 0,'discord.gg/invitenumber'),
        ( 3, 1,'gold 4','true', timestamp '2021-08-24 09:00:00', '03:00', 1,5,'Compétitif full team', 0,'discord.gg/invitenumber'),
        ( 3, 1,'gold 4','true', timestamp '2021-08-27 09:00:00', '03:00', 1,5,'Compétitif full team', 0,'discord.gg/invitenumber'),
        ( 3, 1,'gold 4','true', timestamp '2021-08-22 09:00:00', '03:00', 1,5,'Compétitif full team', 0,'discord.gg/invitenumber'),
        ( 3, 1,'gold 4','true', timestamp '2021-08-27 09:00:00', '04:00', 1,5,'Compétitif full team', 0,'discord.gg/invitenumber'),
        ( 3, 1,'gold 4','true', timestamp '2021-08-23 09:00:00', '03:00', 1,5,'Compétitif full team', 0,'discord.gg/invitenumber'),
        ( 3, 1,'gold 4','true', timestamp '2021-08-27 09:00:00', '05:00', 1,5,'Compétitif full team', 0,'discord.gg/invitenumber'),
        ( 3, 1,'gold 4','true', timestamp '2021-08-25 09:00:00', '03:00', 1,5,'Compétitif full team', 0,'discord.gg/invitenumber'),
        ( 3, 1,'gold 4','true', timestamp '2021-08-27 09:00:00', '06:00', 1,5,'Compétitif full team', 0,'discord.gg/invitenumber'),
        ( 3, 1,'platinium 2','false', timestamp '2021-08-29 09:00:00', '03:00', 1,5,'Compétitif full team', 0,'discord.gg/invitenumber'),
        ( 3, 1,'platinium 2','false', timestamp '2021-08-27 09:00:00', '07:00', 1,5,'Compétitif full team', 0,'discord.gg/invitenumber'),
        ( 4, 1,'platinium 2','false', timestamp '2021-08-27 09:00:00', '07:00', 1,5,'Compétitif full team', 0,'discord.gg/invitenumber'),
        ( 4, 1,'platinium 2','false', timestamp '2021-08-27 09:00:00', '07:00', 1,5,'Compétitif full team', 0,'discord.gg/invitenumber'),
        ( 4, 1,'platinium 2','false', timestamp '2021-08-27 09:00:00', '07:00', 1,5,'Compétitif full team', 0,'discord.gg/invitenumber'),
        ( 5, 1,'platinium 2','false', timestamp '2021-08-27 09:00:00', '07:00', 1,5,'Compétitif full team', 0,'discord.gg/invitenumber'),
        ( 5, 1,'platinium 2','false', timestamp '2021-08-27 09:00:00', '07:00', 1,5,'Compétitif full team', 0,'discord.gg/invitenumber'),
        ( 5, 1,'platinium 2','false', timestamp '2021-08-27 09:00:00', '07:00', 1,5,'Compétitif full team', 0,'discord.gg/invitenumber');
         

--INSERT INTO "event"( "user_id", "game_id","event_time","duration","player_count","description","status","vocal") VALUES
        --( 1, 1, timestamp '2020-10-22 09:00:00', '04:00', 2,'test insert', 0,'discord.gg/invitenumber');



-- M_2_M_EVENT_has_LANG insert

INSERT INTO "M_EVENT_has_LANG"( "event_id", "lang_id") VALUES
        (1,1),(1,2),(1,3),(2,1),(2,2),(3,1),(4,1),(4,2),(4,3),
        (5,2),(5,1),(6,3),(7,4),(8,1),(8,2),(9,1),(9,2),(10,2),(11,1),
        (12,2),(12,3),(13,1),(14,2),(15,2),(16,2),(17,2),(18,2),(19,2),(20,2),
        (21,1),(21,2),(22,2),(23,2),(24,2),(25,2),(26,2),(27,1),(28,2),(29,2),
        (30,2),(31,2),(32,2),(33,2),(34,2),(35,2),(36,2),(36,1);

        


-- M_USER_has_GAME insert

INSERT INTO "M_USER_has_GAME"( "user_id", "game_id","IGN","stats") VALUES
        (1,1,'{"id": "yEHKyl16z0gpEorYHF4XtjV4fm3Z8MZvttmaKE3vxy0hM6s","accountId": "CH3etixT72tGR72mKwLbQh59LO6KPxRS3NmHPI1TxcN57g","puuid": "RsgVwviJnbRWtTh-hSwDDoohEt1CctDWnWAm0c6Pw15GFWE2kAHFRIEhgrXdiB-OsYoDZuFln89nHg","name": "Marvela","profileIconId": 3014,"revisionDate": 1597753361000,"summonerLevel": 204}','{"leagueId": "45028db2-049f-41c1-835a-714a56c6a30c","queueType": "RANKED_SOLO_5x5","tier": "GOLD","rank": "IV","summonerId": "yEHKyl16z0gpEorYHF4XtjV4fm3Z8MZvttmaKE3vxy0hM6s","summonerName": "Marvela","leaguePoints": 0,"wins": 295,"losses": 276,"veteran": false,"inactive": false,"freshBlood": false,"hotStreak": false}'),
        (2,1,'{"id": "yEHKyl16z0gpEorYHF4XtjV4fm3Z8MZvttmaKE3vxy0hM6s","accountId": "CH3etixT72tGR72mKwLbQh59LO6KPxRS3NmHPI1TxcN57g","puuid": "RsgVwviJnbRWtTh-hSwDDoohEt1CctDWnWAm0c6Pw15GFWE2kAHFRIEhgrXdiB-OsYoDZuFln89nHg","name": "Marvela","profileIconId": 3014,"revisionDate": 1597753361000,"summonerLevel": 204}','{"leagueId": "45028db2-049f-41c1-835a-714a56c6a30c","queueType": "RANKED_SOLO_5x5","tier": "GOLD","rank": "IV","summonerId": "yEHKyl16z0gpEorYHF4XtjV4fm3Z8MZvttmaKE3vxy0hM6s","summonerName": "Marvela","leaguePoints": 0,"wins": 295,"losses": 276,"veteran": false,"inactive": false,"freshBlood": false,"hotStreak": false}'),
        (3,1,'{"id": "yEHKyl16z0gpEorYHF4XtjV4fm3Z8MZvttmaKE3vxy0hM6s","accountId": "CH3etixT72tGR72mKwLbQh59LO6KPxRS3NmHPI1TxcN57g","puuid": "RsgVwviJnbRWtTh-hSwDDoohEt1CctDWnWAm0c6Pw15GFWE2kAHFRIEhgrXdiB-OsYoDZuFln89nHg","name": "Marvela","profileIconId": 3014,"revisionDate": 1597753361000,"summonerLevel": 204}','{"leagueId": "45028db2-049f-41c1-835a-714a56c6a30c","queueType": "RANKED_SOLO_5x5","tier": "GOLD","rank": "IV","summonerId": "yEHKyl16z0gpEorYHF4XtjV4fm3Z8MZvttmaKE3vxy0hM6s","summonerName": "Marvela","leaguePoints": 0,"wins": 295,"losses": 276,"veteran": false,"inactive": false,"freshBlood": false,"hotStreak": false}');



-- M_USER_has_EVENT insert

INSERT INTO "M_USER_has_EVENT"( "user_id", "event_id","status","message") VALUES
        (1,11,1,'Hey mate, i would love to participate! Check my profile ! from id 1'),
        (1,12,1,'Hey mate, i would love to participate! Check my profile ! from id 1'),
        (1,13,1,'Hey mate, i would love to participate! Check my profile ! from id 1'),
        (1,14,0,'Hey mate, i would love to participate! Check my profile ! from id 1'),
        (1,15,0,'Hey mate, i would love to participate! Check my profile ! from id 1'),
        (1,16,3,'Hey mate, i would love to participate! Check my profile ! from id 1'),
        (1,17,2,'Hey mate, i would love to participate! Check my profile ! from id 1'),
        (1,30,2,'Hey mate, i would love to participate! Check my profile ! from id 1'),
        (1,31,0,'Hey mate, i would love to participate! Check my profile ! from id 1'),
        (1,32,1,'Hey mate, i would love to participate! Check my profile ! from id 1'),
        (2,1,0,'Hey mate, i would love to participate! Check my profile ! from id 2'),
        (2,2,0,'Hey mate, i would love to participate! Check my profile ! from id 2'),
        (2,3,1,'Hey mate, i would love to participate! Check my profile ! from id 2'),
        (2,4,1,'Hey mate, i would love to participate! Check my profile ! from id 2'),
        (2,5,1,'Hey mate, i would love to participate! Check my profile ! from id 2'),
        (2,6,2,'Hey mate, i would love to participate! Check my profile ! from id 2'),
        (2,7,2,'Hey mate, i would love to participate! Check my profile ! from id 2'),
        (2,35,2,'Hey mate, i would love to participate! Check my profile ! from id 2'),
        (2,34,3,'Hey mate, i would love to participate! Check my profile ! from id 2'),
        (2,33,3,'Hey mate, i would love to participate! Check my profile ! from id 2'),
        (3,3,3,'Hey mate, i would love to participate! Check my profile ! from id 3'),
        (3,4,3,'Hey mate, i would love to participate! Check my profile ! from id 3'),
        (3,5,3,'Hey mate, i would love to participate! Check my profile ! from id 3'),
        (3,6,3,'Hey mate, i would love to participate! Check my profile ! from id 3'),
        (3,7,3,'Hey mate, i would love to participate! Check my profile ! from id 3'),
        (3,8,3,'Hey mate, i would love to participate! Check my profile ! from id 3'),
        (3,11,3,'Hey mate, i would love to participate! Check my profile ! from id 3'),
        (3,9,3,'Hey mate, i would love to participate! Check my profile ! from id 3'),
        (3,10,3,'Hey mate, i would love to participate! Check my profile ! from id 3'),
        (3,13,3,'Hey mate, i would love to participate! Check my profile ! from id 3'),
        (3,14,3,'Hey mate, i would love to participate! Check my profile ! from id 3');
COMMIT;


