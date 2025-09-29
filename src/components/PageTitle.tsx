'use client';

import { useEffect } from "react";

export default function PageTitle({ title }: {title: string}) {
    useEffect(() => {
        document.title = `${title} COMP2112 Blog`
    }, [title]);

    return null;
}