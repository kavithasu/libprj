function isTouching(movingobj,fixedobj){
 
    if(movingobj.x-fixedobj.x<movingobj.width/2+fixedobj.width/2 &&
      fixedobj.x-movingobj.x<movingobj.width/2+fixedobj.width/2 &&
      movingobj.y-fixedobj.y<movingobj.height/2+fixedobj.height/2 &&
      fixedobj.y-movingobj.y<movingobj.height/2+fixedobj.height/2){
     
      return true;
    }
    else{
      
      return false;
    }
  }
  function bounceoff(object1,object2){
    if(object1.x-object2.x<object1.width/2+object2.width/2 &&
     object2.x-object1.x<object2.width/2+object1.width/2 ){
     object1.velocityX=object1.velocityX*(-1);
     object2.velocityX=object2velocityX*(-1);
      }
      if(object1.y-object2.y<object1.height/2+object2.height/2 &&
        object2.y-object1.y<object2.height/2+object1.height/2 ){
        object1.velocityY=object1.velocityY*(-1);
        object2.velocityY=object2.velocityY*(-1);
        }
      }