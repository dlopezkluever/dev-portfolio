## Styling and Theming:
This document describes the styling and theming system used in Magic Portfolio. It covers the CSS architecture, component-specific styling, theme management, responsive design patterns, and animation utilities implemented throughout the application.

For information about content structure, see Content Structure.

CSS Architecture
Magic Portfolio uses a combination of global CSS variables (custom properties) and component-specific styles with CSS Modules. This architecture provides both global consistency and component encapsulation.

Once UI Components

Component Styles (CSS Modules)

Global Styling System

CSS Variables
(--theme-*)

Spacing Variables
(--static-space-*)

Transition Variables
(--transition-*)

Custom Media Queries
(--s, --m, --l)

about.module.scss

Projects.module.scss

Other Component Modules

Flex Component

Column Component

Text Component

Button Component

Sources: 
src/components/about/about.module.scss
1-27
 
src/components/work/Projects.module.scss
1-17

Design Token System
The application uses a robust design token system implemented through CSS variables. These tokens ensure consistency across the entire application and simplify theme switching.

Token Type	Example	Usage
Spacing	--static-space-4, --static-space-8, --static-space-64	Consistent margins, paddings, and positioning
Transitions	--transition-micro-medium	Consistent animation timing
Media Query Breakpoints	--s	Standardized responsive breakpoints
These tokens can be seen in use within component-specific styles. For example, the About component uses spacing tokens for hover effects and avatar positioning:

.hover {
    transition: var(--transition-micro-medium);

    &:hover {
        transform: translateX(var(--static-space-4));
    }
}

.avatar {
    position: sticky;
    height: fit-content;
    top: var(--static-space-64);
}
Sources: 
src/components/about/about.module.scss
1-13

CSS Modules Implementation
Magic Portfolio uses CSS Modules to scope styles to specific components, preventing global style conflicts. Each component has its own .module.scss file following the naming convention ComponentName.module.scss.

Key benefits of this approach:

Style encapsulation - prevents unwanted style inheritance
Locally scoped class names - eliminates naming conflicts
Explicit dependencies - makes it clear which styles apply to which components
Composition - allows for style composition across modules
Example from the Projects component:

.hover {
    transition: var(--transition-micro-medium);

    &:hover {
        transform: translateX(var(--static-space-8));

        .indicator {
            transform: rotate(0);
        }
    }
}

.indicator {
    transform: rotate(-90deg);
    left: -2rem;
    transition: var(--transition-micro-medium);
}
Sources: 
src/components/work/Projects.module.scss
1-17

Theme Management
Magic Portfolio implements a light/dark theme system. Theme switching is managed through the ThemeToggle component located in the Header.

Component Consumption

DOM & CSS

Theme Management System

Updates

Saves preference

Restores preference

Sets theme class

Applies class to

Has

Toggle values of

Consumed by

Consumed by

Consumed by

ThemeToggle Component

Theme State (Light/Dark)

Browser LocalStorage

RootLayout Component

HTML Root Element

.light/.dark Classes

Theme CSS Variables

Background Component

Once UI Components

Custom Components

The theme system works by:

Storing theme preference in localStorage
Applying a .light or .dark class to the root HTML element
Using CSS variables with different values based on the active theme class
Components consuming these theme variables automatically adapt to theme changes
Sources: Component hierarchy diagram

Responsive Design
The Magic Portfolio uses custom media queries for responsive design. These are defined as CSS custom media queries (likely using PostCSS) and referenced in component styles.

Example from the About component:

@media (--s) {
    .avatar {
        top: auto;
    }

    .textAlign {
        text-align: center;
    }

    .blockAlign {
        align-self: center;
    }
}
This media query (--s) applies specific styles for small screens, adjusting layout and alignment for better mobile viewing.

Sources: 
src/components/about/about.module.scss
15-27

Animation and Transition Utilities
The application implements consistent animations through transition utilities defined as CSS variables. These ensure that interactive elements have cohesive motion throughout the experience.

Examples include:

Hover effects with horizontal translation:

.hover {
    transition: var(--transition-micro-medium);

    &:hover {
        transform: translateX(var(--static-space-4));
    }
}
Rotation transitions for indicators:

.indicator {
    transform: rotate(-90deg);
    left: -2rem;
    transition: var(--transition-micro-medium);
}

&:hover {
    .indicator {
        transform: rotate(0);
    }
}
These animation patterns create subtle, consistent interactions that enhance usability while maintaining a cohesive feel.

