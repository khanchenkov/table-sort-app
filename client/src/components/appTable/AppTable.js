import { Table } from 'react-bootstrap';
import {useEffect, useState} from "react";
import AppTableHead from "../appTableHead/AppTableHead";
import Skeleton from "../skeleton/Skeleton";
import "./AppTable.css"

const AppTable = (props) => {

    const {
        data,
        loading,
        currentPage,
        rowsPerPage,
        setTableLength,
        currentCondition,
        currentField,
        currentValue,
        setCurrentField
    } = props

    const [currentSort, setCurrentSort] = useState('')

    // for pagination
    const lastRowIndex = currentPage * rowsPerPage
    const firstRowIndex = lastRowIndex - rowsPerPage

    // rendering list
    const renderItems = (arr) => {
        const items = arr.map(item => {
            const {id, date, name, amount, distance} = item;

            return (
                <tr key={id}>
                    <td>{new Date(date).toLocaleDateString('ru-RU', {year: "numeric", month: "long", day: "numeric"})}</td>
                    <td>{name}</td>
                    <td>{amount}</td>
                    <td>{distance}</td>
                </tr>
            )
        })
        return (
            items
        )
    }

    // filtering list
    const filterItems = (items, condition, field, value) => {
        if (value === '') {
            return items
        }

        switch (condition) {
            case 'less':
                return field === 'name'
                    ? items
                    : items.filter(item => item[field] < parseInt(value))
            case 'more':
                return field === 'name'
                    ? items
                    : items.filter(item => item[field] > parseInt(value))
            case 'equal':
                return items.filter(item => item[field].toString() === value)
            case 'contains':
                return items.filter(item => item[field].indexOf(value) > -1)
            default:
                return items
        }
    }

    // sorting list
    const sortItems = (arr, sortField, sortType) => {
        if (sortField === 'amount' || sortField === 'distance') {
            switch (sortType) {
                case 'asc':
                    return arr.sort((a, b) => a[sortField] - b[sortField])
                case 'desc':
                    return arr.sort((a, b) => a[sortField] - b[sortField]).reverse()
                case '':
                default:
                    return arr.sort((a,b) => a.id - b.id)
            }
        } else {
            switch (sortType) {
                case 'asc':
                    return arr.sort((a, b) => a.name.localeCompare(b.name))
                case 'desc':
                    return arr.sort((a, b) => a.name.localeCompare(b.name)).reverse()
                case '':
                default:
                    return arr.sort((a,b) => a.id - b.id)
            }
        }
    }

    // sorting -> filtering -> slicing -> rendering items
    const sortedItems = sortItems(data, currentField, currentSort)
    const filteredItems = filterItems(sortedItems, currentCondition, currentField, currentValue)
    const currentRows = filteredItems.slice(firstRowIndex, lastRowIndex)
    const items = renderItems(currentRows)

    // lifting state tableLength
    useEffect(() => {
        setTableLength(filteredItems.length)
    }, [filteredItems])

    // displaying error or skeleton or items
    const notFound = items.length === 0 && !loading
        ? (<tr><td colSpan="4">Ничего не найдено!</td></tr>)
        :  null

    const content = items.length !== 0
        ? items
        : null

    const skeleton = loading
        ? <Skeleton/>
        : null

    return (
        <Table striped bordered hover variant="dark" className="app-table">
            <AppTableHead
                currentField={currentField}
                currentSort={currentSort}
                setCurrentSort={setCurrentSort}
                setCurrentField={setCurrentField}
            />
            <tbody>
                {content}
                {notFound}
                {skeleton}
            </tbody>
        </Table>
    )
}

export default AppTable;

