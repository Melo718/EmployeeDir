function FilterList(props) {
    let optionsListDup= [];
    if (props.value === "city") {
        props.employees.forEach((x) => {
            return optionsListDup.push(x.city)
        })
    } else if (props.value === "state") {
        props.employees.forEach((x) => {
            return optionsListDup.push(x.state)
        })
    }
    optionsListDup = [...new Set(optionsListDup)]
    console.log(optionsListDup)
    let optionsList = optionsListDup.map((x) => {
        return <option value={x}/>})
    return (
        <div>
            <input type="text" list="data" onChange={props.handleFilter} />
            <datalist id="data">
                {optionsList}
            </datalist>
        </div>
    )
}

export default FilterList;