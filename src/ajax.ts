function getUserViaXMLHttp() {
    const xhr = new XMLHttpRequest();

    xhr.open('GET', 'https://jsonplaceholder.typecode.com/users/1');
    xhr.send();

    xhr.onload = function() {
        debugger;
        xhr.status === 200 
            ? console.log('Got the user via XMLHttpRequest as: ', xhr.response)
            : console.log(`Error ${xhr.status}: ${xhr.statusText}`);
    };

    xhr.onprogress = function(event) { 
        debugger;
        const message = event.lengthComputable 
            ? `Received ${event.loaded} of ${event.total} bytes`
            : `Received ${event.loaded} bytes`;
        console.log(message);
    };

    xhr.onerror = function() {
        debugger;
        console.error('error in the request...');
    };
}

function getUserViaFetch() {
    fetch('https://jsonplaceholder.typecode.com/users/1')
        .then(response => {
            debugger();
            return response.json();
        })
        .then(user => {
            debugger;
            console.log('Got the user via Fetch as: ', user)
        });
}