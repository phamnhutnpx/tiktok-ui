import classNames from 'classnames/bind';
import React from 'react';
import Button from '~/components/Button';
import styles from './Menu.module.scss';
const MenuItem = ({ data, onClick }) => {
    const cx = classNames.bind(styles);
    const className = cx('menu-item', {
        separate: data.separate,
    });
    return (
        <Button className={className} leftIcon={data.icon} to={data.to} onClick={onClick}>
            {data.title}
        </Button>
    );
};

export default MenuItem;
