import React from "react";
import { allPosts } from ".contentlayer/generated";
import { useMDXComponent } from "next-contentlayer/hooks";
import Script from "next/script";
import { DesmosGraph, DesmosCalc, DesmosGraphCalc } from "components/desmos";
import { MultipleChoice, ShortResponse } from "components/questions";
import Head from "next/head";
import { GetStaticPaths, GetStaticProps } from "next";
import { ParsedUrlQuery } from "querystring";
import { AnyAaaaRecord } from "dns";


export const getStaticPaths = async() => {
    const paths = allPosts.map((post) => "/" + post.url);
  return {
    paths,
    fallback: false,
  };
}

export const getStaticProps = async ({params}:any) => {
  const post = allPosts.find((post) => post._raw.flattenedPath === params.slug);
  return {
    props: {
      post,
    },
  };
}

function Paragraph(props: any){
    return (
        <div className="py-5 text-[20px] mx-[10vw] select-none">
        <p className="text-justify font-Overpass" {...props}/>
        </div>
    )
}

function ImageWrapper(props: any){
    return (
        <img className=" bg-white border-[#389620] border-[8px] mx-auto" {...props}/>
    )
}

function HeadingTwo(props: any){
    return (
            <h2 className="flex py-5 text-[30px] font-Clearview text-center items-center justify-center font-bold " {...props}/>
    )
}

function HeadingThree(props: any){
    return (
            <h3 className="flex py-5  text-[20px] font-Overpass text-center items-center justify-center font-bold " {...props}/>
    )
}

const PostLayout = ({ post }:any) => {
  const MDXContent = useMDXComponent(post.body.code);
  return (
      <div className=" py-10 bg-yellow-300">
        <Head>
            <title>{post.title}</title>
        </Head>
        <Script strategy="beforeInteractive" src="/scripts/calculator.js"/>
        <Script strategy="beforeInteractive" src="/scripts/katex.min.js"/>
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/katex@0.16.4/dist/katex.css"></link>
        <div className="flex py-5 items-center justify-center">
            <h1 className=" text-[40px] font-Clearview">{post.title}</h1>
        </div>
        <MDXContent components={{
            DesmosGraph,
            DesmosCalc,
            DesmosGraphCalc,
            MultipleChoice,
            ShortResponse,
            p:Paragraph,
            h2:HeadingTwo,
            img:ImageWrapper,
            h3:HeadingThree,
            }}></MDXContent>
      </div>
  );
};

export default PostLayout;