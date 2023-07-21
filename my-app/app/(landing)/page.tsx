import { Button } from "@/components/ui/button";
import { UserButton } from "@clerk/nextjs";
import Link from "next/link";

export default function LandingPage() {
  return (
    <main>
      <h3>Landing Page (Unprotected)</h3>
      <div className="flex gap-4 ml-4 mt-4">
        <div className="">
          <Link href="/sign-in">
            <Button>Login Friend...</Button>
          </Link>
        </div>
        <div className="">
          <Link href="/sign-in">
            <Button>Here, Register is</Button>
          </Link>
        </div>
        <div className="">
          <Link href="/dashboard">
            <Button>Dashboard!</Button>
          </Link>
        </div>
      </div>
    </main>
  );
}
