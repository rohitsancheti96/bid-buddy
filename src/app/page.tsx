import { auth } from "@/auth";
import { database } from "@/db/database";

export default async function HomePage() {
  const session = await auth();

  let allItems = await database?.query.items.findMany();

  if (!session) return null;
  const user = session.user;
  if (!user) return null;

  return (
    <main className="container mx-auto py-12 space-y-8">
      <h2 className="text-xl font-bold">Items for Sale</h2>
      <div className="grid sm:grid-cols-2 md:grid-cols-4 grid-cols-1 gap-4">
        {allItems?.map((item) => (
          <div key={item.id} className="flex flex-col border p-8 rounded-xl">
            <span>{item.name}</span>
            <span>Starting Price: &#8377;{item.startingPrice / 100}</span>
          </div>
        ))}
      </div>
    </main>
  );
}
