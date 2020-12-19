function Filter(props) {

    return (
        <select  value={props.value} onChange={props.handleOptionFilter} >
        <option value="all" > Filter by: </option>
        <option value="city" >City</option>
        <option value="state" >State</option>
        <option value="all">Cancel</option>  
        </select>
    )}
    export default Filter;