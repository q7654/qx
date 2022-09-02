let obj = JSON.parse($response.body);

obj["acquire"]=true;
let t = obj["changeablePkg"][0];
t["productId"] = "90063345";
t["productName"] = "DW";

$done({
	body: JSON.stringify(obj)
});
