import Head from 'next/head';
import Hero from '../components/Hero';
import Features from '../components/Features';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <>
      <Head>
        <title>Tabsi – AI WhatsApp Business Assistant</title>
        <meta name="description" content="AI-powered WhatsApp business assistant for small businesses. Run your business smarter with Tabsi." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="min-h-screen flex flex-col bg-gradient-to-br from-white to-slate-100 dark:from-gray-950 dark:to-gray-900">
        <Hero />
        <Features />
        <Footer />
      </main>
    </>
  );
}
