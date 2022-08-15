import React from 'react'
import { Badge } from 'react-bootstrap'
// import { Button } from '../../components/ButtonElement'

const Jobs = ({jobTittle, jobCompany, badgePrimary, badgeSecondary, termDuration, jobDescription, jobDescription2, jobDescription3, jobDescription4, jobDescription5, imgSource, imgAlt}) => {
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

// imgSource: '../../images/bluwave-ai2.jpg',
// imgAlt: 'test', 
// jobTittle: 'Back-end Developer',
// jobCompany: 'Bluwave-ai',
// badgePrimary: 'Full-time',
// badgeSecondary: 'Ottawa',
// termDuration: '05/2022 - 08/2022',
// jobDescription: 'Worked on improving the run-time of microservices',

    return (
        <div className="card mb-3 jobCard" style={{backgroundColor:'#ffffff' , border: '6px solid #ffffff', margin: '0 auto', float: 'none'}}>
            <div className="row p">
                <div className="col-md-2">
                <img className="bd-placeholder-img" width='200px' height="200px" xmlns="http://www.w3.org/2000/svg" aria-label="Placeholder: Image" preserveAspectRatio="xMidYMid slice" src={imgSource} alt={imgAlt} style={{marginLeft: '-20px'}}>
                </img>
                {/* <Img src={imgSource} alt={imgAlt}></Img> */}
                </div>
                <div className="col-md-8" style={{marginLeft: '4.5rem', display: 'flex'}}>
                    <div className="card-body">
                        <h5 className="card-title"><strong>{jobTittle}</strong><span className='text-muted font-weight-light card-company' style={{float: 'right', display:'inline-block'}}> {jobCompany} </span> </h5>
                            <Badge variant='secondary' className='mr-2' style={{marginBottom: '1rem'}}>
                                {badgePrimary}
                            </Badge>
                            <Badge variant='secondary' style={{marginLeft: '1rem'}}>
                                {badgeSecondary}
                            </Badge>
                        <p className="card-text text-muted mb-2">
                        {termDuration}
                        </p>
                        <p className="card-text">
                            {'\u2022'} {jobDescription} <br/>
                            {'\u2022'} {jobDescription2} <br/>
                            {'\u2022'} {jobDescription3} <br/>
                            {'\u2022'} {jobDescription4} <br/>
                            {jobDescription5} <br/>
                        {/* <small className="text-muted">Worked on improving the run-time of microservices</small> */}
                        </p>
                    </div>
                </div>
            </div>
        </div>
        

        
    );
}

export default Jobs