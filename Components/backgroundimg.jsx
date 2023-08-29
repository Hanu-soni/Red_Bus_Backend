import '../css/backgroundimg.css';
import '../css/Card.css';
import CardComponent from './Card'
function ImageComponent() {

  const spacingStyle = {
    height: '20px', // Adjust the height as needed for spacing
  };
    return (
        <div className='image-container'>
            <div className='d-flex justify-content-center'>
       <CardComponent />
       </div>
        
        {/* <div style={spacingStyle}></div> */}
    
      
        </div>
    );
  }
  
  export default ImageComponent;
  