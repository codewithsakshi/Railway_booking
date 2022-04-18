import React, { useEffect, useState } from "react";

const getLocalStorage = () => {
        let bookings = localStorage.getItem("reservedBooking")
        if(bookings){
            return (bookings = JSON.parse(localStorage.getItem('reservedBooking')));
        }
        else{
            return []
        }
}

export default function TicketBooking (){
    const [isbooking, setisbooking] = useState(false);
    const [name, setname] = useState("")
    const [mobileNo, setmobileNo] = useState("")
    const [amount, setamount] = useState("")
    const [reservedBooking, setreservedBooking] = useState(getLocalStorage())
    
   const handleSubmit = (e) => {
   e.preventDefault()
    const booking = {
       id: new Date().getTime(),
        name,
        mobileNo,
        amount
    }
    setname("");
    setamount("");
    setmobileNo("");
      setreservedBooking([...reservedBooking, booking]);
  }
   useEffect(() => {
       localStorage.setItem("reservedBooking", JSON.stringify(reservedBooking))
    }, [reservedBooking])

    return(
        <div>
            <button onClick={() => setisbooking(!isbooking)} className="bg-red-600 rounded-sm text-white p-2 mt-2">Book Tickets</button>
            {(isbooking) && (
                <form onSubmit={handleSubmit}>
                    <input type="text" className="border-2 p-1 px-4 border-red-500 mt-2" placeholder="Enter Name" value={name} onChange={(e) => setname(e.target.value)}/>
                    <br/>
                    <input type="text" className="border-2 p-1 px-4 border-red-500 mt-2" placeholder="Enter Mobile Number" value={mobileNo} onChange={(e) => setmobileNo(e.target.value)}/>
                    <br/>
                    <input type="text" className="border-2 p-1 px-4 border-red-500 mt-2" placeholder="Enter Ticket Price" value={amount} onChange={(e) => setamount(e.target.value)}/>
                    <br/>
                    <button className="bg-red-600 rounded-sm text-white p-2 mt-2" >Add Booking</button>
                </form>
            )}
            <div>
            {(reservedBooking.length > 0) && (
             reservedBooking.map(booking => {
                 let {id, name, mobileNo, amount} = booking
                 return(
                <div className="flex justify-evenly my-2 w-1/2 m-auto" key={booking.id}><h2 className="w-1/3">{name}</h2><h3  className="w-1/3">{amount}</h3><button className="bg-gray-300 rounded-sm p-2 w-1/3" onClick={() => setreservedBooking(reservedBooking.filter(ticket => ticket.id !== booking.id))}>Cancel Booking</button></div>
                )
              })   
            )}        
            </div>
            
        </div>
    )
}