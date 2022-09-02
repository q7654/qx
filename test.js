let obj = JSON.parse($response.body);

obj["acquire"]=true;

$done({
	body: JSON.stringify(obj)
});
