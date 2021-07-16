//IBG
/*document.querySelectorAll(".ibg").forEach(el => {
	if (el.querySelector('img')) {
		el.style.backgroundImage = 'url(' + el.querySelector('img').getAttribute('src') + ')';
		el.querySelector('img').style.display = 'none';
	}
});*/

$(document).ready(function () {
	$('.burger').click(function (event) {
		$('.burger,.navbar__menu').toggleClass('active');
		$('body').toggleClass('lock');
	});
});