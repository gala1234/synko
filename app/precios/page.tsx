import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import pricingData from "@/content/pricing.json";

type PricingPlan = {
  id: string;
  title: string;
  priceRange: string;
  description: string;
  bullets: string[];
  notes: string;
};

export default function PreciosPage() {
  const plans = pricingData as PricingPlan[];

  const getButtonVariant = (planId: string) => {
    return planId === "scale" ? "primary" : "outline";
  };

  const getButtonText = (planId: string) => {
    switch (planId) {
      case "launch":
        return "Empezar ahora";
      case "scale":
        return "Solicitar demo";
      case "care":
        return "Contactar ventas";
      default:
        return "Más información";
    }
  };

  return (
    <main>
      <Section padding="lg">
        <Container size="lg">
          <div className="mx-auto max-w-3xl text-center">
            <Badge variant="highlight" size="md" className="mb-4">
              Precios
            </Badge>
            <h1 className="font-display mb-6 text-4xl font-bold text-[var(--color-fg)] md:text-5xl">
              Planes que se adaptan a tu crecimiento
            </h1>
            <p className="mb-8 text-xl text-[var(--color-muted)]">
              Desde automatización básica hasta soluciones empresariales
              completas.
            </p>
          </div>
        </Container>
      </Section>

      <Section padding="lg">
        <Container size="lg">
          <div className="grid gap-8 md:grid-cols-3">
            {plans.map((plan, index) => (
              <Card
                key={plan.id}
                className={`p-8 text-center ${
                  plan.id === "scale"
                    ? "relative border-[var(--color-highlight)]"
                    : ""
                }`}
              >
                {plan.id === "scale" && (
                  <Badge
                    variant="highlight"
                    size="sm"
                    className="absolute -top-3 left-1/2 -translate-x-1/2 transform"
                  >
                    Más popular
                  </Badge>
                )}

                <h3 className="font-display mb-4 text-2xl font-bold text-[var(--color-fg)]">
                  {plan.title}
                </h3>

                <div className="mb-6">
                  <span className="text-4xl font-bold text-[var(--color-highlight)]">
                    {plan.priceRange}
                  </span>
                </div>

                <p className="mb-6 text-[var(--color-muted)]">
                  {plan.description}
                </p>

                <ul className="mb-6 space-y-3 text-[var(--color-muted)]">
                  {plan.bullets.map((bullet, bulletIndex) => (
                    <li key={`${plan.id}-bullet-${bulletIndex}`}>• {bullet}</li>
                  ))}
                </ul>

                <p className="mb-8 text-sm text-[var(--color-muted)] italic">
                  {plan.notes}
                </p>

                <Button variant={getButtonVariant(plan.id)} className="w-full">
                  {getButtonText(plan.id)}
                </Button>
              </Card>
            ))}
          </div>
        </Container>
      </Section>
    </main>
  );
}
