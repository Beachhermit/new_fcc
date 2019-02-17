function isValidWalk(walk) {

  let position = [0, 0];    //starting position on a grid
  if (walk.length != 10) {return false}  //check for walk too long or short
  for (let i = 0; i < walk.length; i++) {
    switch (walk[i]) {
      case 'n':
        position[1]++;          //switch statement to interpret each
        break;                  //item in the walk array as a 1 unit
      case 's':                 //move in indicated direction
        position[1]--;
        break;
      case 'e':
        position[0]++;
        break;
      case 'w':
        position[0]--;
    }
  }
    //then return whether we are back where we started([0, 0])!
  return position[0] == 0 && position[1] == 0;
}

console.log([0, 0] == [0, 0]); //I just discovered that arrays can't be equal
console.log(isValidWalk(['n','s','n','s','n','s','n','s','n','s'])); //true
console.log(isValidWalk(['w','e','w','e','w','e','w','e','w','e','w','e'])); //false
console.log(isValidWalk(['w'])); //false
console.log(isValidWalk(['n','n','n','s','n','s','n','s','n','s'])); //false