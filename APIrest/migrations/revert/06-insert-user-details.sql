-- Revert mateHub:06-insert-user-details from pg

BEGIN;

DROP FUNCTION getUserData(INT);
DROP type user_profile_data ;
 

COMMIT;
