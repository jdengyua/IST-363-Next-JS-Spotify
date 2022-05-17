import Container from "./Container"
import Section from "./Section"
import Row from "./Row"
import Col from "./Col"
import Image from 'next/image'
import Heading from "./Heading"
import Link from 'next/link'
import Button from "./Button"
import Paragraph from "./Paragraph"

const NewReleases = ({ items }) => {
    return <Section>
        <Container>
            <Heading level="2">New Releases</Heading>
            <Row>
                {items.map((item, index) => {
                    const { featuredImage, title, slug, albumInformation } = item.node;
                    const {sourceUrl, altText, mediaDetails } = featuredImage.node;
                    const { artistsToAlbums } = albumInformation;
                    return <Col key={index} xs="6" sm="4" md="3" marginBottom="2">
                        <Link href={`/albums/${slug}`}>
                            <a>
                                <Image
                                    src={sourceUrl}
                                    alt={altText}
                                    width={mediaDetails.width}
                                    height={mediaDetails.height}
                                />
                            </a>
                        </Link>
                        <Heading level="3">
                            <Link href={`/albums/${slug}`}>
                                <a>{title}
                                </a>
                            </Link>
                        </Heading>
                        {artistsToAlbums.map((artist) => {
                            const {title, slug} = artist;
                            return <Heading level="4">
                                <Link href={`/artists/$slug`}>
                                <a>
                                    {title}
                                </a>
                                </Link>

                                </Heading>
                        })}
                        
                    </Col>
                })}
            </Row>
        </Container>
    </Section>
}
export default NewReleases;