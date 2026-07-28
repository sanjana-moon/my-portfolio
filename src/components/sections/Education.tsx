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
              {/* Top Section */}
              <div className="flex flex-col gap-6 md:flex-row md:items-start md:justify-between">
                <div className="flex-1">
                  <h3 className="font-heading text-2xl font-bold text-heading">
                    {item.degree}
                  </h3>

                  {item.field && (
                    <p className="mt-2 font-medium text-primary">
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

              {/* Result */}
              <div className="mt-6 border-t border-border pt-6">
                <p className="text-xs uppercase tracking-wider text-text/60">
                  Result
                </p>

                <p className="mt-2 text-xl font-bold text-primary">
                  {item.result}
                </p>

                {/* Semester Results (University Only) */}
                {"semesters" in item && item.semesters && (
                  <div className="mt-6 grid gap-4 sm:grid-cols-3">
                    {item.semesters.map((semester) => (
                      <div
                        key={semester.semester}
                        className="rounded-2xl border border-border bg-background p-4 text-center"
                      >
                        <p className="text-sm text-text/70">
                          {semester.semester}
                        </p>

                        <p className="mt-2 text-lg font-semibold text-heading">
                          GPA {semester.cgpa}
                        </p>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {/* Relevant Courses (University Only) */}
              {"semesters" in item && item.semesters && (
                <div className="mt-6 border-t border-border pt-6">
                  <p className="text-xs uppercase tracking-wider text-text/60">
                    Relevant Courses
                  </p>

                  <div className="mt-4 flex flex-wrap gap-3">
                    {item.courses.map((course) => (
                      <span
                        key={course}
                        className="rounded-full bg-primary/10 px-4 py-2 text-sm font-medium text-primary transition-colors duration-300 group-hover:bg-primary group-hover:text-white"
                      >
                        {course}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}