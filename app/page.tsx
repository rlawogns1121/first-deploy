import Image from "next/image";
import Link from "next/link";
import { profile, experiences, projects } from "@/data/resume";

/** ---- 작은 UI 컴포넌트 ---- */
function Glass({ className = "", children }: React.PropsWithChildren<{ className?: string }>) {
  return (
    <div
      className={
        "rounded-2xl border border-white/30 bg-white/60 backdrop-blur-md shadow-sm dark:border-white/10 dark:bg-white/5 " +
        className
      }
    >
      {children}
    </div>
  );
}

function Pill({ children }: { children: React.ReactNode }) {
  return (
    <span className="rounded-full border border-black/10 bg-white/70 px-2.5 py-1 text-[11px] text-black/70 dark:border-white/10 dark:bg-white/10 dark:text-white/80">
      {children}
    </span>
  );
}

function SectionTitle({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="text-sm font-semibold tracking-wider text-black/70 dark:text-white/80">{children}</h2>
  );
}

/** ---- 페이지 ---- */
export const metadata = {
  title: profile.name,
  description: "개인 이력서",
};

export default function Page() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-indigo-50 via-white to-white text-zinc-900 dark:from-[#0b0b12] dark:via-[#0f1018] dark:to-[#0b0b12] dark:text-zinc-100">
      {/* 히어로 */}
      <section className="relative overflow-hidden">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(99,102,241,0.25),_transparent_60%)] dark:bg-[radial-gradient(ellipse_at_top,_rgba(99,102,241,0.25),_transparent_40%)]" />
        <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-8 px-6 py-14 md:grid-cols-[220px,1fr]">
          <Glass className="p-5">
            <div className="flex items-center gap-4">
              <div className="h-16 w-16 overflow-hidden rounded-full ring-1 ring-black/10 dark:ring-white/10">
                <Image
                  src={profile.photo}
                  alt={profile.name}
                  width={64}
                  height={64}
                  className="h-full w-full object-cover"
                  priority
                />
              </div>
              <div>
                <div className="text-base font-semibold">{profile.name}</div>
                <div className="text-sm text-black/60 dark:text-white/60">{profile.title}</div>
              </div>
            </div>
          </Glass>

          <Glass className="p-6">
            <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
              <p className="max-w-2xl text-[13.5px] leading-7 text-black/80 dark:text-white/80">
                명확하게 생각하고 간결하게 구현합니다. 사용자 가치를 가장 앞에 두고,
                작게 빠르게 개선을 반복합니다.
              </p>
              <div className="flex shrink-0 gap-2">
                <Link
                  href={profile.links.github}
                  target="_blank"
                  className="rounded-xl border border-black/10 bg-white/80 px-3 py-2 text-xs font-medium text-black/80 shadow-sm hover:shadow dark:border-white/10 dark:bg-white/10 dark:text-white/90"
                >
                  GitHub
                </Link>
                <a
                  href={`mailto:${profile.links.email}`}
                  className="rounded-xl bg-indigo-600 px-3 py-2 text-xs font-semibold text-white shadow hover:bg-indigo-500"
                >
                  Contact
                </a>
              </div>
            </div>
          </Glass>
        </div>
      </section>

      <main className="mx-auto max-w-6xl px-6 pb-16">
        {/* 경험: 세로 타임라인 */}
        <Glass className="p-6">
          <div className="mb-5 flex items-center justify-between">
            <SectionTitle>경험</SectionTitle>
            <span className="text-[11px] text-black/50 dark:text-white/50">최신 순</span>
          </div>

          <div className="grid gap-8 md:grid-cols-2">
            {/* 컨퍼런스 */}
            <div>
              <div className="mb-3 text-sm font-medium">컨퍼런스</div>
              <ul className="relative space-y-5 border-l border-black/10 pl-6 dark:border-white/10">
                {experiences.job.map((item, i) => (
                  <li key={`${item.title}-${i}`} className="relative">
                    <span className="absolute -left-[9px] top-1.5 h-2.5 w-2.5 rounded-full bg-indigo-600 ring-4 ring-indigo-600/15" />
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="text-sm font-semibold">{item.year}</span>
                      <span className="text-black/40 dark:text-white/40">·</span>
                      <span className="text-sm font-medium">{item.title}</span>
                    </div>
                    <p className="mt-1 text-[13.5px] leading-7 text-black/75 dark:text-white/75">
                      {item.desc}
                    </p>
                  </li>
                ))}
              </ul>
            </div>

            {/* 교육 */}
            <div>
              <div className="mb-3 text-sm font-medium">교육</div>
              <ul className="relative space-y-5 border-l border-black/10 pl-6 dark:border-white/10">
                {experiences.education.map((item, i) => (
                  <li key={`${item.title}-${i}`} className="relative">
                    <span className="absolute -left-[9px] top-1.5 h-2.5 w-2.5 rounded-full bg-emerald-600 ring-4 ring-emerald-600/15" />
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="text-sm font-semibold">{item.title}</span>
                      <span className="text-black/40 dark:text-white/40">·</span>
                      <span className="text-xs text-black/60 dark:text-white/60">{item.period}</span>
                    </div>
                    <p className="mt-1 text-[13.5px] leading-7 text-black/75 dark:text-white/75">
                      {item.desc}
                    </p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Glass>

        {/* 프로젝트: 글래스 카드 그리드 */}
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((p, i) => (
            <Glass key={`${p.url}-${i}`} className="p-5 transition-all hover:-translate-y-0.5 hover:shadow-md">
              <Link href={p.url} target="_blank" className="block">
                <div className="mb-1 text-[15px] font-semibold">{p.name}</div>
                <p className="text-[13.5px] leading-7 text-black/75 dark:text-white/75">{p.desc}</p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {p.tags.map((t) => (
                    <Pill key={t}>{t}</Pill>
                  ))}
                </div>
                <span className="mt-3 inline-block text-[11px] text-indigo-600">자세히 보기 →</span>
              </Link>
            </Glass>
          ))}
        </div>

        {/* 푸터 */}
        <div className="mt-10 text-center text-sm text-black/60 dark:text-white/60">
          함께 일하기 좋은 코드를 지향합니다.
        </div>
      </main>
    </div>
  );
}