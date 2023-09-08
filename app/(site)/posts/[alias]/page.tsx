export default function Page({
	params,
}: {
	params: { alias: string };
}): JSX.Element {
	return (
		<main className='flex min-h-screen flex-col items-center justify-center p-24'>
			<h1 className='text-4xl font-bold text-center pb-7'>
				Posts {params.alias}
			</h1>
		</main>
	);
}
