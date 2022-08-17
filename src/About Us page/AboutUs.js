import React from 'react'
import pic from './memberImg.png'
import pic1 from './us.png'

const AboutUs = () => {
    let member1 = 3;
    let member2 = 30;
    let member3 = 300;
    let member4 = 3000;

    return (
        // <div>
        //   {64516515}
        // </div>
        <div className="row" style={{backgroundColor:"black"}}>
            <div className="row" style={{
                margin: '10px'
            }}>
                <h1 style={{color:"white" ,margin:'20px'}}>About Us</h1>
            </div>


            <div className="row  mt-4" style={{
                backgroundColor: 'black',
                width: '65em',
                height: '45em',
                margin: '10px',
                align: 'center',
                color:"white"
            }}>
                <div className="col-3">
                    <div className="row" style={{
                        width: '12em',
                        height: '7em',
                        margin: '20px',
                        borderRadius: '10%',
                        // border: '0px solid white',
                        backgroundColor: '#1A2421'
                    }}>
                        <img src={pic} class="img-fluid" alt="Responsive image" style={{ width: 'fit-content', height: '50px', margin: '10px' }} />

                        <div className="col-1 mt-4">
                            <h4>{member1}</h4>
                        </div>
                        <div className="row-2 mx-3">
                            <h4>Members</h4>
                        </div>
                    </div>


                </div>
                <div className="col-3">
                    <div className="row" style={{
                        width: '12em',
                        height: '7em',
                        margin: '20px',
                        borderRadius: '10%',
                        // border: '0px solid white',
                        backgroundColor: '#1A2421'
                    }}>
                        <img src={pic} class="img-fluid" alt="Responsive image" style={{ width: 'fit-content', height: '50px', margin: '10px' }} />

                        <div className="col-1 mt-4">
                            <h4>{member2}</h4>
                        </div>
                        <div className="row-2 mx-3">
                            <h4>Members</h4>
                        </div>
                    </div>


                </div>
                <div className="col-3 ">
                    <div className="row" style={{
                        width: '12em',
                        height: '7em',
                        margin: '20px',
                        borderRadius: '10%',
                        // border: '0px solid white',
                        backgroundColor: '#1A2421'
                    }}>
                        <img src={pic} class="img-fluid" alt="Responsive image" style={{ width: 'fit-content', height: '50px', margin: '10px' }} />

                        <div className="col-1 mt-4">
                            <h4>{member3}</h4>
                        </div>
                        <div className="row-2 mx-3">
                            <h4>Members</h4>
                        </div>
                    </div>


                </div>
                <div className="col-3">
                    <div className="row" style={{
                        // backgroundColor: 'white',
                        width: '12em',
                        height: '7em',
                        margin: '20px',
                        borderRadius: '10%',
                        // border: '0px solid white',
                        backgroundColor: '#1A2421'
                    }}>
                        <img src={pic} class="img-fluid" alt="Responsive image" style={{ width: 'fit-content', height: '50px', margin: '10px' }} />

                        <div className="col-1 mt-4">
                            <h4>{member4}</h4>
                        </div>
                        <div className="row-2 mx-3">
                            <h4>Members</h4>
                        </div>
                    </div>


                </div>


                <div className="row" style={{
                    backgroundColor: '#1A2421',
                    width: '65em',
                    height: '25em',
                    margin: '0px',
                    align: 'center',
                    borderRadius: '36px'
                }}>

                    <div className="row">
                        <div className="col-2" style={{ width: '29em' }}>
                            <img src={pic1} class="img-fluid" alt="Responsive image" style={{ width: '32em', height: '25em', borderRadius: '36px' }} />
                        </div>

                        <div className="row  " style={{ width: '25em', padding: '2em', margin: '2em' }} >
                            <p >
                                <h3>
                                    About Us
                                </h3>
                                <br />
                                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                                Officiis cupiditate beatae dicta, sed modi architecto.
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor nesciunt dignissimos praesentium in! 
                                Illo accusamus velit ipsam di

                            </p>
                            <div className="row" align ={"center"}style={{width: '12em', height: '4em',textAlign:"center"}}>
                            <button type="button" class="btn btn-danger">View more</button>
                            </div>
                        </div>

                    </div>


                </div>

            </div>
            

        </div>


    )
}

export default AboutUs
