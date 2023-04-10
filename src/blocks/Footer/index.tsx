import { FC, useState, useEffect } from 'react';
import styles from './footer.module.scss';
import classNames from 'classnames/bind';
const cx = classNames.bind(styles);
import { Contacts } from './Contacts';
import { Image } from '@components';

export const Footer: FC = () => {

	return (
    <div className={cx('grayLight')} id='contacts'>
      <Contacts />
    </div>
	);
};
