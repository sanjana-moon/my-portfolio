import Container from "@/components/common/Container";
import SectionHeading from "@/components/common/SectionHeading";

import education from "@/data/education";

export default function Education() {
  return (
    <section
      id="education"
      className="py-20 md:py-24 lg:py-28"
    >
      <Container>
        <SectionHeading
          title="Education"
          subtitle="My academic journey and achievements."
        />

        <div className="mx-auto mt-16 max-w-4xl space-y-8">
          {education.map((item) => (
            <div
              key={item.id}
              className="group rounded-3xl border border-border bg-surface p-8 transition-all duration-300 hover:-translate-y-1 hover:border-primary hover:shadow-xl"
            >
              <div className="flex flex-col gap-6 md:flex-row md:items-start md:justify-between">
                <div className="flex-1">
                  <div className="flex flex-wrap items-center gap-3">
                    <h3 className="font-heading text-2xl font-bold text-heading">
                      {item.degree}
                    </h3>
                  </div>

                  {/* Field (hidden if not available) */}
                  {item.field && (
                    <p className="mt-2 text-primary font-medium">
                      {item.field}
                    </p>
                  )}

                  <p className="mt-2 text-lg text-text">
                    {item.institution}
                  </p>

                  {"location" in item && item.location && (
                    <p className="mt-1 text-sm text-text/70">
                      {item.location}
                    </p>
                  )}
                </div>

                <div className="rounded-2xl bg-primary/10 px-5 py-3 text-center">
                  <p className="text-xs uppercase tracking-wider text-primary">
                    Passing Year
                  </p>

                  <p className="mt-1 font-semibold text-heading">
                    {item.duration}
                  </p>
                </div>
              </div>

              <div className="mt-6 border-t border-border pt-6">
                <p className="text-xs uppercase tracking-wider text-text/60">
                  Result
                </p>

                <p className="mt-2 text-xl font-bold text-primary">
                  {item.result}
                </p>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}