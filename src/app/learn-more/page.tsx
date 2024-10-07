"use client";
import { cn } from "@/utils/cn";
import Form from "next/form";
import { useActionState, useId } from "react";
import learnMoreFormAction from "@/actions/learn-more-form-action";
import {
  Button,
  Field,
  Fieldset,
  Input,
  Label,
  Legend,
} from "@headlessui/react";
import Link from "next/link";
import { ChevronLeft, Mail, User } from "lucide-react";

const LearnMore = () => {
  const [, submitAction, isPending] = useActionState(
    learnMoreFormAction,
    undefined,
  );
  const formId = useId();
  const nameId = useId();
  const emailId = useId();
  return (
    <div className={cn("mt-14 w-full md:max-w-lg")}>
      <nav className={cn("flex h-14 w-full items-center justify-between")}>
        <Link
          href="/"
          className={cn(
            "flex h-10 items-center px-2 py-2",
            "text-medium font-medium uppercase -tracking-tighter",
            "text-neutral-950",
            "dark:text-neutral-50",
            "transition-transform duration-300 ease-out hover:scale-[1.02] hover:shadow-2xl",
          )}
        >
          <ChevronLeft />
          <span className="">Back</span>
        </Link>
      </nav>
      <section
        className={cn(
          "mx-4 rounded-3xl px-8 py-10 shadow",
          "bg-white",
          "dark:bg-neutral-800",
        )}
      >
        <h1 className={cn("mb-8 text-center text-3xl font-semibold")}>
          Get all the info in your inbox
        </h1>

        <Form
          action={submitAction}
          className={cn("flex flex-col gap-8")}
          id={formId}
        >
          <Fieldset className={cn("flex flex-col gap-4")}>
            <Legend
              className={cn(
                "mb-2 border-b border-neutral-500 text-lg font-medium",
              )}
            >
              Step 1
            </Legend>
            <Field className={cn("grid grid-rows-[auto_auto] gap-1")}>
              <Label
                htmlFor={nameId}
                className={cn(
                  "col-start-1 col-end-2 row-start-1 row-end-2",
                  "",
                  "place-self-end justify-self-start",
                )}
              >
                What is your name?
              </Label>
              <Input
                placeholder={"John Doe"}
                className={cn(
                  "col-start-1 col-end-2 row-start-2 row-end-3 h-10 rounded-lg shadow",
                  "grid",
                  "pl-10",
                  "bg-neutral-100",
                )}
                name="name"
              />
              <User
                className={cn(
                  "col-start-1 col-end-2 row-start-2 row-end-3 place-self-center justify-self-start",
                  "size-6 text-neutral-500",
                  "ml-2",
                )}
              />
            </Field>
            <Field className={cn("grid grid-rows-[auto_auto] gap-1")}>
              <Label
                htmlFor={emailId}
                className={cn(
                  "col-start-1 col-end-2 row-start-1 row-end-2",
                  "",
                  "place-self-end justify-self-start",
                )}
              >
                Where do you want to receive updates?
              </Label>
              <Input
                id={emailId}
                name="email"
                placeholder={"john.doe@example.com"}
                className={cn(
                  "col-start-1 col-end-2 row-start-2 row-end-3 h-12 rounded-lg shadow",
                  "grid",
                  "pl-10",
                  "bg-neutral-100",
                )}
              />
              <Mail
                className={cn(
                  "col-start-1 col-end-2 row-start-2 row-end-3 place-self-center justify-self-start",
                  "size-6 text-neutral-500",
                  "ml-2",
                )}
              />
            </Field>
          </Fieldset>
        </Form>

        <Button
          type="button"
          disabled={isPending}
          form={formId}
          className={cn(
            "mt-8 flex h-20 w-full items-center justify-center rounded-full text-lg font-bold",
            "bg-neutral-950 text-neutral-50",
            "dark:bg-neutral-50 dark:text-neutral-950",
            "shadow-lg transition-transform duration-300 ease-out hover:scale-[1.02] hover:shadow-2xl",
          )}
        >
          Submit
        </Button>
      </section>
    </div>
  );
};

export default LearnMore;
