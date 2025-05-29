import { NotFound } from "@/components";
import { Cards } from "@/components/Landing";
import { useCountryByRegionQuery } from "@/services";

export default async function page({ params }) {
    const { regioncode } = await params;
    const data = await useCountryByRegionQuery(regioncode)

    if (data.status == 404) return <NotFound />

    return (
        <section className=" text-center bg-gray-200 text-black">
            <h1 className=" mx-auto font-bold leadi sm:text-5xl">
                <span className="capitalize">{regioncode}</span> qitəsindəki bütün ölkələr <br />
            </h1>
            <div className="container max-w-6xl p-6 mx-auto space-y-6 sm:space-y-12">
                <Cards data={data} />
            </div>
        </section>

    )
}
