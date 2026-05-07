

// function getDrugCatalog() {
//   const arrayOfDrugCatalog = CRUUDS.readDataBySheetName(ssId_Setting,shName_DrugCatalog)
//   console.log(arrayOfDrugCatalog)
  
// }

// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
//  ดึง option ไปหน้าบ้าน    
// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

function getDropdownData() {
  return CRUUDS.readDataBySheetName(ssId_Setting, shName_Options)
  // console.log(dataReturn)
  // return dataReturn

};

function addNewOptionToSheet(key,val) {
    // const key = "icd10"
    // const val = "sdsdsdsd"
    return CRUUDS.createCellsInColumn(ssId_Setting,shName_Options,key,val)
  
}







