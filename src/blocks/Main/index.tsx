import styles from './main.module.scss';
import classNames from 'classnames/bind';
const cx = classNames.bind(styles);

import { Warranty } from './Warranty'

export const Main: React.FC = () => {

	return (
		<>
			<Warranty/>
		</>
	);
};
