import React from "react"

const Introduction = () => {
    return(
        <section className="text-center m-4">
            <h1 className="mb-4">Body Mass Index (BMI) Table</h1>
            <h5 className="d-block mx-auto" style={{maxWidth: '800px'}}>BMI is a measurement of a person's leanness or corpulence based on their height and weight, 
                and is intended to quantify tissue mass. It is widely used as a general indicator of whether 
                a person has a healthy body weight for their height. <a href="https://www.calculator.net/bmi-calculator.html" target='_blanck' title="Source: calculator.net"><sup>[1]</sup></a></h5>
        </section>
    )
    
}

export default Introduction