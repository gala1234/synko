import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { getAllCaseStudies, type CaseStudy } from "@/lib/mdx";

export default function CasosPage() {
  const caseStudies = getAllCaseStudies();

  const getBadgeVariant = (sector: string) => {
    switch (sector.toLowerCase()) {
      case 'e-commerce':
        return 'accent';
      case 'salud':
        return 'primary';
      default:
        return 'highlight';
    }
  };

  const renderMarkdownContent = (content: string) => {
    // Simple markdown to JSX conversion for basic formatting
    const lines = content.split('\n');
    const elements: JSX.Element[] = [];
    let currentList: string[] = [];
    
    lines.forEach((line, index) => {
      if (line.startsWith('## ')) {
        if (currentList.length > 0) {
          elements.push(
            <ul key={`list-${index}`} className="space-y-2 text-[var(--color-muted)] mb-6">
              {currentList.map((item, i) => (
                <li key={i} dangerouslySetInnerHTML={{ __html: item }} />
              ))}
            </ul>
          );
          currentList = [];
        }
        elements.push(
          <h3 key={index} className="text-xl font-display font-bold text-[var(--color-fg)] mb-4">
            {line.replace('## ', '')}
          </h3>
        );
      } else if (line.startsWith('- ')) {
        currentList.push(line.replace('- ', '• ').replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>'));
      } else if (line.trim() && !line.startsWith('---')) {
        if (currentList.length > 0) {
          elements.push(
            <ul key={`list-${index}`} className="space-y-2 text-[var(--color-muted)] mb-6">
              {currentList.map((item, i) => (
                <li key={i} dangerouslySetInnerHTML={{ __html: item }} />
              ))}
            </ul>
          );
          currentList = [];
        }
        elements.push(
          <p key={index} className="text-[var(--color-muted)] mb-4" dangerouslySetInnerHTML={{ 
            __html: line.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>') 
          }} />
        );
      }
    });
    
    if (currentList.length > 0) {
      elements.push(
        <ul key="final-list" className="space-y-2 text-[var(--color-muted)] mb-6">
          {currentList.map((item, i) => (
            <li key={i} dangerouslySetInnerHTML={{ __html: item }} />
          ))}
        </ul>
      );
    }
    
    return elements;
  };

  return (
    <main>
      <Section padding="lg">
        <Container size="lg">
          <div className="text-center max-w-3xl mx-auto">
            <Badge variant="highlight" size="md" className="mb-4">
              Casos de estudio
            </Badge>
            <h1 className="text-4xl md:text-5xl font-display font-bold text-[var(--color-fg)] mb-6">
              Resultados reales de nuestros clientes
            </h1>
            <p className="text-xl text-[var(--color-muted)] mb-8">
              Descubre cómo hemos ayudado a empresas como la tuya a automatizar y crecer.
            </p>
          </div>
        </Container>
      </Section>

      <Section padding="lg">
        <Container size="lg">
          <div className="grid gap-12">
            {caseStudies.map((caseStudy, index) => (
              <Card key={caseStudy.slug} className="p-8">
                <div className="grid md:grid-cols-2 gap-8 items-start">
                  <div className={index % 2 === 1 ? 'md:order-2' : ''}>
                    <Badge variant={getBadgeVariant(caseStudy.sector)} size="sm" className="mb-4">
                      {caseStudy.sector}
                    </Badge>
                    <h2 className="text-3xl font-display font-bold text-[var(--color-fg)] mb-4">
                      {caseStudy.title}
                    </h2>
                    <p className="text-[var(--color-muted)] mb-6">
                      {caseStudy.client}
                    </p>
                    <div className="prose prose-sm max-w-none">
                      {renderMarkdownContent(caseStudy.content)}
                    </div>
                    <Button variant="outline" className="mt-6">
                      Ver caso completo
                    </Button>
                  </div>
                  <div className={`bg-[var(--color-muted)]/10 rounded-2xl h-64 flex items-center justify-center ${
                     index % 2 === 1 ? 'md:order-1' : ''
                   }`}>
                     <span className="text-[var(--color-muted)]">
                       Imagen del caso
                     </span>
                   </div>
                 </div>
               </Card>
             ))}
           </div>
         </Container>
       </Section>
     </main>
   );
 }