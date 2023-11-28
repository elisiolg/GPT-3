import React from 'react'
import './brand.css'
import { google, dropbox, slack, atlassian, shopify } from './imports'

const Brand = () => {
  return (
    <div className='gpt3__brand section_padding'>
      <div>
        <img src={google} alt='Google' />
      </div>
      <div>
        <img src={slack} alt='Slack' />
      </div>
      <div>
        <img src={atlassian} alt='Atlassian' />
      </div>
      <div>
        <img src={dropbox} alt='Dropbox' />
      </div>
      <div>
        <img src={shopify} alt='Shopify' />
      </div>
    </div>
  )
}

export default Brand