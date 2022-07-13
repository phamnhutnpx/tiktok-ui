import classNames from 'classnames/bind';
import React from 'react';
import styles from './Header.module.scss';

const Header = () => {
    const cx = classNames.bind(styles);
    return (
        <header className={cx('wrapper')}>
            <div className={cx('inner')}></div>
        </header>
    );
};

export default Header;
