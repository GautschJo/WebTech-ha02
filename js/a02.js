let array = ["hund", "katze", "maus", "elefant", "schlange", "stachelschwein", "affe", "giraffe"];

function addArrayElement(element) {
  let arrayCopy = [...array];
  if (!arrayCopy.includes(element)){
    arrayCopy.push(element);
  }
  return arrayCopy;
}

function getArrayElements(number, startIndex) {
  let result = [];
  var count = 0;
  for (let i = startIndex % array.length; count < number; i++) {
    result.push(array[i]);
    count++;
    if(i == array.length - 1){
      break;
    }
  }
  return result;
}

function deleteArrayElements(number, startIndex, everyIth) {
  let arrayCopy = [...array];
  let removedItems = [];
  var count = 0;
  for (let i = startIndex%array.length; count < number;i) {
    if ( i >= array.length){
      break;
    }
    
    removedItems.push(array[i]);
    arrayCopy[i] = null;
    count += everyIth;
    i += everyIth;
  }
  return {
    newResult: arrayCopy,
    removedItems: removedItems
  };  
}