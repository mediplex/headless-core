import { cn } from "@/utils/cn";
import Link from "next/link";

let rendered = 0;

const Home = () => {
  rendered++;
  console.log("rennder", rendered);
  return (
    <>
      <header className="flex h-screen w-full flex-col items-center justify-center gap-4 px-4 sm:max-w-lg">
        <hgroup className="flex flex-col items-center justify-center gap-4 px-4">
          <p className="rounded-full border px-4 py-2 text-center">
            Revolution in cancer treatment
          </p>

          <h1 className="text-center text-3xl font-bold tracking-tight">
            Nanoparticle-based Radiopharmaceutical
          </h1>
          <p className="text-center">
            We develop the world first universal nanoparticle platform that
            embeds radioactive materials to deliver targeted radiation to cancer
            cells.
          </p>
        </hgroup>
        <Link
          href="/learn-more"
          prefetch={true}
          className={cn(
            "mt-8 flex h-20 w-full items-center justify-center rounded-full text-lg font-bold",
            "bg-neutral-950 text-neutral-50",
            "dark:bg-neutral-50 dark:text-neutral-950",
            "transition-transform duration-300 ease-out hover:scale-[1.02] hover:drop-shadow-md",
          )}
        >
          Learn More
        </Link>
      </header>
    </>
  );
};

export default Home;
