// Solution for reduce but grow
function grow(x){
    let multi = 1
    for (let i of x){
    multi *= i
    }
    return multi
  }