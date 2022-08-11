const xhr = new XMLHttpRequest()

let api = "https://jsonplaceholder.typicode.com/photos?utm_source=Mailerlite&utm_medium=E-mail&utm_campaign=Test%20Series&utm_term=2022-08-09"

xhr.open('GET', api)

xhr.onreadystatechange = () => {
    if(xhr.readyState == 4 && xhr.status === 200)
    {
        const response = JSON.parse(xhr.responseText)
        let max = response.length - 1
        console.log(max)
        
        var output = ' '

        //See the latest pictures created
        for(let i = max; i > max - 30; i--)
        {
            output += `<a href = ${response[i].url} traget = "_blank"><img style = "margin: 1em" src = ${response[i].thumbnailUrl} alt = ${response[i].title}/></a>`
        }

        document.querySelector('#picture-container').innerHTML = output
    }
}

xhr.send()