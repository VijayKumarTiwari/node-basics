var isValid = false;

function toggleBoolean(booleanVar){
	if(typeof booleanVar === "boolean"){
		return !booleanVar;
	}else{
		console.log(booleanVar+" is Not a boolean.");
	}
}

console.log(toggleBoolean(isValid));
console.log(toggleBoolean("true"));
console.log(toggleBoolean("213"));