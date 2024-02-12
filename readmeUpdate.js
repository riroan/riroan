import { writeFileSync } from 'node:fs';
import Parser from 'rss-parser';

/**
 * README.MD에 작성될 페이지 텍스트
 * @type {string}
 */

const getText = (posts) => {
  return `<img src="./images/header.png" />

<!-- ### 👯 <a href="https://drive.google.com/file/d/1NR2jyKIKGph178ernL4MCQEqvbN55MPc/view?usp=sharing">About Me</a> -->

### :books: My Skill Set
<a href="https://cplusplus.com/" target="_blank" rel="noreferrer"><img src="https://skillicons.dev/icons?i=cpp&theme=light" width="36" height="36" alt="CPP" /></a>
<a href="https://www.python.org/" target="_blank" rel="noreferrer"><img src="https://skillicons.dev/icons?i=python&theme=light" width="36" height="36" alt="Python" /></a>
<a href="https://developer.mozilla.org/" target="_blank" rel="noreferrer"><img src="https://skillicons.dev/icons?i=javascript&theme=light" width="36" height="36" alt="Javascript" /></a>
<a href="https://www.typescriptlang.org/" target="_blank" rel="noreferrer"><img src="https://skillicons.dev/icons?i=typescript&theme=light" width="36" height="36" alt="Typescript" /></a>
<a href="https://www.java.com/" target="_blank" rel="noreferrer"><img src="https://skillicons.dev/icons?i=java&theme=light" width="36" height="36" alt="Java" /></a>
<a href="https://fastapi.tiangolo.com/" target="_blank" rel="noreferrer"><img src="https://skillicons.dev/icons?i=fastapi&theme=light" width="36" height="36" alt="FastAPI" /></a>
<a href="https://www.djangoproject.com/" target="_blank" rel="noreferrer"><img src="https://skillicons.dev/icons?i=django&theme=light" width="36" height="36" alt="Django" /></a>
<a href="https://www.postgresql.org/" target="_blank" rel="noreferrer"><img src="https://skillicons.dev/icons?i=postgres&theme=light" width="36" height="36" alt="Postgres" /></a>
<a href="https://www.mysql.com/" target="_blank" rel="noreferrer"><img src="https://skillicons.dev/icons?i=mysql&theme=light" width="36" height="36" alt="MySQL" /></a>
<a href="https://git-scm.com/" target="_blank" rel="noreferrer"><img src="https://skillicons.dev/icons?i=git&theme=light" width="36" height="36" alt="Git" /></a>
<a href="https://aws.amazon.com/" target="_blank" rel="noreferrer"><img src="https://skillicons.dev/icons?i=aws&theme=light" width="36" height="36" alt="AWS" /></a>
<a href="https://www.docker.com/" target="_blank" rel="noreferrer"><img src="https://skillicons.dev/icons?i=docker&theme=light" width="36" height="36" alt="Docker" /></a>
<a href="https://kubernetes.io/" target="_blank" rel="noreferrer"><img src="https://skillicons.dev/icons?i=kubernetes&theme=light" width="36" height="36" alt="Kubernetes" /></a>

### :rainbow: Contact with me
<code><a href="https://www.linkedin.com/in/riroan" target="_blank" rel="noreferrer"><img src="https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white"/></a></code>
<code><a href="http://github.com/riroan" target="_blank" rel="noreferrer"><img src="https://img.shields.io/badge/Github-181717?style=for-the-badge&logo=github&logoColor=white"/></a></code>
<code><a href="http://riroan.tistory.com" target="_blank" rel="noreferrer"><img src="https://img.shields.io/badge/Blog-FE5949?style=for-the-badge&logo=Tistory&logoColor=white"/></a></code>
<code><a href="http://codeforces.com/profile/riroan" target="_blank" rel="noreferrer"><img src="https://img.shields.io/badge/Codeforces-1F8ACB?style=for-the-badge&logo=codeforces&logoColor=white"/></a></code>
<code><a href="mailto:riroan@naver.com" target="_blank" rel="noreferrer"><img src="https://img.shields.io/badge/Mail-EA4335?style=for-the-badge&logo=gmail&logoColor=white"/></a></code>
<code><a href="http://www.instagram.com/dding_gi_98" target="_blank" rel="noreferrer"><img src="https://img.shields.io/badge/Instagram-E4405F?style=for-the-badge&logo=instagram&logoColor=white"/></a></code>

### :page_with_curl: My latest posts

${posts}

### ⚡ etc

[![trophy](https://github-profile-trophy.vercel.app/?username=riroan&theme=onedark&title=MultiLanguage,Commits,Repository,PullRequest)](https://github.com/ryo-ma/github-profile-trophy)
[![solved.ac tier](http://mazassumnida.wtf/api/v2/generate_badge?boj=riroan)](https://solved.ac/riroan)
`
}

const parser = new Parser({
	headers: {
		Accept: 'application/rss+xml, application/xml, text/xml; q=0.1',
	},
});

(async () => {
	const feed = await parser.parseURL('https://riroan.tistory.com/rss')
  let text = ""
	for (let i = 0; i < 5; i++) {
		const { title, link } = feed.items[i]
		text += `<a href=${link}>${title}</a></br>`
	}

	writeFileSync('README.md', getText(text), 'utf8', e => {
		console.log(e)
	})

	console.log('업데이트 완료')
})()
