import { UserButton } from "@clerk/nextjs";

export default function DashboardPage() {
  return (
    <main>
      <div className="flex justify-between p-8 bg-red-600 w-[380px] rounded-b-lg">
        <h3 className="text-2xl text-zinc-200 drop-shadow-md">
          UTH - Stamatakis S.
        </h3>
        <UserButton afterSignOutUrl="/" />
      </div>
    </main>
  );
}
