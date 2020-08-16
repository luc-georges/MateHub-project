-- Revert mateHub:01-matehub-creation from pg

BEGIN;

DROP TABLE "M_USER_has_GAME"  ;
DROP TABLE "M_USER_has_EVENT"  ;
DROP TABLE "M_EVENT_has_LANG"  ;
DROP TABLE "event"  ;
DROP TABLE "level"  ;
DROP TABLE "game"  ;
DROP TABLE "lang"  ;
DROP TABLE "user"  ;

COMMIT;