Sources: 
src/components/about/about.module.scss
1-7
 
src/components/work/Projects.module.scss
1-17

Integration with Once UI
The Once UI component library used in Magic Portfolio likely provides its own styling foundations that are extended by the application's custom styling.

Rendered Components

Magic Portfolio Styling

Once UI Styling

Once UI Design Tokens

Base Component Styles

Custom Design Tokens

Theme-Specific Overrides

Custom CSS Modules

Base UI Components
(Flex, Column, Text, etc.)

Custom Components
(About, Projects, etc.)

The design token system in Magic Portfolio likely builds upon or extends the token system from Once UI, ensuring consistency between the library components and custom application components.

Sources: Core System Architecture diagram, Component Hierarchy diagram

Conclusion
Magic Portfolio implements a modern, maintainable styling architecture through:

A robust CSS variable-based design token system
Component-scoped styles using CSS Modules
Theme switching between light and dark modes
Custom media queries for responsive design
Consistent animation patterns through transition utilities
Integration with the Once UI component library
This approach ensures visual consistency, maintainability, and a seamless user experience across different viewport sizes and user preferences.
.....

## Project Components
Relevant source files
This document provides a comprehensive overview of the Project Components used in the Magic Portfolio system. Project Components are responsible for displaying portfolio work in various formats, including project cards, project listings, and individual project pages. For information about blog display components, see Blog Components, and for layout structure components, see Layout Components.

1. Component Overview
Project Components form a hierarchical system that handles the rendering of portfolio projects throughout the application. These components leverage the Once UI component library and integrate with the content management system to display project information in a structured and visually appealing manner.

Project Component Hierarchy
Content Sources

Once UI Components

Project Components System

Projects Component
(src/components/work/Projects.tsx)

ProjectCard Component
(src/components/ProjectCard.tsx)

Project Page
(src/app/work/[slug]/page.tsx)

Carousel

Column

Flex

Heading

Text

SmartLink

SmartImage

AvatarGroup

