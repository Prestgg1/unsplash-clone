import "../style.css";
import Imagetem from "./imageitem";
function ImagesList({netice}) {
    return ( <div className="h-full lg:columns-4 w-3/4 md:columns-2 columns-1">
        {netice.map((image,index)=>{
            return <Imagetem image={image} key = {index} />}
        )}
        
    </div> );
}

export default ImagesList;