import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

interface Props {
  title: string;
  description: string;
}

export default function SingleAccordion({ title, description }: Props) {
  return (
    <Accordion type="single" collapsible>
      <AccordionItem value="item-1">
        <AccordionTrigger>
          <h4 className="text-left text-lg font-bold text-[#4E93D3] md:text-2xl">
            {title}
          </h4>
        </AccordionTrigger>
        <AccordionContent>
          <p className="leading-6 text-[#313131]">{description}</p>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}
