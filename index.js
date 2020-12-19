// Add your functions here
function map(src, cb) {
  let r = []
  for (let i = 0; i < src.length; i++) {
    let theElement = src[i]
    r.push(cb(theElement))
  }
  return r;
}

//mapToSquare([1, 2, 3, -9])
function reduceToOne(array){
  return array.reduce((acc,curr) => acc+curr)
}
