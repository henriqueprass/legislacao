var acc = document.getElementsByClassName("accordion");
var i;

/* for (i = 0; i < acc.length; i++) {
	var panel = this.nextElementSibling;
	if (panel.style.display === "block") {
		acc[i].classList.add("active");
	} else {
		acc[i].classList.remove("active");
	}
} */

for (i = 0; i < acc.length; i++) {
	acc[i].addEventListener("click", function() {
		/* Toggle between adding and removing the "active" class,
		to highlight the button that controls the panel */
		this.classList.toggle("active");
		
		/* Toggle between hiding and showing the active panel */
		var panel = this.nextElementSibling;
		if (panel.style.display === "block") {
				panel.style.display = "none";
		} else {
				panel.style.display = "block";
		}
	});
}

var x = document.getElementsByClassName("expl-but");

for (i = 0; i < x.length; i++) {
	x[i].addEventListener("click", function() {
		this.classList.toggle("expl-active");
		var expl = this.nextElementSibling;
		if (expl.style.display === "block") {
				expl.style.display = "none";
		} else {
				expl.style.display = "block";
		}
	});
}

