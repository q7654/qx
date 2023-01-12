console.log("----------->");
let resp = JSON.parse($response.body);

console.log(resp);

resp.data.serverTime = "2023-01-12 10:00:01";

for(let i=0;i<resp.data.activityBatchList[0].couponClassify[0].activityList.length;i++){

// console.log(resp.data.activityBatchList[0].couponClassify[0].activityList[i]);
resp.data.activityBatchList[0].couponClassify[0].activityList[i].isActivityTime = true;
}

$done({
	body: JSON.stringify(resp)
});
