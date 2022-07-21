import {Form} from "react-bootstrap";
import './AppPanel.css'
import {useState, useEffect, useRef} from "react";

const AppPanel = ({setGlobalCurrentField, setGlobalCurrentCondition, setGlobalCurrentValue}) => {

    const [currentField, setCurrentField] = useState('')
    const [currentCondition, setCurrentCondition] = useState('')
    const [currentValue, setCurrentValue] = useState('')

    useEffect(() => {
        setGlobalCurrentCondition(currentCondition)
        setGlobalCurrentField(currentField)
        setGlobalCurrentValue(currentValue)
    }, [currentField, currentCondition, currentValue]);

    // options displaying (visibility for safari and IE) instead of validation
    const selectCondition = useRef(null);

    const isCurrentFieldText = currentField === 'name'
    const isCurrentFieldNum = currentField === 'distance' || currentField === 'amount'
    const visibleCSS = {
        display: 'block',
        visibility: 'visible'
    }
    const notVisibleCSS = {
        display: 'none',
        visibility: 'hidden'
    }

    return (
        <div className="app-panel">
            <Form.Select
                aria-label="Default select example"
                onChange={(e) => {
                    if (e.currentTarget.value === "") {
                        setCurrentCondition('')
                        selectCondition.current.getElementsByTagName('option')[0].selected = 'selected'
                    }
                    setCurrentField(e.currentTarget.value)
                }}>
                <option value="">1. Выберите колонку для фильтрации</option>
                <option value="name">Название</option>
                <option value="amount">Количество</option>
                <option value="distance">Расстояние</option>
            </Form.Select>
            <Form.Select
                aria-label="Default select example"
                ref={selectCondition}
                onChange={(e) => {
                    if (e.currentTarget.value === "") {
                        setCurrentValue('')
                    }
                    setCurrentCondition(e.currentTarget.value)
                }}
                disabled={currentField === ''}
            >
                <option value="">2. Выберите условие для фильтрации</option>
                <option
                    value="more"
                    style={isCurrentFieldNum ? visibleCSS : notVisibleCSS}
                >Больше</option>
                <option
                    value="less"
                    style={isCurrentFieldNum ? visibleCSS : notVisibleCSS}
                >Меньше</option>
                <option
                    value="equal"
                    style={isCurrentFieldNum ? visibleCSS : notVisibleCSS}
                >Равно</option>
                <option
                    value="contains"
                    style={isCurrentFieldText ? visibleCSS : notVisibleCSS}
                >Содержит</option>
            </Form.Select>
            <Form.Control
                onChange={(e) => setCurrentValue(e.currentTarget.value)}
                type="text"
                placeholder="3. Укажите значение"
                disabled={currentCondition === ''}
                value={currentValue}
            />
        </div>
    )
}

export default AppPanel