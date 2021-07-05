import React from "react";
import flowers from '../pics/flowers.jpg';
import shaitels from '../pics/shaitels.jpg';
import makeup from '../pics/makeup.jpg';
import hairdressers from '../pics/hairdressers.png';
import gown from '../pics/gown.jpg';
import nailp from '../pics/nailp.png';
import { withRouter } from 'react-router-dom';
import '../style/homePage.css'


const MultiCarouselPage = withRouter((props) => {
    const { history } = props
    const handler = (component) => { history.push(component); }
    return (
        <div className="all-slides" >
            <div class="tz-gallery">
                <div className="row">
                    <div className="col-sm-6 col-md-4">
                        <div className="thumbnail">
                            <button className="bt-slide" onClick={() => { handler('/showBuisness/hairdressers') }}>
                                <img className="img" src={hairdressers} alt="hairdressers" />
                                <div className="caption">
                                    <h3>מתסרקות</h3>
                                </div>
                            </button>

                        </div>
                    </div>
                    <div className="col-sm-6 col-md-4">
                        <div className="thumbnail">
                            <button className="bt-slide" onClick={() => { handler('/showBuisness/makeupArtists') }}>
                                <img className="img" src={makeup} alt="makeupArtists" />
                                <div className="caption">
                                    <h3>מאפרות</h3>
                                </div>
                            </button>

                        </div>
                    </div>
                    <div className="col-sm-6 col-md-4">
                        <div className="thumbnail">
                            <button className="bt-slide" onClick={() => { handler('/showBuisness/shaitelMachers') }}>
                                <img className="img" src={shaitels} alt="shaitelMachers" />
                                <div className="caption">
                                    <h3>פאניות</h3>
                                </div>
                            </button>

                        </div>
                    </div>
                    <div className="col-sm-6 col-md-4">
                        <div className="thumbnail">
                            <button className="bt-slide" onClick={() => { handler('/showBuisness/dressRentals') }}>
                                <img className="img" src={gown} alt="dressRentals" />
                                <div className="caption">
                                    <h3>השכרת שמלות</h3>
                                </div>
                            </button>

                        </div>
                    </div>
                    <div className="col-sm-6 col-md-4">
                        <div className="thumbnail">
                            <button className="bt-slide" onClick={() => { handler('/showBuisness/flowers') }}>
                                <img className="img" src={flowers} alt="flowers" />
                                <div className="caption">
                                    <h3>פרחים</h3>
                                </div>
                            </button>
                        </div>
                    </div>
                    <div className="col-sm-6 col-md-4">
                        <div className="thumbnail">
                            <button className="bt-slide" onClick={() => { handler('/showBuisness/cosmetics') }}>
                                <img className="img" src={nailp} alt="cosmetics" />
                                <div className="caption">
                                    <h3>קוסמטיקה</h3>
                                </div>
                            </button>

                        </div>
                    </div>
                </div>
            </div>
        </div >
    );
})

export default MultiCarouselPage