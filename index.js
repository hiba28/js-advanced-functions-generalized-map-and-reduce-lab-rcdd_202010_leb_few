// Add your functions here
function map(array){
  return array.map(elem => elem * -1)
}
function mapOriginalValue(array){
  return array.map(elem => elem)
}
function mapValueTimes2(array){
  return array.map(elem => elem * 2)
}
function mapToSquare(array){
  return array.map(elem => elem ** 2)
}
//mapToSquare([1, 2, 3, -9])
function reduceToOne(array){
  return array.reduce((acc,curr) => acc+curr)
}
