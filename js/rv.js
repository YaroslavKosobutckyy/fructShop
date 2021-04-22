let login = document.getElementById('login');
login.addEventListener('input', loginValid);

function loginValid(event){
	numArr = [1,2,3,4,5,6,7,8,9,0];

	for(let i=0; i<numArr.length; i++{
		if(event.target.value.includes(numArr[i])){
			alert('error');
		}
	}
} 