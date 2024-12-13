import Link from 'next/link';

export default function NotFound() {
  return (
      <main>
      <div className="flex flex-col bg-white dark:bg-gray-800 dark:text-white m-5 mt-10 rounded-[18px] items-start p-5">
      <h2>Not Found</h2>
      <p>Could not find requested resource</p>
      <Link href="/">Return Home</Link>
      </div>
      </main>
  );
}
