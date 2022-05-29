import propTypes from 'prop-types'
import FriendListItem from './FriendsListItem'
import s from './FriendsList.module.css'

function FriendList({friends}){
    return (
        <ul className={s.friendsList} key={friends.id}>
            {friends.map(friend =>(
                <FriendListItem  
                key={friend.id}
                avatar={friend.avatar}
                name={friend.name}
                isOnline={friend.isOnline}
                />
            ))}      
        </ul>)
}

FriendList.propTypes = {
    friends: propTypes.arrayOf(
        propTypes.shape({
        id: propTypes.number.isRequired,
        }),
    ),
};

export default FriendList