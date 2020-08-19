-- Revert mateHub:05-view-global-users from pg

BEGIN;

DROP VIEW getTopusers ;

COMMIT;
