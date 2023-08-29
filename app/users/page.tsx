import type { Metadata } from "next";
import getAllUsers from "@/lib/getAllUsers";
import { User } from "@/types/user";
import Link from "next/link";

export const metadata: Metadata = {
    title: "Users",
};

export default async function UsersPage() {
    const usersData: Promise<User[]> = getAllUsers();
    const users = await usersData;
    return (
        <section>
            <h2>
                <Link href="/">Back To Home</Link>
            </h2>
            <br />
            {users.map((user) => (
                <>
                    <p key={user.id}>
                        <Link href={`/users/${user.id}`}>{user.name}</Link>
                    </p>
                </>
            ))}
        </section>
    );
}
