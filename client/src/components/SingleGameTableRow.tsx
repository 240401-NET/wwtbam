import { Game } from "../models/Game";


interface propsInterface {
    data: Game,
    place: number
}

export function SingleGameTableRow(props: propsInterface) {

    return (
        <>
        <tr>
            <th>{props.place}</th>
            <td>{props.data.createdBy.name}</td>
            <td>{props.data.score}</td>
            <td>{props.data.playedAt}</td>
        </tr>
        </>
    )
}