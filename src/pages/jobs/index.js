import React from 'react'
import { Badge } from 'react-bootstrap'
// import { Button } from '../../components/ButtonElement'

const Jobs = () => {
//   return (
//     <Card style={{ width: '80%', margin: '0 auto', float: 'none', outline: '4px'}}>
//         <Card.Body>
//             <div className='d-flex justify-content-between'>
//                 <div>
//                     <Card.Title>
//                     Back-end Developer <span className='text-muted font-weight-light'> BluWave-ai </span>
//                     </Card.Title>
//                     <Card.Subtitle className='text-muted mb-2'>
//                         05/2022 - 08/2022 
//                     </Card.Subtitle>
//                     <Badge variant='secondary' className='mr-2'>
//                         Full-time
//                     </Badge>
//                     <Badge variant='secondary'>
//                         Ottawa
//                     </Badge>
//                     <img src={require('../../images/bluwave-ai.jpg')} className='d-none d-md-block' height='50'></img>
//                 </div>
//             </div>
//         </Card.Body>
//     </Card>
//   )

    return (
        <div className="card mb-3 jobCard" style={{width: '900px', backgroundColor:'#ffffff' , border: '8px solid #ffffff', margin: '0 auto', float: 'none'}}>
        <div className="row no-gutters">
            <div className="col-md-4">
            {/* <svg
                className="bd-placeholder-img"
                width="100%"
                height="250"
                xmlns="http://www.w3.org/2000/svg"
                aria-label="Placeholder: Image"
                preserveAspectRatio="xMidYMid slice"
                role="img"
                >
                <title>Placeholder</title>
                <rect width="100%" height="100%" fill="#868e96" />
                <text x="50%" y="50%" fill="#dee2e6" dy=".3em">
                Image
                </text>
            </svg> */}
            <img src={require('../../images/bluwave-ai2.jpg')}                 
                className="bd-placeholder-img"
                width="100%"
                height="250"
                xmlns="http://www.w3.org/2000/svg"
                aria-label="Placeholder: Image"
                preserveAspectRatio="xMidYMid slice"
                ></img>
            </div>
            <div className="col-md-8" style={{}}>
            <div className="card-body">
                <h5 className="card-title"><strong>Back-end Developer</strong> <span className='text-muted font-weight-light' style={{float: 'right', marginRight:'1rem'}}> BluWave-ai </span> </h5>
                    <Badge variant='secondary' className='mr-2' style={{marginBottom: '1rem'}}>
                        Full-time
                    </Badge>
                    <Badge variant='secondary' style={{marginLeft: '1rem'}}>
                        Ottawa
                    </Badge>
                <p className="card-text text-muted mb-2">
                05/2022 - 08/2022 
                </p>
                <p className="card-text">
                    {'\u2022'} Worked on improving the run-time of microservices
                {/* <small className="text-muted">Worked on improving the run-time of microservices</small> */}
                </p>
            </div>
            </div>
        </div>
        </div>
    );
}

export default Jobs