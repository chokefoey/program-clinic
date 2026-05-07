
// สำหรับการ sheet ที่เราทราบ VID อยุ่แล้ว เช่น กรณี delete,  update
function getSheetNameByVID(vid){
  const ss = SpreadsheetApp.openById(ssId_DB)
  const sheets = ss.getSheets()
  
  // const vid = "220804-125415"
  const vidPart = vid.substring(0, 2); // Extracts characters from index 0 to 2 (excluding 2)
  // console.log(vidPart); // Output: "21"

  
  
  const sheetNames = sheets.map( sh => sh.getSheetName())
  // console.log(sheetNames)

  const matchingSheetName = sheetNames.find(name => name.includes(`Opd_${vidPart}`));

  // console.log(matchingSheetName); // Output: "VID_21"
  return matchingSheetName

};


function test_getSheetNameByVID(){
  const vid = "220804-125415"
  const shName = getSheetNameByVID(vid)
  console.log(shName);  

};



function getSheetNameByYear(yy){
  const ss = SpreadsheetApp.openById(ssId_DB)
  const sheets = ss.getSheets()
  
  const sheetNames = sheets.map( sh => sh.getSheetName())
  // console.log(sheetNames)

  const matchingSheetName = sheetNames.find(name => name.includes(`Opd_${yy}`));

  console.log(matchingSheetName); // Output: "Opd_21"
  return matchingSheetName


};


function test_getSheetNameByYear(){
  // Get current year
  let currentYear = new Date().getFullYear();

  // Extract the last two digits
  let yy = currentYear.toString().slice(-2);
  // console.log(yy);  // Outputs: "24"
  getSheetNameByYear(yy)

}






function sendPatientToTreat(patientInfo){
  return CRUUDS.createDataSingleRowType4(ssId_DB,shName_OpdVisit,patientInfo,"OP")

}


function getDataOpdVisits(){
  // const shName = getSheetNameByYear()
  return CRUUDS.readDataBySheetName(ssId_DB,shName_OpdVisit)  // shName_OpdVisit

}



function editOpdVisitData(dataId,dataObj){
  return CRUUDS.updateData(ssId_DB,shName_OpdVisit,"1",dataId,dataObj)

}


function deleteOpdVisitById(opdVisitId){
  return CRUUDS.deleteDataSingleRow(ssId_DB,shName_OpdVisit,"1",opdVisitId)
}



function editSendTreatRoom(opdVisitId,opdVisitInfo) {
  return CRUUDS.updateData(ssId_DB,shName_OpdVisit,"1",opdVisitId,opdVisitInfo)

}


function getDataOpdVisitRefresh(){
  return CRUUDS.readDataBySheetName(ssId_DB,shName_OpdVisitRefresh)

}
