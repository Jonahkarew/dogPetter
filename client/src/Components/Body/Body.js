import React from 'react'

function Body() {

    // useEffect(()=> {
    //     fetch("/api")
    //     .then(res => res.json())
    //     .then(r => console.log(r))
    // })
    const getAllData = () => {
        fetch("/api")
            .then(res => res.json())
            .then(r => console.log(r))
    }
    return (
        <div>
            <button onClick={getAllData}>get foods</button>
        </div>
    )
}

export default Body
