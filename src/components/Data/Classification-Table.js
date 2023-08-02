import React from "react"
import Table from "react-bootstrap/Table"

const ClassificationTable = () => {
    const conditions = [
        {id:1, category: 'Underweight', range: 'bmi < 18.5'},
        {id:2, category: 'Normal', range: '18.5 < bmi < 25'},
        {id:3, category: 'Overweight', range: '25 < bmi < 30'},
        {id:4, category: 'Obesity', range: 'bmi > 30'},
    ]
    return(
        <section className="mx-4 d-block mx-auto" style={{width: 'fit-content'}}>
            <Table striped bordered hover responsive>
                <thead>
                    <tr className="text-center">
                        <th>Category</th>
                        <th>BMI Range kg/m<sup>2</sup></th>
                    </tr>     
                </thead>
                <tbody>
                    {
                        conditions.map(item => (
                            <tr key={item.id} className="text-center">
                            <th>{item.category}</th> 
                            <th>{item.range}</th>
                            </tr>
                        ))
                    }        
                </tbody>
            </Table>
        </section>
    )
}

export default ClassificationTable