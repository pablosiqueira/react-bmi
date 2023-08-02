import {render, fireEvent, findAllByText} from "@testing-library/react";
import Data from "../components/Data/Data";

describe(Data, () =>{
    it('Sort data as Normal',async () =>{
       // [{id: 1, name: 'Jack', weight: 83, height: 1.85, bmi: 24.25, classification: 'Normal'}]
        const initial = [{name: 'Jack', weight: 83, height: 1.85}]
        const {findByTestId} = render(<Data InitialList={initial}/>)
        const classification = await findByTestId('classification')
        console.log(classification.length)
        expect(classification.textContent).toEqual('Normal')
    })

    it('Sort data as Obesity',async () =>{
        // [{id: 1, name: 'Jack', weight: 83, height: 1.85, bmi: 24.25, classification: 'Normal'}]
         const initial = [{name: 'Jack', weight: 200, height: 1.85}]
         const {findByTestId} = render(<Data InitialList={initial}/>)
         const classification = await findByTestId('classification')
         console.log(classification.length)
         expect(classification.textContent).toEqual('Obesity')
     })

    it('Insert data into the table',async () =>{
        // [{id: 1, name: 'Jack', weight: 83, height: 1.85, bmi: 24.25, classification: 'Normal'}]
         const {getByTestId, findByTestId} = render(<Data/>)
         const NameInput = getByTestId('name')
         fireEvent.change(NameInput,{target: {value: 'Jack'}})
         const weightInput = getByTestId('weight')
         fireEvent.change(weightInput,{target: {value: '35'}})
         const heightInput = getByTestId('height')
         fireEvent.change(heightInput,{target: {value: '1.85'}})

         const submit = getByTestId('submitData')
         fireEvent.click(submit)

        const classification = await findByTestId('classification')
        console.log(classification.length)
        expect(classification.textContent).toEqual('Underweight')
     })

     it('Remove data from the table',async () =>{
        // [{id: 1, name: 'Jack', weight: 83, height: 1.85, bmi: 24.25, classification: 'Normal'}]
         const initial = [{name: 'Jack', weight: 83, height: 1.85}]
         const {findByTestId, findByText} = render(<Data InitialList={initial}/>)
         const removeButton = await findByTestId('remove')
         fireEvent.click(removeButton)
         const message = await findByText('No results found')
         expect(message).toBeTruthy()
     })
})

// https://www.youtube.com/watch?v=JBSUgDxICg8
// https://www.meticulous.ai/blog/how-to-use-react-testing-library-to-wait-for-async-elements-a-step-by-step-guide