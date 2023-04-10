import styles from './header.module.scss';
import classNames from 'classnames/bind';
const cx = classNames.bind(styles);
import { Image, Link } from '@components';

export const Header: React.FC = () => {
  return (
    <header className={cx('header')}>
      <div className={cx('container')}>
        <div>
          <Image
            wrapperClassName={cx('background__img')}
            src="/assets/logo.png"
            width={64}
            height={64}
            alt="logo"
          />
        </div>
        <ul className={cx('list')}>
          <li className={cx('item')}>
            <Link className={cx('link')} href="tel:+79891816831">
              <div className={cx('item-wrap')}>
                <Image
                  wrapperClassName={cx('image__icon')}
                  src="/assets/header/call.png"
                  width="25"
                  height="25"
                  alt="phone"
                />
                <span className={cx('item__text')}>+7 (989) 181-68-31</span>
              </div>
            </Link>
          </li>
          <li className={cx('item')}>
            <a href={'#contacts'}>
              <div className={cx('item-wrap')}>
                <Image
                  wrapperClassName={cx('image__icon')}
                  src="/assets/header/place.png"
                  width="25"
                  height="25"
                  alt="place"
                />
                <span className={cx('item__text')}>Одинцовский округ, Марфино, 18И</span>
              </div>
            </a>
          </li>
        </ul>
      </div>
    </header>
  )
}