import styles from './contacts.module.scss';
import classNames from 'classnames/bind';
const cx = classNames.bind(styles);
import { Image, YaMap, Link } from '@components';
// @ts-ignore
import { useIntersection } from '@/hooks';

export const Contacts: React.FC = () => {

  const place = useIntersection(200, cx('item', 'rise-left'));
	const time = useIntersection(400, cx('item', 'rise-left'));
	const phone = useIntersection(500, cx('item', 'rise-left'));

	return (
    <>
      
      <section className={cx('container')}>
        <div className={cx('wrapper')}>
          <div className={cx('map')}>
            <YaMap />
          </div>
          <div className={cx('contacts')}>
            <h2 className={cx('title')}>Наши контакты</h2>
            <ul className={cx('list')}>
              <li ref={place} className={cx('item')}>
                <Image
                  wrapperClassName={cx('image__local')}
                  src="/assets/header/place.png"
                  width="28"
                  height="28"
                  alt="place"
                />
                <span className={cx('item__text')}>Одинцовский городской округ, деревня Марфино, 18И</span>
              </li>
              <li ref={time} className={cx('item')}>
                <Image
                  wrapperClassName={cx('image__clock')}
                  src="/assets/header/clock.png"
                  width="27"
                  height="27"
                  alt="clock"
                />
                <span className={cx('item__text')}>Ежедневно 8:00-20:00 <br/> По предварительной записи</span>
              </li>
              <li ref={phone} className={cx('item')}>
                <Link href="tel:+79891816831">
                  <div className={cx('item-wrap')}>
                    <Image
                      wrapperClassName={cx('image__phone')}
                      src="/assets/header/call.png"
                      width="25"
                      height="25"
                      alt="phone"
                    />
                    <span className={cx('item__text')}>+7 (989) 181-68-31</span>
                  </div>
                </Link>
              </li>
            </ul>
          </div>
        </div>
        
      </section>
    </>
	);
};
