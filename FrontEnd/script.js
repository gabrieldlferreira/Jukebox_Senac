
let getTexto = document.getElementById("inputEntrada");
let arrMusics = [];
let userClick = document.querySelector("#btnEnviar");


userClick.addEventListener('click', () => {

    const music = getTexto.value;
    arrMusics.push(getTexto.value);
    getTexto.value = "";

    fetch("http://localhost:3333/play-Music", {
        method: "POST",
        body: JSON.stringify({ music: music }),
        headers: {
            "Content-type": "application/json; charset=UTF-8"
        }
    })

        // Converting to JSON
        .then(response => response.json())

        // Displaying results to console
        .then(json => json);

    // fetch('http://localhost:5000/usuario', {
    //     method: 'POST',
    //     body: JSON.stringify({ music: "Teste" })

    // })
    // .then((resp) => resp.json())
    // .then(res => console.log(res))

    // const test = await axios.get('http://localhost:5000/usuarios')

    let sucesso = document.querySelector('.sucesso');
    let textoSucesso = document.createTextNode("Musica enviada com sucesso!");
    sucesso.appendChild(textoSucesso);
    setTimeout(() => {
        let limparMsg = document.querySelector('.sucesso');
        limparMsg.innerHTML = ' ';
    }, 3000);

});


// fetch("http://localhost:5000/usuarios", {

// })
// .then( (response) => response.json())
// .then((data)=> console.log(data))
// .catch( (error) => console.log(error))