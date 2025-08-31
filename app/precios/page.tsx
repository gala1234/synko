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
    return planId === 'scale' ? 'primary' : 'outline';
  };

  const getButtonText = (planId: string) => {
    switch (planId) {
      case 'launch':
        return 'Empezar ahora';
      case 'scale':
        return 'Solicitar demo';
      case 'care':
        return 'Contactar ventas';
      default:
        return 'Más información';
    }
  };

  return (
    <main>
      <Section padding="lg">
        <Container size="lg">
          <div className="text-center max-w-3xl mx-auto">
            <Badge variant="highlight" size="md" className="mb-4">
              Precios
            </Badge>
            <h1 className="text-4xl md:text-5xl font-display font-bold text-[var(--color-fg)] mb-6">
              Planes que se adaptan a tu crecimiento
            </h1>
            <p className="text-xl text-[var(--color-muted)] mb-8">
              Desde automatización básica hasta soluciones empresariales completas.
            </p>
          </div>
        </Container>
      </Section>

      <Section padding="lg">
        <Container size="lg">
          <div className="grid md:grid-cols-3 gap-8">
            {plans.map((plan, index) => (
              <Card 
                key={plan.id} 
                className={`p-8 text-center ${
                  plan.id === 'scale' ? 'border-[var(--color-highlight)] relative' : ''
                }`}
              >
                {plan.id === 'scale' && (
                  <Badge variant="highlight" size="sm" className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    Más popular
                  </Badge>
                )}
                
                <h3 className="text-2xl font-display font-bold text-[var(--color-fg)] mb-4">
                  {plan.title}
                </h3>
                
                <div className="mb-6">
                  <span className="text-4xl font-bold text-[var(--color-highlight)]">
                    {plan.priceRange}
                  </span>
                </div>
                
                <p className="text-[var(--color-muted)] mb-6">
                  {plan.description}
                </p>
                
                <ul className="space-y-3 text-[var(--color-muted)] mb-6">
                  {plan.bullets.map((bullet, bulletIndex) => (
                    <li key={`${plan.id}-bullet-${bulletIndex}`}>• {bullet}</li>
                  ))}
                </ul>
                
                <p className="text-sm text-[var(--color-muted)] mb-8 italic">
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