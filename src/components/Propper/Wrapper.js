import React from 'react';
import classNames from 'classnames/bind';
import styles from './Propper.module.scss';
const Wrapper = ({ children, className }) => {
    const cx = classNames.bind(styles);
    return <div className={cx('wrapper', className)}>{children}</div>;
};

export default Wrapper;
