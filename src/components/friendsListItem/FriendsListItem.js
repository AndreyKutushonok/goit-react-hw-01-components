import propTypes from 'prop-types'
import s from './FriendsListItem.module.css'
function FriendListItem({avatar, name, isOnline}){
    return(
        <li className={s.item}>
            <span className={isOnline ? s.onLine : s.ofLine}>{isOnline}</span>
            <img className="avatar" src={avatar} alt="User avatar" width="48" />
            <p className="name">{name}</p>
        </li>
    )
}

FriendListItem.propTypes = {
    avatar: propTypes.string.isRequired,
    name: propTypes.string.isRequired,
    isOnline: propTypes.bool.isRequired
};

export default FriendListItem