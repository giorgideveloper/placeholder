import { PostPage } from '@/interfaces/post.interface';
import { API } from '../api';
import axios from 'axios';
// async function getMenu() {
// 	const res = await fetch(API.allPosts.getPost, {
// 		method: 'GET',
// 		headers: {
// 			'Content-Type': 'application/json',
// 		},
// 	});
// 	return res.json;
// }

export default async function Home() {
	const data = await axios.get<PostPage[]>(API.allPosts.getPost);

	console.log(data);
	return (
		<main className='flex min-h-screen flex-col items-center justify-center p-24'>
			<h1 className='text-4xl font-bold text-center pb-7'>Hello Next.js!</h1>
			<button
				type='button'
				className='focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800 text-lg text-bold '
			>
				პოსტები
			</button>
		</main>
	);
}
function getMenu() {
	throw new Error('Function not implemented.');
}
