import React from 'react';
import PropTypes from 'prop-types';
import user from './user.json';

const Profile = ({ avatar, name, tag, location, stats }) => (
    <div class="profile">
        <div class="description">
            <img
                src={avatar}
                alt="Аватар пользователя"
                class="avatar"
            />
            <p class="name">{name}</p>
            <p class="tag">@{tag}</p>
            <p class="location">{location}</p>
  </div>

    <ul class="stats">
        <li>
            <span class="label">Followers</span>
            <span class="quantity">{stats.followers}</span>
        </li>
        <li>
            <span class="label">Views</span>
            <span class="quantity">{stats.views}</span>
        </li>
        <li>
            <span class="label">Likes</span>
            <span class="quantity">{stats.likes}</span>
        </li>
  </ul>
</div>
);

Profile.defaultProps = {avatar: 'https://www.flaticon.com/svg/static/icons/svg/3784/3784184.svg'
}

Profile.propTypes = {
    name: PropTypes.string,
    tag: PropTypes.string,
    location: PropTypes.string,
    followers: PropTypes.number,
    views: PropTypes.number,
    likes: PropTypes.number
}

export default Profile;