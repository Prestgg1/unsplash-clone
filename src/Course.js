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
            <form onSubmit={handleseach} className="flex flex-col w-4/5 border-2 m-3 p-3 rounded-lg" action="">
                <label>What are you looking for?</label>
                <input value={value} onChange={oncha} className="border-2 border-blue-900 outline-none" type="text" />
            </form>
        </>

    );
}

export default Course;