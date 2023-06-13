import Grid from 'components/grid';
import { CollectionTileImage } from 'components/grid/collection-tile';
import { getCollectionProducts } from 'lib/shopify';
import { Collection } from 'lib/shopify/types';
import Link from 'next/link';

export default async function Hero({}: { collections: Collection[] }) {
  const hero = await getCollectionProducts({ collection: 'hidden-hero' });

  return (
    <>
      <Grid className="grid-rows-0 h-128 grid-cols-1 overflow-hidden lg:grid-cols-1">
        {hero.map((product) => (
          <Grid.Item key={product.handle} className="row-span-2 h-full animate-fadeIn">
            <Link className="inline-block h-full w-full" href={`/collection/${product.handle}`}>
              <CollectionTileImage
                alt={product.title}
                src={product.featuredImage?.url}
                width={120}
                height={120}
              />
            </Link>
          </Grid.Item>
        ))}
      </Grid>
    </>
  );
}
