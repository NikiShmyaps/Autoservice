import styles from './warranty.module.scss';
import classNames from 'classnames/bind';
import { Link, Image } from '@components';

const cx = classNames.bind(styles);

export const Warranty: React.FC = () => {
  
	return (
		<section className={cx('container')}>
      <ul className={cx('list')}>
          <li className={cx('item')}>
            <Link href="tel:+79105357486">
              <div className={cx('item-wrap')}>
                <Image
                  wrapperClassName={cx('image__icon')}
                  src="/assets/header/phone.png"
                  width="25"
                  height="25"
                  alt="phone"
                />
                <span className={cx('item__text')}>+7 (910) 535-74-86</span>
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
                  <span className={cx('item__text')}>г. Тверь, ул. Луначарского, д. 32</span>
              </div>
            </a>
          </li>
        </ul>
    </section>
	);
};
