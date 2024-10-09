"use client";
import { cn } from "@/utils/cn";
import Form from "next/form";
import { useActionState, useId } from "react";
import learnMoreFormAction from "@/actions/learn-more-form-action";
import {
  Button,
  Checkbox,
  Description,
  Field,
  Fieldset,
  Input,
  Label,
  Legend,
} from "@headlessui/react";
import Link from "next/link";
import { Check, ChevronLeft, Mail, Stethoscope, User } from "lucide-react";

const LearnMore = () => {
  const [, submitAction, isPending] = useActionState(
    learnMoreFormAction,
    undefined,
  );
  const formId = useId();
  const nameId = useId();
  const emailId = useId();
  const qualificationId = useId();
  return (
    <div className={cn("mt-14 w-full md:max-w-lg")}>
      <nav
        className={cn(
          "flex items-center justify-between",
          "mx-4 h-14 w-full px-4",
        )}
      >
        <Link
          href="/"
          className={cn(
            "flex items-center",
            "text-medium font-medium uppercase -tracking-tighter",
            "text-primary-950",
            "transition-all duration-300 ease-out hover:underline",
          )}
        >
          <ChevronLeft className={cn("size-6")} />
          <span className="">Back</span>
        </Link>
      </nav>
      <section
        className={cn(
          "mx-4 rounded-3xl px-8 py-10 shadow",
          "bg-white",
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
                "mb-2 border-b border-primary-500 text-lg font-medium",
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
                  "bg-primary-100",
                )}
                name="name"
              />
              <User
                className={cn(
                  "col-start-1 col-end-2 row-start-2 row-end-3 place-self-center justify-self-start",
                  "size-6 text-primary-500",
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
                  "bg-primary-100",
                )}
              />
              <Mail
                className={cn(
                  "col-start-1 col-end-2 row-start-2 row-end-3 place-self-center justify-self-start",
                  "size-6 text-primary-500",
                  "ml-2",
                )}
              />
            </Field>
          </Fieldset>

          <Fieldset className={cn("flex flex-col gap-4")}>
            <Legend
              className={cn(
                "mb-2 border-b border-primary-500 text-lg font-medium",
              )}
            >
              Step 2
            </Legend>

            <Field className={cn("grid grid-cols-2 gap-1")}>
              <Description className={cn("col-span-2")}>
                Tell us about yourself to personalize the infomation we send to
                you
              </Description>
              <Checkbox
                // checked={enabled}
                // onChange={setEnabled}
                name="qualification"
                id={qualificationId}
                className={cn(
                  "group h-16 w-full rounded-lg px-2 shadow data-[checked]:ring-1",
                  "flex items-center gap-2",
                  "text-primary-950",
                )}
              >
                <Stethoscope className={cn("size-6")} />
                <Label htmlFor={qualificationId} className={cn("flex-1")}>
                  Doctor
                </Label>
                <Check className="opacity-0 group-data-[checked]:opacity-100" />
              </Checkbox>
              <Checkbox
                // checked={enabled}
                // onChange={setEnabled}
                name="qualification"
                id={qualificationId}
                className={cn(
                  "group h-16 w-full rounded-lg px-2 shadow data-[checked]:ring-1",
                  "flex items-center gap-2",
                  "text-primary-950",
                )}
              >
                <Stethoscope className={cn("size-6")} />
                <Label htmlFor={qualificationId} className={cn("flex-1")}>
                  Doctor
                </Label>
                <Check className="opacity-0 group-data-[checked]:opacity-100" />
              </Checkbox>
              <Checkbox
                // checked={enabled}
                // onChange={setEnabled}
                name="qualification"
                id={qualificationId}
                className={cn(
                  "group h-16 w-full rounded-lg px-2 shadow data-[checked]:ring-1",
                  "flex items-center gap-2",
                  "text-primary-950",
                )}
              >
                <Stethoscope className={cn("size-6")} />
                <Label htmlFor={qualificationId} className={cn("flex-1")}>
                  Doctor
                </Label>
                <Check className="opacity-0 group-data-[checked]:opacity-100" />
              </Checkbox>{" "}
              <Checkbox
                // checked={enabled}
                // onChange={setEnabled}
                name="qualification"
                id={qualificationId}
                className={cn(
                  "group h-16 w-full rounded-lg px-2 shadow data-[checked]:ring-1",
                  "flex items-center gap-2",
                  "text-primary-950",
                )}
              >
                <Stethoscope className={cn("size-6")} />
                <Label htmlFor={qualificationId} className={cn("flex-1")}>
                  Doctor
                </Label>
                <Check className="opacity-0 group-data-[checked]:opacity-100" />
              </Checkbox>
            </Field>
          </Fieldset>
        </Form>

        <Button
          type="button"
          disabled={isPending}
          form={formId}
          className={cn(
            "mt-8 flex h-20 w-full items-center justify-center rounded-full text-lg font-bold",
            "bg-primary-950 text-primary-50",
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
