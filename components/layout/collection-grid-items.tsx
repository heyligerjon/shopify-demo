import Grid from 'components/grid';
import { CollectionTileImage } from 'components/grid/collection-tile';
import { Collection } from 'lib/shopify/types';
import Link from 'next/link';

export default function CollectionGridItems({ collections }: { collections: Collection[] }) {
  return (
    <>
      {collections.map((collection) => (
        <Grid.Item key={collection.handle} className="border-2 border-solid border-white bg-white">
          <Link
            className="flex h-full w-full flex-col bg-black text-white dark:bg-white dark:text-black"
            href={`/collection/${collection.handle}`}
          >
            <CollectionTileImage
              alt={collection.title}
              src={collection.image.url}
              background="black"
              width={120}
              height={120}
            />
            <div className="align-center my-5 flex justify-between">
              <p className="text-md ml-3 p-2">{collection.title}</p>
              <button className="z-100 text-md duration-250 mr-5 border-2 border-solid border-violet-950 bg-violet-950 p-1.5 text-white">
                Shop
              </button>
            </div>
          </Link>
        </Grid.Item>
      ))}
    </>
  );
}
