import React from 'react';
import { connect } from 'react-redux';
import { fetchUser} from '../actions';


class UserHeader extends React.Component {

    componentDidMount() {
        this.props.fetchUser(this.props.userId);
    }

    render() {
        const users = this.props.users.find(user => user.id === this.props.userId);

        if(!users) {
            return null;
        }
        return <div className="header">{users.name}</div>;
    }
}

const mapStateToProps = state => {
    return { users: state.users };
};

export default connect(mapStateToProps, { fetchUser })(UserHeader);