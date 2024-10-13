import Link from "next/link";

export default function BlogPage(){
    return (
        <div>
            <h1 className="text-2xl my-4">This is blog page</h1>
            <button>
                <Link href='/blog/blog-one'>Blog One</Link>
            </button>
        </div>
    )
}