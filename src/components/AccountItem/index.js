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
                    src="https://p16-sign-sg.tiktokcdn.com/aweme/720x720/tos-alisg-avt-0068/f7ad09c866659e63864480c5446ac401.jpeg?x-expires=1658221200&x-signature=HvrFA1OeVjA8un8BhnYKFRSi6C0%3D"
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
