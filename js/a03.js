let object = {
  a: "hund", b: "katze", c: "maus", d: "elefant", e: "schlange", f: "stachelschwein", g: "affe", h: "giraffe"
}

function addObjectElement(key, value) {
  let objectCopy = Object.assign({}, object)
  let keys = Object.keys(objectCopy)
  if (keys.includes(key)){
    var newKey = key;
    var count = 1;
    while (keys.includes(newKey)){
      newKey = key + "_" + count
      count++;
    }
    key = newKey;
  }
  Object.assign(objectCopy, {[key]: value})
  return objectCopy;
}

function getObjectElements(keys) {
  let result = [];
  for (let i = 0; i < keys.length; i++) {
    if (Object.keys(object).includes(keys[i])) {
      result[i] = object[keys[i]];
    }
    else{
      result[i] = "not found"
    }
  }
  return result;
}

function deleteObjectElements(keys) {
  let objectCopy = Object.assign({}, object)
  for (let i = 0; i < keys.length; i++) {
    if (Object.keys(object).includes(keys[i])) {
      delete objectCopy[keys[i]]
    }
  }
  return objectCopy;
}