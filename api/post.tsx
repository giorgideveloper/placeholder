import { API } from '@/app/api';
import { PostPage } from '@/interfaces/post.interface';

export default async function GetPost(alias: string): Promise<PostPage | null> {
	const res = await fetch(API.allPosts.getPost, {
		method: 'POST',
		body: JSON.stringify({
			alias,
		}),
		headers: new Headers({ 'content-type': 'application/json' }),
	});
	return res.json();
}
