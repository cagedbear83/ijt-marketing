import { Section, PageHeader, Button } from "@/components/ui-bits";

export const metadata = {
  title: "Page not found",
};

export default function NotFound() {
  return (
    <Section className="py-24 text-center">
      <p className="text-6xl font-bold tracking-tight text-muted-foreground/30">
        404
      </p>
      <PageHeader
        title="Page not found"
        subtitle="The page you're looking for doesn't exist or may have moved."
      />
      <div className="mt-8 flex flex-wrap justify-center gap-3">
        <Button href="/">Go home</Button>
        <Button href="/contact" variant="outline">
          Contact support
        </Button>
      </div>
    </Section>
  );
}
