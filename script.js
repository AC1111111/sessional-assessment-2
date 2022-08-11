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
        for(let i = max; i >= 0; i--)
        {
            output += `<a href = ${response[i].url} target = "_blank"><img style = "margin: 1em" src = ${response[i].url} alt = ${response[i].title}/></a>`
        }

        document.querySelector('#picture-container').innerHTML = output
    }
}

xhr.send()

//Handle Image uploads

//Store all images in a JSON in local storage
const images = JSON.parse(localStorage.getItem('images')) || [];


  $('#submit').on('click', () => {
    const title = $('#title').val();
    const url = $('#img').val();
    const desc = $('#description').val();
    images.push({ title, url, desc });      //push the new image into the JSON
    console.log(images);
    localStorage.setItem('images', JSON.stringify(images));
    location.href = 'index.html';

    var output = ``
    for(let i = 0; i < images.length; i++)
    {
        output += `<a href = ${images[i].url} target = "_blank"><img style = "margin: 1em; width: 600px; height: 600px" src = ${images[i].url} alt = ${images[i].title}/></a>`
    }

    document.querySelector('#user-pictures').innerHTML = output

  });
