import styles from './card.module.scss';
import classNames from 'classnames/bind';
import { Link, Image } from '@components';

const cx = classNames.bind(styles);

interface CardProps {
	src: string;
	title: string;
	subtitle: string;
	description: string;
	width: string;
	height: string;
}

export const Card: React.FC <CardProps> = ({src, description, subtitle, title, width, height}) => {
  
	return (
    <div className={cx('wrap')}>
      <Image
        wrapperClassName={cx('background')}
        src= {src}
        width={width}
        height={height}
        alt="img"
      />
      <h2 className={cx('title')}>{title}</h2>
      <div className={cx('main')}>
        <p className={cx('main__title')}>{subtitle}</p>
        <p className={cx('main__subtitle')}>{description}</p>
      </div>
    </div>
	);
};

