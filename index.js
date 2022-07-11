function gimme (triplet) {
    let index = 0 
    let min = Math.min(...triplet)
    let max = Math.max(...triplet)
    for (let i = 0; i < triplet.length; i++){
      if (triplet[i] !== min && triplet[i] !== max){
        index = i
        }
      }
    return index
}
    