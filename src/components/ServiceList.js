import {useSelector, useDispatch} from 'react-redux';
import { removeService, beginEdit } from '../actions/actionCreators';

function ServiceList () {
    const items = useSelector(state => state.serviceList);
    const dispatch = useDispatch();

    const filter = useSelector(state => state.filter);

    const handleRemove = id => {
        dispatch(removeService(id));
    }

    const handleEdit = id => {
        dispatch(beginEdit(id));
    }

    return (
        <ul>
            {items.filter(o => o.name.toLowerCase().includes(filter.filter))
            .map(o => <li key={o?.id}>
                {o?.name}<span className='price'>{o?.price}</span>
                <button className='editbtn' onClick={()=>handleEdit(o.id)}></button>
                <button className='deletebtn' onClick={()=>handleRemove(o.id)}></button>
            </li>)}
        </ul>
    )
}

export default ServiceList;