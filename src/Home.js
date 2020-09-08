import React from 'react'
import './Styles/Home.css'
import Product from './Product'

function Home() {
    return (
        <div className='home'>
            <img 
            className='home__image'
            alt='Background'
            src='https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Hero/Fuji_TallHero_45M_v2_1x._CB432458380_.jpg' />
            <div className='home__row'>
                <Product 
                    id='12321314'
                    image='https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTKW3i424nJ7RgZkdv8qWAw64H9WZHWQIDKlg&usqp=CAU'
                    price={556.90}
                    title='New Apple Ipad Pro(12.9-inch, Wi-Fi, 28GB) - (Silver (4th-Generation))'
                    rating= {4}
                />
                <Product 
                    id='12321341'
                    image='https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSvbcZ2P8ORx2zdnwCqPL-K0JODV9-6AQq9oQ&usqp=CAU'
                    price={100.40}
                    title='Amazon Fire TV Cube. Number of Apps: Hundreds | Size: 3.4 x 3.4 x 3.0 inches |'
                    rating= {5}
                />
            </div>
            <div className='home__row'>
                <Product 
                    id='22321314'
                    image='https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSnBZ3UkiAHGIwcqSx5J251XOqbiEL6HF0rtg&usqp=CAU'
                    price={10.50}
                    title='The Lean Startup'
                    rating= {5}
                />
                <Product 
                    id='42321341'
                    image='https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRe6r9q8vM2KBoqHL_VnzPnCnReXlm1ySNYIQ&usqp=CAU'
                    price={505.70}
                    title='Breville the Bakery Boss Stand Mixer BEM823BTR'
                    rating= {5}
                />
                <Product 
                    id='62321341'
                    image='https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRH9vRj0VjRshgveMXiRpdf6vLge88icxjh8XVLTJu_0w&usqp=CAU&ec=45695923'
                    price={35.66}
                    title='Buy Samsung Galaxy FIT E Smart Watch - Black | Fitness '
                    rating= {4}
                />
            </div>
            <div className='home__row'>
                <Product 
                    id='32321341'
                    image='https://images.samsung.com/is/image/samsung/levant-ru7300-ua49ru7300rxtw-frontblack-160755121?$PD_GALLERY_L_JPG$'
                    price={436.99}
                    title='Samsung 2020 Curved 4K UHD TV RU7300 49" - Specs | Samsung Levant'
                    rating= {4}
                />
            </div>
        </div>
    )
}

export default Home
