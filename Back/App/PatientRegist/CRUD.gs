


function getDataPatientRegistByUserRoomAreaFromSheet(roomArea) {
  const dbInfo = getDbInfoByUserRoomArea(roomArea);
  const ssIdByRoomArea = dbInfo.ssIdDb;

  if (!ssIdByRoomArea) {
    // Checks if ssIdByRoomArea is an empty string, undefined, null, or other falsy values
    return {};
  }

  return CRUUDS.readDataBySheetName(ssIdByRoomArea, shName_PatientRegist);
}




function getDataPatientRegist() {
  return CRUUDS.readDataBySheetName(ssId_DB,shName_PatientRegist)

};


function addPatientRegist(patientRegistInfo) {
  return CRUUDS.createDataSingleRowType4(ssId_DB,shName_PatientRegist,patientRegistInfo,"PA")
     
};

function addPatientRegistRunHn(patientRegistInfo) {
  // return CRUUDS.createDataSingleRowType4(ssId_DB,shName_PatientRegist,patientRegistInfo,"PA")
  const colHn = 4
  return CRUUDS.createDataSingleRowType2(ssId_DB,shName_PatientRegist,patientRegistInfo,"PA",colHn)
   
};


function searchOrthoNumber(){
  return CRUUDS.searchMaxNumber(ssId_DB,shName_PatientRegist,"8")

};


function editPatientRegist(id,patientInfo){
  return CRUUDS.updateData(ssId_DB,shName_PatientRegist,"1",id,patientInfo)
}


function deletePatientRegist(id){
  return CRUUDS.deleteDataSingleRow(ssId_DB,shName_PatientRegist,"1",id)
}


function getDataPatientRegistRefresh(){
  return CRUUDS.readDataBySheetName(ssId_DB,shName_PatientsRegistRefresh)

}

