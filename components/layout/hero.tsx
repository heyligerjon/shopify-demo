import Grid from 'components/grid';
import { CollectionTileImage } from 'components/grid/collection-tile';
import { getCollection, getCollectionProducts } from 'lib/shopify';
import { Collection } from 'lib/shopify/types';
import Link from 'next/link';

export default async function Hero({ collections }: { collections: Collection[] }) {
  return (
    <>
      <div className="relative w-full overflow-hidden bg-black dark:bg-white">
        <div className="flex">
          {collections.map((collection) => (
            <div key={collection.handle} className="h-[70vh] w-full animate-fadeIn">
              <Link className="h-2/5 w-full" href={`${collection.path}`}>
                <CollectionTileImage
                  alt={collection.title}
                  src={collection.path}
                  width={120}
                  height={120}
                />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
