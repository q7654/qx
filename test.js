let obj = JSON.parse($response.body);

obj["acquire"]=true;

obj["changeablePkg"][0] = obj["currentPkg"];
obj["currentPkg"] = obj["changeablePkg"][1];


$done({
	body: JSON.stringify(obj)
});
