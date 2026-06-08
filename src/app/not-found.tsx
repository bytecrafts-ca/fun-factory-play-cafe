import { Button } from "@/components/ui/Button";

export default function NotFound() {
  return (
    <section className="flex min-h-[50vh] flex-col items-center justify-center px-5 text-center">
      <h1 className="text-4xl font-extrabold text-charcoal">Page not found</h1>
      <p className="mt-3 text-muted">The page you&apos;re looking for doesn&apos;t exist.</p>
      <div className="mt-8">
        <Button href="/" variant="primary" size="lg">
          Back to Home
        </Button>
      </div>
    </section>
  );
}
