import { allPosts } from "contentlayer/generated";


type PostPageHeadProps = {
    params: {
      slug: string[];
    };
  };
  
  export default function PostPageHead({ params }: PostPageHeadProps) {
    const post = allPosts.find((post) => post.slug === params.slug.join('/'));
  
    const { title } = post || {
      title: 'Post Not Found',
    };
  
    return (
      <head
        title={title}
        />
    );
  }
