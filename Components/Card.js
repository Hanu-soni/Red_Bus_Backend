import '../css/Card.css';
function CardComponent() {
    return (
       
      <div className='card-container d-flex justify-content-center p-3'>
         <div className="card" style={{ maxWidth: '200px' }}>
         
            <h4 >From</h4>
                    <select id="cars" name="cars">
                        <option value="volvo">Volvo</option>
                        <option value="saab">Saab</option>
                        <option value="fiat">Fiat</option>
                        <option value="audi">Audi</option>
                    </select>
                    <p>Placename</p>
                    <p>India</p>
        </div>
        <div className="card" style={{ maxWidth: '200px' }}>
          <div className="section">
        <h4>To</h4> 
        <select id="cars" name="cars">
                        <option value="volvo">Volvo</option>
                        <option value="saab">Saab</option>
                        <option value="fiat">Fiat</option>
                        <option value="audi">Audi</option>
                    </select>
                    <p>Placename</p>
                    <p>India</p>
          </div>
        </div>
        <div className="card" style={{ maxWidth: '200px' }}>
          <div className="section">
            <h4>Travel Date</h4>
            <button type="button"></button>
            <p>Date</p>
            <p>India</p>
            
          </div>
          
        </div>
    </div>
    );
  }
  
  export default CardComponent;
  