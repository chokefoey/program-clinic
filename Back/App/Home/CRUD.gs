 

 

function saveDataHome(dataHomeObj){
    // const dataObj = {
    //     product: "tooth paste",
    //     amount: 2,
    //     sellerId: "4545454"
    // }

    return CRUUDS.createDataSingleRowType4(ssId_DB,shName_HomeData,dataHomeObj,"PA") 

};


function editDataHome(dataId,dataHomeInfo){
    const colNumber = 1
    // const dataId = "240427-614443"
    // const dataHomeInfo = {
    //     otherData: "{\"point\":\"103\",\"address\":\"ต.หนองลาด อ.เมือง จ.สกลนคร 11111\"}"
    // }

    return CRUUDS.updateData(ssId_DB,shName_HomeData,colNumber,dataId,dataHomeInfo)

};


