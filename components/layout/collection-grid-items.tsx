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
              src={collection.image.url}
              background="black"
              width={120}
              height={120}
            />
            <p>{collection.title}</p>
          </Link>
        </Grid.Item>
      ))}
    </>
  );
}
