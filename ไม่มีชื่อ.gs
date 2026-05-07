function updateDrugStock2() {
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  const ws = ss.getSheetByName("💊DrugCatalog");

  // Load all data in bulk
  const dataRange = ws.getDataRange();
  const data = dataRange.getValues();

  // Drug usage mapping
  const drugUseArr = {
    "DG1": 2,
    "DG2": 3,
    "DG3": 3,
  };

  const dateStamp = new Date();

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
      data[rowIndex][5] = (data[rowIndex][5] || 0) - quantity; // Update stock in column 6
      data[rowIndex][6] = dateStamp; // Update timestamp in column 7
    } else {
      console.log(`Item: ${drug} not found in the catalog.`);
    }
  }

  // Write all updates in one call
  dataRange.setValues(data);

}






