import React from 'react'
import {MDBTypography} from 'mdb-react-ui-kit'

const About = () => {
    return (
        <div style={{marginTop: "10px"}}>
            <div className="row" style={{margin: "auto", padding: "15px", maxWidth: "500", alignContent: "center"}}>
                <MDBTypography note noteColor="primary">
                    <h2>Redux-Saga</h2>
                    <h4>- An intuitive Redux side effect manager.</h4>
                    <h4>- Easy to manage, easy to test, and executes efficiently.</h4>
                    <h4>- Asynchronous</h4>
                    <p style={{textIndent: "1em"}}>
                        ES6 generators make asynchronous flows easy to read, write, and test. Create complex 
                        side effects without getting bogged down by the details.
                    </p>
                    <h4>- Composition-focused</h4>
                    <p style={{textIndent: "1em"}}>
                    Sagas enable numerous approaches to tackling parallel execution, task concurrency, task racing, 
                    task cancellation, and more. Keep total control over the flow of your code. 
                    </p>
                    <h4>- Easy To Test</h4>
                    <p style={{textIndent: "1em"}}>
                    Assert results at each step of a generator or for a saga as a whole. Either way, 
                    side effect testing is quick, concise, and painless, as testing should be. 
                    </p>
                </MDBTypography>
            </div>
        </div>
    )
}

export default About
