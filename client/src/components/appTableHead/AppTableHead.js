const AppTableHead = ({currentSort, currentField, setCurrentField, setCurrentSort}) => {

    const buttonsData = [
        {name: 'name', title: 'Название'},
        {name: 'amount', title: 'Количество'},
        {name: 'distance', title: 'Расстояние'},
    ]

    // rendering buttons
    const buttons = buttonsData.map((item, i) => {
        const {name, title} = item
        const isCurrent = currentField === name
        const ascArrowBtn = isCurrent && currentSort === 'asc' ? '⬆' : ''
        const descArrowBtn = isCurrent && currentSort === 'desc' ? '⬇' : ''
        const defaultBtn = !(isCurrent && currentSort) ? '⏹️' : ''
        return (
            <th key={i}
                className="table-control"
                data-filter={name}
                onClick={(e) => setSort(e)}
            >
                {title + ascArrowBtn + descArrowBtn + defaultBtn}
            </th>
        )
    })

    const setSort = (e) => {
        switch(currentSort) {
            case '':
                setCurrentSort('asc')
                break;
            case 'asc':
                setCurrentSort('desc')
                break;
            case 'desc':
            default:
                setCurrentSort('')
                break;
        }
        setCurrentField(e.currentTarget.getAttribute('data-filter'))
    }

    return (
        <thead>
            <tr>
                <th>
                    Дата
                </th>
                {buttons}
            </tr>
        </thead>
    )
}

export default AppTableHead