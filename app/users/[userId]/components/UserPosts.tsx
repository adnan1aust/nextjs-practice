import { Post } from "@/types/post";

type Props = {
    posts: Post[];
};

export default function UserPosts(props: Props) {
    return props.posts.map((post) => (
        <article key={post.id}>
            <h2>{post.title}</h2>
            <p>{post.body}</p>
            <br />
        </article>
    ));
}
