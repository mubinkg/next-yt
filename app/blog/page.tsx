import { Suspense } from "react";
import Post from "../components/Post";
import User from "../components/User";

export default function BlogPage() {
    return (
        <div>
            <h1 className="text-2xl">This is blog page!</h1>
            <Suspense fallback={<p>Loading post content....</p>}>
                <Post />
            </Suspense>
            <Suspense fallback={<p>Loading user content....</p>}>
                <User />
            </Suspense>
        </div>
    )
}