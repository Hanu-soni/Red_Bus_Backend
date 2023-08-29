import React from 'react'
import Navbar from '../Components/Navbar'
import ImageComponent from '../Components/backgroundimg'
import CalendarComponent from '../Components/Calender'
import SearchComponent from '../Components/FromSearch'
import CardComponent from '../Components/Card2'
import FooterComponent from '../Components/FooterComponent'



const Page1 = () => {
  return (
    <div>
         <Navbar />
        
       <ImageComponent />
       <div className='d-flex justify-content-center'>
       <SearchComponent  />

       </div>
       
       <CardComponent/>
       <div className='d-flex justify-content-center' style={{marginTop:"40px"}}>
        <h3 style={{width:"450px"}}>
            Here what few of our customers have to say about us
        </h3>
       </div>
       <CardComponent/>
       <FooterComponent/>

      
      

    </div>
  )
}

export default Page1