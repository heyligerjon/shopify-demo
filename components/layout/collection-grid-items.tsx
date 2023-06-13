import Grid from 'components/grid';
import { CollectionTileImage } from 'components/grid/collection-tile';
import { Collection } from 'lib/shopify/types';
import Link from 'next/link';

export default function CollectionGridItems({ collections }: { collections: Collection[] }) {
  return (
    <>
      {collections.map((collection) => (
        <Grid.Item key={collection.handle} className="animate-fadeIn">
          <Link className="h-full w-full" href={`/collection/${collection.handle}`}>
            <CollectionTileImage
              alt={collection.title}
              labels={{
                isSmall: true,
                title: collection.title
              }}
              src={collection.image?.url}
              width={600}
              height={600}
            />
          </Link>
        </Grid.Item>
      ))}
    </>
  );
}
