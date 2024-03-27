//solution for counting sheep
function countSheeps(sheep) {
    // TODO
    let count = 0
    for (let i of sheep){
      if(i == true){
        count++
      }
    }
    return count
  }