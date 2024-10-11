// Font Size provider +/-
import { Content } from "@/components";
import {
  Headline,
  SubHeadline,
  HeadlineGroup,
  Paragraph,
  SectionHeadline,
  SectionSubHeadline,
} from "@/components/ui/typography";
import { cn } from "@/utils/cn";
import React from "react";

const data = {
  headline: "Here’s Your Attention Getting Headline",
  subHeadline: "This is your sub-headline to increase credibility or curiosity",
  paragraph:
    "Here is your paragraph: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  sectionHeadline: "Section Headline: Lorem Ipsum",
  sectionSubHeadline: "Section Sub-Headline: Lorem Ipsum",
};

const Showcase = () => {
  return (
    <div
      className={cn(
        "flex w-full max-w-6xl flex-col justify-center gap-20 px-4 pt-20",
        "bg-primary-95 text-primary-5",
      )}
    >
      <HeadlineGroup>
        <Headline>{data.headline}</Headline>
        <SubHeadline>{data.subHeadline}</SubHeadline>
      </HeadlineGroup>

      <div className="flex flex-col gap-2">
        <HeadlineGroup className="mb-4 gap-1">
          <SectionHeadline>{data.sectionHeadline}</SectionHeadline>
          <SectionSubHeadline>{data.sectionSubHeadline}</SectionSubHeadline>
        </HeadlineGroup>
        <Content>
          <h1>{"H1: This is your headline"}</h1>
          <h2>{"H2: This is your headline"}</h2>
          <h3>{"H3: This is your headline"}</h3>
          <h4>{"H4: This is your headline"}</h4>
          <h5>{"H5: This is your headline"}</h5>
          <h6>{"H6: This is your headline"}</h6>

          <p className="first-letter:float-left first-letter:mr-2 first-letter:text-7xl first-letter:font-bold first-letter:text-primary-20">
            {data.paragraph}
          </p>

          <p>{data.paragraph}</p>
        </Content>
        {/* <Paragraph className="first-letter:float-left first-letter:mr-2 first-letter:text-7xl first-letter:font-bold first-letter:text-primary-20">
          {data.paragraph}
        </Paragraph>
        <Paragraph className="">{data.paragraph}</Paragraph> */}
      </div>

      <div className="flex flex-col gap-2 border border-dashed border-primary-5 p-8">
        <div className="flex gap-2">
          <Color className="bg-primary-0" />
          <Color className="bg-primary-5" />
          <Color className="bg-primary-10" />
          <Color className="bg-primary-20" />
          <Color className="bg-primary-30" />
          <Color className="bg-primary-40" />
          <Color className="bg-primary-50" />
          <Color className="bg-primary-60" />
          <Color className="bg-primary-70" />
          <Color className="bg-primary-80" />
          <Color className="bg-primary-90" />
          <Color className="bg-primary-95" />
          <Color className="bg-primary-100" />
        </div>
        <div className="flex gap-2">
          <Color className="bg-accent-0" />
          <Color className="bg-accent-5" />
          <Color className="bg-accent-10" />
          <Color className="bg-accent-20" />
          <Color className="bg-accent-30" />
          <Color className="bg-accent-40" />
          <Color className="bg-accent-50" />
          <Color className="bg-accent-60" />
          <Color className="bg-accent-70" />
          <Color className="bg-accent-80" />
          <Color className="bg-accent-90" />
          <Color className="bg-accent-95" />
          <Color className="bg-accent-100" />
        </div>
        <div className="flex gap-2">
          <Color className="bg-muted-0" />
          <Color className="bg-muted-5" />
          <Color className="bg-muted-10" />
          <Color className="bg-muted-20" />
          <Color className="bg-muted-30" />
          <Color className="bg-muted-40" />
          <Color className="bg-muted-50" />
          <Color className="bg-muted-60" />
          <Color className="bg-muted-70" />
          <Color className="bg-muted-80" />
          <Color className="bg-muted-90" />
          <Color className="bg-muted-95" />
          <Color className="bg-muted-100" />
        </div>
      </div>

      {/* Depth */}
      <div className="flex gap-2">
        <Depth className="bg-primary-0">
          <Depth className="bg-primary-5">
            <Depth className="bg-primary-10">
              <Depth className="bg-primary-15">
                <Depth className="bg-primary-20">
                  <Depth className="bg-primary-25">
                    <Depth className="bg-primary-30">
                      <Depth className="bg-primary-35">
                        <Depth className="bg-primary-40">
                          <Depth className="bg-primary-45">
                            <Depth className="bg-primary-50">
                              <Depth className="bg-primary-55">
                                <Depth className="bg-primary-60">
                                  <Depth className="bg-primary-65">
                                    <Depth className="bg-primary-70">
                                      <Depth className="bg-primary-75">
                                        <Depth className="bg-primary-80">
                                          <Depth className="bg-primary-85">
                                            <Depth className="bg-primary-90">
                                              <Depth className="bg-primary-95">
                                                <Depth className="bg-primary-100"></Depth>
                                              </Depth>
                                            </Depth>
                                          </Depth>
                                        </Depth>
                                      </Depth>
                                    </Depth>
                                  </Depth>
                                </Depth>
                              </Depth>
                            </Depth>
                          </Depth>
                        </Depth>
                      </Depth>
                    </Depth>
                  </Depth>
                </Depth>
              </Depth>
            </Depth>
          </Depth>
        </Depth>

        <Depth className="bg-accent-0">
          <Depth className="bg-accent-5">
            <Depth className="bg-accent-10">
              <Depth className="bg-accent-15">
                <Depth className="bg-accent-20">
                  <Depth className="bg-accent-25">
                    <Depth className="bg-accent-30">
                      <Depth className="bg-accent-35">
                        <Depth className="bg-accent-40">
                          <Depth className="bg-accent-45">
                            <Depth className="bg-accent-50">
                              <Depth className="bg-accent-55">
                                <Depth className="bg-accent-60">
                                  <Depth className="bg-accent-65">
                                    <Depth className="bg-accent-70">
                                      <Depth className="bg-accent-75">
                                        <Depth className="bg-accent-80">
                                          <Depth className="bg-accent-85">
                                            <Depth className="bg-accent-90">
                                              <Depth className="bg-accent-95">
                                                <Depth className="bg-accent-100"></Depth>
                                              </Depth>
                                            </Depth>
                                          </Depth>
                                        </Depth>
                                      </Depth>
                                    </Depth>
                                  </Depth>
                                </Depth>
                              </Depth>
                            </Depth>
                          </Depth>
                        </Depth>
                      </Depth>
                    </Depth>
                  </Depth>
                </Depth>
              </Depth>
            </Depth>
          </Depth>
        </Depth>

        <Depth className="bg-muted-0">
          <Depth className="bg-muted-5">
            <Depth className="bg-muted-10">
              <Depth className="bg-muted-15">
                <Depth className="bg-muted-20">
                  <Depth className="bg-muted-25">
                    <Depth className="bg-muted-30">
                      <Depth className="bg-muted-35">
                        <Depth className="bg-muted-40">
                          <Depth className="bg-muted-45">
                            <Depth className="bg-muted-50">
                              <Depth className="bg-muted-55">
                                <Depth className="bg-muted-60">
                                  <Depth className="bg-muted-65">
                                    <Depth className="bg-muted-70">
                                      <Depth className="bg-muted-75">
                                        <Depth className="bg-muted-80">
                                          <Depth className="bg-muted-85">
                                            <Depth className="bg-muted-90">
                                              <Depth className="bg-muted-95">
                                                <Depth className="bg-muted-100"></Depth>
                                              </Depth>
                                            </Depth>
                                          </Depth>
                                        </Depth>
                                      </Depth>
                                    </Depth>
                                  </Depth>
                                </Depth>
                              </Depth>
                            </Depth>
                          </Depth>
                        </Depth>
                      </Depth>
                    </Depth>
                  </Depth>
                </Depth>
              </Depth>
            </Depth>
          </Depth>
        </Depth>
      </div>
    </div>
  );
};

const Color: React.FC<{ className?: string; children?: React.ReactNode }> = ({
  className,
  children,
}) => {
  return (
    <div className={cn("flex size-10 items-center justify-center", className)}>
      {children}
    </div>
  );
};

const Depth: React.FC<{ className?: string; children?: React.ReactNode }> = ({
  className,
  children,
}) => {
  return (
    <div
      className={cn(
        "flex items-center justify-center rounded-full p-1.5",
        className,
      )}
    >
      {children}
    </div>
  );
};

export default Showcase;

// [ ] https://www.youtube.com/watch?v=eXRlVpw1SIQ&list=TLPQMDkxMDIwMjRQ7XHPrBqyGg&index=4
