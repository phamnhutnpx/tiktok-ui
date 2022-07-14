import React from 'react';
import classNames from 'classnames/bind';
import styles from './Propper.module.scss';
const Wrapper = ({ children }) => {
    const cx = classNames.bind(styles);
    return <div className={cx('wrapper')}>{children}</div>;
};

export default Wrapper;
