// solution for count positive and sum negative
function countPositivesSumNegatives(input) {
    // your code here
    if(input==[] || input==null || input == ""){
      return []
    }
    let positive = 0
    let negative = 0
    for (let i of input){
      if(i>0){
        positive++
      }else if(i<0){
        negative += i
      }else{
        continue
      }
    }
    return [positive,negative]
}