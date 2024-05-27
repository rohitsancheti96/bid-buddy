import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { createItemAction } from "./actions";

export default async function HomePage() {
  return (
    <main className="container mx-auto py-12 space-y-8">
      <h1 className="text-4xl font-bold">Post an Item</h1>
      <form
        className="flex flex-col border p-8 rounded-xl space-y-4 max-w-lg"
        action={createItemAction}
      >
        <Input
          className="max-w-lg"
          name="name"
          placeholder="Name your item"
          required
        />
        <Input
          className="max-w-lg"
          name="startingPrice"
          placeholder="Starting price for your item"
          type="number"
          min="1"
          step="0.01"
          required
        />
        <Button className="self-end" type="submit">
          Post Item
        </Button>
      </form>
    </main>
  );
}
