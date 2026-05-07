



// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// Function เมื่อมีการส่งคำสั่ง Login เข้ามา 
// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

function doPost(e) {
  const userNameInput = e.parameter.username || 'unknown'
  const passWordInput = e.parameter.password || 'unknown'
  const otpInput = e.parameter.otp || 'unknown'

  const output = checkLogIn(userNameInput, passWordInput, otpInput);
  console.log(output)

  // 1. กรณี LOGIN สำเร็จ
  if (output[0].result == "Correct") {
    const template = HtmlService.createTemplateFromFile(appPage)

    // *** user profiles return ***
    template.userId = output[1].userId
    template.firstName = output[1].firstName
    template.lastName = output[1].lastName
    template.userLevel = output[1].userLevel
    template.userPic = output[1].userPic
    template.roomArea = output[1].roomArea
    template.userLicense = output[1].userLicense
    template.userFolder = output[1].userFolder

    // *** app setting ***
    template.programName = programName
    template.userProfileEditable = userProfileEditable
    template.message = announcement
    template.messageId = announcementId
    template.sidebarControl = sidebarControl
    // template.singleViewShow = singleViewShow
    template.debugModeControl = debugModeControl

    // template.dBSetting = JSON.stringify(getDBSettingForUser(output[1].roomArea));
    
    template.qrCodeReciept = qrCodeReciept

    // *** user controller ***
    template.userView = getViewByUserLevel(output[1].userLevel)

    return template.evaluate()
      .setTitle(programName)
      .addMetaTag('viewport', 'width=device-width, initial-scale=1')
      .setXFrameOptionsMode(HtmlService.XFrameOptionsMode.ALLOWALL)
      .setSandboxMode(HtmlService.SandboxMode.IFRAME)

  }
  // 2. กรณี กำหนดว่าไม่ต้อง LOGIN 
  else if (e.parameter.username == "" || e.parameter.password == "") {
    const template = HtmlService.createTemplateFromFile(loginPage)
    template.message = announcement
    template.messageId = announcementId

    return template.evaluate()
      .setTitle(programName)
      .addMetaTag('viewport', 'width=device-width, initial-scale=1')
      .setXFrameOptionsMode(HtmlService.XFrameOptionsMode.ALLOWALL)
      .setSandboxMode(HtmlService.SandboxMode.IFRAME)

  }
  // 3. กรณี LOGIN INCORRECT
  else if (output[0].result == "Incorrect") {
    // 3.1 กรณี USER หมดอายุ ต้องทำการ RENEW
    if (output[0].detail == "Expired_By_User_Inactive") {
      // alert('Expired_By_User_Inactive')
      const template = HtmlService.createTemplateFromFile(renewPage)
      template.message = "Expired_By_User_Inactive"

      template.userName = output[1].userName
      template.passWord = output[1].passWord
      template.email = output[1].emailAddress
      template.otp = output[0].otp
      template.refCode = output[0].refCode

      return template.evaluate()
        .setTitle(programName)
        .addMetaTag('viewport', 'width=device-width, initial-scale=1')
        .setXFrameOptionsMode(HtmlService.XFrameOptionsMode.ALLOWALL)
        .setSandboxMode(HtmlService.SandboxMode.IFRAME)

    }
    // 3.2 กรณี LOGIN FAILURE USERNAME PASSWORD ไม่ถูกต้อง
    else {
      const template = HtmlService.createTemplateFromFile(failedPage)
      template.message = output[0].detail

      // template.room = e.parameter.room;
      return template.evaluate()
        .setTitle(programName)
        .addMetaTag('viewport', 'width=device-width, initial-scale=1')
        .setXFrameOptionsMode(HtmlService.XFrameOptionsMode.ALLOWALL)
        .setSandboxMode(HtmlService.SandboxMode.IFRAME)

    }


  }
  // 4. กรณี LOGOUT
  else if (e.parameter.LogoutButton == 'Logout') {
    const template = HtmlService.createTemplateFromFile(loginPage)
    template.message = "Logout"

    return template.evaluate()
      .setTitle(programName)
      .addMetaTag('viewport', 'width=device-width, initial-scale=1')
      .setXFrameOptionsMode(HtmlService.XFrameOptionsMode.ALLOWALL)
      .setSandboxMode(HtmlService.SandboxMode.IFRAME)
  }

};


