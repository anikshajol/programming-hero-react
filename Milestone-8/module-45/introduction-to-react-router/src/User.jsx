import PropTypes from 'prop-types'

const User = ({user}) => {
    return (
        <div>
            <h2>Name:{user.name}</h2>
        </div>
    );
};

User.propTypes={
    user: PropTypes.object
}

export default User;