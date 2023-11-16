import axios from "axios";

const searchImageWithAxios = async() =>{

    const response = await axios.get("https://api.unsplash.com/search/photos", {
        headers:{
            Authorization: "Client-ID hu0gkW85WHMvGce1_npHjLXHlSWZuSTlU-2HhX6BMQw"
        },
        params:{
            query: "cars"
        }
    })

    console.log(response.data)
    return response.data;
}

export default searchImageWithAxios;