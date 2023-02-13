import { notFound } from 'next/navigation';
import { allPosts } from 'contentlayer/generated';
import { useMDXComponent } from 'next-contentlayer/hooks';
import { Post } from 'contentlayer/generated';

type PostPageProps = {
  params: {
    slug: string[];
  };
};

export async function generateStaticParams(): Promise<
  PostPageProps['params'][]
> {
  return allPosts.map(({ slug }) => ({
    slug: slug.split('/'),
  }));
}

function Paragraph(props: any){
  return (
      <div className="py-5 text-[20px] mx-[10vw]">
      <p className="text-justify" {...props}/>
      </div>
  )
}

function Heading1(props: any){
  return (
      <div className="py-5 text-[40px] mx-[10vw]">
      <h1 className="text-center" {...props}/>
      </div>
  )
}

function Heading2(props: any){
  return (
      <div className="py-5 text-[30px] mx-[10vw]">
      <h2 className="text-center" {...props}/>
      </div>
  )
}



export default function PostPage({ params }: PostPageProps) {
  const post = allPosts.find(({ slug }) => slug === params.slug.join('/')) as Post;
  const MDXContent = useMDXComponent(post.body.code)

  if (!post) {
    notFound();
  }

  return (
    <article className="h-fit p-8">
      <p title={post.title} />
      <MDXContent 
       components={{
        p: Paragraph,
        h1: Heading1,
        h2: Heading2,
       }}/>
    </article>
  );
}