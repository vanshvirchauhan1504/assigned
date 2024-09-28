"use client"
import { useQuery, gql } from '@apollo/client';
import Image from 'next/image';
import color from '@/assets/color.svg'

const GET_DATA = gql`
   query {
pages(where: {name: "Homepage"}) {
nodes {
    homepage {
        banners {
            bannerImage {
                node {
                    sourceUrl

                    }
            }
            bannersTitle
            bannerDescription
            bannerButton {
                    title
                    url
                    target
            }
        }
        
    }
}
}
}
`;


export default function Hero() {

    const { loading, error, data } = useQuery(GET_DATA);

    const bg = data?.pages?.nodes[0]?.homepage?.banners
    // console.log(data)
    // console.log(bg)

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error.message}</p>;

    return (
        <>
            <section className="relative h-screen w-full bg-blue-600">
                =            <div className="relative h-full">
                    <Image
                        src={bg[0]?.bannerImage?.node?.sourceUrl} // Replace with actual path
                        alt="Interior Emulsions Background"
                        fill
                        className="object-cover" // Ensures the image covers the section
                    />

                    <div className="absolute inset-0 flex flex-col justify-center items-start text-white pl-10">
                        <h1 className="text-4xl font-bold mb-3">{bg[0]?.bannersTitle}</h1>
                        <p className="text-lg mb-6">{bg[0].bannerDescription}</p>
                        <button className="bg-white text-blue-600 font-bold py-2 px-6 rounded-full hover:bg-gray-100">
                            {bg[0].bannerButton.title}
                        </button>
                    </div>
                </div>

                <div className="absolute top-[270px] w-full">
                    <Image
                        src={color} // Replace with actual path
                        alt="Rainbow Overlay"
                        width={1366} // Set the dimensions of the rainbow image
                        height={200} // Adjust height accordingly
                        className="w-full"
                    />
                </div>
            </section>
 
        </>
    );

}