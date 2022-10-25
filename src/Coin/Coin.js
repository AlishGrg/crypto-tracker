import React from 'react'
import './Coin.css'

const Coin = ({ name, image, market_cap, price, symbol, rank, price_change, per_change }) => {
  return (
    <div className='coin-container'>
      <div className='coin-row'>
        <p className='rank'>{rank}</p>
        <p className='image'><img className='coin-img' src={image} alt="loading" /></p>
        <div>
          <div className='coin-name'>
            <p className='name'>{name}</p>
            <p className='symbol'>({symbol})</p>
          </div >
          <div className='market_cap'>
            <span>${market_cap.toLocaleString()}</span>
          </div>
        </div>
        <div className='price-details'>
          <div><span className='price'>${price.toLocaleString()}</span></div>
          <div className='change'>
            <span className='price-change'>
              {price_change < 0 ? (<span className='price-red'>${price_change.toFixed(1)}</span>)
                :
                (<span className='price-green'>${price_change.toFixed(1)}</span>)
              }
            </span>&nbsp;
            <span className='per-change'>
              {per_change < 0 ? (<span className='price-red'>({per_change.toFixed(2)}%)</span>)
                :
                (<span className='price-green'>({per_change.toFixed(2)}%)</span>)
              }
            </span></div>
        </div>

      </div>
    </div>
  )
}

export default Coin