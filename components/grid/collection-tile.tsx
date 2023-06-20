import clsx from 'clsx';
import Image from 'next/image';

export function CollectionTileImage({
  isInteractive = false,
  background,
  active,
  labels,
  hero,
  ...props
}: {
  isInteractive?: boolean;
  background?: 'white' | 'pink' | 'purple' | 'black' | 'purple-dark' | 'blue' | 'cyan' | 'gray';
  active?: boolean;
  labels?: {
    title: string;
    isSmall?: boolean;
  };
  hero?: boolean;
  description?: string;
} & React.ComponentProps<typeof Image>) {
  return (
    <>
      <div
        className={clsx('relative flex h-fit w-full items-center justify-center overflow-hidden', {
          'bg-white dark:bg-white': background === 'white',
          'bg-[#ff0080] dark:bg-[#ff0080]': background === 'pink',
          'bg-[#7928ca] dark:bg-[#7928ca]': background === 'purple',
          'bg-black dark:bg-black': background === 'black',
          'bg-violetDark dark:bg-violetDark': background === 'purple-dark',
          'bg-blue-500 dark:bg-blue-500': background === 'blue',
          'bg-cyan-500 dark:bg-cyan-500': background === 'cyan',
          'bg-gray-100 dark:bg-gray-100': background === 'gray',
          'bg-gray-100 dark:bg-gray-900': !background,
          relative: labels
        })}
      >
        {active !== undefined && active ? (
          <span className="absolute h-full w-full bg-white opacity-25"></span>
        ) : null}
        {props.src ? (
          <Image
            className={clsx('relative h-full w-full object-contain', {
              'transition duration-300 ease-in-out hover:scale-105': isInteractive
            })}
            {...props}
            alt={props.title || ''}
          />
        ) : null}
        {labels ? (
          <div className="absolute left-0 top-0 w-3/4 text-black dark:text-white">
            <h3
              data-testid="product-name"
              className={clsx(
                'inline bg-white box-decoration-clone py-3 pl-5 font-semibold leading-loose shadow-[1.25rem_0_0] shadow-white dark:bg-black dark:shadow-black',
                !labels.isSmall ? 'text-3xl' : 'text-lg'
              )}
            >
              {labels.title}
            </h3>
          </div>
        ) : null}
        {hero ? (
          <div className="z-100 absolute h-full w-2/3">
            <p className="z-100 absolute left-[10%] top-36 w-4/5 text-center text-3xl">
              {props.description}
            </p>
            <button className="z-100 duration-250 absolute bottom-48 left-[20%] w-[60%] border-2 border-solid p-3 text-xl transition ease-in-out hover:border-violet-950 hover:bg-violet-950">
              Shop {props.title}
            </button>
          </div>
        ) : null}
      </div>
    </>
  );
}
