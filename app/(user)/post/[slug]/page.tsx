import { groq } from "next-sanity";
import { client } from "@/lib/sanity.client";
import Image from "next/image";
import urlFor from "@/lib/urlFor";
import { PortableText } from "@portabletext/react";
import { RichTextComponents } from "@/components/RichTextComponents";
import Header from "@/components/Header";
import Footer from "@/components/Footer";


type Props = {
    params: {
        slug: string;
    };
};

export const revalidate = 30;

async function generateStaticParams() {
    const query = groq`*[_type=='post']
    {
        slug
    }`;

const slugs: Post[] = await client.fetch(query);
const slugRoutes = slugs.map((slug) => slug.slug.current);

return slugRoutes.map(slug => ({
    slug,
}))
}

async function Post({params: {slug }}: Props) {
    
    const query= groq`
     *[_type=='post' && slug.current == $slug][0]
 {
    ...,
    author->,
    categories[]->
 }`;


const post: Post = await client.fetch(query, { slug });

return (
    <>
    <Header />
    <article className="px-2 pb-2 border-t border-black pt-4">
        <section className="space-y-2 text-white">
            <div className="relative min-h-56 flex flex-col md:flex-row justify-between">
                <div className="absolute top-0 w-full h-full opacity-10 blur-sm p-10">
                <Image 
                    className="relative object-cover oject-center mx-auto "
                    src={urlFor(post.mainImage).url()}
                    alt={post.author.name}
                    fill/>
                </div>
                <section className="p-5 bg-gradient-to-br from-black to-amber-900 w-full">
                    <div className="flex flex-col md:flex-row justify-between gap-y-5">
                        <div>
                            <h1 className="text-4xl font-extrabold">{post.title}</h1>

                                <p>
                                {new Date(post.publishedAt).toLocaleDateString("en", {
                                    day: "numeric",
                                    month: "long",
                                    year: "numeric",
                                })}
                                </p>
                        </div>
                        <div className="flex items-center space-x-2">
                        <Image 
                        className="rounded-full "
                        src={urlFor(post.author.image).url()}
                        alt={post.author.name}
                        height={50}
                        width={50}
                        />
                        <div className="w-64">
                            <h3 className="text-lg font-bold">{post.author.name}</h3>
                            <div>
                                {/* Todo: Author Bio */}
                            </div>
                        </div>
                        </div>
                    </div>
                    <div>
                    <h2 className="italic text-lg pt-2">{post.description}</h2>
                        <div className="flex items-center justify-end mt-auto space-x-2 ">
                            {post.categories.map ((category) => (
                                   <p key={category._id} className="bg-black rounded-lg text-white px-3 py-1 text-sm font-semibold mt-4">
                                        {category.title}
                                   </p>
                            ))}
                        </div>
                    </div>
                </section>
            </div>
        </section>
        <PortableText value={post.body} components={RichTextComponents} />
    </article>
    <Footer />
    </>
  )
}

export default Post