import { groq } from "next-sanity";
import { client } from "@/lib/sanity.client";
import Image from "next/image";
import urlFor from "@/lib/urlFor";
import { PortableText } from "@portabletext/react";
import { RichTextComponents } from "@/components/RichTextComponents";

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
    
    const query = groq`
    *[_type == "post2" && references(categories._ref,"01243b22-f6a5-4046-b6f5-40092ee7f20d","01243b22-f6a5-4046-b6f5-40092ee7f20d", "61370841-b442-4f23-98f0-e62ef7587ae2" ) ] {
      ...,
      author->,
      categories[]->,
    }
    | order(_createdAt asc)
    `;


const post: Post = await client.fetch(query, { slug });

return (
    <article className="px-10 pb-2 border-t border-black pt-4">
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
  )
}

export default Post