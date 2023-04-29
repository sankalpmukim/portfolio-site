import { Card } from '@/components/Card'
import Head from 'next/head'
import { Section } from '@/components/Section'
import { SimpleLayout } from '@/components/SimpleLayout'

function ToolsSection({ children, ...props }) {
  return (
    <Section {...props}>
      <ul role="list" className="space-y-16">
        {children}
      </ul>
    </Section>
  )
}

function Tool({ title, href, children }) {
  return (
    <Card as="li">
      <Card.Title as="h3" href={href}>
        {title}
      </Card.Title>
      <Card.Description>{children}</Card.Description>
    </Card>
  )
}

export default function Uses() {
  return (
    <>
      <Head>
        <title>Uses - Sankalp Mukim</title>
        <meta
          name="description"
          content="Software I use, gadgets I love, and other things I recommend."
        />
      </Head>
      <SimpleLayout
        title="Software I use, gadgets I love, and other things I recommend."
        intro="I get asked a lot about the things I use to build software, stay productive, or buy to fool myself into thinking I’m being productive when I’m really just procrastinating. Here’s a big list of all of my favorite stuff."
      >
        <div className="space-y-20">
          <ToolsSection title="Workstation">
            <Tool title="HP Pavilion Gaming 15, Ryzen 4500, 16GB RAM (2021)">
              I was using an Intel-based 15” Acer Nitro 5 prior to this and the
              difference is night and day. I am able to work with a peace of
              mind that my main weapon of choice is going to be available and
              sharp at all times.
            </Tool>
            <Tool title="BenQ GW2480T 24 inch (60cm) 1920 X 1080">
              The best option in the market in these specs. I have been using
              this monitor for over a year now and it has been a great. It makes
              me faster and more productive.
            </Tool>
            <Tool title="Redgear Shadow Blade Mechanical Keyboard">
              They don’t make keyboards the way they used to. I buy these any
              time I see them go up for sale and keep them in storage in case I
              need parts or need to retire my main.
            </Tool>
            <Tool title="Logitech G102 LightSync Gaming Mouse">
              Great mouse for the price. Super accurate and comfortable for
              usage for long periods of time.
            </Tool>
          </ToolsSection>
          <ToolsSection title="Development tools">
            <Tool title="Visual Studio Code">
              I am extremely fast with VS Code. I have tried other editors but I
              always come back to VS Code. I have been using it for over 3
              years. I have been trying to get back to learning Vim but I am
              just too comfortable with VS Code.
            </Tool>
            <Tool title="Fish">
              I have been using Fish for over a year now. I have tried Zsh and
              Bash but I always come back to Fish. It is just too good. It’s
              simple, fast and easy to use. I was skeptical initially about
              leaving bash language but I am glad I did. Fish’s ecosystem is
              extremely strong and rich with packages.
            </Tool>
            <Tool title="GitHub cli tool">
              The GitHub CLI is an incredibly underrated productivity tool. I
              use it for everything from creating new repos to opening issues
              and pull requests. It’s a great way to stay in the terminal and
              still be able to do all of the things I need to do on GitHub.
            </Tool>
          </ToolsSection>
          <ToolsSection title="Design">
            <Tool title="Figma">
              We started using Figma as just a design tool but now it’s become
              our virtual whiteboard for the entire company. Never would have
              expected the collaboration features to be the real hook.
            </Tool>
          </ToolsSection>
          <ToolsSection title="Productivity">
            <Tool title="Microsoft Todo">
              It just works. Very very simple. Works across multiple devices so
              I can do research on my phone, I can create tasks on their app and
              their widget is great. I work with Trello for work but for my
              personal projects I use Microsoft Todo.
            </Tool>
            =
            <Tool title="Spotify">
              Good music is a must for me to be productive. I listen to Guitar
              LoFi music. It helps me focus and get into the zone.
            </Tool>
          </ToolsSection>
        </div>
      </SimpleLayout>
    </>
  )
}
