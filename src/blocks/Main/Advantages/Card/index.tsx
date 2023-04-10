import styles from './card.module.scss';
import classNames from 'classnames/bind';
import { Image } from '@components';

const cx = classNames.bind(styles);

interface CardProps {
	src: string;
	title: string;
}

export const Card: React.FC <CardProps> = ({src, title}) => {
  
	return (
    <div className={cx('container')}>
      <div className={cx('image')}>
        <Image
          wrapperClassName={cx('img')}
          src= {`/assets/advantages/${src}.png`}
          width="31"
          height="31"
          alt="img"
        />
      </div>
      <p className={cx('title')}>{title}</p>
    </div>
	);
};

