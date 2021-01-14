import React,{useState, useEffect} from 'react'

const BasicuseEffect = () => {

    const [count, setCount] = useState(0)

    useEffect(() => {
        console.log("useEffect nvoked")
    },[])

    return (
        <div>
            <button onClick={() => setCount(precCount => precCount + 1)}>Click { count}</button>
        </div>  
    )
}

export default BasicuseEffect
