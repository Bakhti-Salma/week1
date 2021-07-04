/*
  The space travellers have safely landed and are foraging for food in the natural wildlife.
  There are bushes with many different colour berries.
  The pink berries are the ONLY safe ones to eat.
  If any other berries are present, it's best not to eat from the bush at all!
  Create a function which checks if the bush has ALL PINK berries and is safe for the astronauts to eat from the bush.
  Use the tests to confirm which message to return
*/

function bushChecker(bushBerryColours) {

    for (let i = 0; i < bushBerryColours.length; i++) {
        if ((bushBerryColours [i] === bushBerryColours [i])){
          
            return   "  bush is safe to eat from "  ;
           }
           else if ((bushBerryColours [i] != bushBerryColours [i])) {
           return "Toxic! Leave bush alone!";
           }

        } 

}
console.log(bushChecker(["pink", "pink", "pink", "neon", "pink", "transparent"]));

