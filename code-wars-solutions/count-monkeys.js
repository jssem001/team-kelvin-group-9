// counting monkeys solution
function monkeyCount(n) {
    // your code here
      let monkeyCount = []
      let i = 1
      while(i <= n){
        monkeyCount.push(i)
        i += 1
      }
      return monkeyCount
    }