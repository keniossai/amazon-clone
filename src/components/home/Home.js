import React from 'react'
import Product from '../product/Product'
import './Home.css'

function Home() {
	return (
		<div className='home'>
			<div className='homeContainer'>
				<img
					src='https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Events/2021/FathersDay/Fuji_TallHero_FD21_en_US_1x._CB667980417_.jpg'
					className='homeImage'
					alt=''
				/>
                <div className="homeRow">
                    <Product />
                    <Product />
                    <Product />
                </div>
			</div>
		</div>
	)
}

export default Home
