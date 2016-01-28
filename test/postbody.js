describe("ajaxPrefilter for postBody", function() {

	it("should be set postBody", function() {
		// Given
		var option = {
			"method": "post",
			"postBody": true
		};
		var originalOptions = {
			"method": "post",
			"postBody": true,
			"data": {
				"a": 1
			}
		};

		// When
		jQuery.fp(option, originalOptions);

		// Then
		expect(option.data).toEqual(JSON.stringify(originalOptions.data));
	});
	it("should not be set postBody-1", function() {
		// Given
		var option = {
			"method": "get",
			"data":"a=1"
		};
		var originalOptions = {
			"method": "get",
			"data": {
				"a": 1
			}
		};

		// When
		jQuery.fp(option, originalOptions);

		// Then
		expect(option.data).toEqual("a=1");
	});
	it("should not be set postBody-2", function() {
		// Given
		var option = {
			"method": "get",
			"postBody": true,
			"data":"a=1"
		};
		var originalOptions = {
			"method": "get",
			"postBody": true,
			"data": {
				"a": 1
			}
		};

		// When
		jQuery.fp(option, originalOptions);

		// Then
		expect(option.data).toEqual("a=1");
	});
});