import Image from "next/image";
import Link from "next/link";

export function Card({ item }) {
    return (
        <Link scroll={true} href={`/country/${item.name.common.toLowerCase()}/${item.cca3}`} className="max-w-sm mx-auto group hover:no-underline focus:no-underline dark:bg-gray-50">
            <Image
                alt={item.name.common}
                role="presentation"
                className="object-cover w-full rounded h-44 dark:bg-gray-500"
                src={item.flags.svg}
                width={200}
                height={200}
            />
            <div className="p-6 space-y-2">
                <h3 className="text-2xl font-semibold group-hover:underline group-focus:underline">{item.name.common}, <span className="text-2xl font-normal"> {item.capital} </span></h3>
                <span className="text-xs dark:text-gray-600"> Population: {item.population?.toLocaleString('en-US')}  </span>
                <p>Mei ex aliquid eleifend forensibus, quo ad dicta apeirian neglegentur, ex has tantas percipit perfecto. At per tempor albucius perfecto, ei probatus consulatu patrioque mea, ei vocent delicata indoctum pri.</p>
            </div>
        </Link>
    )
}

