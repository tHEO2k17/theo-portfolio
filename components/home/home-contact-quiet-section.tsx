import { getContactPrimaryChannels } from "@/lib/content/contact";
import { ContactChannel } from "@/components/editorial";
import {
  LayoutGrid,
  PageContainer,
  Section,
  SectionLabel,
} from "@/components/layout";

export function HomeContactQuietSection() {
  const channels = getContactPrimaryChannels();

  return (
    <Section
      id="contact"
      bordered
      aria-labelledby="contact-heading"
      reveal
    >
      <PageContainer>
        <LayoutGrid>
          <div className="col-span-prose">
            <SectionLabel id="contact-heading" as="h2" className="mb-layout-8">
              Contact
            </SectionLabel>
            <ul className="space-y-layout-4 mb-layout-8">
              {channels.map((channel) => (
                <li key={channel.type}>
                  <ContactChannel
                    href={channel.href}
                    value={channel.value}
                    external={
                      channel.type !== "email" && channel.type !== "phone"
                    }
                  />
                </li>
              ))}
            </ul>
          </div>
        </LayoutGrid>
      </PageContainer>
    </Section>
  );
}
