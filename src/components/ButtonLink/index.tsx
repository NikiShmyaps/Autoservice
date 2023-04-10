import React from 'react';
import styles from './buttonLink.module.scss';
import classNames from 'classnames/bind';
import { Link } from '../Link';

type ButtonLinkComponentProps = {
	href: string;
	disabled?: boolean;
	children?: JSX.Element | string;
	className?: string;
	target?: string;
};

const cx = classNames.bind(styles);

export const ButtonLink: React.FunctionComponent<ButtonLinkComponentProps> = React.memo(
	function ButtonLinkComponent({
		href,
		children,
		disabled = false,
		className,
		target = '_self',
	}) {

		return (
			<Link
				href={href}
				disabled={disabled}
				target={target}
			>
				<span
					className={cx('button', {
						disabled,
						[`${className}`]: className,
					})}
				>
					{children}
				</span>
			</Link>
		);
	},
);
