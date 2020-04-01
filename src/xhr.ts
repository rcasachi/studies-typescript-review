const xhr = new XMLHttpRequest();

xhr.open('GET', 'https://someapidomain.com/v1/users/1');
xhr.send();

xhr.onload = function() {
    console.log('Got the user as: ', xhr.response);
};

xhr.onprogress = function(event) { console.log('on progress...') };
xhr.onerror = function() { console.error('error in the request...') };

//fetch
fetch('https://someapidomain.com/v1/users/1')
    .then(response => response.json())
    .then(user => console.log('Got the user as: ', user));