import Link from "next/link";
import { Home } from "lucide-react";

import Container from "@/components/common/Container";
import GoBackButton from "@/components/common/GoBackButton";

export default function NotFound() {
  return (
    <section className="relative flex min-h-[calc(100vh-80px)] items-center overflow-hidden py-20">

      {/* Background Glow */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute -left-24 top-20 h-80 w-80 rounded-full bg-primary/10 blur-3xl" />
        <div className="absolute right-0 bottom-0 h-96 w-96 rounded-full bg-primary/10 blur-3xl" />
      </div>

      <Container>

        <div className="mx-auto max-w-3xl text-center">

          <h1 className="font-heading text-8xl font-extrabold text-primary md:text-9xl">
            404
          </h1>

          <h2 className="mt-6 font-heading text-3xl font-bold text-heading md:text-5xl">
            Oops! Page Not Found
          </h2>

          <p className="mx-auto mt-6 max-w-2xl leading-8 text-text">
            The page you're looking for doesn't exist, may have been moved,
            or the URL might be incorrect. Let's get you back to somewhere
            useful.
          </p>

          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <Link
              href="/"
              className="inline-flex items-center justify-center rounded-xl bg-primary px-6 py-3 font-medium text-white transition hover:bg-primary-hover"
            >
              <Home className="mr-2" size={18} />
              Back to Home
            </Link>

            <GoBackButton />
          </div>

        </div>

      </Container>
    </section>
  );
}