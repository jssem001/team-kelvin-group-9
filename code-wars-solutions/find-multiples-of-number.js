//Solution for multiples of a number
function findMultiples(integer, limit) {
    //your code here
    let theMultiples = []
    let i = integer
    while(i<=limit){
      if(i%integer == 0){
        theMultiples.push(i)
        i++
      }else{
        i++
      }
    }
    return theMultiples
  }