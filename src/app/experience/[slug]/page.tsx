import { notFound } from "next/navigation";
import { getPosts } from "@/utils/utils";
import { Meta, Schema, Button, Column, Flex, Heading, Text, Badge, SmartLink } from "@once-ui-system/core";
import { baseURL, about, person } from "@/resources";
import { formatDate } from "@/utils/formatDate";
import { ScrollToHash, CustomMDX } from "@/components";
import { Metadata } from "next";

// Static params - explicitly define all experience routes
export function generateStaticParams() {
  return [
    { slug: "culture-compass-tours" },
    { slug: "chicago-bulls-college-prep" },
    { slug: "wildcat-watch" },
    { slug: "entegrity-energy-partners" },
    { slug: "ksu-air-force" },
    { slug: "lopez-klu-productions" }
  ];
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;

  try {
    const posts = getPosts(["src", "app", "work", "experiences"])
    let post = posts.find((post) => post.slug === slug);

    if (!post) return {};

    return Meta.generate({
      title: post.metadata.title,
      description: post.metadata.summary,
      baseURL: baseURL,
      image: post.metadata.image || `/api/og/generate?title=${post.metadata.title}`,
      path: `/experience/${post.slug}`,
    });
  } catch (error) {
    return {};
  }
}

export default async function Experience({
  params
}: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;

  try {
    const posts = getPosts(["src", "app", "work", "experiences"]);
    let post = posts.find((post) => post.slug === slug);

    if (!post) {
      notFound();
    }

    return (
      <Column as="section" maxWidth="m" horizontal="center" gap="l">
        <Schema
          as="blogPosting"
          baseURL={baseURL}
          path={`/experience/${post.slug}`}
          title={post.metadata.title}
          description={post.metadata.summary}
          datePublished={post.metadata.publishedAt}
          dateModified={post.metadata.publishedAt}
          image={post.metadata.image || `/api/og/generate?title=${encodeURIComponent(post.metadata.title)}`}
          author={{
            name: person.name,
            url: `${baseURL}${about.path}`,
            image: `${baseURL}${person.avatar}`,
          }}
        />
        <Column maxWidth="xs" gap="16">
          <Button data-border="rounded" href="/about" variant="tertiary" weight="default" size="s" prefixIcon="chevronLeft">
            Back to About
          </Button>
          <Heading variant="display-strong-s">{post.metadata.title}</Heading>
          {post.metadata.company && (
            <Badge background="brand-alpha-weak" paddingX="12" paddingY="4" onBackground="neutral-strong" textVariant="label-default-s">
              {post.metadata.company}
            </Badge>
          )}
          {post.metadata.period && (
            <Text variant="body-default-s" onBackground="neutral-weak">
              {post.metadata.period}
            </Text>
          )}
        </Column>
        
        <Column style={{ margin: "auto" }} as="article" maxWidth="xs">
          <CustomMDX source={post.content} />
        </Column>

        {/* Experience Links */}
        <Column maxWidth="xs" gap="16" marginTop="xl">
          <Flex gap="24" wrap horizontal="center">
            {post.metadata.website && (
              <SmartLink
                suffixIcon="arrowUpRightFromSquare"
                style={{ margin: "0", width: "fit-content" }}
                href={post.metadata.website}
              >
                <Text variant="body-default-s">Visit Website</Text>
              </SmartLink>
            )}
            {post.metadata.portfolio && (
              <SmartLink
                suffixIcon="arrowUpRightFromSquare"
                style={{ margin: "0", width: "fit-content" }}
                href={post.metadata.portfolio}
              >
                <Text variant="body-default-s">View Portfolio</Text>
              </SmartLink>
            )}
          </Flex>
        </Column>

        <ScrollToHash />
      </Column>
    );
  } catch (error) {
    console.error('Error rendering experience page:', error);
    notFound();
  }
} 