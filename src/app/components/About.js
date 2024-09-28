"use client"
import { useQuery, gql } from '@apollo/client';
import Image from 'next/image';
import Link from 'next/link';

const GET_DATA = gql`
query {
  pages(where: { name: "Homepage" }) {
    nodes {
      homepage {
        homeAboutTitle
        homeAboutSubtitle
        homeAboutButton {
          target
          title
          url
        }
        homeAboutVideoImage {
          node {
            sourceUrl
          }
        }
        homeAboutVideoUrl
        homeAboutDescription
        homeCategoryTitle
        homeCategorySubtitle
        homeServicesTitle
        homeServicesSubtitle
        homeColoursTitle
        homeColoursSubtitle
        homeColoursButton {
          target
          title
          url
        }
        homeJoinBackgroundImage {
          node {
            sourceUrl
          }
        }
        homeJoinTitle
        homeJoinSubtitle
        homeJoinButton {
          target
          title
          url
        }
        homeJoinDescription
        categories {
link
title
image {
node {
sourceUrl
}
}
}
        
      }
    }
  }
}

`;


const About = () => {

    const { loading, error, data } = useQuery(GET_DATA);

    const about = data?.pages.nodes[0].homepage;
    const categories = about?.categories

    console.log(categories)
    return (
        <>
            <section className="bg-white py-10 red-bar">
                <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8">
                    {/* Left Content */}
                    <div className="p-6">
                        <h4 className="font-semibold mb-2">{about?.homeAboutSubTitle}</h4>
                        <h2 className="text-4xl font-bold mb-4">{about?.homeAboutTitle}</h2>
                        <p className="text-gray-600 text-lg mb-4">{about?.homeAboutDescription}</p>
                        <p className="text-gray-600 mb-6">{about?.homeAboutButton.title}
                        </p>

                        <Link href="" target="_blank">
                            <button className="border border-red-500 text-red-500 px-6 py-2 rounded-full font-semibold hover:bg-red-500 hover:text-white transition">
                                {about?.homeAboutButton.title}
                            </button>
                        </Link>
                    </div>

                    {/* Right Image */}
                    <div className="relative">
                        <div className="aspect-w-16 aspect-h-9">
                            <Image
                                src={about?.homeAboutVideoImage.node.sourceUrl}
                                alt="About Astral Paints"
                                layout="fill"
                                objectFit="cover"
                                className="rounded-lg shadow-lg"
                            />
                            <div className="absolute inset-0 flex justify-center items-center">
                                <div className="bg-white rounded-full p-3 shadow-lg cursor-pointer">
                                    <svg className="w-8 h-8 text-red-500" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M7.707 12.293l4.586-4.586a1 1 0 011.707.707v9.172a1 1 0 01-1.707.707l-4.586-4.586a1 1 0 010-1.414z"></path>
                                    </svg>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="w-full flex flex-col lg:flex-row orange-bar">
                {/* Left Div: Full-width image */}
                {
                    categories ? 
                    <>
                        <div className="w-full lg:w-1/2 h-full p-10">

                            <Image
                                src={categories[4].image.node.sourceUrl} // Pass your left image URL as props
                                alt="Left Image"
                                layout="responsive"
                                width={500}
                                height={500}
                                className="object-cover"
                            />

                        </div>
                <div className="w-full lg:w-1/2 grid grid-cols-2 grid-rows-2 p-10 gap-4">
                    {categories.map((category, index) => (
                        <div key={index} className="relative w-full h-full">

                            { 
                                index!=4 ? <Image
                                src={category?.image.node.sourceUrl}
                                alt={`Right Image ${index + 1}`}
                                layout="responsive"
                                width={500}
                                height={500}
                                className="object-cover"
                            /> : <></>

                            }
                            
                        </div>
                    ))}
                </div>
                </>
                        : <></>
                }
            </section>
        </>
    );
};

export default About;
