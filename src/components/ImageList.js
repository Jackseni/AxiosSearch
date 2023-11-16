function ImageList({personas, handleGetImageListValue, myImage}) {

    const firtImageToRender = myImage.map((image,index)=>{
        return <img src={image.urls.reg} alt="picture" key={index}/>   
        
    })

    const valuee = 43000;
    const itemsToRender = personas.map((item,index)=>{
        console.log(item)
        return(
            <div key={index}>
                {item.name}
            </div>
        )
    })


    return ( 
        <div>
            {/* <button onClick={()=>handleGetImageListValue(valuee,valuee+1)}>Click Me</button> */}
            {itemsToRender}  
            <div>
                {firtImageToRender}
            </div>
            
        </div>
        
     );
}

export default ImageList;