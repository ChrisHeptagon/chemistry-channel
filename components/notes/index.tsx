import { NextPage } from "next"
import { allPosts } from "contentlayer/generated"
import Image from "next/image";
import Head from "next/head";

export function PostCard ({ post }: { post:any }) {
  return (
    <div className=" max-w-[500px] min-h-fit inline-block shadow-md rounded-lg bg-[#07af2b] border border-[#025c5c]">
      <div className="flex items-center justify-center shadow-black drop-shadow">
    <a href={post.url}>
      <Image className="rounded-t-lg bg-white" src={post.thumbnail} width='500' height='500' alt={post.title}/>
    </a>
      </div>
    <div className="p-3">
      <span className="w-fit">
    <a className="flex text-[#ffffff] font-Clearview items-end justify-center text-center text-[2vw]" href={post.url}>
      <h2>{post.title}</h2>
    </a>
    <a href={post.url} className="font-Overpass text-[#ffffff] flex items-end justify-center text-center text-[1.5vw]">
      <p>{post.description}</p>
    </a>
    </span>
    </div>
    </div>
  );
}


export default function IndexPage() {
  return (

    <div className="bg-[#ffee00]">    
    <Head>
      <title>Algebra Avenue</title>
    </Head>
      <h1 className="flex items-center justify-center bg-amber-600 font-Clearview">
        Welcome to Algebra Avenue</h1>
        <div className="grid grid-flow-dense grid-cols-4 mx-[5vw] gap-10 py-5">
          {allPosts.map((post, idx) => (
            <PostCard post={post} key={idx}></PostCard>
          ))}
        </div> 
    </div>
  )
}