import styles from './main.module.scss';
import classNames from 'classnames/bind';
const cx = classNames.bind(styles);

import { Banner } from './Banner';
import { Services } from './Services';
import { Advantages } from './Advantages';
import { Warranty } from './Warranty';
import { Tire } from './Tire';

export const Main: React.FC = () => {

	return (
		<>
			<Banner/>
			<Advantages/>
			<Tire/>
			<div className={cx('block', 'white')}>
				<Services/>
			</div>
			<Warranty/>
			
		</>
	);
};
