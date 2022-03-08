import styles from './Layout.module.css';
import React, { FunctionComponent } from 'react';
import Footer from './Footer/Footer';
import Nav from './Nav/Nav';
import { AppContextProvider, IAppContext } from '../context/app.context';
import { LayoutProps } from './Layout.props';

function Layout({ children }: LayoutProps): JSX.Element {
	return (
		<div className={styles.wrapper}>
			<Nav className={styles.nav} />
			<>
				{children}
			</>
			<Footer className={styles.footer} />
		</div>
	);
}

export default Layout;

export const withLayout = <T extends Record<string, unknown> & IAppContext>(Component: FunctionComponent<T>) => {
	return function withLayoutComponent(props: T): JSX.Element {
		return (
			<AppContextProvider products={props.products}>
				<Layout>
					<Component {...props} />
				</Layout>
			</AppContextProvider>
		);
	};
};
