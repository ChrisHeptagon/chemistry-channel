import { allPosts } from "contentlayer/generated";


type PostPageHeadProps = {
    params: {
      unit: string;
    };
  };
  
  export default function PostPageHead({ params }: PostPageHeadProps) {
    const post = allPosts.find((post) => post.unit === params.unit);
  
    const { title } = post || {
      title: 'Post Not Found',
    };
  
    return (
      <head
        title={title}
        />
    );
  }
