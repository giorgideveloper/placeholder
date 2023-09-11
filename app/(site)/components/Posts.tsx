import GetPost from '@/api/post';

export async function Posts() {
	const post = await GetPost();
	return (
		<div>
			<h1>Posts</h1>
			<div>{post}</div>
		</div>
	);
}
