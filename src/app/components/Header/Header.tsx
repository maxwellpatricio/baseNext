"use client";
export default function Title(props: any) {
    return (
        <>
            <h1>{props.site.title}</h1>
            <h2>{props.site.subtitle}</h2>
        </>
    );
}