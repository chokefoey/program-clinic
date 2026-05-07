// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// CREATE USER เพิ่มรายชื่อผู้ใช้งานรายใหม่ เพื่อรออนุมัติจาก Admin
// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

function registUser(userInfo,fileInfo){
  // สร้าง folder ใหม่สำหรับ user แต่ละคน
  const parentFolder = userFoldersId // global var
  const folderName = userInfo.userName
  const folderId = DriveApp.getFolderById(parentFolder).createFolder(folderName).getId(); 
  const avatarDefaultId =  avatarDefault.split('/')[4]  // avatarDefault global var

  if ( fileInfo.file1.base64 == ''){
    const copiedFileId = copyFileToFolder(avatarDefaultId, folderId);
    const userPic = 'https://lh5.googleusercontent.com/d/' + copiedFileId
    const userInfoNew = {...userInfo,userPic,folderId}

    return USER.addUser(ssId_Setting,shName_UserRegist,userInfoNew,adminEmail)

  } else {
    // upload img and return arr object header and url
    const mimeType = 'image/jpeg'
    const headerUrlArr = CRUUDS.uploadFileToDrive(fileInfo,folderId,mimeType) // return [ {header1:"url1"},{header2:"url2},{header3:"url3} ]
    const linkPic = findValueByKey(headerUrlArr, 'userPic'); // find url by header (or key) return link by key
    
    // เปลี่ยนจาก link https://drive.google.com/file/d/xxxxxxxxxxxxxxxxxxx/view?usp=drivesdk ให้เป็น lh5
    const picId = linkPic.split('/')[5]
    const userPic = 'https://lh5.googleusercontent.com/d/' + picId
    
    const userInfoNew = {...userInfo,userPic,folderId}

    return USER.addUser(ssId_Setting,shName_UserRegist,userInfoNew,adminEmail)
    
  }
  

};


function findValueByKey(array, key) {
  let object = array.find(obj => key in obj);
  return object ? object[key] : null;

};


function copyFileToFolder(sourceFileId, targetFolderId) {
  // Get the source file by its ID
  var sourceFile = DriveApp.getFileById(sourceFileId);
  
  // Get the target folder by its ID
  var targetFolder = DriveApp.getFolderById(targetFolderId);
  
  // Make a copy of the source file in the target folder
  var copiedFile = sourceFile.makeCopy(sourceFile.getName(), targetFolder);
  
  // Get the ID of the copied file
  var copiedFileId = copiedFile.getId();
  
  // Log the ID of the copied file (optional)
  Logger.log("Copied File ID: " + copiedFileId);

  return copiedFileId
};



function recoverUserData(userEmailInput){
  return USER.recoverUserData(ssId_Setting,shName_UserRegist,userEmailInput)
};

function sendOTPforUserAdd(userEmailAdd,otpForUserAdd,refOtpForUserAdd){
  return USER.sendOTPforUserAdd(userEmailAdd,otpForUserAdd,refOtpForUserAdd)
};

function sendOTPforUserRenew(userInactiveEmail){
  return USER.sendOTPforUserRenew(ssId_Setting,shName_UserRegist,userInactiveEmail)
};

function checkOTPandRenew(userInactiveEmail,otpInput){
  return USER.checkOTPandRenew(ssId_Setting,shName_UserRegist,userInactiveEmail,otpInput)
};


function addNewUserByAdminToSheet(userInfo){
  return CRUUDS.createDataSingleRowType4(ssId_Setting,shName_UserRegist,userInfo,"US")

};




