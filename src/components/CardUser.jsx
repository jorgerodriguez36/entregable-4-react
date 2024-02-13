import React from 'react';
import './styles/cardUser.css';

const CardUser = ({user, deleteUser, setEditUser, setIsOpen}) => {

    const handleDelete = () => {
        deleteUser('/users', user.id);
    }

    const handleEdit = () => {
        setEditUser(user);
        setIsOpen(true);
    }

    return (
        <div className='container'>
            <article className='card'>
                <h3 className='card_title'>{user.first_name} {user.last_name}</h3>
                <ul className='card_ul'>
                    <li className='card_li'><span>CORREO : </span><span><strong>{user.email}</strong></span></li>
                    <li className='card_li'><span> CUMPLEAÑOS : </span><span><ion-icon name="gift-outline"></ion-icon><strong>{user.birthday}</strong></span></li>
                </ul>
                <div className='card_btn'>
                <button className='card_delete' onClick={handleDelete}><ion-icon name="trash-outline"></ion-icon></button>
                <button onClick={handleEdit}><ion-icon name="pencil-outline"></ion-icon></button>
                </div>
            </article>
        </div>
    )
}

export default CardUser;