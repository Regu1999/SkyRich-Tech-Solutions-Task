import Navbar from "../Component/Navbar"
import { useRouteError, Link } from 'react-router'
const Error = () => {
    let content;
    const error = useRouteError();
    if (error.message) {
        content = <h1>{error.message}</h1>
    }
    if (error.status === 404) {
        content = <h1>
            404 <br />
            File Not found
        </h1>

    }
    return <>
        <Navbar />
        <div style={{ paddingTop: '8rem', color: 'yellow', textAlign: 'center' }}>
            {content}
            <Link style={{
                background: 'gray',
                padding: '.5rem',
                borderRadius: '5px',
                marginTop: '1rem',
                display: 'inline-block',
                color:'white'
            }} to="../">Back</Link>
        </div>
    </>
}

export default Error