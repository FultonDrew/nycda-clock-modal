
	var box = document.createElement('div')
	box.className = "ad"
	box.style.width = '700px';
	box.style.height = '500px';
	box.style.backgroundColor = '#F3F0F5'
	box.style.border = "2px solid"
	box.style.boxShadow = "4px 2px 10px"
	box.style.position = "absolute"
	box.style.zIndex = "2"
	box.innerHTML.marginTop = "10px"
	document.getElementById('ad').appendChild(box)

	var input = document.createElement('input')
	input.className = "input"
	input.style.position = "absolute"
	input.style.margin = "300px solid"
	box.appendChild(input);

	var submit = document.createElement('button')
	submit.className = "submit"
	submit.style.position = "absolute"
	submit.style.margin = "350px solid"
	submit.innerHTML = "SUBSCRIBE"
	box.appendChild(submit);


	var modal = document.createElement('div')
	modal.style.width = "50px";
	modal.style.height = "50px"
	modal.style.border = "1px solid #F3F0F5"
	modal.style.backgroundColor = "#F3F0F5"
	modal.style.marginLeft = '92%'
	modal.style.marginTop = '5px';
	box.appendChild(modal);

	var close = document.createElement('button')
	close.style.width = "30px";
	close.style.height = "30px"
	close.style.backgroundColor = "lightgrey"
	close.style.border = "1px solid"
	close.style.boxShadow = "2px 2px 5px"
	close.innerHTML = "X"
	close.style.marginLeft = '25%';
	close.style.marginTop = '25%';
	modal.appendChild(close);	

	var text = document.createElement('h1')
	text.style.width = "50%"
	text.style.height = "15%"
	text.style.backgroundColor = "#92A2A4"
	text.innerHTML.alignText = 'right'
	text.style.border = "2px solid"
	text.style.borderRadius = "5px"
	text.style.boxShadow = "4px 2px 10px"
	text.style.fontSize = "20px"
	text.style.paddingLeft = "20px"
	text.style.margin = "20px auto"
	box.appendChild(text)

	var headline = document.createElement('p')
	headline.style.width = "40%"
	headline.style.height = "10%"
	headline.style.position = "absolute"
	headline.style.margin = "10px 25px"
	headline.innerHTML = "Please subscribe with your email for future blog updates"
	headline.style.textAlign = 'center'
	headline.style.fontSize = '20px'
	headline.style.color = "white"
	headline.backgroundcolor = "yellow"
	text.appendChild(headline)


close.addEventListener('click', function() {
	box.style.display = "none"
})

