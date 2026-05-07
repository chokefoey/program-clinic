// function updateDrugStock() {
//   const ss = SpreadsheetApp.getActiveSpreadsheet();
//   const ws = ss.getSheetByName("💊DrugCatalog");
//   const data = ws.getDataRange().getDisplayValues();
//   const drugUseArr = ['DG1', 'DG2', 'DG3', 'DG1'];
//   const dateStamp = new Date();

//   drugUseArr.forEach((item) => {
//     // Find the index of the row where the first column matches the item
//     const row = data.findIndex((r) => r[0] === item);
    
//     if (row !== -1) {
//       console.log(`Item: ${item} found at row: ${row + 1}`);
      
//       // Get the current stock value in column 6
//       const currentVal = ws.getRange(row + 1, 6).getValue();
      
//       // Update the stock and timestamp in one line
//       ws.getRange(row + 1, 6, 1, 2).setValues([[currentVal - 1, dateStamp]]);
//     } else {
//       console.log(`Item: ${item} not found in the catalog.`);
//     }
//   });

  
// }