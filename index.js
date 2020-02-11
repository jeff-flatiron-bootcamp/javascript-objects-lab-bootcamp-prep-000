function updateObjectWithKeyAndValue(object, key, value)
{
  object[key] = value;
  return object;
}

function updateObjectWithKeyAndValue(object, key, value)
{
  var returnObject = Object.assign({}, object, {[key]:value});
  return returnObject;
}

function destructivelyUpdateObjectWithKeyAndValue(object, key, value)
{
  object[key] = value;
  return object;
}

function deleteFromObjectByKey(object, key)
{
<<<<<<< HEAD
  var returnObject = Object.assign({},object);
=======
  var returnObject = object;
>>>>>>> 7b80d63229b5d0a51d80dc257b2dd452658a7219
  delete returnObject[key];
  return returnObject;
}

<<<<<<< HEAD

function destructivelyDeleteFromObjectByKey(object, key)
{
  delete object[key];
  return object;
}
=======
>>>>>>> 7b80d63229b5d0a51d80dc257b2dd452658a7219
