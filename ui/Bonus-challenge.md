**💰BONUS CHALLENGE**💰: A developer working on the backend mentioned that one of the enrollees doesn't appear to be working. Getting or modifying this enrollee was causing an internal server error. Sadly, they couldn't remember which enrollee had this issue. Can you fix this?


RESOLUTION:

THere is a enrolle with id 89a0cd0525fb4b6ea8f8fc2187f690d0 is the one throwing 500 internal server error
http://localhost:8080/enrollees/89a0cd0525fb4b6ea8f8fc2187f690d0

CAUSE

Per standard library of deno uuid has to be in this format NIL_UUID = "00000000-0000-0000-0000-000000000000";
In enrolleeService.ts, we call UUID.validate(id), which throws 500 Internal server error as the given enrolee id 89a0cd0525fb4b6ea8f8fc2187f690d0 is not in the expected format.

CORRECTION
id is corrected to 89a0cd05-25fb-4b6e-a8f8-fc2187f690d0, and it works just fine