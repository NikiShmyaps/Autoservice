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
              <div className={cx('item-wrap')}>
                <div className={cx('background__image')}>
                   <Image
                  wrapperClassName={cx('img')}
                  src= {src}
                  width={width}
                  height={height}
                  alt="phone"
                />
                <h2 className={cx('title')}>{title}</h2>
                </div> 
                <div className={cx('card__container')}>
                  <span className={cx('subtitle')}>{subtitle}</span>
                  <p className={cx('description')}>{description}</p>
                </div>
              </div>
	);
};

