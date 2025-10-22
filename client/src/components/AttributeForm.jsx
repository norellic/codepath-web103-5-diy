import { ATTRIBUTE_OPTIONS } from "./attributeOptions";
console.log(ATTRIBUTE_OPTIONS);


const AttributeForm = ({ creatureDetails, handleChange }) => {
    return (  

        <div>
            <h3>Name: </h3>
            <input
            type="text"
            value={creatureDetails.name}
            onChange={(e) => handleChange("name", e.target.value)}
            placeholder="Enter creature name"
            />
        
            {Object.entries(ATTRIBUTE_OPTIONS).map(([attribute, options]) => (<div key={attribute}> 
                <h3>{attribute}</h3>

                    {options.map(option => (
                        <button
                        type="button" 
                        value={option}
                        onClick={() => {
                            console.log(`Clicked: ${attribute} → ${option}`);
                            handleChange(attribute, option);}}
                        className={creatureDetails[attribute] === option ? "selected" : ""}
                        >{option}</button>
                    ))}

            </div>))}
        </div>

    )
}

export default AttributeForm