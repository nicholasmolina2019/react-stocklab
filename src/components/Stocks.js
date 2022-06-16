import stocks from '../Data';


const Stocks = props => {

    const symbol = props.match.params.symbol;

    const stock = stocks.filter(data => data.symbol === symbol)[0]

    return (
        <>
        {stock.name}
       <br></br>
       {stock.symbol}
       <br></br>
       {stock.lastPrice}
        </>
    )
}



export default Stocks;