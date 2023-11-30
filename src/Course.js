import { useState } from "react";
function Course({search}) {
    const [value, setValue] = useState('');
    function handleseach(e){
        e.preventDefault();
        search(value);
        
        
    };
    const oncha = (e) => {
        setValue(e.target.value);
        return value;
    };

    return (
        <>
            <form onSubmit={handleseach} className="flex flex-col w-4/5 gap-2 border-2 m-3 p-3 rounded-lg" action="">
                <label className="font-bold">What are you looking for?</label>
                <input placeholder="Write Something" value={value} onChange={oncha} className="text-4xl font-medium rounded-md p-1 border-2 border-gray-900 outline-none" type="text" />
            </form>
        </>

    );
}

export default Course;