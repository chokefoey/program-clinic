

function checkLogIn(userNameInput,passWordInput){
  // const userNameInput = 'g'
  // const passWordInput = 'g'
  return USER.checkLogIn(ssId_Setting,shName_UserRegist,shName_UserEvent,userNameInput,passWordInput)  // return array obj
};

function checkLogOut(userInfoReturn){
  return USER.checkLogOut(ssId_Setting,shName_UserEvent,userInfoReturn)
};


 


