import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom'

const Home = () => {

    return (
        <div className='vh-100'>
            <div className='bg-dark bg-gradient'>
                <div className='container md-5 p-3'>
                    <h1 className='text-light'>Test for Web App Developers</h1>
                    <h3 className='text-white-50'>A2O Dev - 2024</h3>
                </div>
                <br />
            </div>

            <div >
                <div className='container p-4'>
                    <h4 ><Link to='/problem-1' className='link-underline link-underline-opacity-0'> Problem 1: Chess</Link></h4>
                    <h4 ><Link to='/problem-2' className='link-underline link-underline-opacity-0'> Problem 2: String value</Link></h4> <br />
                </div>
                <div className='container'>
                    <p>
                        <b>Samuel Romero A.</b> <br />
                        (+591) 76667818 <br />
                        romerotitosamuel@gmail.com <br />
                        linkedin.com/in/romerotitosamuel
                    </p>
                </div>
            </div>
        </div>

    )
}

export default Home