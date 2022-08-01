import Link from 'next/link';
import { useEffect, useState } from 'react'
import MainContainer from '../components/MainContainer';

const Users = ({users}) => {
    // const [users, setUsers] = useState([
    //     { id: 1, name: 'petya' },
    //     { id: 2, name: 'vasya' },
    // ])

    const [нямы, установитьНямы] = useState("няма привет")
    function nyamaPoka() {
        установитьНямы("няма пока")
    }
    function nyamaPrivet() {
        установитьНямы("няма привет")
    }
    function nyama123() {
        установитьНямы("нямы123")
    }
    return (
        <MainContainer keywords={"users next js"}>
            <button onClick={nyamaPoka}>
                Поменять на пока
            </button>
            <button onClick={nyamaPrivet}>
                Поменять на привет
            </button>
            <button onClick={nyama123}>
                Поменять на нямы123
            </button>
            <h1>Список пользователей: {нямы}</h1>
            <ul>
                {users.map(user =>
                    <li key={user.id}>
                    <Link href={`/users/${user.id}`}>
                        <a>{user.name}</a>
                    </Link>
                    </li>
                )}
            </ul>
        </MainContainer>
    );
};

export default Users

export async function getStaticProps(context) {
    const response = await fetch('https://jsonplaceholder.typicode.com/users')
    const users = await response.json()
    return {
        props: {users}, //will be passed to the page component as props
    }
}