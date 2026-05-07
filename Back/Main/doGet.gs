

// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
//  ตั้งค่า USER    
// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++


// กรณีตั้งค่า App ไม่ต้อง Login ให้กำหนดค่าต่างๆ ของ user ตามนีั้
const templateNoLogin = {
  userId: "000",
  firstName: "ผู้ใช้งาน",
  lastName: "ทั่วไป",
  userLevel: "user_a",
  userView: [ 1 ],
  userPic: 'https://lh5.googleusercontent.com/d/1LUZbqbkSioFbyorfr-ueGpgcX8gaiLdE', // default Avatar
  userLicense: '999999',
  roomArea: "other",
  otherData: '{}',
  userFolder: "https://drive.google.com/drive/folders/" + userFoldersId

};


function setTemplateNoLogin(template) {
  for (let key in templateNoLogin) {
    template[key] = templateNoLogin[key];
  }
  return template;
};

 
 

// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// Function เรียกใช้งานครั้งแรก 
// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

function doGet(e) {
  if (appStatus == 'CLOSE') {
    if (closeOption == 'CLOSE ALWAYS') {
      const template = HtmlService.createTemplateFromFile(closePage)
      template.logoApp = logoApp
      template.message = messageClose
      template.closePeriod = ""


      return template.evaluate()
        .setTitle(programName)
        .addMetaTag('viewport', 'width=device-width, initial-scale=1')
        .setXFrameOptionsMode(HtmlService.XFrameOptionsMode.ALLOWALL)

    } else if (closeOption == 'CLOSE PERIOD') {
      if (currentDateTime > closeStart && currentDateTime < closeEnd) {
        const template = HtmlService.createTemplateFromFile(closePage)
        template.logoApp = logoApp
        template.message = messageClose
        template.closePeriod =
          'ตั้งแต่วันที่ ' + toThaiDateString(new Date(closeDateStart)) + 'เวลา ' + closeTimeStart + ' น.'
          + ' - ' + toThaiDateString(new Date(closeDateEnd)) + 'เวลา ' + closeTimeEnd + ' น.'

        return template.evaluate()
          .setTitle(programName)
          .addMetaTag('viewport', 'width=device-width, initial-scale=1')
          .setXFrameOptionsMode(HtmlService.XFrameOptionsMode.ALLOWALL)
          .setSandboxMode(HtmlService.SandboxMode.IFRAME)

      } else {
        if (doLogin == 'OFF') {
          const template = HtmlService.createTemplateFromFile(appPage)
          template.logoApp = logoApp

          setTemplateNoLogin(template)

          template.message = announcement
          template.messageId = announcementId
          template.sidebarControl = sidebarControl
          template.doLogin = doLogin

          template.debugModeControl = debugModeControl
          // template.dBSetting = JSON.stringify(getDbInfoByUserRoomArea(templateNoLogin.roomArea));

          return template.evaluate()
            .setTitle(programName)
            .addMetaTag('viewport', 'width=device-width, initial-scale=1')
            .setXFrameOptionsMode(HtmlService.XFrameOptionsMode.ALLOWALL)
            .setSandboxMode(HtmlService.SandboxMode.IFRAME)

        } else {
          const template = HtmlService.createTemplateFromFile(loginPage)

          return template.evaluate()
            .setTitle(programName)
            .addMetaTag('viewport', 'width=device-width, initial-scale=1')
            .setXFrameOptionsMode(HtmlService.XFrameOptionsMode.ALLOWALL)
            .setSandboxMode(HtmlService.SandboxMode.IFRAME)

        }

      }

    }


  } else {
    if (doLogin == 'OFF') {
      const template = HtmlService.createTemplateFromFile(appPage)
      template.logoApp = logoApp

      setTemplateNoLogin(template)

      template.message = announcement
      template.messageId = announcementId
      template.sidebarControl = sidebarControl
      template.doLogin = doLogin

      template.debugModeControl = debugModeControl
      // template.dBSetting = JSON.stringify(getDbInfoByUserRoomArea(templateNoLogin.roomArea));

      return template.evaluate()
        .setTitle(programName)
        .addMetaTag('viewport', 'width=device-width, initial-scale=1')
        .setXFrameOptionsMode(HtmlService.XFrameOptionsMode.ALLOWALL)
        .setSandboxMode(HtmlService.SandboxMode.IFRAME)


    } 
    else {
      const template = HtmlService.createTemplateFromFile(loginPage)

      return template.evaluate()
        .setTitle(programName)
        .addMetaTag('viewport', 'width=device-width, initial-scale=1')
        .setXFrameOptionsMode(HtmlService.XFrameOptionsMode.ALLOWALL)
        .setSandboxMode(HtmlService.SandboxMode.IFRAME)


    }

  }


};







