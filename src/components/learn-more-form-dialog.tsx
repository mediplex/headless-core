"use client";

import { cn } from "@/utils/cn";
import {
  Description,
  Dialog,
  DialogBackdrop,
  DialogPanel,
  DialogTitle,
} from "@headlessui/react";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { useCallback } from "react";

const LearnMoreFormDialog = () => {
  const router = useRouter();

  const searchParam = useSearchParams();

  // type searchParamsType = string[][] | Record<string, string> | string | URLSearchParams;
  console.log("searchParam", searchParam);

  const getToogleLink = () => {
    const params = new URLSearchParams(
      Object.entries(searchParam).map(([key, value]) => [
        key,
        Array.isArray(value) ? value.join(",") : value || "",
      ]),
    );

    if (!searchParam.get("form")) {
      params.append("form", "learn-more");
      return `?${params.toString()}`;
    }

    params.delete("form");
    params.delete("step");
    return `?${params.toString()}`;
  };

  const isOpen = searchParam.get("form") === "learn-more";

  const toogleLink = getToogleLink();

  const handleClose = useCallback(() => {
    router.replace(toogleLink);
  }, [router, toogleLink]);

  return (
    <>
      <Link
        href={toogleLink}
        className={cn(
          "mt-8 flex h-20 w-full items-center justify-center rounded-full text-lg font-bold",
          "bg-neutral-950 text-neutral-50",
          "dark:bg-neutral-50 dark:text-neutral-950",
          "shadow-lg transition-transform duration-300 ease-out hover:scale-[1.02] hover:shadow-2xl",
        )}
      >
        Learn More
      </Link>
      <Dialog
        open={isOpen}
        as="div"
        transition
        className={cn(
          "pointer-events-none fixed inset-0 z-10 flex items-center justify-center transition duration-300 ease-out data-[closed]:opacity-0",
        )}
        onClose={handleClose}
      >
        <DialogBackdrop
          className={cn(
            "fixed inset-0 z-20 backdrop-blur-sm",
            "bg-neutral-950/30",
            "dark:bg-neutral-50/30",
          )}
        />

        {/* Full-screen container to center the panel */}

        {/* The actual dialog panel  */}
        <DialogPanel
          className={cn(
            "z-50 max-w-lg rounded-3xl p-8 shadow-xl",
            "bg-neutral-50 text-neutral-950",
            "dark:bg-neutral-950 dark:text-neutral-50",
          )}
        >
          <DialogTitle className="font-bold">Step 1</DialogTitle>
          <Description>
            This will permanently deactivate your account
          </Description>
          <p>
            Are you sure you want to deactivate your account? All of your data
            will be permanently removed.
          </p>
          <div className="flex gap-4">
            <Link href={toogleLink} className="btn btn-amber h-20 w-full">
              Cancel
            </Link>
          </div>
        </DialogPanel>
      </Dialog>
    </>
  );
};

export default LearnMoreFormDialog;
export { LearnMoreFormDialog };
