import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Coin from '../Coin/Coin'
import './Home.css'

const Home = () => {
    const url = 'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=20&page=1&sparkline=false'
    const [coins, setCoins] = useState([]);
    const [searchCoin, setSearchCoin] = useState('');

    const filterCoins = coins.filter((coin) => {
        return (
            coin.name.toLowerCase().includes(searchCoin.toLowerCase())
        )
    })

    useEffect(() => {
        axios.get(url)
            .then((res) => {
                console.log(res.data);
                setCoins(res.data)
            }
            )
            .catch((err) => {
                console.log(err)
            })
    }, [])
    return (
        <div className='home-container'>
            <div className='search'>
                <form>
                    <input
                        className='search-box'
                        type='text'
                        placeholder='Search for currency...'
                        onChange={(event) => {
                            //console.log(event.target.value);
                            setSearchCoin(event.target.value);
                        }}
                    />
                </form>
            </div>
            {filterCoins.map(coin => {
                return (
                    <Coin
                        key={coin.id}
                        name={coin.name}
                        image={coin.image}
                        market_cap={coin.market_cap}
                        price={coin.current_price}
                        symbol={coin.symbol}
                        rank={coin.market_cap_rank}
                        price_change={coin.price_change_24h} 
                        per_change={coin.price_change_percentage_24h}/>
                )
            })}
        </div>
    )
}

export default Home