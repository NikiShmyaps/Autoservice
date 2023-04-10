import styles from './tire.module.scss';
import classNames from 'classnames/bind';
import { Image } from '@components';

const cx = classNames.bind(styles);

export const Tire: React.FC = () => {
	return (
		<section className={cx('wrapper')}>
      <div className={cx('background')}>
        <Image
          wrapperClassName={cx('background__img')}
          src="/assets/tire/background.jpg"
          width={1920}
          height={1080}
          alt="Background"
        />
      </div>
      <div className={cx('container')}>
        <h1 className={cx('title')}>Готовь свой автомобиль к зиме вместе с нашим профессиональным шиномонтажем!</h1>
        <p className={cx('subtitle')}>Не откладывайте замену шин на потом - обратитесь к нам сегодня, чтобы обеспечить безопасность и комфорт на дороге в течение всего летнего сезона!</p>
      </div> 
    </section>
	);
};