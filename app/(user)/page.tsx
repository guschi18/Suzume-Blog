import { groq } from "next-sanity";
import { client } from "../../lib/sanity.client";
import BlogList from "../../components/BlogList";
import Banner from "../../components/Banner";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Subscribe from "../../components/Subscribe";
import Video from "@/components/Video";
import Video2 from "@/components/Video2";



const query = groq`
*[_type == "post" && references(categories._ref, "ff0128fe-a35a-42a9-93d2-af34d6a1da8a", "76de2339-e45b-4785-b7a5-b5c9d0027ca4", "c6951262-6c89-4962-858d-a76e615ffdbb", "2479a754-662e-42dd-8125-534fda6266d1", "b12d9489-4ecc-46fa-a082-b3a04faf75b5", "c6fb47ba-735f-4bd2-9ba0-bf4309037d2a", "690f205a-be57-4488-b8fd-f11452dbab33", "bfc2df20-a3ae-47f8-acfa-258eb5561ce5", "01243b22-f6a5-4046-b6f5-40092ee7f20d") ] {
  ...,
  author->,
  categories[]->,
}
| order(_createdAt asc)
`;



export const revalidate = 30;

export default async function HomePage() {
  


const posts = await client.fetch(query);
return (
  <>
  <Header />
  <Banner />
  <Video />
  <BlogList posts={posts} />
  <Video2 />
  <Subscribe />
  <Footer />
  </>
  );
}
