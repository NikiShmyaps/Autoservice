import styles from './header.module.scss';
import classNames from 'classnames/bind';
const cx = classNames.bind(styles);
import { Image, Link } from '@components';

export const Header: React.FC = () => {
  return (
    <header className={cx('header')}>
      <div className={cx('container')}>

      </div>
    </header>
  )
}