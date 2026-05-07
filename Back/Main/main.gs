


// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// Function เสริม 
// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++


function getScriptUrl() {
  var url = ScriptApp.getService().getUrl();
  //  console.log(url)
  return url;

};


function include(filename) {
  return HtmlService.createHtmlOutputFromFile(filename).getContent();

};


function includeFrontLib(filename) {
  return FRONTLIB.getFrontLib(filename)

};


function loadPartialHTML_(partial) {
  const htmlServ = HtmlService.createTemplateFromFile(partial)
  return htmlServ.evaluate().getContent();

};


function loadDashboardView() {
  return loadPartialHTML_("Front/App/View/Report/chart");

};

 

function getHosProfile() {
  return CRUUDS.readDataBySheetName(ssId_Setting, shName_HosProfile)

};

 



// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
//  แสดงการตั้งค่า sidebar menu แยกตามระดับ user   
// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
 

function getViewByUserLevel(userLevel){
  // const userLevel = 'user_p'
  const rng = 'E20:V24' // ช่วงข้อมูลในตารางทั้งหมด แล้วค่อยมากรองอีกที 

  const views = SpreadsheetApp.openById(ssId_Setting).getSheetByName(shName_SettingView).getRange(rng).getDisplayValues()
  // console.log(views)

  const data = views.filter(item => item[1] === userLevel);
  // console.log(data); 
  // [ [ 'D',
  //   'user_p',
  //   'เภสัช',
  //   'แก้ไขได้เฉพาะหน้าสั่งยา',
  //   'TRUE',
  //   'TRUE',
  //   'TRUE',
  //   'FALSE',
  //   'TRUE',
  //   'TRUE',
  //   'TRUE',
  //   'TRUE',
  //   'TRUE',
  //   'FALSE',
  //   'FALSE',
  //   'FALSE',
  //   'doctor',
  //   '' ] ]

  // Filter only 'TRUE' values and map them to their order + 1
  const result = data[0]
  .map((item, index) => item === 'TRUE' ? index - 3 : null)
  .filter(item => item !== null);

  // console.log(result); // [ 1, 2, 3, 5, 6, 7, 8, 9 ]
  return result

};

 
function test_getViewByUserLevel(){
  const userLevel = 'user_p'
  getViewByUserLevel(userLevel)
}



// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// แสดงรายชื่อ sheet ฐานข้อมูลทั้งหมด 
// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++


function getDbInfoByUserRoomArea(roomArea) { 
  const ss = SpreadsheetApp.openById(ssId_Setting);
  const ws = ss.getSheetByName(shName_SettingDB);
  const data = ws.getDataRange().getDisplayValues();

  // Extract the headers from the second row
  const headers = data[1];

  // Filter out the unnecessary rows
  const filteredData = data.slice(4);

  // Create the resulting object
  const result = {};

  filteredData.forEach(row => {
    const room = row[0];
    if (room) { // Make sure the room is not an empty string
      result[room] = {};
      headers.slice(1).forEach((header, index) => {
        result[room][header] = row[index + 1];
      });
    }
  });

  console.log(result);

  // หา Database ID ของแต่ละ user ที่เข้ามา แต่ละ room
  const dbIdForUserLogin = result[roomArea]?.ssIdDb; 
  console.log(dbIdForUserLogin);

  // หา Sheet name ของ Database ID นั้น
  let sheetNames = [];
  let fileName = "";
  if (dbIdForUserLogin) {
    const ssDbTarget = SpreadsheetApp.openById(dbIdForUserLogin);
    fileName = ssDbTarget.getName();  // Get the file name
    const sheets = ssDbTarget.getSheets();
    sheetNames = sheets.map(sheet => sheet.getName());
    console.log(sheetNames);
  } else {
    console.log(`No ssIdDb found for room: ${roomArea}`);
  }

  // Return both dbIdForUserLogin, sheetNames, and fileName as an object
  const res = {
    fileName: fileName,  // Include the file name
    ssIdDb: dbIdForUserLogin,
    sheetNames: sheetNames
  };

  return res;
};




function test_getDbInfoByUserRoomArea(){
  const userLoginRoomArea = "lei"

  const res = getDbInfoByUserRoomArea(userLoginRoomArea)
  // console.log(res)
  console.log(JSON.stringify(res))

  


}



