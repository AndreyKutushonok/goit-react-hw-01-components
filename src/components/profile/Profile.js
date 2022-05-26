import propTypes from 'prop-types'
import s from'./Profile.module.css'//зробити модулем
function Profile ({username, tag, location, avatar, stats}){
    
    return (<div className={s.profile}>
                <div className={s.description}>
                    <img
                        src={avatar}
                        alt={username}
                        className={s.avatar}
                    />
                    <p className={s.name}>{username}</p>
                    <p className={s.tag}>{tag}</p>
                    <p className={s.location}>{location}</p>
                </div>
            
                <ul className={s.stats}>
                    <li className={s.statsItem}>
                        <span className={s.label}>Followers</span>
                        <span className={s.quantity}>{stats.followers}</span>
                    </li>
                    <li className={s.statsItem}>
                        <span className={s.label}>Views</span>
                        <span className={s.quantity}>{stats.views}</span>
                    </li>
                    <li className={s.statsItem}>
                        <span className={s.label}>Likes</span>
                        <span className={s.quantity}>{stats.likes}</span>
                    </li>
                </ul>
            </div>
  );
};

Profile.propTypes = {
    username: propTypes.string.isRequired,
    tag: propTypes.string.isRequired,
    location: propTypes.string.isRequired,
    avatar: propTypes.string.isRequired,
    stats: propTypes.object.isRequired
};

export default Profile;