import React, { useState } from 'react'
import {SNEAKERS} from "./data.js"

function Sneakers() {
    const [sneakers , setSneakers] = useState("All")
    
    const SneakersUpdate = (brand) => {
            setSneakers(brand);
      };
    
    function FelterBrand() {
           return setSneaker === "All" ? SNEAKERS 
                  :
                 SNEAKERS.filter((sneaker) => sneaker.brand === setSneakers);      
    }

    
    function SearchSubmitHandler (text){
        text.preventDefault()
        const searchInput = text.target.search.value.trim().toLowerCase();
        setSearchTerm(searchInput);
    
        return SNEAKERS.filter ((sneaker)=>(sneakers === "All" || sneaker.brand === setSneakers) &&
        (searchTerm === "" || 
        sneaker.model.toLowerCase().includes(searchTerm) ||
        sneaker.colorway.toLowerCase().includes(searchTerm) ||
        sneaker.brand.toLowerCase().includes(searchTerm))
        )
    }
    
  return (
    <div className='container'>
        <header >

            <ul>
            <li> <button onClick={()=> SneakersUpdate("All")} >All</button></li>
            <li> <button onClick={()=> SneakersUpdate("Nike")} >Nike</button></li>
            <li> <button onClick={()=> SneakersUpdate("Adidas")} >Adidas</button></li>
            <li> <button onClick={()=> SneakersUpdate("Saucony")} >Saucony</button></li>
            <li> <button onClick={()=> SneakersUpdate("Vans")} >Vans</button></li>
            </ul>

           <form onSubmit={SearchSubmitHandler}>
            <input type="text" name="search" placeholder="Search Sneaker" />
          </form>

        </header>

        <div className= "Sneakers" >

            <div className="sneaker-list">
            {FelterBrand.map((sneaker) => (
          <div key={sneaker.id} className="sneaker-item">
            <img src={sneaker.imageUrl} alt={sneaker.model} />
            <p>{sneaker.model}</p>
          </div>
        ))}
      </div>
        </div>




    </div>
  )

}
export default Sneakers