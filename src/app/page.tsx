import { LearnMoreFormDialog } from "@/components";
import Link from "next/link";

const Home: React.FC<{
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}> = async ({ searchParams }) => {
  const sP = await searchParams;
  const { form } = sP;

  // type searchParamsType = string[][] | Record<string, string> | string | URLSearchParams;
  console.log("sP", sP);

  const getDialogToogleLink = () => {
    const params = new URLSearchParams(
      Object.entries(sP).map(([key, value]) => [
        key,
        Array.isArray(value) ? value.join(",") : value || "",
      ]),
    );

    if (!form) {
      params.append("form", "learn-more");
      params.append("step", "1");
      return `?${params.toString()}`;
    }

    params.delete("form");
    params.delete("step");
    return `?${params.toString()}`;
  };

  return (
    <main className="flex flex-col items-center">
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
          href={getDialogToogleLink()}
          className="mt-8 flex h-20 w-full items-center justify-center rounded-full bg-amber-500 text-lg font-bold dark:bg-amber-700"
        >
          Learn More
        </Link>
      </header>
      <LearnMoreFormDialog />
    </main>
  );
};

export default Home;
