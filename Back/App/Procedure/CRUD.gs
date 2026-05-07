function getDataProcedures() {
  // const data = CRUUDS.readDataBySheetName(ssId_Setting,shName_Procedures)
  // console.log(data)
  return CRUUDS.readDataBySheetName(ssId_Setting,shName_Procedures)
  
};


function addProcedureToSheet(procedureInfo){
  return CRUUDS.createDataSingleRowType4(ssId_Setting,shName_Procedures,procedureInfo,"PC")

};
