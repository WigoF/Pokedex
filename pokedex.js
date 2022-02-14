

    var quantidade = document.getElementById('quantidade');
    quantidade.addEventListener('keyup',()=>{
        pegaPokemons(quantidade.value);
    })


    pegaPokemons();
function pegaPokemons(quantidade){

    fetch('https://pokeapi.co/api/v2/pokemon?offset=10&limit='+quantidade)
 .then(response => response.json())
 .then(allpokemons => {
    

    var pokemons = [];


    allpokemons.results.map((val)=>{
      

        fetch(val.url)
        .then(response => response.json())
        .then(pokemonSingle =>{
            
            pokemons.push({nome:val.name,imagem:pokemonSingle.sprites.front_default});

            if(pokemons.length == quantidade){

                var pokemonBoxes = document.querySelector('.pokemon-boxes');
                pokemonBoxes.innerHTML ="";

                pokemons.map(function(val){
                    pokemonBoxes.innerHTML+=`
                    <div class= "pokemon-box">
                        <img src ="`+val.imagem+`"/>
                        <p>`+val.nome+`</p>
                    </div>`;
                })
                

            }

        
            
        })

      


    })
   


 })

}