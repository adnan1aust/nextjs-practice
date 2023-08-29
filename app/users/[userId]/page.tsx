import getUser from "@/lib/getUser";
import getUserPosts from "@/lib/getUserPosts";
import { User } from "@/types/user";
import { Post } from "@/types/post";
import { Suspense } from "react";
import UserPosts from "./components/UserPosts";
import type { Metadata } from "next";

type Params = {
    params: {
        userId: string;
    };
};

export async function generateMetadata({
    params: { userId },
}: Params): Promise<Metadata> {
    const userData: Promise<User> = getUser(userId);
    const user:User = await userData;

    return{
        title: user.name,
        description: `page for ${user.name}`
    }
}

export default async function UserPage({ params: { userId } }: Params) {
    const userData: Promise<User> = getUser(userId);
    const userPostsData: Promise<Post[]> = getUserPosts(userId);
    const [user, posts] = await Promise.all([userData, userPostsData]);
    return (
        <>
            <h2>{user.name}</h2>
            <br />
            <Suspense fallback={<h2>Loading...</h2>}>
                <UserPosts posts={posts} />
            </Suspense>
        </>
    );
}
