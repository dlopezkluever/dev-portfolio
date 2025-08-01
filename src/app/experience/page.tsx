import { Heading, Text, Column } from "@once-ui-system/core";
import { about } from "@/resources";

export default function Experience() {
  return (
    <Column as="section" maxWidth="m" horizontal="center" gap="l" marginTop="l">
      <Column textAlign="center" maxWidth="xs" gap="s">
        <Heading as="h1" variant="display-strong-s">
          {about.workExperience.title}
        </Heading>
        <Text variant="body-default-l" onBackground="neutral-weak">
          {about.workExperience.description}
        </Text>
      </Column>
    </Column>
  );
} 