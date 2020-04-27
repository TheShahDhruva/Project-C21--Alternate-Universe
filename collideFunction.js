function collideClear(clearingObject,objectClear){
    if(clearingObject.isTouching(objectClear)) {
    return true;
  }
  else {
    return false;
  }
  }