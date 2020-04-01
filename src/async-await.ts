function getUser() {
    return fetch('https://jsonplaceholder.typecode.com/users/1')
                .then(response => response.json());
}

async function initialize() {
    const user = await getUser();
    console.log('The user: ', user);
}

initialize();