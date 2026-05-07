function getDrugCatalog() {
  // console.log(CRUUDS.readDataBySheetName(ssId_Setting,shName_DrugCatalog))
  return CRUUDS.readDataBySheetName(ssId_Setting,shName_DrugCatalog)
  
};

function addNewDrug(drugInfo) {
  return CRUUDS.createDataSingleRowType4(ssId_Setting,shName_DrugCatalog,drugInfo,'DG')
   
};
 
function editDrugById(id,dataObj){
  return CRUUDS.updateData(ssId_Setting,shName_DrugCatalog,"1",id,dataObj)

};

function deleteDrugById(id){
  return CRUUDS.deleteDataSingleRow(ssId_Setting,shName_DrugCatalog,"1",id)
  
};


function getDrugSets() {
  // console.log(CRUUDS.readDataBySheetName(ssId_Setting,shName_DrugSets))
  return CRUUDS.readDataBySheetName(ssId_Setting,shName_DrugSets)
  
};

function addDrugSet(drugSetInfo) {
  return CRUUDS.createDataSingleRowType4(ssId_Setting,shName_DrugSets,drugSetInfo,'DS')
   
};


function editDrugSetById(setId,drugSetInfo){
  return CRUUDS.updateData(ssId_Setting,shName_DrugSets,"1",setId,drugSetInfo)

};

function deleteDrugSetById(id){
  // const id = "DS250112_635667"
  return CRUUDS.deleteDataSingleRow(ssId_Setting,shName_DrugSets,"1",id)
  
};

 


