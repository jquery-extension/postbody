jQuery.ajaxPrefilter( function( options, originalOptions ) {
	if ( options.method && options.method !== "get" && options.postBody === true ) {
		options.data = JSON.stringify( originalOptions.data );
		options.contentType = "application/json;charset=utf-8";
	}
} );
