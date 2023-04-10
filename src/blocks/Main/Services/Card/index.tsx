import styles from './card.module.scss';
import classNames from 'classnames/bind';
import { Image, Link } from '@components';

const cx = classNames.bind(styles);

interface CardProps {
	src: string;
	title: string;
}

export const Card: React.FC <CardProps> = ({src, title}) => {
  
	return (
    <Link className={cx('container')} href="#" disabled>
      <div className={cx('wrap')}>
        <Image
          wrapperClassName={cx('background')}
          src={`/assets/services/${src}.jpg`}
          width={"360px"}
          height={"440px"}
          alt="img"
        />
        <div className={cx('main')}>
          <h2 className={cx('title')}>{title}</h2>
          <div className={cx('button')}>Подробнее</div>
        </div>
      </div>
    </Link>
	);
};
