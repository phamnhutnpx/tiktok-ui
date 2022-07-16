import React from 'react';
import Tippy from '@tippyjs/react/headless';
import classNames from 'classnames/bind';

import styles from './Menu.module.scss';
import { Wrapper as PropperWrapper } from '~/components/Propper';
import MenuItem from './MenuItem';

const Menu = ({ children, menuItems = [] }) => {
    const cx = classNames.bind(styles);
    const renderItem = () => {
        return menuItems.map((item, index) => <MenuItem key={index} data={item} />);
    };
    return (
        <Tippy
            delay={[0, 500]}
            interactive
            placement="bottom-end"
            render={(attrs) => (
                <div className={cx('menu-list')} tabIndex="-1" {...attrs}>
                    <PropperWrapper className={cx('menu-propper')}>{renderItem()}</PropperWrapper>
                </div>
            )}
        >
            {children}
        </Tippy>
    );
};

export default Menu;
