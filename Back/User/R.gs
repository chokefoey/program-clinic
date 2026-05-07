

 
// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// READ USER 
// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// ดึงข้อมูล user ทั้งหมด มาจาก Sheet
function getDataUsers(){
  return USER.getUsers(ssId_Setting,shName_UserRegist)
};


// ดึงข้อมูล user เฉพาะราย
function getUserById(userId){
  // const userId = '230703-111112'
  return USER.searchDataAll(ssId_Setting,shName_UserRegist,1,userId)

};


