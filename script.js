const xhr = new XMLHttpRequest()

let api = "https://jsonplaceholder.typicode.com/photos?utm_source=Mailerlite&utm_medium=E-mail&utm_campaign=Test%20Series&utm_term=2022-08-09"

xhr.open('GET', api)

xhr.onreadystatechange = () => {
    if(xhr.readyState == 4 && xhr.status === 200)
    {
        const response = JSON.parse(xhr.responseText)
        var output = ' '
        for(let i = 0; i < 20; i++)
        {
            output += `<img src = ${response[i].thumbnailUrl} />`
        }

        document.querySelector('#picture-container').innerHTML = output
    }
}

xhr.send()