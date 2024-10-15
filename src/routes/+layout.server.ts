import type { LayoutServerLoad } from './$types';
import type { Link } from '$lib/types';

export const load: LayoutServerLoad = async ({ url }) => {
	const hyperlinks: Link[] = [
		{
			type: 'link',
			href: '/',
			title: 'Home'
		},
		//{
		//	type: 'link',
		//	href: '/onsite-rules.pdf',
		//	title: 'Onsite Contest Rules'
		//},//
		{
			type: 'link',
			href: '/about-preliminary',
			title: 'Preliminary Contest'
		},
		//{
		//	type: 'link',
		//	href: '/results',
		//	title: 'Results'
		//},
		{
			type: 'link',
			href: '/important-dates',
			title: 'Important Dates'
		},
		{
			type: 'link',
			href: '/registration',
			title: 'Registration'
		},
		{
			type: 'link',
			href: '/people',
			title: 'People'
		},
		{
			type: 'link',
			href: '/contact-us',
			title: 'Contact Us'
		}
	];
	return {
		url: url.pathname,
		hyperlinks
	};
};
