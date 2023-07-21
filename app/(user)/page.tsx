import { groq } from "next-sanity";
import { client } from "../../lib/sanity.client";
import BlogList from "../../components/BlogList";
import Banner from "../../components/Banner";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Subscribe from "../../components/Subscribe";
import Video from "@/components/Video";
import Video2 from "@/components/Video2";
import Video3 from "@/components/Video3";
import Banner2 from "@/components/Banner2";
import BlogList2 from "@/components/BlogList2";
import Banner3 from "@/components/Banner3";





const query = groq`
*[_type == "post" && references(categories._ref, "ff0128fe-a35a-42a9-93d2-af34d6a1da8a", "76de2339-e45b-4785-b7a5-b5c9d0027ca4", "c6951262-6c89-4962-858d-a76e615ffdbb", "2479a754-662e-42dd-8125-534fda6266d1", "b12d9489-4ecc-46fa-a082-b3a04faf75b5", "c6fb47ba-735f-4bd2-9ba0-bf4309037d2a", "690f205a-be57-4488-b8fd-f11452dbab33", "bfc2df20-a3ae-47f8-acfa-258eb5561ce5", ) ] {
  ...,
  author->,
  categories[]->,
}
| order(_createdAt asc)
`;
const query2 = groq`
*[title == "Shita-kiri Suzume meets Shiba Inu" ||
  title == "Shita-kiri Suzume meets SHIB Metaverse" ||
  title == "Welcome back Dev Kobayashi"
  ] {
  ...,
  author->,
  categories[]->,
}
| order(_createdAt desc)
`;




export const revalidate = 30;

export default async function HomePage() {
  


const posts = await client.fetch(query);
const posts2 = await client.fetch(query2);

return (
  <>
  <Header />
  <Banner />
  <Banner2 />
  <Video />
  <BlogList posts={posts} />
  <Video2 />
  <Banner3 />
  <BlogList2 posts={posts2} />
  <Video3 />
  <Subscribe />
  <Footer />
  </>
  );
}
