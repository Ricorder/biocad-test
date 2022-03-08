import styles from './Nav.module.scss';
import React from 'react';
import Link from 'next/link';
import Logo from './logo.svg';
import Lang from './global_link.svg';
import Line from './line.svg';
import { NavtProps } from './Nav.props';

function Nav({ ...props }: NavtProps): JSX.Element {
	return (
		<nav {...props}>
			<div className={styles.nav}>
				<Link href="/">
					<a>
						<Logo />
					</a>
				</Link>
				<div className={styles.menu}>
					<Link href="/we">
						<a>О компании</a>
					</Link>
					<Link href="/products">
						<a>Продукты</a>
					</Link>
					<Link href="/science">
						<a>Наука</a>
					</Link>
					<Link href="/production">
						<a>Производство</a>
					</Link>
					<Link href="/career">
						<a>Карьера</a>
					</Link>
					<Link href="/social">
						<a>Устойчивое развитие</a>
					</Link>
					<Link href="/news">
						<a>Новости</a>
					</Link>
					<Link href="/contacts">
						<a>Контакты</a>
					</Link>
					<Link href="/partnership">
						<a>Партнёрство</a>
					</Link>
				</div>
				<a target="_blank" href="https://biocadglobal.com/"><Lang /></a>
			</div>
			<Line />
		</nav>
	);
}

export default Nav;
