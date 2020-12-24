import React from 'react'
import './Badge.scss'
import classNames from 'classnames'
import DB from '../../assets/db.json'

const Badge = ({ color, onClick, className }) => (
    <i
        onClick={onClick}
        className={classNames('badge', {[`badge--${color}`]: color}, className)}
    />
);
export default Badge;