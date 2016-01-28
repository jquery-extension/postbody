var jQuery = {};
jQuery.ajaxPrefilter = function (fp) {
	this.fp = fp;
}