MDX Project Files
(src/app/work/projects/*)

Content Resources
(src/app/resources/content.js)

CustomMDX Component

Sources: 
src/components/work/Projects.tsx
1-37
 
src/components/ProjectCard.tsx
1-90
 src/app/work/[slug]/page.tsx:1-102

2. Key Components
Component	Purpose	File Location
ProjectCard	Displays a single project with images, title, description, and links	src/components/ProjectCard.tsx
Projects	Renders multiple ProjectCard components based on MDX content	src/components/work/Projects.tsx
Project Page	Displays detailed information for a single project	src/app/work/[slug]/page.tsx
Sources: 
src/components/work/Projects.tsx
1-37
 
src/components/ProjectCard.tsx
1-90
 src/app/work/[slug]/page.tsx:1-102

3. ProjectCard Component
The ProjectCard component is the foundational building block for displaying projects. It presents a project with images, title, description, and links to both the case study and external project.

Props Interface
interface ProjectCardProps {
  href: string;          // Link to the case study page
  priority?: boolean;    // Priority flag for image loading
  images: string[];      // Array of image URLs
  title: string;         // Project title
  content: string;       // Project content (MDX)
  description: string;   // Short project description
  avatars: { src: string }[]; // Team member avatars
  link: string;          // External project link
}
Sources: 
src/components/ProjectCard.tsx
13-22


Sources: 
src/components/ProjectCard.tsx
24-90

Key Features
Image Carousel: Displays multiple project images in a carousel format
Team Member Display: Shows avatars of team members involved in the project
Responsive Layout: Adapts to different screen sizes using mobileDirection prop
Two-Link System: Provides links to both the case study and the external project
Sources: 
src/components/ProjectCard.tsx
33-87

4. Projects Component
The Projects component is a container that renders multiple ProjectCard components. It fetches project data from MDX files and handles the sorting and filtering of projects.

Props Interface
interface ProjectsProps {
  range?: [number, number?]; // Optional range to limit displayed projects
}
Sources: 
src/components/work/Projects.tsx
5-7

Data Flow
getPosts()
(fetch MDX files)

Sort projects by date

Apply range filter (if specified)

Render ProjectCard components

Sources: 
src/components/work/Projects.tsx
9-37

Implementation Details
Fetches project data using getPosts() utility function
Sorts projects by publication date (newest first)
Allows limiting the number of displayed projects using the range prop
Renders each project using the ProjectCard component
Passes the priority prop to the first two project cards for optimized loading
Sources: 
src/components/work/Projects.tsx
9-37

5. Project Page
The individual project page (src/app/work/[slug]/page.tsx) is responsible for rendering detailed information about a single project. It integrates with the MDX content system to display rich, formatted content.

Structure of a Project Page
Project Page Component

Header Section
- Back Button
- Project Title

Featured Image
(First image from metadata)

Meta Information
- Team Avatars
- Publication Date

MDX Content
(Project details)

MDX Project Files

getPosts() utility

Find project by slug

SEO Components
- Meta
- Schema

Sources: src/app/work/[slug]/page.tsx:41-102

Key Functions
generateStaticParams(): Generates static paths for all projects during build time
generateMetadata(): Creates metadata for SEO optimization
Project Rendering: Renders the project content with appropriate layout and styling
Sources: src/app/work/[slug]/page.tsx:12-39, src/app/work/[slug]/page.tsx:41-102

6. Data Flow in Project Components
The following diagram illustrates how data flows through the Project Components system:

"Once UI Components"
"Project Page"
"ProjectCard Component"
"Projects Component"
"getPosts() Utility"
"MDX Project Files"
"Once UI Components"
"Project Page"
"ProjectCard Component"
"Projects Component"
"getPosts() Utility"
"MDX Project Files"
loop
[For each project]
Provide content files
Return parsed project data
Sort projects by date
Apply range filter (if specified)
Render with project data
Render using UI components
Provide content files
Find project by slug
Render header and metadata
Render featured image
Render project content
Sources: 
src/components/work/Projects.tsx
9-37
 
src/components/ProjectCard.tsx
24-90
 src/app/work/[slug]/page.tsx:41-102

7. Project Content Structure
Projects are defined as MDX files located in the src/app/work/projects directory. Each project file includes frontmatter metadata and markdown content.

Project Metadata Structure
Project MDX files contain the following metadata fields:

Field	Type	Description
title	string	Project title
summary	string	Short description for cards and SEO
publishedAt	date	Publication date
images	string[]	Array of image URLs
team	object[]	Array of team members with avatars
link	string	External project link
tag	string	Optional project category tag
Sources: src/app/work/[slug]/page.tsx:52-56, 
src/components/work/Projects.tsx
22-33

8. Integration with Once UI
Project Components heavily leverage the Once UI component library for layout and visual elements. Key Once UI components used include:

Column and Flex for layout structure
Carousel for displaying multiple project images
SmartLink and SmartImage for enhanced links and images
Heading and Text for typography
AvatarGroup for displaying team members
This integration ensures consistent styling and behavior across the application.

Sources: 
src/components/ProjectCard.tsx
3-11
 
src/components/work/Projects.tsx
2
 src/app/work/[slug]/page.tsx:4

9. Customization Options
To customize the Project Components, consider the following approaches:

Modify Project Card Layout: Edit the ProjectCard.tsx component to change the layout, styling, or displayed information.
Filter or Sort Projects: Update the Projects.tsx component to change how projects are filtered or sorted.
Project Page Template: Modify src/app/work/[slug]/page.tsx to change the layout of individual project pages.
Project Metadata: Adjust the frontmatter in MDX project files to change what information is available to the components.
Sources: 
src/components/work/Projects.tsx
9-37
 
src/components/ProjectCard.tsx
24-90
 src/app/work/[slug]/page.tsx:41-102


.....
## More Specfic for the project card Styling and Structure
The project items you see are rendered using the ProjectCard component ProjectCard.tsx:24-89 . Each card has this structure:

Image carousel at the top using the Carousel component ProjectCard.tsx:35-41
Content section with title, team avatars, description, and action links ProjectCard.tsx:42-87
The cards are displayed on both home and work pages through the Projects component Projects.tsx:20-36 , which fetches project data from MDX files and renders each as a ProjectCard.

Case Study Page Functionality
When you click "Read case study", it navigates to the individual project page at /work/[slug] page.tsx:41-102 . This page:

Displays a back button to return to projects page.tsx:76-78
Shows the project title page.tsx:79
Renders the featured image (first image from metadata) page.tsx:81-89
Displays team avatars and publication date page.tsx:91-96
Renders the full MDX content using CustomMDX page.tsx:97
Adding Content to Project Pages
Tags
Tags are defined in the MDX frontmatter using the tag field utils.ts:18 . You can add them to your project files like:

---  
title: "Your Project Title"  
tag: "Design"  
---
Pictures
Images are handled through the images array in frontmatter utils.ts:17 . The first image becomes the featured image, and you can add multiple images:

---  
images:  
  - "/images/projects/your-project/cover.jpg"  
  - "/images/projects/your-project/detail-1.jpg"  
---
Within the MDX content, images are automatically converted to SmartImage components mdx.tsx:46-65 with enhanced styling and enlarge functionality.

Videos and Embeds
The SmartImage component supports both MP4 videos and YouTube embeds SmartImage.tsx:97-161 . You can embed videos by:

MP4 videos: Use .mp4 file extensions in your src attribute
YouTube videos: Use YouTube URLs directly in the src attribute SmartImage.tsx:103-110
Example in MDX:

<SmartImage   
  src="https://www.youtube.com/watch?v=YOUR_VIDEO_ID"   
  aspectRatio="16/9"   
  radius="l"   
/>
To replicate the exact style you mentioned, create a new MDX file in src/app/work/projects/ with appropriate frontmatter and content, and it will automatically appear in your project listings with the same styling as the existing cards.

Notes
The project system uses a content-driven approach where all project data comes from MDX files in the src/app/work/projects directory. The styling is consistent across all projects through the Once UI component system, ensuring your new projects will match the existing design aesthetic.

# Relevant code:

## src/components/ProjectCard.tsx
  link: string;
}
export const ProjectCard: React.FC<ProjectCardProps> = ({
  href,
  images = [],
  title,
  content,
  description,
  avatars,
  link,
}) => {
  return (
    <Column fillWidth gap="m">
      <Carousel
        sizes="(max-width: 960px) 100vw, 960px"
        images={images.map((image) => ({
          src: image,
          alt: title,
        }))}
      />
      <Flex
        mobileDirection="column"
        fillWidth
        paddingX="s"
        paddingTop="12"
        paddingBottom="24"
        gap="l"
      >
        {title && (
          <Flex flex={5}>
            <Heading as="h2" wrap="balance" variant="heading-strong-xl">
              {title}
            </Heading>
          </Flex>
        )}
        {(avatars?.length > 0 || description?.trim() || content?.trim()) && (
          <Column flex={7} gap="16">
            {avatars?.length > 0 && <AvatarGroup avatars={avatars} size="m" reverse />}
            {description?.trim() && (
              <Text wrap="balance" variant="body-default-s" onBackground="neutral-weak">
                {description}
              </Text>
            )}
            <Flex gap="24" wrap>
              {content?.trim() && (
                <SmartLink
                  suffixIcon="arrowRight"
                  style={{ margin: "0", width: "fit-content" }}
                  href={href}
                >
                  <Text variant="body-default-s">Read case study</Text>
                </SmartLink>
              )}
              {link && (
                <SmartLink
                  suffixIcon="arrowUpRightFromSquare"
                  style={{ margin: "0", width: "fit-content" }}
                  href={link}
                >
                  <Text variant="body-default-s">View project</Text>
                </SmartLink>
              )}
            </Flex>
          </Column>
        )}
      </Flex>
    </Column>
  );
};

## src/components/work/Projects.tsx


    ? sortedProjects.slice(range[0] - 1, range[1] ?? sortedProjects.length)
    : sortedProjects;
  return (
    <Column fillWidth gap="xl" marginBottom="40" paddingX="l">
      {displayedProjects.map((post, index) => (
        <ProjectCard
          priority={index < 2}
          key={post.slug}
          href={`work/${post.slug}`}
          images={post.metadata.images}
          title={post.metadata.title}
          description={post.metadata.summary}
          content={post.content}
          avatars={post.metadata.team?.map((member) => ({ src: member.avatar })) || []}
          link={post.metadata.link || ""}
        />
      ))}
    </Column>
  );
}

##src/app/work/[slug]/page.tsx


  });
}
export default async function Project({
  params
}: { params: Promise<{ slug: string | string[] }> }) {
  const routeParams = await params;
  const slugPath = Array.isArray(routeParams.slug) ? routeParams.slug.join('/') : routeParams.slug || '';

  let post = getPosts(["src", "app", "work", "projects"]).find((post) => post.slug === slugPath);

  if (!post) {
    notFound();
  }

  const avatars =
    post.metadata.team?.map((person) => ({
      src: person.avatar,
    })) || [];

  return (
    <Column as="section" maxWidth="m" horizontal="center" gap="l">
      <Schema
        as="blogPosting"
        baseURL={baseURL}
        path={`${work.path}/${post.slug}`}
        title={post.metadata.title}
        description={post.metadata.summary}
        datePublished={post.metadata.publishedAt}
        dateModified={post.metadata.publishedAt}
        image={`${baseURL}/og?title=${encodeURIComponent(post.metadata.title)}`}
        author={{
          name: person.name,
          url: `${baseURL}${about.path}`,
          image: `${baseURL}${person.avatar}`,
        }}
      />
      <Column maxWidth="xs" gap="16">
        <Button data-border="rounded" href="/work" variant="tertiary" weight="default" size="s" prefixIcon="chevronLeft">
          Projects
        </Button>
        <Heading variant="display-strong-s">{post.metadata.title}</Heading>
      </Column>
      {post.metadata.images.length > 0 && (
        <SmartImage
          priority
          aspectRatio="16 / 9"
          radius="m"
          alt="image"
          src={post.metadata.images[0]}
        />
      )}
      <Column style={{ margin: "auto" }} as="article" maxWidth="xs">
        <Flex gap="12" marginBottom="24" vertical="center">
          {post.metadata.team && <AvatarGroup reverse avatars={avatars} size="m" />}
          <Text variant="body-default-s" onBackground="neutral-weak">
            {post.metadata.publishedAt && formatDate(post.metadata.publishedAt)}
          </Text>
        </Flex>
        <CustomMDX source={post.content} />
      </Column>
      <ScrollToHash />
    </Column>
  );
}

once-ui-system/magic-portfolio
src/app/utils/utils.ts


  publishedAt: string;
  summary: string;
  image?: string;
  images: string[];
  tag?: string;
  team: Team[];
  link?: string;
};


once-ui-system/magic-portfolio
src/components/mdx.tsx


  );
}
function createImage({ alt, src, ...props }: SmartImageProps & { src: string }) {
  if (!src) {
    console.error("SmartImage requires a valid 'src' property.");
    return null;
  }

  return (
    <SmartImage
      marginTop="8"
      marginBottom="16"
      enlarge
      radius="m"
      aspectRatio="16 / 9"
      border="neutral-alpha-medium"
      sizes="(max-width: 960px) 100vw, 960px"
      alt={alt}
      src={src}
      {...props}
    />
  );
}

function slugify(str: string): string {

#src/once-ui/components/SmartImage.tsx


    };
  };
  const isYouTubeVideo = (url: string) => {
    const youtubeRegex =
      /(?:youtube\.com\/(?:[^\/\n\s]+\/\S+\/|(?:v|e(?:mbed)?)\/|\S*?[?&]v=)|youtu\.be\/)([a-zA-Z0-9_-]{11})/;
    return youtubeRegex.test(url);
  };

  const getYouTubeEmbedUrl = (url: string) => {
    const match = url.match(
      /(?:youtube\.com\/(?:[^\/\n\s]+\/\S+\/|(?:v|e(?:mbed)?)\/|\S*?[?&]v=)|youtu\.be\/)([a-zA-Z0-9_-]{11})/,
    );
    return match
      ? `https://www.youtube.com/embed/${match[1]}?controls=0&rel=0&modestbranding=1`
      : "";
  };

  const isVideo = src?.endsWith(".mp4");
  const isYouTube = isYouTubeVideo(src);

  return (
    <>
      <Flex
        ref={imageRef}
        fillWidth
        overflow="hidden"
        zIndex={0}
        cursor={enlarge ? "interactive" : ""}
        style={{
          outline: "none",
          isolation: "isolate",
          height: aspectRatio ? "" : height ? `${height}rem` : "100%",
          aspectRatio,
          borderRadius: isEnlarged ? "0" : undefined,
          ...calculateTransform(),
        }}
        onClick={handleClick}
        {...rest}
      >
        {isLoading && <Skeleton shape="block" />}
        {!isLoading && isVideo && (
          <video
            src={src}
            autoPlay
            loop
            muted
            playsInline
            style={{
              width: "100%",
              height: "100%",
              objectFit: objectFit,
            }}
          />
        )}
        {!isLoading && isYouTube && (
          <iframe
            width="100%"
            height="100%"
            src={getYouTubeEmbedUrl(src)}
            frameBorder="0"
            allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            style={{
              objectFit: objectFit,
            }}
          />
        )}
        {!isLoading && !isVideo && !isYouTube && (
          <Image
            src={src}
