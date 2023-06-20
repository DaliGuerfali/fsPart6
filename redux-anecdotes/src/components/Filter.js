import { useDispatch } from "react-redux"
import { filterAction } from "../reducers/filterReducer";

const Filter = () => {
    const dispatch = useDispatch();

    const handleChange = (e) => {
      dispatch(filterAction(e.target.value));
    }
    const style = {
      marginBottom: 10
    }
  
    return (
      <div style={style}>
        filter <input onChange={handleChange} />
      </div>
    )
  }
  
  export default Filter;