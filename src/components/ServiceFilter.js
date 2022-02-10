import {useSelector, useDispatch} from 'react-redux';
import { changeFilterField } from '../actions/actionCreators';

function ServiceFilter () {
    const filter = useSelector(state => state.filter);
    const dispatch = useDispatch();

    const handleChange = evt => {
        const {value} = evt.target;
        dispatch(changeFilterField(value));
    }

    const handleSubmit = evt => {
        evt.preventDefault();
    }

    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="filter">Фильтр:</label>
            <input id="filter" name="filter" onChange={handleChange} value={filter.filter} />
        </form>
    )
}

export default ServiceFilter;