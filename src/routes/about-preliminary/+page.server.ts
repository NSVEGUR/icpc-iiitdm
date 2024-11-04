import type { Link } from '$lib/types';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async () => {
	const basic = [
		'You will receive an email from DOMjudge with the contest link and login details. You can follow the instructions to login and verify your account is working.',
		'If you do not login with the given credentials during the mock round, DOMjudge or the regional site will NOT be responsible for any login related issue during the contest.',
		'For the preliminary round, 3 logins (one each for a team member) will be given. Each team member can use their own device.'
	];

	const rules = [
		'The contest will be conducted online and it is a team event',
		'Only those teams whose registration on the ICPC Global site is successful will be able to participate',
		'Each team member can login from their individual account, submissions during the contest will count towards the team',
		'Do not post suggestions or tips publicly during a live contest',
		'Any issue related to Contest Platform (i.e. DOMjudge) cannot be challenged at any stage.',
		`Judge’s decision will be treated as final. No correspondence in this regard will be entertained`,
		`Regional sites will not be responsible for any internet or device failure during the online contest at the contestant’s site`,
		'Any type of plagiarism activities found during the contest may lead to disqualification of the team from all ICPC regionals. Posting source code online unintentionally will also be considered as cheating',
		'Final results will be published only after removing cheating teams',
		'Coach may be informed in case a team is found to be cheating. Head of institute may also be informed in case it is found a large number of teams from that institute have cheated'
	];

	const links: Link[] = [
		{
			type: 'link',
			title: 'Programming language details',
			href: 'https://discuss.codedrills.io/t/judge-programming-language-configuration/73'
		},
		{
			type: 'link',
			title: 'ICPC Scoring System',
			href: 'https://discuss.codedrills.io/t/icpc-scoring-system/771'
		},
		{
			type: 'link',
			title: 'Submission limits',
			href: 'https://discuss.codedrills.io/t/submission-limits/638'
		},
		{
			type: 'link',
			title: 'Announcements',
			href: 'https://discuss.codedrills.io/t/new-feature-announcements/197/2'
		},
		{
			type: 'link',
			title: 'ICPC data usage policy',
			href: 'https://discuss.codedrills.io/t/a-clarification-on-icpc-data-usage/734'
		},
		{
			type: 'link',
			title: 'Troubleshooting login issues',
			href: 'https://discuss.codedrills.io/t/troubleshooting-login-issues/759'
		}
	];

	return {
		basic,
		rules,
		links
	};
};
