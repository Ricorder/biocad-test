import styles from './Footer.module.scss';
import React from 'react';
import Facebook from './fb-link.svg';
import Vkontakte from './vk-link.svg';
import Youtube from './yt-link.svg';
import Instagram from './inst-link.svg';
import Twitter from './tw-link.svg';
import Linkedin from './in-link.svg';
import Link from 'next/link';
import ShortLine from './short-line.svg';
import LongLine from './long-line.svg';
import { FooterProps } from './Footer.props';
import { format } from 'date-fns';

function Footer({ ...props }: FooterProps): JSX.Element {
	return (
		<footer {...props}>
			<LongLine />
			<div className={styles.block}>
				<div className={styles.social}>
					<a target="_blanc" href="https://www.facebook.com/BIOCAD">
						<Facebook />
					</a>
					<a target="_blanc" href="https://vk.com/biocad">
						<Vkontakte />
					</a>
					<a target="_blanc" href="https://www.youtube.com/user/BIOCADcompany">
						<Youtube />
					</a>
					<a target="_blanc" href="https://www.instagram.com/biocad/">
						<Instagram />
					</a>
					<a target="_blanc" href="https://twitter.com/biocad_ltd">
						<Twitter />
					</a>
					<a target="_blanc" href="https://www.linkedin.com/company/biocad">
						<Linkedin />
					</a>
				</div>
				<div className={styles.links}>
					<Link href="/docs/kurs">
						<a>Курс на выздоровление</a>
					</Link>
					<Link href="/docs/kommercheskay_politika">
						<a>Коммерческая политика</a>
					</Link>
					<Link href="/docs/cookie">
						<a>Использование файлов Cookie</a>
					</Link>
					<Link href="/docs/forstudents">
						<a>Студентам</a>
					</Link>
					<Link href="/docs/politika_kompanii">
						<a>Политика в отношении обработки ПДн</a>
					</Link>
					<Link href="/docs/anti-corruption_policy">
						<a>Антикоррупционная политика</a>
					</Link>
					<Link href="/docs/farmakonadzor">
						<a>Безопасность препаратов</a>
					</Link>
					<Link href="/docs/user-agreement">
						<a>Пользовательское соглашение</a>
					</Link>
					<Link href="/docs/politika-kachestva">
						<a>Политика по качеству</a>
					</Link>
				</div>
				<ShortLine className={styles.line} />
				<p className={styles.copyright}>
					Copyright © 2001-{format(new Date(), 'yyyy')}
				</p>
			</div>
		</footer>
	);
}

export default Footer;
