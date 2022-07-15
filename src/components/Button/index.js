import React from 'react';
import classNames from 'classnames/bind';
import styles from './Button.module.scss';
import { Link } from 'react-router-dom';

const Button = ({
    to,
    href,
    primary = false,
    outline = false,
    outlineSecondary = false,
    noneStyle = false,
    disabled = false,
    rounded = false,
    small = false,
    large = false,
    className,
    children,
    onClick,
    ...passProps
}) => {
    const cx = classNames.bind(styles);
    const props = {
        onClick,
        ...passProps,
    };
    let Comp = 'button';
    if (to) {
        props.to = to;
        Comp = Link;
    } else if (href) {
        props.href = href;
        Comp = 'a';
    }
    // remove event listener when button is disabled
    if (disabled) {
        Object.keys(props).forEach((key) => {
            if (key.startsWith('on') && typeof props[key] === 'function') {
                delete props[key];
            }
        });
    }
    const classes = cx('wrapper', {
        [className]: className,
        primary,
        outline,
        outlineSecondary,
        noneStyle,
        disabled,
        rounded,
        small,
        large,
    });
    return (
        <Comp className={classes} {...props}>
            <span>{children}</span>
        </Comp>
    );
};

export default Button;
