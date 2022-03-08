import styles from './Header.module.css';
import React from 'react';
import HeadLeftBox from '../../components/HeadLeftBox/HeadLeftBox';
import HeadRightBox from '../../components/HeadRightBox/HeadRightBox';
import { HeaderProps } from './Header.props';
import Groupselect from '../../components/Groupselect/Groupselect';
import Descriptions from '../../components/Descriptions/Descriptions';

function Header({ ...props }: HeaderProps): JSX.Element {
	return (
		<header {...props} className={styles.head}>
			<div className={styles.header}>
				<HeadLeftBox />
				<HeadRightBox />
			</div>
			<Groupselect />
			<Descriptions />
		</header>
	);
}

export default Header;
