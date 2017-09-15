var MAD_PLATFORM_ADDRESS="/platform";
function fun1(x){
	var a=1;
	var b=a+1;
	function _fun(){

		var a=3333
		console.log(a)
	}
	return _fun;
}

function fun2(x){
	var a=2
}
function fun3(x){
	var a=3
}

fun1(1)()
fun2(1)
fun3(1)

console.log(MAD_PLATFORM_ADDRESS)

console.error("aaaa")