var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"];

function addElementToBeginningOfArray(anArray, anElement) {
  var myArray;
  myArray = [anElement, ...anArray];
  return myArray;
}

function destructivelyAddElementToBeginningOfArray(anArray, anElement) {
  anArray.unshift(anElement);
  return anArray;
}

function addElementToEndOfArray(anArray, anElement) {
  var myArray;
  myArray = [...anArray, anElement];
  return myArray;
}

function destructivelyAddElementToEndOfArray(anArray, anElement) {
  anArray.push(anElement)
  return anArray;
}
