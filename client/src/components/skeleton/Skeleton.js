import {Placeholder} from "react-bootstrap";

const Skeleton = () => {

    const skeletons = [...Array(10).keys()].map((item, i) => {
        return (
            <tr key={i}>
                <td >
                    <Placeholder as="span" animation="glow">
                        <Placeholder xs={12} size="lg"/>
                    </Placeholder>
                </td>
                <td >
                    <Placeholder as="span" animation="glow">
                        <Placeholder xs={12} size="lg"/>
                    </Placeholder>
                </td>
                <td >
                    <Placeholder as="span" animation="glow">
                        <Placeholder xs={12} size="lg"/>
                    </Placeholder>
                </td>
                <td >
                    <Placeholder as="span" animation="glow">
                        <Placeholder xs={12} size="lg"/>
                    </Placeholder>
                </td>
            </tr>
        )
    })

    return (
        <>
            {skeletons}
        </>
    )
}

export default Skeleton