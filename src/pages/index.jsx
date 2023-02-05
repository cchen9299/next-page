import React from 'react'

const Index = () =>{
    const [sum, setSum] = useState(0)

    return (
    <div>
        hello world
        <button onClick={()=>{setSum(sum++)}}>add something</button>
        {sum}
    </div>
    )
}

export default Index