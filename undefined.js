var name = "vijay";

function greeUser(name){
	if(typeof name === 'undefined'){
		console.log("hello world");
	}else{
		console.log("hello "+name);
	}
}

greeUser();
greeUser(name);