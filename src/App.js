import axios from "axios";
import ImageList from "./components/ImageList";
import ImageSearch from "./components/ImageSearch";
import { useState } from "react";


const searchImagesWithAxios = async (valueToSearchInTheApi) => {
  const response = await axios.get("https://api.unsplash.com/search/photos", {
    headers: {
      // Authorization: "Client-ID hu0gkW85WHMvGce1_npHjLXHlSWZuSTlU-2HhX6BMQw"
    },
    params: {
      query: valueToSearchInTheApi,
      client_id: "hu0gkW85WHMvGce1_npHjLXHlSWZuSTlU-2HhX6BMQw",
    },
  });


  // console.log(response.data.results);
  return response.data.results;
};


function App() {

  const [arrayImages, setArrayImages] = useState([])
  const searchImagesAxios= async (term)=>{
    const response = await searchImagesWithAxios(term) 
    console.log(response)
  }


  const personas = [
    {
      name: "Maynor",
      edad: 23,
    },

    {
      name: "Heidy",
      edad: 22,
    },
  ];

  const handleGetImageListValue = (value1,value2) =>{
   // console.log("Este es el valor", value1,value2)
  }

  //searchImagesWithAxios("hearts")para ver
  

  return (
    <div>
      <ImageSearch searchImagesAxios={searchImagesAxios} />
      <ImageList personas={personas} handleGetImageListValue= {handleGetImageListValue} />
      
    </div>
  );
}

export default App; 