import React from 'react'
import footerImg from '../img/footerImg.svg'
import {FaFacebookF} from 'react-icons/fa'
import { AiOutlineTwitter, AiOutlineInstagram} from 'react-icons/ai'
import { BiCopyright } from 'react-icons/bi'

const Footer = () => {
  return (
    <>
      <section className='container-fluid' id='footer'>
        <div className='container'>
          <div className='footer-contents'>
            <div>

              <img src={footerImg} alt="" />

                <div className='footer-icons'>
                  <a href="facebook" className='pe-4'><FaFacebookF/></a>
                  <a href="instagram" className='pe-4'><AiOutlineInstagram/></a>
                  <a href="twitter" className='pe-4'><AiOutlineTwitter /></a>                               
                </div>
            </div>

            <div>
              <p>Community</p>
              <ul>
                <li>NFT</li>
                <li>Tokens</li>
                <li>Landlords</li>
                <li>Discord</li>
              </ul>
            </div>

            <div>
              <p>Places</p>
              <ul>
                <li>Castle</li>
                <li>Farms </li>
                <li>Beach</li>
                <li>Learn more</li>
              </ul>
            </div>

            <div>
              <p>About us</p>
              <ul>
                <li>Road map</li>
                <li>Creators </li>
                <li>Career</li>
                <li>Contact us</li>
              </ul>
            </div>
          </div>  
          <span className='copyright'><BiCopyright/> 2022 Metabnb</span>
        </div>
      </section>

   </>
  )
}

export default Footer