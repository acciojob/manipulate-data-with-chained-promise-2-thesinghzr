//your JS code here. If required.

let outputDiv = document.querySelector("#output");

function promise1(){
	return new Promise((res, rej) => {
		setTimeout(() => {
			res([1, 2, 3, 4]);
		},3000)
	});
};

function promise2(arr) {
	return new Promise((res, rej) => {
		setTimeout(() => {
			res(arr.filter((num) => num % 2 === 0));
		},1000)
	});
};

function promise3(arr) {
	return new Promise((res, rej) => {
		setTimeout(() => {
			res(arr.map((num) => num * 2));
		},2000)
	});
};

promise1().then((res) => {
	return promise2(res);
}).then((res)=>{
	outputDiv.textContent = res.join(",");
	return promise3(res);
}).then((res)=>{
	outputDiv.textContent = res.join(",");
});


