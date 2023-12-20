import React from 'react';
import b1 from './images/b1.jpg';
import lastpic from './images/lastpic.png';
import b2 from './images/b2.jpg';
import b3 from './images/b3.png';
import b4 from './images/b4.jpg';
import b5 from './images/b5.jpg';
import b6 from './images/b6.jpg';
import b7 from './images/b7.jpg';


export default function ImagesDemo(){
    return(
        <>
            <div>
            <img src={b1} height='400' width='1344' style={{marginTop: "11px"}}/>
            </div>

            <div>
                <img src={b2} height='200' width='400' style={{margin: "24px", borderRadius: '8px'}}/>
                <img src={b3} height='200' width='400' style={{margin: "24px", borderRadius: '8px'}}/>
                <img src={b4} height='200' width='400' style={{margin: "24px", borderRadius: '8px'}}/>
            </div>

            <div>
                <img src={b6} height='150' width='650' style={{margin: "11px"}}/>
                <img src={b5} height='150' width='650' style={{margin: "11px"}}/>
            </div>

            <div>
                <div style={{margin: "11px"}}>
                <h4>Top Games</h4>
                </div>
                
                <img src={b7} height='70' width='1330' style={{margin: "11px", borderRadius: '5px'}}/>
                {/* <img src={b1} height='70' width='100' style={{margin: "11px", borderRadius: '5px'}}/>
                <img src={b1} height='70' width='100' style={{margin: "11px", borderRadius: '5px'}}/>
                <img src={b1} height='70' width='100' style={{margin: "11px", borderRadius: '5px'}}/>
                <img src={b1} height='70' width='100' style={{margin: "11px", borderRadius: '5px'}}/>
                <img src={b1} height='70' width='100' style={{margin: "11px", borderRadius: '5px'}}/>
                <img src={b1} height='70' width='100' style={{margin: "11px", borderRadius: '5px'}}/>
                <img src={b1} height='70' width='100' style={{margin: "11px", borderRadius: '5px'}}/>
                <img src={b1} height='70' width='100' style={{margin: "11px", borderRadius: '5px'}}/>
                <img src={b1} height='70' width='100' style={{margin: "11px", borderRadius: '5px'}}/>
                <img src={b1} height='70' width='100' style={{margin: "11px", borderRadius: '5px'}}/> */}
            </div>
                
            <div style={{border: '1px solid black'}}>
            <div style={{backgroundColor: 'black', color: 'white', border: '1px solid black', margin: "2px"}}>
                <h4>Cricket</h4>
            </div>
            
            <div style={{border: '1px solid black',}}>
                <h6>20 Dec 3:30 | India vs New Zealand</h6>
                <button type="button" class="btn btn-success" style={{margin: "5px", borderRadius: '5px'}}>1.01</button>
                <button type="button" class="btn btn-danger" style={{margin: "5px", borderRadius: '5px'}}>1.02</button>
                <button type="button" class="btn btn-warning" style={{margin: "5px", borderRadius: '5px'}}>1.3</button>
                <button type="button" class="btn btn-success" style={{margin: "5px", borderRadius: '5px'}}>3.22</button>
                <button type="button" class="btn btn-danger" style={{margin: "5px", borderRadius: '5px'}}>50</button>
                <button type="button" class="btn btn-warning" style={{margin: "5px", borderRadius: '5px'}}>55</button>
            </div>
            

            <div style={{border: '1px solid black'}}>
                <h6>21 Dec 1:30 | Big Bash League</h6>
                <button type="button" class="btn btn-success" style={{margin: "5px", borderRadius: '5px'}}>5.2</button>
                <button type="button" class="btn btn-danger" style={{margin: "5px", borderRadius: '5px'}}>7</button>
                <button type="button" class="btn btn-warning" style={{margin: "5px", borderRadius: '5px'}}>5.0</button>
                <button type="button" class="btn btn-success" style={{margin: "5px", borderRadius: '5px'}}>4.9</button>
                <button type="button" class="btn btn-danger" style={{margin: "5px", borderRadius: '5px'}}>5.2</button>
                <button type="button" class="btn btn-warning" style={{margin: "5px", borderRadius: '5px'}}>5.3</button>
                
            </div>
            <div style={{border: '1px solid black'}}>
                <h6>22 Dec 7:30 | Chennai Super Kings VS Royal Challengers Bangalore</h6>
                <button type="button" class="btn btn-success" style={{margin: "5px", borderRadius: '5px'}}>5.5</button>
                <button type="button" class="btn btn-danger" style={{margin: "5px", borderRadius: '5px'}}>8.2</button>
                <button type="button" class="btn btn-warning" style={{margin: "5px", borderRadius: '5px'}}>3.5</button>
                <button type="button" class="btn btn-success" style={{margin: "5px", borderRadius: '5px'}}>3.8</button>
                <button type="button" class="btn btn-danger" style={{margin: "5px", borderRadius: '5px'}}>3.9</button>
                <button type="button" class="btn btn-warning" style={{margin: "5px", borderRadius: '5px'}}>5.1</button>
                
            </div>
            </div>

            <div style={{border: '1px solid black'}}>
            <div style={{backgroundColor: 'black', color: 'white', border: '1px solid black', margin: "2px"}}>
                <h4>Kabaddi</h4>
            </div>
                <div style={{border: '1px solid black'}}>
                <h6>20 Dec 5:30 | Jaipur VS Patna</h6>
                <button type="button" class="btn btn-danger" style={{margin: "10px", borderRadius: '5px'}}>Suspended</button>
                <button type="button" class="btn btn-danger" style={{margin: "10px", borderRadius: '5px'}}>Suspended</button>
                <button type="button" class="btn btn-danger" style={{margin: "10px", borderRadius: '5px'}}>Suspended</button>
                <button type="button" class="btn btn-danger" style={{margin: "10px", borderRadius: '5px'}}>Suspended</button>
                <button type="button" class="btn btn-danger" style={{margin: "10px", borderRadius: '5px'}}>Suspended</button>
                <button type="button" class="btn btn-danger" style={{margin: "10px", borderRadius: '5px'}}>Suspended</button>
                <button type="button" class="btn btn-danger" style={{margin: "10px", borderRadius: '5px'}}>Suspended</button>
                </div>

                <div style={{border: '1px solid black'}}>
                <h6>21 Dec 5:30 | Pune VS Bangalore</h6>
                <button type="button" class="btn btn-danger" style={{margin: "10px", borderRadius: '5px'}}>Suspended</button>
                <button type="button" class="btn btn-danger" style={{margin: "10px", borderRadius: '5px'}}>Suspended</button>
                <button type="button" class="btn btn-danger" style={{margin: "10px", borderRadius: '5px'}}>Suspended</button>
                <button type="button" class="btn btn-danger" style={{margin: "10px", borderRadius: '5px'}}>Suspended</button>
                <button type="button" class="btn btn-danger" style={{margin: "10px", borderRadius: '5px'}}>Suspended</button>
                <button type="button" class="btn btn-danger" style={{margin: "10px", borderRadius: '5px'}}>Suspended</button>
                <button type="button" class="btn btn-danger" style={{margin: "10px", borderRadius: '5px'}}>Suspended</button>
                </div>

                <div style={{border: '1px solid black'}}>
                <h6>22 Dec 5:30 | Delhi VS TamilNadu</h6>
                <button type="button" class="btn btn-danger" style={{margin: "10px", borderRadius: '5px'}}>Suspended</button>
                <button type="button" class="btn btn-danger" style={{margin: "10px", borderRadius: '5px'}}>Suspended</button>
                <button type="button" class="btn btn-danger" style={{margin: "10px", borderRadius: '5px'}}>Suspended</button>
                <button type="button" class="btn btn-danger" style={{margin: "10px", borderRadius: '5px'}}>Suspended</button>
                <button type="button" class="btn btn-danger" style={{margin: "10px", borderRadius: '5px'}}>Suspended</button>
                <button type="button" class="btn btn-danger" style={{margin: "10px", borderRadius: '5px'}}>Suspended</button>
                <button type="button" class="btn btn-danger" style={{margin: "10px", borderRadius: '5px'}}>Suspended</button>
                </div>
            </div>

            <div>
            <div style={{backgroundColor: 'black', color: 'white', border: '1px solid black', margin: "2px"}}>
                <h4>Tennis</h4>
            </div>
            <div style={{border: '1px solid black'}}>
                <h6>There is no active events.</h6>
            </div>
            </div>

            <div>
            <img src={lastpic} height='490' width='1344' style={{marginTop: "11px"}}/>
            </div>
        </>
    )
}