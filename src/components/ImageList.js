function ImageList({personas, handleGetImageListValue}) {
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
        </div>
     );
}

export default ImageList;