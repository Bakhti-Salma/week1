function mood(isHappy) {
    

    if (isHappy == true) {
      return "I am happy";
    } else {
      return "I am not happy";
    }
  }
  console.log(mood(false));

  function greaterThan10(num) {
    
    if (num >=10) {
      return "num is greater than or equal to 10";
    } else {
      return "num is not big enough";
    }
  }
  console.log(greaterThan10(1));

  function sortArray(letters) {
    //let letters = ["a", "n", "c", "e", "z", "f"];
     //sortedLetters = letters ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w","x", "y", "z"];
  
    return letters.sort() ;
    
  }
  console.log(sortArray(["a", "n", "c", "e", "z", "f"]));

  
  function get3rdIndex(arr) {
   let index = 3;
     element = arr[index];
  
    return element;
  }
  console.log(get3rdIndex(["fruit", "banana", "apple", "strawberry", "raspberry"]));

  