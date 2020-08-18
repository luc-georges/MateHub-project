-- Deploy mateHub:03-add-schema to pg

BEGIN;

CREATE SCHEMA user_access ;
ALTER TABLE "user" SET SCHEMA user_access ;
ALTER TABLE "game" SET SCHEMA user_access ;
ALTER TABLE "level" SET SCHEMA user_access ;
ALTER TABLE "lang" SET SCHEMA user_access ;
ALTER TABLE "event" SET SCHEMA user_access ;
ALTER TABLE "M_USER_has_GAME" SET SCHEMA user_access ;
ALTER TABLE "M_USER_has_EVENT" SET SCHEMA user_access ;
ALTER TABLE "M_EVENT_has_LANG" SET SCHEMA user_access ;

CREATE ROLE global_user WITH LOGIN ENCRYPTED PASSWORD 'user';

GRANT USAGE ON SCHEMA user_access TO global_user;

COMMIT;
