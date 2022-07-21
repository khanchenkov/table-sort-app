import './App.css';
import AppTable from '../appTable/AppTable'
import AppPanel from '../appPanel/AppPanel'
import AppPagination from "../appPagination/AppPagination";
import {useState, useEffect} from "react";

function App() {

    const [tableRows, setTableRows] = useState([])
    const [loading, setLoading] = useState(true)

    // Filters Realization
    const [currentField, setCurrentField] = useState('')
    const [currentCondition, setCurrentCondition] = useState('')
    const [currentValue, setCurrentValue] = useState('')

    // Pagination realization
    const [currentPage, setCurrentPage] = useState(1)
    const [rowsPerPage] = useState(10)
    const [tableLength, setTableLength] = useState(null)

    useEffect(() => {
        setLoading(true)
        const getRows = async () => {
            await fetch('/api/row')
                .then(res => res.json())
                .then(res => {
                    setLoading(false)
                    setTableRows(res)
                })
        }
        getRows()
    }, [])

    return (
    <div className="App">
        <AppPanel
            setGlobalCurrentField={setCurrentField}
            setGlobalCurrentCondition={setCurrentCondition}
            setGlobalCurrentValue={setCurrentValue}
        />
        <AppPagination
            totalRows={tableLength}
            rowsPerPage={rowsPerPage}
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
        />
        <AppTable
            data={tableRows}
            loading={loading}
            currentPage={currentPage}
            rowsPerPage={rowsPerPage}
            setTableLength={setTableLength}
            currentField={currentField}
            setCurrentField={setCurrentField}
            currentCondition={currentCondition}
            currentValue={currentValue}
        />
    </div>
    );
}

export default App;