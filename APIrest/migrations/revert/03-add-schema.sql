-- Revert mateHub:03-add-schema from pg

BEGIN;

ALTER TABLE "user_access"."user" SET SCHEMA public ;
ALTER TABLE "user_access"."game" SET SCHEMA public ;
ALTER TABLE "user_access"."level" SET SCHEMA public ;
ALTER TABLE "user_access"."lang" SET SCHEMA public ;
ALTER TABLE "user_access"."event" SET SCHEMA public ;
ALTER TABLE "user_access"."M_USER_has_GAME" SET SCHEMA public ;
ALTER TABLE "user_access"."M_USER_has_EVENT" SET SCHEMA public ;
ALTER TABLE "user_access"."M_EVENT_has_LANG" SET SCHEMA public ;

REVOKE USAGE ON SCHEMA user_access FROM global_user;
DROP SCHEMA user_access  CASCADE;

DROP ROLE global_user ;


COMMIT;
