import { h } from 'preact';
import { Link } from 'preact-router/match';
import style from './style.css';

const Header = () => (
	<header class={style.header}>
		<Link href="/">
			<div class={style.logo}></div>
		</Link>
	</header>
);

export default Header;
