import React, {useState} from "react"
import data from "./data"

export default function SearchTrain(){
    const [currentLocation, setcurrentLocation] = useState("");
    const [visitLocation, setvisitLocation] = useState("")
    const [filteredData, setfilteredData] = useState([])

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log("submit")
        setfilteredData(data.filter((train) => {
           return (train.from === currentLocation && train.to === visitLocation)
        }))   
    }
return(
    <div>
    <form className="shadow-md md:w-1/3 mx-auto flex py-12 px-12  flex-col" onSubmit={handleSubmit}>
        <h2 className="text-2xl">Where do you want want to go?</h2>
        <label className="mt-4">From</label>
        <br/>
        <input type="text" value={currentLocation} onChange={(e) => setcurrentLocation(e.target.value)} className="border-2 -my-4  border-gray-500 p-1 rounded-sm"/>
        <br/>
        <label>To</label>
        <br/>
        <input type="text"  value={visitLocation} onChange={(e) => setvisitLocation(e.target.value)} className="border-2 -my-4 border-gray-500 p-1 rounded-sm"/>
      <button className="mt-6 bg-gray-200 rounded-sm w-1/5 py-2 mx-auto">Search</button>
    </form>
    {(filteredData.length > 0) && (
        <div key={filteredData.id}><h2>{filteredData.name}</h2><h3>{filteredData.time}</h3></div>
    )}
    </div>
)
}