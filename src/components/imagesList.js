
import Imagetem from "./imageitem";
function ImagesList({netice}) {
    return ( <>
        {netice.map((image,index)=>{
            return <Imagetem image={image} key = {index} />}
        )}
        
    </> );
}

export default ImagesList;