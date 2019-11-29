function meeting(rooms, need) {
  if (!need) return 'Game On';
  if (need < 0 || need > 8) return 'Invalid need argument';
  let result = [];
  rooms.forEach((value, index) => {
    const numOccupance = value[0].length;
    const chairsInRoom = value[1];
    const freeChairs = chairsInRoom - numOccupance;
    if (need > 0) {
      if (freeChairs <= 0) {
        result[index] = 0;
      } else if (freeChairs <= need) {
        result[index] = freeChairs;
        need -= freeChairs;
      } else if (freeChairs > need) {
        result[index] = need;
        need = 0;
      }
    }
  });
  return result;
}

//////////Testing///////////////////////////////////////////////////////////////
console.log(meeting([['XXX', 3], ['XXXXX', 6], ['XXXXXX', 9]], 4)); //[0, 1, 3]
console.log(meeting([['XXX', 3], ['XXXXX', 6], ['XXXXXX', 9], ['XXX',2]], 4)); //[0, 1, 3]
console.log(meeting([['XXX', 1], ['XXXXXX', 6], ['X', 2], ['XXXXXX', 8], ['X', 3], ['XXX', 1]], 5) ); //[0, 0, 1, 2, 2]
console.log(meeting([['XX', 2], ['XXXX', 6], ['XXXXX', 4]], 0));  //'Game On'
