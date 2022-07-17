import classNames from 'classnames/bind';
import React from 'react';
import Button from '~/components/Button';
import styles from './Menu.module.scss';
const MenuItem = ({ data, onClick }) => {
    const cx = classNames.bind(styles);
    return (
        <Button className={cx('menu-item')} leftIcon={data.icon} to={data.to} onClick={onClick}>
            {data.title}
        </Button>
    );
};

export default MenuItem;
