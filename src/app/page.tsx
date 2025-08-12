import { Suspense } from 'react';
import dynamic from 'next/dynamic';
import Header from '@/components/Header';
import Hero from '@/components/Hero';

// Lazy load components below the fold
const ProgressSteps = dynamic(() => import('@/components/ProgressSteps'), {
  loading: () => <div className="h-64 bg-gray-50 animate-pulse" />,
});

const BabyChecker = dynamic(() => import('@/components/BabyChecker'), {
  loading: () => <div className="h-96 bg-gray-50 animate-pulse" />,
});

const BookingSection = dynamic(() => import('@/components/BookingSection'), {
  loading: () => <div className="h-80 bg-gray-50 animate-pulse" />,
});

const Testimonials = dynamic(() => import('@/components/Testimonials'), {
  loading: () => <div className="h-72 bg-gray-50 animate-pulse" />,
});

const FAQ = dynamic(() => import('@/components/FAQ'), {
  loading: () => <div className="h-80 bg-gray-50 animate-pulse" />,
});

const Contact = dynamic(() => import('@/components/Contact'), {
  loading: () => <div className="h-96 bg-gray-50 animate-pulse" />,
});

const Footer = dynamic(() => import('@/components/Footer'), {
  loading: () => <div className="h-64 bg-gray-900 animate-pulse" />,
});

const WhatsAppWrapper = dynamic(() => import('@/components/WhatsAppWrapper'));

export default function Home() {
  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      <Header />
      <main>
        <Hero />
        <Suspense fallback={<div className="h-64 bg-gray-50 animate-pulse" />}>
          <ProgressSteps />
        </Suspense>
        <Suspense fallback={<div className="h-96 bg-gray-50 animate-pulse" />}>
          <BabyChecker />
        </Suspense>
        <Suspense fallback={<div className="h-80 bg-gray-50 animate-pulse" />}>
          <BookingSection />
        </Suspense>
        <Suspense fallback={<div className="h-72 bg-gray-50 animate-pulse" />}>
          <Testimonials />
        </Suspense>
        <Suspense fallback={<div className="h-80 bg-gray-50 animate-pulse" />}>
          <FAQ />
        </Suspense>
        <Suspense fallback={<div className="h-96 bg-gray-50 animate-pulse" />}>
          <Contact />
        </Suspense>
      </main>
      <Suspense fallback={<div className="h-64 bg-gray-900 animate-pulse" />}>
        <Footer />
      </Suspense>
      <WhatsAppWrapper />
    </div>
  );
}
