import { API } from '@/app/api';
import { PostPage } from '@/interfaces/post.interface';

export default async function GetPost(): Promise<PostPage | null> {
	const res = await fetch(API.allPosts.getPost, {
		method: 'GET',
		headers: new Headers({ 'content-type': 'application/json' }),
	});
	return res.json();
}
