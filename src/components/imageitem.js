import "../style.css";
function Imagetem({image}) {
    console.log(image)
    return ( <>
        <img className="w-full h-full mb-3 border-4 p-3 rounded-md border-black" src={image.urls.small} alt="" />
    </> );
}

export default Imagetem;