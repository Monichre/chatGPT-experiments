import { Layout, Page, Text } from '@vercel/examples-ui';

import { Chat } from '../components/Chat';

function Home() {
  return (
    <Page className='flex flex-col gap-12'>
      <section className='flex flex-col gap-6'>
        <Text variant='h1'>Liam's OpenAI GPT-3 Experiments</Text>
        <Text>
          <b>Conversational Chatbot (Q&A)</b>
        </Text>
        <Text className='text-zinc-600'>
          Technologies: Next.js, API Routes, and OpenAI API.
        </Text>
      </section>

      <section className='flex flex-col gap-3'>
        <Text variant='h2'>Talk to me baby</Text>
        <div className='lg:w-2/3'>
          <Chat />
        </div>
      </section>
    </Page>
  )
}

Home.Layout = Layout

export default Home
