import { BlogList } from "@/components/blog-list";
import { PageShell } from "@/components/page-shell";
import { SectionIntro } from "@/components/section-intro";

export default function BlogPage() {
  return (
    <PageShell>
      <section className="pb-24 pt-6">
        <div className="container space-y-10">
          <SectionIntro eyebrow="Blog" />
          <BlogList />
        </div>
      </section>
    </PageShell>
  );
}
