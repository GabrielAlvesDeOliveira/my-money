import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { logout } from '../../auth/authActions'

class Navbar extends Component {
    constructor(props) {
        super(props)
        this.state = { open: false }
    }
    changeOpen() {
        this.setState({ open: !this.state.open })
    }
    render() {
        const { name, email } = this.props.user
        return (
            <div className="navbar-custom-menu">
                <ul className="nav navbar-nav">
                    <li onMouseLeave={() => this.changeOpen()}
                        className={`dropdown user user-menu ${this.state.open ? 'open' :
                            ''}`}>
                        <a href="javascript:;" onClick={() => this.changeOpen()}
                            aria-expanded={this.state.open ? 'true' : 'false'}
                            className="dropdown-toggle"
                            data-toggle="dropdown">
                            <img src="https://bn1304files.storage.live.com/y4m3FTj_WOwVW-aJgDkZG3lGdE1XZMgkJggvgD-cOzlthrc1jtxwsr93C48wfwdspgyl1tRWfbf3hi8w63zyrrIs6QIi3Al4VwGouNUT27zpRQ_WLLwS0yBM0BKbXaQB-iJcvw8IQdOj4Bc63yNQ4_YwTQCFmuG0sPMYIFO3exrbWy2IKfos7XOFB2-qhxbQJ-0VHXMI0iBZGXQfk4QmCIkTw/WAGNER.png?psid=1&width=100&height=100&cropMode=center"
                                className="user-image" alt="User Image" />
                            <span className="hidden-xs">{name}</span>
                        </a>
                        <ul className="dropdown-menu">
                            <li className="user-header">
                                <img src="https://bn1304files.storage.live.com/y4m3FTj_WOwVW-aJgDkZG3lGdE1XZMgkJggvgD-cOzlthrc1jtxwsr93C48wfwdspgyl1tRWfbf3hi8w63zyrrIs6QIi3Al4VwGouNUT27zpRQ_WLLwS0yBM0BKbXaQB-iJcvw8IQdOj4Bc63yNQ4_YwTQCFmuG0sPMYIFO3exrbWy2IKfos7XOFB2-qhxbQJ-0VHXMI0iBZGXQfk4QmCIkTw/WAGNER.png?psid=1&width=100&height=100&cropMode=center"
                                    className="img-circle" alt="User Image" />
                                <p>{name}<small>{email}</small></p>
                            </li>
                            <li className="user-footer">
                                <div className="pull-right">
                                    <a href="#" onClick={this.props.logout}
                                        className="btn btn-default btn-flat">Sair</a>
                                </div>
                            </li>
                        </ul>
                    </li>
                </ul>
            </div>
        )
    }
}
const mapStateToProps = state => ({ user: state.auth.user })
const mapDispatchToProps = dispatch => bindActionCreators({ logout }, dispatch)
export default connect(mapStateToProps, mapDispatchToProps)(Navbar)