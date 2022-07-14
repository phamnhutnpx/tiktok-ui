import React from 'react';
import classNames from 'classnames/bind';
import styles from './AccountItem.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
const AccountItem = () => {
    const cx = classNames.bind(styles);
    return (
        <div className={cx('wrapper')}>
            <span className={cx('avatar')}>
                <img
                    src="https://p16-sign-va.tiktokcdn.com/tos-useast2a-avt-0068-aiso/b22305afa82a6e53438a2d27e511bb06~c5_300x300.webp?x-expires=1657965600&x-signature=zeD7prCJvnXZToSJZ6mhrVm%2F0Fk%3D"
                    alt="name user"
                />
            </span>
            <div className={cx('info')}>
                <span className={cx('username')}>
                    <h4>npx_official</h4>
                    <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} />
                </span>
                <p className={cx('name')}>Phạm Xuân Nhựt</p>
            </div>
        </div>
    );
};

export default AccountItem;
