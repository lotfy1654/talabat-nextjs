export default function Posts1(props) {
  // /posts
  return (
    <div>
      <h1>Posts Data Component</h1>
      {console.log(props.postdata.id)}
      <p>{props.postdata.title}</p>
      <p>{props.postdata.id}</p>
      <img src={props.postdata.thumbnailUrl} />
    </div>
  );
}


export async function getStaticPaths() {
  const req = await fetch("https://jsonplaceholder.typicode.com/photos");
  const data = await req.json();

  const paths = data.map((ele) => {
    return {
      params: { id: `${ele.id}` },
    };
  });

  return {
    paths: paths,
    fallback: false,
  };
}

export async function getStaticProps(context) {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/photos/${context.params.id}`
  );
  const data = await res.json();
  return {
    props: {
      postdata: data,
    },
  };
}
