"use client";
import { useQueryParams } from "@/hooks/use-query-params";
import { useScrollTopByElement } from "@/utils";
import { Pagination } from "antd";
import { useState } from "react";
import { Card } from "./Card";

export function Cards({ data }) {
    const count = 12
    const [page, setPage] = useState(1);
    const { addQuery } = useQueryParams();

    return (
        <>
            <div id="content" className="grid justify-center grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {data.slice(count * page - 12, count * page).map((item, i) => <Card key={item.ccn3 || i} item={item} />)}
            </div>
            <Pagination
                align="center"
                pageSize={count}
                total={data.length}
                onChange={(page) => {
                    setPage(page)
                    useScrollTopByElement("content")
                    addQuery('page', page)
                }}
            />
        </>
    )
}
