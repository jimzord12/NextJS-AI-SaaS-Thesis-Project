import { UserButton } from "@clerk/nextjs";

export default function DashboardPage() {
  return (
    <main>
      <div className="flex justify-between p-8 background-color-red">
        <h3>Dashboard Page (Protected Route)</h3>
        <UserButton afterSignOutUrl="/" />
      </div>
    </main>
  );
}
