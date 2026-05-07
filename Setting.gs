




// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
//  ตั้งค่า ไฟล์ฐานข้อมูล sheet DATABASE
// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

  var shName_PatientRegist =   "PatientRegist"
  var shName_PatientsRegistRefresh = "🔒PatientRegist_Today"
  var shName_OpdVisit =   "OpdVisit"  //
  var shName_OpdVisitRefresh =   "🔒OpdVisit_Today"  //

  var shName_HomeData = 'HomeData'
 
 
// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
//  ตั้งค่า ไฟล์ sheet SETTING
// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

  var shName_Control = "🔒Control"
  var shName_SettingDB = "🔒SettingDB"
  var shName_UserRegist = "🔒UserRegist"
  var shName_SettingView = "🔒SettingView"
  var shName_SettingApp = "🔒SettingApp"
  var shName_HosProfile = "🔒HosProfile"
  var shName_DrugSets = "🔒DrugSets"

  var shName_Options = "DropdownOptions"
  var shName_UserEvent = "UserLog"
  var shName_DrugCatalog = "DrugCatalog"
  var shName_Procedures = "Procedures"
  var shName_DayOff = "DayOff"
  var shName_Telegram = "Telegram"
   
  
// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
//  ตั้งค่า image 
// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

  var logoApp = getHosProfile()[0].hosLogo
  var qrCodeReciept =  getHosProfile()[0].qrCodeReciept
  var avatarDefault = 'https://lh5.googleusercontent.com/d/1LUZbqbkSioFbyorfr-ueGpgcX8gaiLdE'



// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
//  ตั้งค่า App
// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

  var adminEmail = SpreadsheetApp.openById(ssId_Setting).getSheetByName(shName_SettingApp).getRange('J13').getDisplayValue()      // สำหรับแจ้งเตือนเมื่อมีคนลงทะเบียนเข้ามา
  var myWebSite = SpreadsheetApp.openById(ssId_Setting).getSheetByName(shName_SettingApp).getRange('J14').getDisplayValue()           // สำหรับแจ้งเตือนเมื่อมีคนลงทะเบียนเข้ามา
  var userExpiredDate = SpreadsheetApp.openById(ssId_Setting).getSheetByName(shName_SettingApp).getRange('J15').getDisplayValue()  // year unit
  var programName = SpreadsheetApp.openById(ssId_Setting).getSheetByName(shName_SettingApp).getRange('J16').getDisplayValue()  
 

// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
//  ตั้งค่าชื่อ page    
// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

  var loginPage = 'Front/Login/index'   // หน้า login 
  var closePage = 'Front/Page/close'    // นน้า ปิด page หรือ ปิดระบบ 
  var failedPage = 'Front/Page/failed'  // หน้า แสดงกรณี login ไม่สำเร็จ 
  var renewPage = 'Front/Page/renew'  // หน้า แสดงกรณี login ไม่สำเร็จ 
  var appPage = 'Front/App/Main/index'  // หน้า application หรือหน้าเข้าสู่โปรแกรม กรณี login สำเร็จ




// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
//  ตั้งค่า App Controller   
// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

  var appStatus = SpreadsheetApp.openById(ssId_Setting).getSheetByName(shName_Control).getRange('D5').getDisplayValue()
  var closeOption = SpreadsheetApp.openById(ssId_Setting).getSheetByName(shName_Control).getRange('E5').getDisplayValue()

  var closeDateStart = SpreadsheetApp.openById(ssId_Setting).getSheetByName(shName_Control).getRange('G5').getDisplayValue()
  var closeTimeStart = SpreadsheetApp.openById(ssId_Setting).getSheetByName(shName_Control).getRange('I5').getDisplayValue()
  var closeStart = new Date(closeDateStart + ' ' + closeTimeStart);

  var closeDateEnd = SpreadsheetApp.openById(ssId_Setting).getSheetByName(shName_Control).getRange('G6').getDisplayValue()
  var closeTimeEnd = SpreadsheetApp.openById(ssId_Setting).getSheetByName(shName_Control).getRange('I6').getDisplayValue()
  var closeEnd = new Date(closeDateEnd + ' ' + closeTimeEnd);

  var currentDateTime = new Date()


  var messageClose = SpreadsheetApp.openById(ssId_Setting).getSheetByName(shName_Control).getRange('K5').getDisplayValue()

  var doLogin = SpreadsheetApp.openById(ssId_Setting).getSheetByName(shName_Control).getRange('D7').getDisplayValue()
  var userProfileEditable = SpreadsheetApp.openById(ssId_Setting).getSheetByName(shName_Control).getRange('D8').getDisplayValue()
  var sidebarControl = SpreadsheetApp.openById(ssId_Setting).getSheetByName(shName_Control).getRange('D9').getDisplayValue()
  // var singleViewShow = SpreadsheetApp.openById(ssId_Setting).getSheetByName(shName_Control).getRange('D10').getDisplayValue()

  // var devModeControl = SpreadsheetApp.openById(ssId_Setting).getSheetByName(shName_Control).getRange('D11').getDisplayValue()
  var debugModeControl = SpreadsheetApp.openById(ssId_Setting).getSheetByName(shName_Control).getRange('D12').getDisplayValue()


  var announcement = 
    SpreadsheetApp.openById(ssId_Setting).getSheetByName(shName_Control).getRange('D11').getDisplayValue() == 'ON' ? 
    SpreadsheetApp.openById(ssId_Setting).getSheetByName(shName_Control).getRange('H11').getDisplayValue() : '';
  var announcementId = 
    SpreadsheetApp.openById(ssId_Setting).getSheetByName(shName_Control).getRange('F11').getDisplayValue()

   

 
// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
//  END ************************************************************************************** 
// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++



