import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import logo from "../Assets/vinted.png"
import { Link } from "react-router-dom"
import { Range } from 'react-range';
import "../Components/Header.css"

export default function Header(props) {
    const {token,setUser,search,handleSearch,togglePrice,handleTogglePrice,rangeValue,handleRange,handleFinalRange}=props
    
    return (
        <div className="header-container" >
            <Link  to="/">
            <img className="header-logo"alt="logo" src={logo}/>
            </Link>

            <div className="search-container">
                <>  
                    <input className="search-input"
                    type="text" 
                    placeholder="Recherche des articles"
                    value={search}
                    onChange={handleSearch}
                    />
                    <FontAwesomeIcon  icon="search" className="search-input-icon" /> 
                 </>
                <div>
                      <div>
                            <span>Trier par prix</span> 
                            <span className="checkbox">
                                <input 
                                type="checkbox"
                                // class="toggle"
                                id="price"
                                //checked={togglePrice}
                                onChange={handleTogglePrice}
                                />
                                <label for="price"></label> 
                                {/* <div className="wrapperToggle">
                                    <div className="knob"><span >⇡</span></div>
                                </div> */}
                            
                            </span>
                     </div>
                     {/* <span>Prix entre:</span>
                    <Range
                    step={0.1}
                    min={0}
                    max={1000}
                    values={rangeValue}
                    onChange={(values) => handleRange({ values })}
                    onFinalChange={(values) => handleFinalRange(values)}
                    renderTrack={({ props, children }) => (
                    <div
                        {...props}
                        style={{
                        ...props.style,
                        height: '6px',
                        width: '100%',
                        backgroundColor: '#ccc'
                        }}
                    >
                        {children}
                    </div>
                    )}
                    renderThumb={({ props }) => (
                    <div
                        {...props}
                        style={{
                        ...props.style,
                        height: '42px',
                        width: '42px',
                        backgroundColor: '#999'
                        }}
                    />
                    )}
                /> */}
                </div> 
           </div>



            <div>
                {token ? 
           ( <button className="header-btn-logout" onClick={()=>{
               setUser("")
           }}>se deconnecter</button>) :
            (<>
            <Link to="/signup">
            <button className="header-button">s'inscrire</button>
            </Link>
            <Link to="/login">
            <button className="header-button">se connecter</button>
            </Link>
            </>
            )}
            <Link to="/publish">
            <button className="header-button">vends tes articles</button>
            </Link>
            </div>
            
        </div>
    )
}
