import React, { useState } from 'react'

const Index = () =>{
    const [sum, setSum] = useState(0)

    return (
    <div>
        hello world
        <button onClick={()=>{
            const num = sum + 1
            setSum(num)
            }}>add something</button>
        {sum}
    </div>
    )
}

export default Index