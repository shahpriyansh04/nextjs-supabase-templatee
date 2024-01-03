import { useAuth } from "@/lib/auth";

export default function Home() {
  const { user } = useAuth();
  return (
    <h1 className="h-screen flex items-center justify-center text-5xl font-bold">
      Nextjs Supabase Template
    </h1>
  );
}
