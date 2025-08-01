import { Heading, Text, Column } from "@once-ui-system/core";
import { about } from "@/resources";

export default function Experience() {
  return (
    <Column as="section" maxWidth="m" horizontal="center" gap="l" marginTop="l">
      <Column maxWidth="xs" gap="s" style={{ textAlign: "center" }}>
        <Heading as="h1" variant="display-strong-s">
          {about.work.title}
        </Heading>
        <Text variant="body-default-l" onBackground="neutral-weak">
          {about.work.description}
        </Text>
      </Column>
    </Column>
  );
} 