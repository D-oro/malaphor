import React, {useState} from 'react';

function Select({listItems}){

    const [a, setA] = useState(Math.floor(Math.random()*154))
    const [b, setB] = useState(Math.floor(Math.random()*154))
    const [c, setC] = useState(Math.floor(Math.random()*154))
    const [d, setD] = useState(Math.floor(Math.random()*154))
    const [e, setE] = useState(Math.floor(Math.random()*154))

    const handleRefresh = function(){
    setA(Math.floor(Math.random()*154));
    setB(Math.floor(Math.random()*154));
    setC(Math.floor(Math.random()*154));
    setD(Math.floor(Math.random()*154));
    setE(Math.floor(Math.random()*154));
    }
    
    const [x, setX]=useState("...")
    const [y, setY]=useState("...")
    const [result, setResult]=useState("")

    let xSplit = x.split(" ")
    let ySplit = y.split(" ")

    const handleWordClick = (event) =>{
        let newWord = event.currentTarget.textContent
        const copyResult = [...result]
        copyResult.push(newWord.toLowerCase())
        copyResult.push(" ")
        setResult(copyResult.join(""))
    }

    const xWords = xSplit.map((word, index)=>{
        return(
            <ul className="firstIdiom" key={index}>
                <li className="firstIdiomWords" onClick={handleWordClick}>{word}</li>
            </ul>
        )
    })

    const yWords = ySplit.map((word, index)=>{
        return(
            <ul className="secondIdiom" key={index}>
                <li className="secondIdiomWords" onClick={handleWordClick}>{word}</li>
            </ul>
        )
    })

    const handleClickA =()=>{
        if(x === "..."){
        setX(listItems[a])
        } else if (y === "..."){
        setY(listItems[a])
        }
    }

    const handleClickB =()=>{
        if(x === "..."){
        setX(listItems[b])
        } else if (y === "..."){
        setY(listItems[b])
        }
    }

    const handleClickC =()=>{
        if(x === "..."){
        setX(listItems[c])
        } else if (y === "..."){
        setY(listItems[c])
        }
    }

    const handleClickD =()=>{
        if(x === "..."){
        setX(listItems[d])
        } else if (y === "..."){
        setY(listItems[d])
        }
    }

    const handleClickE =()=>{
        if(x === "..."){
        setX(listItems[e])
        } else if (y === "..."){
        setY(listItems[e])
        }
    }

    const resetIdioms = ()=>{
        setX("...")
        setY("...")
    }

    const resetMalaphors = () =>{
        setResult("")
    }

return(
        <>
            <div className="idioms">
                <div className="section1">
                <button onClick={resetIdioms}>clear</button>
                <div className="section2">        
                {xWords}
                <br/>
                <br/>
                {yWords}
                </div>
                <div className="section3">{result}</div>
                <button onClick={resetMalaphors} className="malaphor-button">clear</button>
                </div>
            </div>

            <div className="list">
                <div className="idiom-header">
                <h2>Idioms, expressions & proverbs</h2>
                <button onClick={handleRefresh}>Refresh</button>
                </div>

                <ul>
                    <li onClick={handleClickA}>{listItems[a]}</li>
                    <li onClick={handleClickB}>{listItems[b]}</li>
                    <li onClick={handleClickC}>{listItems[c]}</li>
                    <li onClick={handleClickD}>{listItems[d]}</li>
                    <li onClick={handleClickE}>{listItems[e]}</li>
                </ul> 
            </div>

        </>
    )
}
export default Select;