



// **************************************************************************************
// drug ตั้งค่าเวลาสำหรับทำการตัดสต๊อก
// **************************************************************************************

function updateDrugStock() {
  const ss = SpreadsheetApp.openById(ssId_Setting)
  // const ss = SpreadsheetApp.getActiveSpreadsheet();
  const ws = ss.getSheetByName(shName_DrugCatalog); 

  const lastCol = 10 // column สุดท้ายที่มี data ไม่เอา array formula

  // Load all data in bulk
  const dataRange = ws.getRange(5,1,ws.getLastRow()-4,lastCol)
  // console.log(dataRange)
  const data = dataRange.getDisplayValues();
  // console.log(data)
  

  // Drug usage mapping
  // const drugUseArr = {
  //   "DG1": 2,
  //   "DG2": 3,
  //   "DG3": 3,
  // };
  

  const drugUseArr = getCurrentDrugUse();
  console.log(drugUseArr)  // arr of obj

  // Count the number of keys in the object
  const drugCount = Object.keys(drugUseArr).length;
  console.log(drugCount); // Output: 3

  const dateStamp = getCurrentDateYYYYMMDD();

  // Create a map for faster access
  const drugMap = {};
  data.forEach((row, index) => {
    drugMap[row[0]] = index;  // Assuming the drug name is in the first column
  });

  // Process drug usage
  for (const drug in drugUseArr) {
    const quantity = drugUseArr[drug];
    const rowIndex = drugMap[drug];
    if (rowIndex !== undefined) {
      const currentStock = data[rowIndex][7] || 0; // Safeguard against undefined values
      const newStock = currentStock - quantity;
      data[rowIndex][7] = newStock < 0 ? 0 : newStock; // Ensure stock does not go below 0
      data[rowIndex][9] = dateStamp; // Update timestamp in column 10
    } else {
      console.log(`Item: ${drug} not found in the catalog.`);
    }
  }


  // Write all updates in one call
  dataRange.setValues(data);

  
  ws.getRange(4,10).setValue('Update stock แล้ว วันที่ ' + toThaiDateTimeString(new Date()) + ' จำนวน ' + drugCount + ' รายการ')

}



function groupAndSumByDrugCode(dataArray) {
  const drugTotals = {};

  dataArray.forEach((entry) => {
    const hmData = entry.hmData;

    // Loop through each home medication (assuming hm1 to hm10)
    for (let i = 1; i <= 10; i++) {
      const hmKey = `hm${i}`;
      const amountKey = `amount${i}`;

      // Check if both the hm and amount keys exist
      if (hmData[hmKey] && hmData[amountKey]) {
        // Extract the drug code, assumed to be the last part after the last "/"
        const drugCode = hmData[hmKey].split('/').pop();

        // Initialize in the drugTotals object if it doesn't exist
        if (!drugTotals[drugCode]) {
          drugTotals[drugCode] = 0;
        }

        // Sum the amount for this drug code
        drugTotals[drugCode] += parseInt(hmData[amountKey], 10) || 0;
      }
    }
  });

  return drugTotals;
  
}

 




function getCurrentDrugUse() {
  const arrayOfDrugUse = CRUUDS.readDataBySheetName(ssId_DB, shName_OpdVisitRefresh);
  // console.log(arrayOfDrugUse);

  const hmUse = groupAndSumByDrugCode(arrayOfDrugUse)
  console.log(hmUse);

  return hmUse

};



// วันที่ปัจจุบัน
function getCurrentDateYYYYMMDD() {
  const currentDate = new Date();

  const year = currentDate.getFullYear();
  const month = String(currentDate.getMonth() + 1).padStart(2, '0');
  const day = String(currentDate.getDate()).padStart(2, '0');

  return `${year}-${month}-${day}`;  // Output: "2024-05-13"

};




