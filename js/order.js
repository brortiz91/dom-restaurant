//js created by Bryan Ortiz 05-15-2017

function submitInfo () {
	var name=document.getElementById("fName");
	var email=document.getElementById("lName");
	var phone=document.getElementById("phone");
	var order=document.getElementById("order");
	(name.value&&email.value&&phone.value&&order.value)?alert("Thanks for your order, we'll get to cooking it right away!") : alert("Looks like you're missing some information needed to complete the order.");
}
	document.getElementById("submit").addEventListener("click", submitInfo, false); 

function hideAddress () {
	var delivery = document.getElementById("delivery");
	var address = document.getElementById("location");
	var pickup = document.getElementById("pickup");
	
	if (delivery.checked) {
		address.style.display = "block";
	} else if (pickup.checked) {
		address.style.display = "none";
	}
}