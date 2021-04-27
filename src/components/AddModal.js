import { useState } from "react";
import { Modal , Button} from 'react-bootstrap';
import { v4 as uuidv4 } from 'uuid';


const AddModal = (props) => {

    // Toogle popup
    const [show,setshow] = useState(false);

    const handleShow = () => {
        setshow(!show);
    }

    // recupper valeur input dans obejct et ajouter dans la liste movies
    const [inputs,setInputs] = useState({});
    
    const addd = () => {
        props.addMovie({id : uuidv4(),
            name: inputs.name,
            image : inputs.image,
            rating: inputs.rating,
            year : inputs.year,
        });
        setInputs({
            name : '',
            image :'',
            rating : 0,
            year : '',
        });
    };


    return(
        <div>
            <Button variant ="primary" onClick={handleShow}>Add Movie</Button>
            <Modal show={show} onHide={handleShow}>
                <Modal.Header closeButton>
                    <Modal.Title>Add New Movie</Modal.Title>
                </Modal.Header>
                
                <Modal.Body>
                    <div>
                        <div>
                            <label className="input">Name : </label>
                            <input key="field1" name="fname" onChange={({target}) => setInputs(state => ({...state,name:target.value}))} value={inputs.name}/>
                        </div>
                        <div>
                            <label className="input">Image : </label>
                            <input key="field2" name="fimage" onChange={({target}) => setInputs(state => ({...state,image:target.value}))} value={inputs.image}/>
                        </div>
                        <div>
                            <label className="input">Rating : </label>
                            <input key="field3" name="frating" onChange={({target}) => setInputs(state => ({...state,rating:Number(target.value)}))} value={inputs.rating}/>
                        </div>
                        <div>
                            <label className="input">Year : </label>
                            <input key="field4" name="fyear" onChange={({target}) => setInputs(state => ({...state,year:target.value}))} value={inputs.year}/>
                        </div>
                    </div>
                </Modal.Body>
                
                <Modal.Footer>
                    <Button variant="primary" onClick={addd}>Add movies</Button>
                </Modal.Footer>
            </Modal>
        </div>
    )
}
export default AddModal;