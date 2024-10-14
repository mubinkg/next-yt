import Link from "next/link";

export default function Home() {
  return (
    <div>
      <h2 className="text-4xl mb-10">Home page</h2>
      <Link href='/blog' className="bg-green-300 px-5 py-2 rounded-full">Blog</Link>
    </div>
  );
}
