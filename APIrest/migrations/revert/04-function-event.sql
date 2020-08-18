-- Revert mateHub:04-function-event from pg

BEGIN;

DROP FUNCTION getEventData(INT);
DROP FUNCTION getAllEventData();
DROP type event_data  ;
 

COMMIT;
