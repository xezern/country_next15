'use client';
import Image from "next/image";
import Link from "next/link";

export function RandomCountry({ data, params }) {
    
    return (
        <Link href={''} className="block max-w-sm gap-3 mx-auto sm:max-w-full group hover:no-underline focus:no-underline lg:grid lg:grid-cols-12 dark:bg-gray-50">
            <Image
                alt={data.name.common}
                width={200}
                height={200}
                src={data.flags.svg}
                priority
                className="object-cover w-full h-64 rounded sm:h-96 lg:col-span-7 dark:bg-gray-500" />
            <div className="p-6 space-y-2 lg:col-span-5">
                <h3 className="text-2xl font-semibold sm:text-4xl group-hover:underline group-focus:underline">{data.name.common}, <span className="text-2xl font-normal text-[#000000d4]">  {data.capital?.join(" , ")} </span></h3>
                <span className="text-xs dark:text-gray-600">Population: {data.population?.toLocaleString('en-Us')}</span>
                <p>Ei delenit sensibus liberavisse pri. Quod suscipit no nam. Est in graece fuisset, eos affert putent doctus id.</p>
                <div>
                    Borders: <br />
                    <div className="flex flex-wrap divide-x-2 rounded dark:text-gray-800 dark:divide-gray-300">
                        {
                            data.borders ?
                                data.borders.map(item => (
                                    <button
                                        className="px-3 py-1"
                                        onClick={(e) => {
                                            e.stopPropagation();
                                            router.push(`/${item}`);
                                        }}
                                        key={item} href={item}>{item}</button>

                                )) :
                                'Not Found'
                        }
                    </div>
                </div>


            </div>
        </Link>
    )
}
