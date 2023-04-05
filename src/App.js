import React from 'react'
import {useState} from "react"
import "./App.css"

function App () {
  


let [movie,setmovie] = useState('');

  
  function onChngeHandler(e){
    setmovie(e.target.value);
   
  }


  
  let link = `https://www.omdbapi.com/?t=${movie}&apikey=85c508d3`;
  function api(){
    let request = fetch(link)
    request.then((response1)=>{
      return response1.json();
  
    }).then((response2)=>{
      console.log(response2);
      let container = document.getElementsByClassName('div')[0]
      console.log(container);
      container.innerHTML = `  <div class='flex-div'><div><h3> Actors:${response2.Actors}</h3><h3> Year : ${response2.Year}</h3><h3> Plot : ${response2.Plot}</h3></div><img class = 'movie-img' src = ${response2.Poster}></img></div>` 
      console.log(response2.Actors);
      console.log(response2.Poster);
   

  
    })

  }


 

  return (
  <div>
 
     <header>
        <div class="header-content">
            <ul class="header-tag">
                <i>Home</i>
            </ul>
            <ul class="header-tag">
                <i>Movies</i>
              
            </ul>
            <ul class="header-tag">
                <i>Actors</i>
             
            </ul>
            <ul class="header-tag">
                <i>About us</i>
            </ul>
        </div>
        <div class="search-bar">
             {/* <input type="search" name="seach_bar" placeholder="جستوجو کنید">
            <button name="but-search">&#128269;</button>  */}
         </div> 
         <hr></hr> 
     </header> 


    <div className='movie-div' >
      <h2>Movie Details Finder</h2>
      <input className='input' onChange={onChngeHandler} placeholder='Enter Movie'></input>
     <button className='link' onClick={api}>search</button>
     <div className='div'></div>
  
     </div>


  </div>
    
  )
}

export default App
