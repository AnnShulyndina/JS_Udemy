let url = 'https://jsonplaceholder.typicode.com/posts/',
    data = {username: 'example'}
    
fetch(url, {
    method: 'POST',
    body: JSON.stringify(data),
    headers:{
        'Content-Type': 'application/json'
    }
})
    .then((response) => response.json())
    .then((myJson) => console.log('Success', myJson))
    .catch(error=>console.error('Error', error))