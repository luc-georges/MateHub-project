-- Deploy mateHub:01-matehub-creation to pg

BEGIN;

-- User table
CREATE TABLE "user" (
    "id" INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "nickname" TEXT NOT NULL,
    "dateofbirth" TIMESTAMPTZ NOT NULL,
    "description" TEXT,
    "avatar" TEXT,
    "banner" TEXT
);

--Game Table
CREATE TABLE "game" (
    "id" INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    "name" TEXT NOT NULL,
    "image" TEXT,
    "order" INT
);

--Level Table
CREATE TABLE "level" (
    "id" INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    "label" TEXT NOT NULL,
    "icon" TEXT,
    "game_id" INT NOT NULL REFERENCES "game"("id")
);

--Lang Table
CREATE TABLE "lang" (
    "id" INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    "label" TEXT NOT NULL,
    "icon" TEXT
);

--Event Table
CREATE TABLE "event" (
    "id" INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    "user_id" INT NOT NULL REFERENCES "user"("id"),
    "game_id" INT NOT NULL REFERENCES "game"("id"),
    "rank" TEXT ,
    "is_ranked" BOOLEAN NOT NULL,
    "event_time" TIMESTAMPTZ NOT NULL,
    "duration" INTERVAL ,
    "player_count" INT NOT NULL DEFAULT 1  CONSTRAINT max_player CHECK (player_count <= player_max),
    "player_max" INT NOT NULL ,
    "description" TEXT,
    "status" INT NOT NULL DEFAULT 0 ,
    "vocal" TEXT
);

--M_2_M 

CREATE TABLE "M_USER_has_GAME" (
    "user_id" INT NOT NULL REFERENCES "user"("id"),
    "game_id" INT NOT NULL REFERENCES "game"("id"),
    "IGN" JSON ,
    "stats" JSON,
    "level_id" INT REFERENCES "level"("id"),
    "region" TEXT,
    PRIMARY KEY ("user_id","game_id")
);


CREATE TABLE "M_USER_has_EVENT" (
    "event_id" INT NOT NULL REFERENCES "event"("id"),
    "user_id" INT NOT NULL REFERENCES "user"("id"),
    "status" INT NOT NULL DEFAULT 0 ,
    "message" TEXT NOT NULL DEFAULT 'Hey mate, i would love to participate! Check my profile !',
    PRIMARY KEY ("event_id","user_id")
);

CREATE TABLE "M_EVENT_has_LANG" (
    "event_id" INT NOT NULL REFERENCES "event"("id"),
    "lang_id" INT NOT NULL REFERENCES "lang"("id") DEFAULT 2,
    PRIMARY KEY ("event_id","lang_id")
);




COMMIT;
