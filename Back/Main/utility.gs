



// ***********************************************************************
// Function เปลี่ยนวันที่เป็น ภาษาไทย เพื่อแสดงวันเวลา เปิดปิด app
// ***********************************************************************

function toThaiDateString(date) {
  let monthNames = [
      "มกราคม", "กุมภาพันธ์", "มีนาคม", "เมษายน",
      "พฤษภาคม", "มิถุนายน", "กรกฎาคม", "สิงหาคม.",
      "กันยายน", "ตุลาคม", "พฤศจิกายน", "ธันวาคม"
  ];

  let year = date.getFullYear() + 543;
  let month = monthNames[date.getMonth()];
  let numOfDay = date.getDate();

  let hour = date.getHours().toString().padStart(2, "0");
  let minutes = date.getMinutes().toString().padStart(2, "0");
  let second = date.getSeconds().toString().padStart(2, "0");

  return `${numOfDay} ${month} ${year} ` 
  // +`${hour}:${minutes}:${second} น.`;
  
};


function toThaiDateTimeString(date) {
  let monthNames = [
      "มกราคม", "กุมภาพันธ์", "มีนาคม", "เมษายน",
      "พฤษภาคม", "มิถุนายน", "กรกฎาคม", "สิงหาคม.",
      "กันยายน", "ตุลาคม", "พฤศจิกายน", "ธันวาคม"
  ];

  let year = date.getFullYear() + 543;
  let month = monthNames[date.getMonth()];
  let numOfDay = date.getDate();

  let hour = date.getHours().toString().padStart(2, "0");
  let minutes = date.getMinutes().toString().padStart(2, "0");
  let second = date.getSeconds().toString().padStart(2, "0");

  return `${numOfDay} ${month} ${year} ${hour}:${minutes}:${second}` 
  // +`${hour}:${minutes}:${second} น.`;
  
};





// ***********************************************************************
// Function ส่งข้อความผ่าน Telegram
// ***********************************************************************


// Link หา Chat ID คือ : https://api.telegram.org/bot<your-token>/getUpdates
 
 
function sendTelegramMessageByRoomArea(roomArea,message) {
  // const botToken = "xxx";
  // const chatId = "-xxx"; // Group ID

  // const roomArea = "test"
  const telegramInfo = CRUUDS.readDataBySheetName(ssId_Setting,shName_Telegram)
  // console.log(telegramInfo)
 
  const output = telegramInfo.find(item => item.roomArea === roomArea);
  // console.log(output)

  // const message = "Hello, Group!";
  const url = "https://api.telegram.org/bot" + output.botToken + "/sendMessage";
  
  const payload = {
    "chat_id": output.groupId ,
    "text": message
  };
  
  const options = {
    "method": "post",
    "contentType": "application/json",
    "payload": JSON.stringify(payload)
  };
  
  UrlFetchApp.fetch(url, options);

};


function test_sendTelegramMessageByRoomArea(){
  const roomArea = "npm"
  const message = "Hello, Group!";
  sendTelegramMessageByRoomArea(roomArea,message)

};





