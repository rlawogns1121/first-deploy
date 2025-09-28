import Image from "next/image";
import Link from "next/link";
import { profile, experiences, projects } from "@/data/resume";

export const metadata = {
  title: profile.name,
  description: "개인 이력서",
};

/* ————— 작은 빌딩 블록 ————— */
function Section({
  title,
  children,
  className,
}: React.PropsWithChildren<{ title: string; className?: string }>) {
  return (
    <section className={`rounded-xl border border-stone-200 bg-white ${className ?? ""}`}>
      <header className="flex items-center gap-2 border-b border-stone-200 px-5 py-3">
        <h2 className="text-sm font-semibold tracking-tight">{title}</h2>
      </header>
      <div className="p-5">{children}</div>
    </section>
  );
}

function Tag({ children }: { children: React.ReactNode }) {
  return (
    <span className="rounded-full border border-stone-300 bg-stone-50 px-2.5 py-[3px] text-[11px] font-medium text-stone-700">
      {children}
    </span>
  );
}

/* ————— 페이지 ————— */
export default function Home() {
  return (
    <div className="min-h-screen bg-stone-50 text-stone-900">
      {/* 상단바 */}
      <div className="sticky top-0 z-10 border-b border-stone-200/80 bg-white/80 backdrop-blur">
        <div className="mx-auto flex max-w-5xl items-center justify-between px-5 py-3">
          <div className="flex items-center gap-3 text-xs">
            <Link
              href={profile.links.github}
              target="_blank"
              className="text-blue-600 hover:underline underline-offset-4"
            >
              GitHub
            </Link>
            <span className="text-stone-300">•</span>
            <a
              href={`mailto:${profile.links.email}`}
              className="hover:underline underline-offset-4"
            >
              {profile.links.email}
            </a>
          </div>
        </div>
      </div>

      <main className="mx-auto max-w-5xl px-5 py-8">
        {/* 프로필 카드 */}
        <div className="mb-8 grid gap-6 md:grid-cols-[220px,1fr]">
          <div className="rounded-xl border border-stone-200 bg-white p-5">
            <div className="flex items-center gap-4">
              <div className="h-16 w-16 overflow-hidden rounded-full ring-1 ring-stone-200">
                <Image
                  src={profile.photo}
                  alt={profile.name}
                  width={64}
                  height={64}
                  className="h-full w-full object-cover"
                />
              </div>
              <div>
                <div className="text-base font-semibold">{profile.name}</div>
                <div className="text-sm text-stone-600">{profile.title}</div>
              </div>
            </div>
          </div>
  
          <div className="rounded-xl border border-stone-200 bg-white p-5">
            <p className="text-sm leading-7 text-stone-800">
              꾸준히 개선하고 기록하는 개발자입니다. 명확한 커뮤니케이션과
              단순한 구조를 선호하며, 사용자 가치를 만드는 일에 집중합니다.
            </p>
          </div>
        </div>

        {/* 2-컬럼: 경험 · 프로젝트 */}
        <div className="grid gap-8 lg:grid-cols-2">
          {/* 경험 */}
          <Section title="경험">
            <div className="grid gap-6 sm:grid-cols-2">
              {/* 컨퍼런스 */}
              <div className="rounded-lg bg-stone-50 p-4 ring-1 ring-stone-100">
                <div className="mb-3"><Tag>컨퍼런스</Tag></div>
                <ul className="space-y-3">
                  {experiences.job.map((item, i) => (
                    <li key={`${item.title}-${i}`} className="text-sm">
                      <div className="flex flex-wrap items-center gap-2">
                        <span className="text-stone-400">·</span>
                        <span className="font-medium">{item.title}</span>
                      </div>
                      <p className="mt-1 leading-6 text-stone-700">{item.desc}</p>
                    </li>
                  ))}
                </ul>
              </div>

              {/* 교육 */}
              <div className="rounded-lg bg-stone-50 p-4 ring-1 ring-stone-100">
                <div className="mb-3"><Tag>교육</Tag></div>
                <ul className="space-y-3">
                  {experiences.education.map((item, i) => (
                    <li key={`${item.title}-${i}`} className="text-sm">
                      <div className="font-medium">{item.title}</div>
                      <p className="mt-1 leading-6 text-stone-700">{item.desc}</p>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </Section>

          {/* 프로젝트 */}
          <Section title="프로젝트">
            <div className="grid gap-4">
              {projects.map((p, i) => (
                <Link
                  key={`${p.url}-${i}`}
                  href={p.url}
                  target="_blank"
                  className="group rounded-lg border border-stone-200 bg-white p-4 shadow-sm transition-all hover:-translate-y-0.5 hover:shadow-md"
                >
                  <div className="mb-1 text-[15px] font-semibold">{p.name}</div>
                  <p className="text-sm text-stone-700">{p.desc}</p>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {p.tags.map((t) => (
                      <Tag key={t}>{t}</Tag>
                    ))}
                  </div>
                  <span className="mt-2 inline-block text-[11px] text-blue-600 opacity-0 transition-opacity group-hover:opacity-100">
                    링크 열기 →
                  </span>
                </Link>
              ))}
            </div>
          </Section>
        </div>

        {/* 푸터 */}
        <div className="mt-10 rounded-xl border border-stone-200 bg-white p-6 text-center">
          <p className="text-sm text-stone-700">
            좋은 인연으로 만나볼 수 있기를 바랍니다.
          </p>
          <div className="mt-3 flex items-center justify-center gap-4 text-sm">
            <Link
              href={profile.links.github}
              target="_blank"
              className="text-blue-600 underline underline-offset-4 hover:text-blue-700"
            >
              GitHub
            </Link>
            <span className="text-stone-300">•</span>
            <a
              className="underline underline-offset-4 hover:text-stone-900"
              href={`mailto:${profile.links.email}`}
            >
              {profile.links.email}
            </a>
          </div>
        </div>
      </main>
    </div>
  );
}