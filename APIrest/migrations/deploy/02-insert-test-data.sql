-- Deploy mateHub:02-insert-test-data to pg

BEGIN;



-- GAME insert

INSERT INTO "game"( "name", "image","order") VALUES
        ('League of legends', 'lol.png',1);


-- LEVEL insert

-- LANG insert

INSERT INTO "lang"( "label", "icon") VALUES
        ('Fr', 'fr'),
        ('En', 'uk'),
        ('It', 'it'),
        ('Es', 'es'),
        ('Rs', 'rs'),
        ('Gr', 'de');

-- EVENT insert


COMMIT;


