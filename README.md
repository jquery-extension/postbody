# postbody 
It is ajax option in jQuery. You easy post a JSON object as the post body.

# Why use it?
When you want to post a JSON object as the post body. You confuse it in jQuery.

## as-is
```js
$.ajax({
	"data": JSON.stringfy({"foo":"bar"}), // 1. to String
	"contentType": "application/json;charset=utf-8", // 2. set contentType
	"url": "/YOUR/path",
	"method": "post",
	"success":function(req){
		// do something
	}
});
```
## to-be
```js
$.ajax({
	"data": {"foo":"bar"},
	"postBody": true, // Just add it.
	"url": "/YOUR/path",
	"method": "post",
	"success":function(req){
		// do something
	}
});
```

# How to work it?
When `method` option of Ajax is `post` or `put` or `delete` and `postBody` is `true`. It is work.

# How to use it?

```
bower install jquery-postbody
```
```html
<script src="jquery.js"></script>
<script src="../bower_components/jquery-postbody/postbody.js"></script>
```