import React from 'react'
import "./SearchBox.css"

const SearchBox = () => {
  return (
    <>
        <div className='flex justify-center items-center'>
            <div className="searchBox lg:w-[1086px] w-[90%] lg:h-[140px] h-auto lg:flex lg:justify-around lg:items-center">

                {/* Search Events */}
                <div className="col mt-10 mb-8 lg:mb-0 lg:mt-0 relative left-[5%] lg:left-0">
                    <h1 className='ttl'>
                        Search Event
                    </h1>
                    <input type="text" value='Code Carnival' className='ip lg:w-[290px] w-[90%]'/>
                </div>

                {/* Place */}
                <div className="col mt-10 mb-8 lg:mb-0 lg:mt-0 relative left-[5%] lg:left-0">
                    <h1 className='ttl'>
                        Place
                    </h1>
                    <input type="text" value='DYPCOE Akurdi' className='ip lg:w-[290px] w-[90%]'/>
                </div>

                {/* Time */}
                <div className="col mt-10 mb-8 lg:mb-0 lg:mt-0 relative left-[5%] lg:left-0">
                    <h1 className='ttl'>
                        Time
                    </h1>
                    <select id="time" name="time" className='ip lg:w-[290px] w-[90%] dd'>
                        <option value="volvo">Any Date</option>
                        <option value="saab">Last week</option>
                        <option value="fiat">Last month</option>
                        <option value="audi">Last year</option>
                    </select>
                </div>
            </div>
        </div>
    </>
  )
}

export default SearchBox