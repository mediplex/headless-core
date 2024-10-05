import { DarkModeSwitch, LearnMoreFormDialog } from "@/components";
import { cn } from "@/utils/cn";
import Link from "next/link";

let rendered = 0;

const Home: React.FC<{
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}> = async ({ searchParams: searchParamsPromise }) => {
  const searchParam = await searchParamsPromise;

  // type searchParamsType = string[][] | Record<string, string> | string | URLSearchParams;
  console.log("searchParam", searchParam);

  const getDialogToogleLink = () => {
    const params = new URLSearchParams(
      Object.entries(searchParam).map(([key, value]) => [
        key,
        Array.isArray(value) ? value.join(",") : value || "",
      ]),
    );

    if (!searchParam?.form) {
      params.append("form", "learn-more");
      return `?${params.toString()}`;
    }

    params.delete("form");
    params.delete("step");
    return `?${params.toString()}`;
  };

  const isLearnMoreFormDialogOpen = searchParam?.form === "learn-more";

  const dialogToggleLink = getDialogToogleLink();

  rendered++;
  console.log("rennder", rendered);
  return (
    <>
      <main
        className={cn(
          "flex flex-col items-center",
          "bg-sky-50 text-sky-950",
          "dark:bg-sky-950 dark:text-sky-50",
        )}
      >
        <nav className="flex h-14 w-full items-center justify-between px-4">
          <DarkModeSwitch />
        </nav>
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
              embeds radioactive materials to deliver targeted radiation to
              cancer cells.
            </p>
          </hgroup>
          <Link
            href={dialogToggleLink}
            className={cn(
              "mt-8 flex h-20 w-full items-center justify-center rounded-full text-lg font-bold",
              "bg-neutral-950 text-neutral-50",
              "dark:bg-neutral-50 dark:text-neutral-950",
              "shadow-lg hover:shadow-2xl hover:scale-[1.02] transition-transform ease-out duration-300",
            )}
          >
            Learn More
          </Link>
        </header>
        <LearnMoreFormDialog
          isOpen={isLearnMoreFormDialogOpen}
          toogleLink={dialogToggleLink}
        />
      </main>
    </>
  );
};

export default Home;
