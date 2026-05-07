
// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// UPDATE  
// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++



function editUserRegistStatus(userInfo,status,level){
  return USER.editUserRegistStatus(ssId_Setting,shName_UserRegist,userInfo,status,level,userExpiredDate,myWebSite,adminEmail)
  
};



function editUserPic(userId,fileInfo,userFolderId,oldUserPicId){
  // const userFoldersId // global var
  const mimeType = 'image/jpeg'
  
  const res = CRUUDS.uploadFileToDrive(fileInfo,userFolderId,mimeType) // return url
 
  // const userId = '230703-111112'
  const ss = SpreadsheetApp.openById(ssId_Setting)
  const ws = ss.getSheetByName(shName_UserRegist)
  const data = ws.getDataRange().getDisplayValues().slice(4) 
  // console.log(data)
  const rowNumber = data.findIndex( (r)=>{ return r[0] == userId}) +5 
  // console.log(rowNumber)

  // ลบ file เดิม
  DriveApp.getFileById(oldUserPicId).setTrashed(true)

  
  // บันทึกลง sheet
  const picId = res[0].userPic.split('/')[5]
  // Logger.log(picId)
  const urlPic = 'https://lh5.googleusercontent.com/d/' + picId
  ws.getRange(rowNumber,14,1,1).setValue(urlPic)

  // ส่ง link ไปหน้าบ้าน

  return res


};


function deleteFile(){
  const file = DriveApp.getFileById('1yVinSas4Ohqf4rcyMfeHDkNiC6hDrGqc').setTrashed(true)

};



function editUser(userId,userInfo){
  return USER.checkUserNameAndEmailBeforeEdit(ssId_Setting,shName_UserRegist,userId,userInfo)
   
};





function uploadFileUserPicRegist(fileInfo){
  // const userFoldersId // global var
  const mimeType = 'image/jpeg'
  const urlPic = CRUUDS.uploadFileToDrive(fileInfo,userFoldersId,mimeType) // return url
 
  // ส่ง link ไปหน้าบ้าน
  return urlPic


};





function checkOTPandRenew(userInactiveEmail,otpInput){
  return USER.checkOTPandRenew(ssId_Setting,shName_UserRegist,userInactiveEmail,otpInput)

}











