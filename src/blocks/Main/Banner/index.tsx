import styles from './banner.module.scss';
import classNames from 'classnames/bind';
import { Image } from '@components';

const cx = classNames.bind(styles);

export const Banner: React.FC = () => {
	return (
		<section className={cx('wrapper')}>
      <div className={cx('background')}>
        <Image
          wrapperClassName={cx('background__img')}
          src="/assets/banner/background.jpg"
          width={1920}
          height={1080}
          alt="Background"
        />
      </div>
      <div className={cx('container')}>
        <h1 className={cx('title')}>Профессиональная диагностика<br/>
          <span className={cx('title-accent')}>и ремонт любых автомобилей<br/>включая <span className={cx('title-accent-name')}>Hyundai Porter!</span></span>
        </h1>
        <p className={cx('subtitle')}>Оставьте свой автомобиль у нас, и мы вернем его вам в лучшем состоянии</p>
      </div> 
    </section>
	);
};