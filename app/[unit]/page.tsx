import { allPosts } from 'contentlayer/generated';
import Error from 'next/error';
import Image from "next/image";
import { notFound } from 'next/navigation';

type PostPageProps = {
  params: {
    unit: string;
  };
};

export async function generateStaticParams(): Promise<
  PostPageProps['params'][]
> {
  return allPosts.map(({ unit }) => ({
    unit,
  }));
}

// This is the component that renders a single post card
export function PostCard ({ post }: { post:any }) {
  return (
    <div className=" max-w-[500px] min-h-fit inline-block shadow-md rounded-lg bg-[green] border border-[#025c5c]">
      <div className="flex items-center justify-center shadow-black drop-shadow">
    <a href={post.url}>
      <Image className="rounded-t-lg bg-white" src={post.thumbnail} width='500' height='500' alt={post.title}/>
    </a>
      </div>
    <div className="p-3">
      <span className="w-fit">
    <a className="flex text-[#000000] font-Clearview items-end justify-center text-center text-[2vw]" href={post.url}>
      <h2>{post.title}</h2>
    </a>
    <a href={post.url} className="font-Overpass text-[#000000] flex items-end justify-center text-center text-[1.5vw]">
      <p>{post.description}</p>
    </a>
    </span>
    </div>
    </div>
  );
}

  export default function IndexPage({ params }: PostPageProps) {
    let unitPosts = allPosts.filter((post) => post.unit === params.unit);
    if (unitPosts.length === 0) {
      notFound();
    }
    return (
      <div className="bg-[blue]">    
          <div className="grid grid-flow-dense grid-cols-4 mx-[5vw] gap-10 py-5">
            {unitPosts.map((post, idx) => (
              <PostCard post={post} key={idx}></PostCard>
            ))}
          </div> 
      </div>
    )
  }