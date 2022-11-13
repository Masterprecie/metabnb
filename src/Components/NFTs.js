import React from 'react'
import { Button } from 'react-bootstrap'
import NFTframe from '../img/NFTframe.png'

const NFTs = () => {
  return (
    <>
      <section className='container-fluid' id='NFTs'>
        <div className='container'>
          <div className='row nft-row'>
            <div className='col-lg-6 col-md-12 nft-row-text'>
              <h1>Metabnb NFTs</h1>
              <p>Discover our NFT gift cards collection. Loyal customers gets amazing gift cards which are traded as NFTs. These NFTs gives our cutomer access to loads of our exclusive services.</p>

              <Button href='/place-to-stay' className='meta-btn'>Learn more</Button>
              </div>
            <div className='col-lg-6 col-md-12'>
              <img src={NFTframe} alt="" className='img-fluid'/>
              </div>
          </div>
        </div>
    </section>
    </>
  )
}

export default NFTs