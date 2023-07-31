import { Card } from '@/components/Card'
import Head from 'next/head'
import { Section } from '@/components/Section'
import { SimpleLayout } from '@/components/SimpleLayout'

function CertificationsSection({ children, ...props }) {
  return (
    <Section {...props}>
      <div className="space-y-16">{children}</div>
    </Section>
  )
}

function Appearance({ title, description, provider, href }) {
  return (
    <Card as="article">
      <Card.Title as="h3" href={href}>
        {title}
      </Card.Title>
      <Card.Eyebrow decorate>{provider}</Card.Eyebrow>
      <Card.Description>{description}</Card.Description>
    </Card>
  )
}

export default function Certifications() {
  return (
    <>
      <Head>
        <title>Certifications</title>
        <meta
          name="description"
          content="I’ve spoken at events all around the world and been interviewed for many podcasts."
        />
      </Head>
      <SimpleLayout
        title="I’ve spoken at events all around the world and been interviewed for many podcasts."
        intro="One of my favorite ways to share my ideas is live on stage, where there’s so much more communication bandwidth than there is in writing, and I love podcast interviews because they give me the opportunity to answer questions instead of just present my opinions."
      >
        <div className="space-y-20">
          <CertificationsSection title="Cloud">
            <Appearance
              href="/certifications/saa-c03.pdf"
              title="AWS Solutions Architect Associate"
              description="The AWS Certified Solutions Architect – Associate examination is intended for individuals who perform a solutions architect role and have one or more years of hands-on experience designing available, cost-efficient, fault-tolerant, and scalable distributed systems on AWS."
              provider="AWS"
            />
          </CertificationsSection>
          <CertificationsSection title="Theoretical">
            <Appearance
              href="/certifications/udemy-networking.pdf"
              title="Fundamentals of Networking"
              description="Understanding the first principles of networking to build low latency and high throughput backends"
              provider="Hussein Nasser(Udemy)"
            />
            <Appearance
              href="/certifications/udemy-nginx.pdf"
              title="Nginx Fundamentals"
              description="Understand and Deploy Layer 4/Layer 7 Load Balancing, WebSockets, HTTPS, HTTP/2, TLS 1.3 with NGINX (With Docker)"
              provider="Hussein Nasser(Udemy)"
            />
          </CertificationsSection>
        </div>
      </SimpleLayout>
    </>
  )
}
