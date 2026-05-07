function addCalendarEvent(dataObj) {
  return CRUUDS.createDataSingleRowType4(ssId_DB,shName_OpdVisit,dataObj,"OP")
  
};


function addAppointmentDataByVid(vid,dataObj){
  return CRUUDS.updateData(ssId_DB,shName_OpdVisit,"1",vid,dataObj)
};


function editAppointmentDataByVid(vid,dataObj){
  // const dataObj = {}
  //   dataObj.opdStatus = 'มาตามนัด'
  return CRUUDS.updateData(ssId_DB,shName_OpdVisit,"1",vid,dataObj)
};


function addAppointmentWithNewVid(dataObj) {
  // dataObj.opdVisitId = "111111"
  return CRUUDS.createDataSingleRowType4(ssId_DB,shName_OpdVisit,dataObj,"OP")
  
};


function deleteCalendarEventById(vid){
  const dataObj = {}
    dataObj.appointmentData = ''
    dataObj.appointDate = ''
    dataObj.appointTime = ''
    dataObj.opdStatus = 'ยกเลิกนัด'

  return CRUUDS.updateData(ssId_DB,shName_OpdVisit,"1",vid,dataObj)

};



function editCalendarEventById(vid,dataObj){
  return CRUUDS.updateData(ssId_DB,shName_OpdVisit,"1",vid,dataObj)

};


function getDayOffFromSheet() {
  // console.log(CRUUDS.readDataBySheetName(ssId_Setting,shName_DayOff))
  return CRUUDS.readDataBySheetName(ssId_Setting,shName_DayOff)
  
};



function addDayOffToSheet(date){
  // const searchCol = 1; // Search column (e.g., Column A)
  // const keyColumn = "dayOff"; // Key column in row 2
  // const searchText = dataObj.dayOff; // Check for duplicates by this valu
  // return CRUUDS.createCellsInColumn(ssId_Setting,shName_DayOff,keyColumn,searchText)
  const dataObj = {
    dayOff:date ,
    dayOffTitle:"หยุด",
  }
  // const colHn = 4
  return CRUUDS.createDataSingleRowType4(ssId_Setting,shName_DayOff,dataObj,"DO")

};


// function deleteDayOffFromSheet(searchText){
//   const keyColumn = "dayOff"; // Key column in row 2
//   // const searchText = dataObj.dayOff; // Check for duplicates by this value
//   return CRUUDS.deleteCellsInColumn(ssId_Setting,shName_DayOff,keyColumn,searchText)
  

// };

function deleteDayOffFromSheet(id){
  // const id = '2025-02-11'  // string
  // console.log(CRUUDS.deleteDataSingleRow(ssId_Setting,shName_DayOff,"1",id))
  return CRUUDS.deleteDataSingleRow(ssId_Setting,shName_DayOff,"1",id)

};

