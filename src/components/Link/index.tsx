import React from 'react';
import styles from './link.module.scss';
import NextLink from 'next/link';
import { useRouter } from 'next/router';

type LinkComponentProps = {
	href: string;
	children?: JSX.Element | string;
	className?: string;
	target?: string;
	disabled?: boolean;
};

export const Link: React.FunctionComponent<LinkComponentProps> = React.memo(function LinkComponent({
	href,
	className,
	children,
	target = '_self',
	disabled,
}) {
	const router = useRouter();

	return (
		<NextLink href={href} >
			<a
				className={`${styles.default} ${className} ${disabled ? styles.disabled : ''}`}
				target={target}
			>
				{children}
			</a>
		</NextLink>
	);
});
