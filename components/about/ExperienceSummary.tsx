import ExperienceCard from "./ExperienceCard";
import {
  Button,
  HStack,
  Heading,
  Icon,
  LinkBox,
  LinkOverlay,
  Text,
  VStack,
  useColorModeValue,
} from "@chakra-ui/react";
import experiences from "@/data/experiences.json";
import { Experience } from "@/utils/types";
import { FaRegFilePdf } from "react-icons/fa";
import { resumeFileName } from "@/utils/links";

export default function ExperienceSummary() {
  function displayExperiences(experiences: Experience[]) {
    const allWork = [];
    for (let i = 0; i < experiences.length; i++) {
      const key = `${experiences[i].title}-card`;
      const newWork = <ExperienceCard key={key} experience={experiences[i]} />;
      allWork.push(newWork);
    }

    return allWork;
  }

  function ResumeButton() {
    return (
      <VStack width="full" alignItems="start">
        <LinkBox>
          <Button
            variant="outline"
            width={{ base: "12rem", xl: "16rem" }}
            borderColor={useColorModeValue("gray.2", "gray.5")}
          >
            <HStack>
              <Icon
                as={FaRegFilePdf}
                color={useColorModeValue("gray.2", "gray.5")}
                boxSize={{
                  base: "1rem",
                  xl: "1.5rem",
                }}
              />
              <Text variant="powerful" fontSize={{ base: "md", xl: "lg" }}>
                <LinkOverlay href={resumeFileName} isExternal>
                  View My Resume
                </LinkOverlay>
              </Text>
            </HStack>
          </Button>
        </LinkBox>
      </VStack>
    );
  }

  const { work, education } = experiences;
  return (
    <VStack
      align="inherit"
      spacing={{
        base: "4rem",
        md: "5rem",
        xl: "6rem",
        "2xl": "7rem",
      }}
    >
      <VStack
        align="inherit"
        spacing={{
          base: "1rem",
          md: "1.5rem",
          xl: "2rem",
          "2xl": "2.5rem",
        }}
      >
        <Heading variant="primary" textAlign="left">
          About Me
        </Heading>
        <Text
          variant="paragraph"
          fontSize={{ base: "md", md: "lg", xl: "xl", "2xl": "2xl" }}
        >
          {
            "I am in my final year as an undergraduate at Quaid-i-Azam University's Department of Computer Science, and I'm looking to graduate in 2025. I enjoy developing web applications, solving technical challenges, and exploring new technologies like React, Node.js, and machine learning models. In my free time, I work on personal projects, attend tech events, and collaborate with peers."
          }
        </Text>
        <ResumeButton />
      </VStack>
      <VStack
        align="inherit"
        spacing={{
          base: "1rem",
          md: "1.5rem",
          xl: "2rem",
          "2xl": "2.5rem",
        }}
      >
        <Heading variant="subPrimary" textAlign="left">
          Work Experience
        </Heading>
        <VStack
          align="inherit"
          spacing={{
            base: "0.5rem",
            md: "0.75rem",
            xl: "1rem",
            "2xl": "1.25rem",
          }}
        >
          {displayExperiences(work)}
        </VStack>
      </VStack>
      <VStack
        align="inherit"
        spacing={{
          base: "1rem",
          md: "1.5rem",
          xl: "2rem",
          "2xl": "2.5rem",
        }}
      >
        <Heading variant="subPrimary" textAlign="left">
          Education
        </Heading>
        <VStack
          align="inherit"
          spacing={{
            base: "0.5rem",
            md: "0.75rem",
            xl: "1rem",
            "2xl": "1.25rem",
          }}
        >
          {displayExperiences(education)}
        </VStack>
      </VStack>
    </VStack>
  );
}
