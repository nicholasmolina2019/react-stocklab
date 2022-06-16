import {Link} from 'react-router-dom';
import stocks from '../Data';


function Price() {
    return (
        <>
        {stocks.map((stocks, index) =>{
            return(
                <Link data={stocks} key={index} to={`/stocks/${stocks.symbol}`}>
                <h2>{stocks.name}</h2>

                </Link>
            )
        })}
        </>
    )
}

export default Price;