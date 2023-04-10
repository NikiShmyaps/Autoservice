import styles from './advantages.module.scss';
import classNames from 'classnames/bind';
import { Card } from './Card';
import { advantages } from '@helpers';

const cx = classNames.bind(styles);

export const Advantages: React.FC = () => {
	return (
		<section className={cx('wrapper')}>
      <div className={cx('container')}>
        <ul className={cx('list')}>
        {advantages.map((item) => (
          <li className={cx('item')} key={item.src}>
            <Card 
              src={item.src}
              title={item.title}
            />
          </li>
        ))}
        </ul>
      </div>
    </section>
    
	);
};