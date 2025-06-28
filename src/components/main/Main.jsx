import data from '../../../public/data'
import './main.css'

function Main(props) {
    return (
        <div>
            <main>
                <div className="box">
                    <div className="container">
                        <h2>Products</h2>
                        <button className='btn1'>Move All To Bag</button>
                    </div>
                </div>
                <section className='hero'>
                    <div className="container">
                        {data.map((m,i)=>{
                            return <div className="card">
                            <img src={m.img} alt="" />
                            <button className='btn'> <i class="fa-solid fa-cart-shopping"></i> Add to chart</button>
                            <h1>{m.name}</h1>
                            <p>{m.price} $</p>
                        </div>
                        })}
                        
                    </div>
                </section>
            </main>
        </div>
    )
}

export default Main
