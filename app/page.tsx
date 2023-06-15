import { Carousel } from 'components/carousel';
import Grid from 'components/grid';
import CollectionGridItems from 'components/layout/collection-grid-items';
import Footer from 'components/layout/footer';
import Hero from 'components/layout/hero';
import LoadingDots from 'components/loading-dots';
import { getCollection, getTopCollections } from 'lib/shopify';
import { Collection } from 'lib/shopify/types';
import { Suspense } from 'react';

export const runtime = 'edge';

export const metadata = {
  description: 'High-performance ecommerce store built with Next.js, Vercel, and Shopify.',
  openGraph: {
    images: [
      {
        url: `/api/og?title=${encodeURIComponent(process.env.SITE_NAME || '')}`,
        width: 1200,
        height: 630
      }
    ],
    type: 'website'
  }
};

export default async function HomePage() {
  const collections = await getTopCollections();

  const mens = await getCollection('mens-all');
  const womens = await getCollection('womens-all');
  let hero: (Collection | undefined)[] = [mens, womens];

  return (
    <>
      <Suspense fallback={<LoadingDots className="" />}>
        {/* @ts-expect-error Server Component */}
        <Hero className="" collections={hero} />
      </Suspense>
      <Suspense fallback={<LoadingDots className="" />}>
        {/* @ts-expect-error Server Component */}
        <Carousel />
      </Suspense>
      <Suspense fallback={<LoadingDots className="" />}>
        {collections.length > 0 ? (
          <>
            <h2 className="m-3 pt-5 text-xl">Shop by Collection</h2>
            <Grid className="m-5 grid-cols-3 lg:grid-cols-5">
              <CollectionGridItems collections={collections} />
            </Grid>
          </>
        ) : null}
      </Suspense>
      <Suspense>
        {/* @ts-expect-error Server Component */}
        <Footer />
      </Suspense>
    </>
  );
}
