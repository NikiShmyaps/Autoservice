import styles from './warranty.module.scss';
import classNames from 'classnames/bind';
import { Image } from '@components';
import { Card } from './Card';
import { advertising } from '@helpers';

const cx = classNames.bind(styles);

export const Warranty: React.FC = () => {
	return (
		<section className={cx('wrapper')}>
      <div className={cx('background')}>
        <Image
          wrapperClassName={cx('background__img')}
          src="/assets/warranty/background.jpg"
          width={1920}
          height={1080}
          alt="Background"
        />
      </div>
      <div className={cx('container')}>
        <h2 className={cx('title')}>Доверьте свой автомобиль именно нам</h2>
        <ul className={cx('list')}>
          {advertising.map((item, index) => (
            <li className={cx(`item`)} key={index}>
              <Card
                src={item.src}
                width={item.width}
                height={item.height}
                title={item.title}
                subtitle={item.subtitle}
                description={item.description}
              />
            </li>
          ))}
        </ul>
      </div>
    </section>
	);
};