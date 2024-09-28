"use client"
import { useQuery, gql } from '@apollo/client';

const GET_DATA = gql`
    query {
        blogs {
            nodes {
                featuredImage {
                    node {
                        sourceUrl
                        slug
                    }
                }
                slug
                title
                date
            }
        }
    }
`;


export default function Blogs() {

    const { loading, error, data } = useQuery(GET_DATA);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error.message}</p>;

    return (
        <ul>
            {data?.blogs?.nodes?.map((blog) => (
                <li key={blog.slug}>
                    <h2>{blog.title}</h2>
                    <p>{blog.date}</p>
                    {blog.featuredImage?.node?.sourceUrl && (
                        <img src={blog.featuredImage.node.sourceUrl} alt={blog.title} />
                    )}
                </li>
            ))}
        </ul>
    );

}