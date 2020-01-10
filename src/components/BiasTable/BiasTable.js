import React from 'react'

const BiasTable = ({ data }) => {

    const { race, total, gender, lgbtq, disability, religion } = data

    return (<>
        <table className="dataTable__table">
            <thead>
                <th className="dataTable__label">Sensitivity Areas</th>
                <th>Count</th>
                <th>%</th>
            </thead>
            <tbody>
                <tr>
                    <td>Race</td>
                    <td>{race}</td>
                    <td>{race / total * 100}%</td>
                </tr>

                <tr>
                    <td>Gender</td>
                    <td>{gender}</td>
                    <td>{gender / total * 100}%</td>
                </tr>
                <tr>
                    <td>Religion</td>
                    <td>{religion}</td>
                    <td>{religion / total * 100}%</td>
                </tr>
                <tr>
                    <td>Disability</td>
                    <td>{disability}</td>
                    <td>{disability / total * 100}%</td>
                </tr><tr>
                    <td>Sexual Orientation</td>
                    <td>{lgbtq}</td>
                    <td>{lgbtq / total * 100}%</td>
                </tr>
                <tr>
                    <td>None</td>
                    <td></td>
                    <td>{(total - [race, lgbtq, gender, disability, religion].reduce(function (acc, val) { return acc + val; }, 0)) / total * 100}%</td>
                </tr>
            </tbody>
            <tfoot>
                <td>Total</td>
                <td>{total}</td>
                <td>100%</td>
            </tfoot>
        </table>
    </>
    )
}
export default BiasTable