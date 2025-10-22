import React from 'react'
import '../App.css'
import AttributeForm from '../components/attributeForm'
import { ATTRIBUTE_OPTIONS } from '../components/attributeOptions'
import { useState } from 'react'

const CreateCreature = () => {

    const [creatureDetails, setCreatureDetails] = useState({
        name: "",
        ...Object.fromEntries(Object.keys(ATTRIBUTE_OPTIONS).map((key) => [key, ""]))}
    );

    const handleChange = (attribute, value) => {
        setCreatureDetails(prev => ({ ...prev, [attribute]: value }));
    };

    const createCreature = async (event) => {
        event.preventDefault()

        console.log("Form submitted!");
        console.log("Data being sent:", creatureDetails);

        try {
            const options = { 
              method: 'POST', 
              headers: { 'Content-Type': 'application/json' }, 
              body: JSON.stringify(creatureDetails) 
            };
      
            const response = await fetch('/api/creatures', options);
            const data = await response.json();
            console.log("Server response:", data);
      
            //redirect
            window.location = '/creatures';

          } catch (err) {
            console.error(err);
          }
    }

    return (
        <div>
            <form onSubmit={createCreature}>

            <AttributeForm 
            creatureDetails = {creatureDetails}
            handleChange = {handleChange} />

            <button type="submit">Create Creature</button>

            </form>

            
            //debug
            <pre>{JSON.stringify(creatureDetails, null, 2)}</pre>

        </div>
    )
}

export default CreateCreature