Work Experience Visual Presentation on the "About" Page Guide:

Visual Presentation Structure
The work experience section on the about page displays each experience as a structured card-like layout with the following visual hierarchy: page.tsx:187-242

Company and Timeframe Header
Each experience starts with a horizontal flex container that displays the company name on the left and timeframe on the right: page.tsx:195-202

The company name uses variant="heading-strong-l" styling, while the timeframe uses smaller variant="heading-default-xs" with neutral-weak color for visual hierarchy. page.tsx:196-201

Role Display
Below the header, the role is displayed with variant="body-default-s" and brand-weak color styling: page.tsx:203-205

Achievements List
Achievements are rendered as an unordered list using a Column component with as="ul" and 16px gap between items: page.tsx:206-216

Each achievement is a list item with variant="body-default-m" text styling. page.tsx:207-215

Optional Images
If the experience includes images, they're displayed in a flex container with left padding and wrapping enabled: page.tsx:217-237

Each image is wrapped in a bordered container with medium radius and uses the SmartImage component with enlarge functionality. page.tsx:220-235

Content Source
The work experience data comes from the about.work.experiences array in the content configuration: content.js:99-144

Each experience object contains company, timeframe, role, achievements (as JSX elements), and optional images array with metadata like width, height, alt text, and source path. content.js:103-126

Notes
The work experience section is conditionally rendered based on about.work.display being true. The visual layout uses Once UI components for consistent spacing and typography throughout the portfolio system.

## **RELEVANT CODE TEMPLATE SNIPPETS EXAMPLE**

src/app/about/page.tsx
           </Column>
          )}
          {about.work.display && (
            <>
              <Heading as="h2" id={about.work.title} variant="display-strong-s" marginBottom="m">
                {about.work.title}
              </Heading>
              <Column fillWidth gap="l" marginBottom="40">
                {about.work.experiences.map((experience, index) => (
                  <Column key={`${experience.company}-${experience.role}-${index}`} fillWidth>
                    <Flex fillWidth horizontal="space-between" vertical="end" marginBottom="4">
                      <Text id={experience.company} variant="heading-strong-l">
                        {experience.company}
                      </Text>
                      <Text variant="heading-default-xs" onBackground="neutral-weak">
                        {experience.timeframe}
                      </Text>
                    </Flex>
                    <Text variant="body-default-s" onBackground="brand-weak" marginBottom="m">
                      {experience.role}
                    </Text>
                    <Column as="ul" gap="16">
                      {experience.achievements.map((achievement: JSX.Element, index: number) => (
                        <Text
                          as="li"
                          variant="body-default-m"
                          key={`${experience.company}-${index}`}
                        >
                          {achievement}
                        </Text>
                      ))}
                    </Column>
                    {experience.images.length > 0 && (
                      <Flex fillWidth paddingTop="m" paddingLeft="40" wrap>
                        {experience.images.map((image, index) => (
                          <Flex
                            key={index}
                            border="neutral-medium"
                            radius="m"
                            minWidth={image.width}
                            height={image.height}
                          >
                            <SmartImage
                              enlarge
                              radius="m"
                              sizes={image.width.toString()}
                              alt={image.alt}
                              src={image.src}
                            />
                          </Flex>
                        ))}
                      </Flex>
                    )}
                  </Column>
                ))}
              </Column>
            </>
          )}

          {about.studies.display && (
            <>

src/app/resources/content.js

    </>
    ),
  },
  work: {
    display: true, // set to false to hide this section
    title: "Work Experience",
    experiences: [
      {
        company: "FLY",
        timeframe: "2022 - Present",
        role: "Senior Design Engineer",
        achievements: [
          <>
            Redesigned the UI/UX for the FLY platform, resulting in a 20% increase in user
            engagement and 30% faster load times.
          </>,
          <>
            Spearheaded the integration of AI tools into design workflows, enabling designers to
            iterate 50% faster.
          </>,
        ],
        images: [
          // optional: leave the array empty if you don't want to display images
          {
            src: "/images/projects/project-01/cover-01.jpg",
            alt: "Once UI Project",
            width: 16,
            height: 9,
          },
        ],
      },
      {
        company: "Creativ3",
        timeframe: "2018 - 2022",
        role: "Lead Designer",
        achievements: [
          <>
            Developed a design system that unified the brand across multiple platforms, improving
            design consistency by 40%.
          </>,
          <>
            Led a cross-functional team to launch a new product line, contributing to a 15% increase
            in overall company revenue.
          </>,
        ],
        images: [],
      },
    ],
  },
  studies: {
    display: true, // set to false to hide this section
    title: "Studies",