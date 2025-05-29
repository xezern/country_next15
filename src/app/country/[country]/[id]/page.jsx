import { NotFound } from "@/components";
import { ScrollTopJsx } from "@/components/ScrollTopJsx";
import { useCountryByIdQuery } from "@/services"
import Image from "next/image";
import Link from "next/link";

export default async function page({ params }) {
    const { id } = await params
    const [data] = await useCountryByIdQuery(id)

    if (data.status == 404) return <NotFound />

    const { name, currencies, capital, region, languages, borders, area, timezones, population, flags, } = data

    return (
        <>
            <section className="bg-gray-200 text-black ">
                <div className="container mx-auto flex px-5 py-24 min-h-[74vh] md:flex-row flex-col items-center">
                    <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
                        <h1 className="title-font sm:text-4xl text-3xl mb-2 font-medium text-black">
                            {name.common}<p className="text-lg"> Paytaxtı: {capital}</p>
                        </h1>
                        <p className="mb-2 leading-relaxed">Danışılan dillər: {Object.values(languages).join(", ")}</p>
                        <div className="mb-2 leading-relaxed">
                            <b>Əskinazları</b>: {Object.values(currencies).map(item => <p key={item.name}> {item.name} və onun simbolu {item.symbol} </p>)}
                        </div>
                        <p className="mb-2 leading-relaxed">
                            <b>Regionu</b>: {region}
                        </p>
                        <p className="mb-2 leading-relaxed">
                            <b>Ümumi Sahısi</b>: {area}
                        </p>
                        <p className="mb-2 leading-relaxed">
                            <b>Əhalisi</b>: {population.toLocaleString('en-US')}
                        </p>
                        <p className="mb-2 leading-relaxed">
                            <b>Saat qurşağı</b>: {timezones.join(" / ")}
                        </p>
                        <div className="flex justify-start gap-[8px] flex-wrap">
                            {borders.map(elem =>
                                <Link key={elem}
                                    className="inline-flex  text-white bg-indigo-500 border-0 py-2 px-2 focus:outline-none hover:bg-indigo-600 rounded text-lg"
                                    href={`/country/${name.common.toLowerCase()}/${elem} `}
                                >
                                    {elem}
                                </Link>
                            )}

                        </div>
                    </div>
                    <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
                        <Image
                            width={800}
                            height={800}
                            className="object-cover object-center rounded"
                            alt={name.common + ' flag'}
                            src={flags.svg}
                            priority
                        />
                    </div>
                </div>
            </section>

        </>
    )
}
