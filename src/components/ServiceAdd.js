import { useEffect } from 'react';
import {useSelector, useDispatch} from 'react-redux';
import { changeServiceField, addService, clearForm, cancelEditing, editService } from '../actions/actionCreators';

function ServiceAdd () {
    const items = useSelector(state => state.serviceList);
    const item = useSelector(state => state.serviceAdd);
    const isEditing = useSelector(state => state.isEditing);
    const dispatch = useDispatch();

    useEffect(() => {
        if (isEditing) {
            const editingItem = items.find(o => o.id === isEditing.id);
            dispatch(editService(editingItem.name, editingItem.price));
        } 
    },[isEditing])
    
    const handleChange = evt => {
        const {name, value} = evt.target;
        dispatch(changeServiceField(name, value));
    }

    const handleSubmit = evt => {
        evt.preventDefault();
        console.log(item.id, item.name, item.price);
        dispatch(addService(isEditing.id, item.name, item.price));
        dispatch(clearForm());
        dispatch(cancelEditing());
    }

    const canselEdit = () => {
        dispatch(cancelEditing());
        dispatch(clearForm());
    }

    return (
        <form onSubmit={handleSubmit}>
            <input name="name" onChange={handleChange} value={item.name} />
            <input name="price" onChange={handleChange} value={item.price} />
            <button type="submit">Save</button>
            {isEditing ? <button type="button" onClick={canselEdit}>Cancel</button> : null}
        </form>
    )
}

export default ServiceAdd;