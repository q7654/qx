let obj = JSON.parse($response.body);

obj["acquire"]=true;
obj["currentPkg"]["productId"] = "12345";
let t = obj["changeablePkg"][0];
t["productId"] = "90063345";
t["productName"] = "DW";
t["pkgAct"] = null;


$done({
	body: JSON.stringify(obj)
});
