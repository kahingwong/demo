/*
 reference
 https://developer.mozilla.org/en-US/docs/AJAX/Getting_Started
*/

// Old compatibility code, no longer needed.
if (window.XMLHttpRequest) { // Mozilla, Safari, IE7+ ...
    httpRequest = new XMLHttpRequest();
} else if (window.ActiveXObject) { // IE 6 and older
    httpRequest = new ActiveXObject("Microsoft.XMLHTTP");
}

httpRequest.onreadystatechange = function() {
 //q.innerHTML = this.responseText ;
};

httpRequest.open('GET', '/get_data.php', true);
httpRequest.send();

if (httpRequest.readyState === XMLHttpRequest.DONE) {
    // Everything is good, the response was received.
} else {
    // Not ready yet.
}

if (httpRequest.status === 200) {
    // Perfect!
} else {
    // There was a problem with the request.
    // For example, the response may have a 404 (Not Found)
    // or 500 (Internal Server Error) response code.
}

