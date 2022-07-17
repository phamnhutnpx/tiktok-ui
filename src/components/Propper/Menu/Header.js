import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames/bind';
import React from 'react';
import Button from '~/components/Button';
import styles from './Menu.module.scss';

const Header = ({ title, onBack }) => {
    const cx = classNames.bind(styles);
    return (
        <header className={cx('header')}>
            <Button className={cx('back-btn')}>
                <FontAwesomeIcon icon={faChevronLeft} onClick={onBack} />
            </Button>
            <h4 className={cx('header-title')}>{title}</h4>
        </header>
    );
};

export default Header;
