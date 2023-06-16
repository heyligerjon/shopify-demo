import { getCollectionProducts } from 'lib/shopify';
import Image from 'next/image';
import Link from 'next/link';

export async function Carousel() {
  // Collections that start with `hidden-*` are hidden from the search page.
  const products = await getCollectionProducts({ collection: 'hidden-homepage-carousel' });

  if (!products?.length) return null;

  return (
    <div className="light:bg-white relative w-full overflow-hidden bg-black">
      <div className="flex animate-carousel">
        {[...products, ...products].map((product, i) => (
          <Link
            key={`${product.handle}${i}`}
            href={`/product/${product.handle}`}
            className="relative h-[50vh] w-1/2 flex-none md:w-1/3"
          >
            {product.featuredImage ? (
              <Image
                alt={product.title}
                className="h-4/5 w-full object-contain"
                sizes="33vw"
                width={100}
                height={60}
                src={product.featuredImage.url}
              />
            ) : null}
            <div className="inset-y-0 right-0 flex items-end justify-center">
              <div className="inline-flex bg-white p-4 text-xl font-semibold text-black dark:bg-black dark:text-white">
                {product.title}
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
