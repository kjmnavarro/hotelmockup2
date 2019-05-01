// On scroll add button
	window.onscroll = function() {scrollFunction()};

	function scrollFunction() {
	  if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
	    document.getElementById("myBtn").style.display = "block";
	  } else {
	    document.getElementById("myBtn").style.display = "none";
	  }
	}

	// On click button go to top
	function topFunction() {
	  document.body.scrollTop = 0;
	  document.documentElement.scrollTop = 0;
	}

	// Resto hidden divs toggle 
	document.getElementById("hidden1").style.display = "none";
	document.getElementById("hidden2").style.display = "none";
	document.getElementById("less1").style.display = "none";
	document.getElementById("less2").style.display = "none";

	function show1() {
		document.getElementById("hidden1").style.display = "block";
		document.getElementById("show1").style.display = "none";
		document.getElementById("less1").style.display = "block";
	}

	function show2() {
		document.getElementById("hidden2").style.display = "block";
		document.getElementById("show2").style.display = "none";
		document.getElementById("less2").style.display = "block";
	}

	function less1() {
		document.getElementById("hidden1").style.display = "none";
		document.getElementById("show1").style.display = "block";
		document.getElementById("less1").style.display = "none";
	}

	function less2() {
		document.getElementById("hidden2").style.display = "none";
		document.getElementById("show2").style.display = "block";
		document.getElementById("less2").style.display = "none";
	}