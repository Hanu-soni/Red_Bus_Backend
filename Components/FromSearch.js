import CalendarComponent from './Calender';
import './Navbar.css'
function SearchComponent() {
    return (
     <div className='d-flex justify-content-evenly 'style={{width:"1200px"}}>
        <div className=" d-flex justify-content-left">
        <div className="search-bar">
          <input type="text" placeholder="Search places" />
          <button>Search</button>
        </div>
        <div className="options">
          <h3>Options:</h3>
          <ul>
            <li>Place 1</li>
            <li>Place 2</li>
            <li>Place 3</li>
            {/* Add more options as needed */}
          </ul>
        </div>
        
      </div>
      <div className='d-flex justify-content-center'>
        NEED SOME SPACING
      </div>
      <div className='d-flex justify-content-right'>
      <CalendarComponent/>

      </div>

     

        </div>
       

      
    );
  }
  
  export default SearchComponent;
  