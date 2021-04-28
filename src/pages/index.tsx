export default function Home(props) {
  console.log(props.episodes);

  return <div></div>;
}


export async function getStaticProps() {
  const response = await fetch("http://localhost:3333/episodes");
  const data = await response.json();

  return {
    props: {
      episodes: data,
    },
    //determina de quanto em quanto tempo vai gerar um html novo
    revalidate: 60 * 60 * 8, // A cada 8 hrs
  };
}