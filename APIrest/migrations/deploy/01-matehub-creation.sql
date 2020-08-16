-- Deploy mateHub:01-matehub-creation to pg

BEGIN;

CREATE TABLE "user" (
    "id" INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "nickname" TEXT NOT NULL,
    "DOB" TIMESTAMPTZ NOT NULL,
    "description" TEXT,
    "avatar" TEXT,
    "banner" TEXT
);
CREATE TABLE "game" (
    "id" INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    "name" TEXT NOT NULL,
    "image" TEXT,
    "order" INT
);
CREATE TABLE "level" (
    "id" INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    "label" TEXT NOT NULL,
    "icon" TEXT,
    "game_id" INT NOT NULL REFERENCES "game"("id")
);
CREATE TABLE "lang" (
    "id" INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    "label" TEXT NOT NULL,
    "icon" TEXT
);
CREATE TABLE "event" (
    "id" INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    "user_id" INT NOT NULL REFERENCES "user"("id"),
    "game_id" INT NOT NULL REFERENCES "game"("id"),
    "event_time" TIMESTAMPTZ NOT NULL,
    "duration" INTERVAL ,
    "player_count" INT NOT NULL ,
    "description" TEXT,
    "status" INT NOT NULL DEFAULT 0 ,
    "image" TEXT,
    "vocal" TEXT
);
CREATE TABLE "M_2_M_USER_has_GAME" (
    "id" INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    "user_id" INT NOT NULL REFERENCES "user"("id"),
    "game_id" INT NOT NULL REFERENCES "game"("id"),
    "level_id" INT REFERENCES "game"("id")
);
CREATE TABLE "M_2_M_USER_has_EVENT" (
    "id" INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    "event_id" INT NOT NULL REFERENCES "event"("id"),
    "user_id" INT NOT NULL REFERENCES "user"("id"),
    "status" INT NOT NULL DEFAULT 0 ,
    "message" TEXT NOT NULL DEFAULT 'Hey mate, i would love to participate! Check my profile !'
);
CREATE TABLE "M_2_M_EVENT_has_LANG" (
    "id" INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    "event_id" INT NOT NULL REFERENCES "event"("id"),
    "lang_id" INT NOT NULL REFERENCES "lang"("id")
);

COMMIT;
