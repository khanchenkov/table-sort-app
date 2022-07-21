import {Pagination} from 'react-bootstrap'
import './AppPagination.css'

const AppPagination = ({rowsPerPage, totalRows, currentPage, setCurrentPage}) => {

    const pageNumbers = [0]

    for(let i = 1; i < Math.ceil(totalRows / rowsPerPage); i++) {
        pageNumbers.push(i)
    }
    const lastPage = Math.ceil(totalRows / rowsPerPage);

    const paginate = pageNumber => setCurrentPage(pageNumber)

    return (
        <Pagination className="app-pagination" >
            <Pagination.First
                onClick={() => setCurrentPage(1)}
                disabled={currentPage === 1}
            />
            <Pagination.Prev
                onClick={() => setCurrentPage(currentPage => currentPage - 1)}
                disabled={currentPage === 1}
            />

            {pageNumbers.map((item) => {
                return (
                    <Pagination.Item
                        key={item}
                        onClick={() => paginate(item+1)}
                        active={item+1 === currentPage}
                    >{item+1}
                    </Pagination.Item>
                )
            })}
            <Pagination.Next
                disabled={currentPage === lastPage}
                onClick={() => setCurrentPage(currentPage => currentPage +     1)}
            />
            <Pagination.Last
                onClick={() => setCurrentPage(lastPage)}
                disabled={currentPage === lastPage}
            />
        </Pagination>
    )
}
export default AppPagination