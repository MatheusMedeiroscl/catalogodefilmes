import { useEffect } from "react";

/*
function GetCatalog(){
    const ApiKey = "c21be08f3bddddb8f6dace551f71004b"

    useEffect(() => {
        const getMovies = async () => {
        const response = await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${ApiKey}&language=pt-BR`)

        if(!response.ok){
        throw new Error(`Erro na requisição: ${response.status} - ${response.statusText}`);
        }

        const data = await response.json()
        console.log(data)
        }

        getMovies();
    },[])

    return 
}

export default GetCatalog();

*/