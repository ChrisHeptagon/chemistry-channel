import Image from "next/image";
import { allPosts } from "contentlayer/generated"
import 'public/globals.css'


// This is the component that renders a single post card
export function PostCard ({ post }: { post:any }) {
  return (
    <div className=" max-w-[500px] min-h-fit inline-block shadow-md rounded-lg bg-[#5b9400] border border-[#025c5c]">
      <div className="flex items-center justify-center shadow-black drop-shadow">
    <a href={post.url}>
      <Image className="rounded-t-lg" src={post.thumbnail} width='500' height='500' alt={post.title}/>
    </a>
      </div>
    <div className="p-3">
      <span className="w-fit">
    <a className="flex text-[#000000] items-end justify-center text-center text-[2vw]" href={post.url}>
      <h2>{post.title}</h2>
    </a>
    <a href={post.url} className=" text-[#000000] flex items-end justify-center text-center text-[1.5vw]">
      <p>{post.description}</p>
    </a>
    </span>
    </div>
    </div>
  );
}


  
  
  export default function IndexPage() {
    return (
  
      <div className="bg-[#3a5eff]">    
        <h1 className="flex items-center justify-center bg-amber-600 font-Fugaz">
          You`re Watching The Chemistry Channel</h1>
          <div className="grid grid-flow-dense grid-cols-4 mx-[5vw] gap-10 py-5">
            {allPosts.map((post, idx) => (
              <PostCard post={post} key={idx}></PostCard>
            ))}
          </div> 
      </div>
    )
  }