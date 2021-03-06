import React from 'react'
import styles from './index.less'
import { Menu, Dropdown, Icon} from 'antd';
import router from 'umi/router';
import {TfIcon} from '../../index'

export default class MyHeader extends React.Component {
    constructor(props) {
        super(props)
    }

    redirectTo = () => {
        console.log('跳转到用户反馈');
        router.push('/')
    }

    exit = () => {
        this.props.onExit && this.props.onExit()
    }

    render() {
        const {userInfo} = this.props
        const {userName, carrierName, userAvatar} = userInfo

        const dropDownMenu = (
            <Menu className={styles.dropDownMenu}>
                <Menu.Item key="0">
                    <div onClick={() => this.redirectTo()}>
                        <TfIcon type="Yonghufankui" className={styles.dropDownMenuIcon}/>
                        <span>用户反馈</span>
                    </div>
                </Menu.Item>
                <Menu.Item key="1">
                    <div onClick={() => this.exit()}>
                        <TfIcon type="Signout" className={styles.dropDownMenuIcon}/>
                        <span>退出</span>
                    </div>
                </Menu.Item>
            </Menu>
        )

        return (
            <div className={styles.headerWrap}>
                <div className={styles.left}>
                    <TfIcon type="logo" className={styles.logo}/>
                    <span className={styles.systemName}>企业管理后台</span>
                </div>
                <div className={styles.right}>
                    <span>欢迎您</span>
                    <TfIcon type="Avatar" className={styles.avatar}/>
                    <span className={styles.carrierName}>{carrierName}</span>
                    <Dropdown overlay={dropDownMenu} trigger={['click']} placement="bottomRight">
                        <span>
                            <span className={styles.userName}>{userName}</span>
                            <TfIcon className={styles.dropDownIcon} type="Drop-down"/>
                        </span>
                    </Dropdown>
                </div>
            </div>
        )
    }
}
