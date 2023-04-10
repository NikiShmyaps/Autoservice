import styles from './services.module.scss';
import classNames from 'classnames/bind';
import { Card } from './Card';
import { services } from '@helpers';

const cx = classNames.bind(styles);

export const Services: React.FC = () => {
	return (
		<section className={cx('container')}>
      <h2 className={cx('title')}>Услуги</h2>
      <ul className={cx('list')}>
        {services.map((item) => (
          <li className={cx('item')} key={item.src}>
            <Card 
              src={item.src}
              title={item.title}
            />
          </li>
        ))}
      </ul>
    </section>
	);
};