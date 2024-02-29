import React from "react";
import { Box, Button, Container, Heading, Stack, Text, Image, VStack, HStack, Icon, Flex } from "@chakra-ui/react";
import { FaHandshake, FaUserFriends, FaDollarSign, FaInfinity } from "react-icons/fa";

const Index = () => {
  return (
    <Container maxW="container.xl" p={4}>
      <VStack spacing={10} align="stretch">
        <Box bgColor="pink.100" borderRadius="lg" p={5} textAlign="center">
          <Heading as="h1" size="xl" mb={4}>
            Join Academy.malinka
          </Heading>
          <Text fontSize="lg" color="gray.700">
            Embrace your independence, work on your own terms, and become a cosmetics pioneer with Academy.malinka.
          </Text>
          <Image src="https://images.unsplash.com/photo-1556227834-09f1de7a7d14?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxjb3NtZXRpYyUyMHByb2R1Y3RzfGVufDB8fHx8MTcwOTIwNTM3NHww&ixlib=rb-4.0.3&q=80&w=1080" borderRadius="md" mt={4} alt="Cosmetic Products" />
        </Box>

        <HStack spacing={10} alignItems="center" justifyContent="center">
          <Flex direction="column" alignItems="center">
            <Icon as={FaHandshake} w={10} h={10} color="teal.500" />
            <Text mt={2}>Direct Commission</Text>
            <Text fontSize="2xl" fontWeight="bold" color="teal.600">
              30% Off
            </Text>
            <Text color="gray.600" textAlign="center">
              Order for yourself and enjoy a hefty 30% discount plus the opportunity to resell to your network.
            </Text>
          </Flex>

          <Flex direction="column" alignItems="center">
            <Icon as={FaUserFriends} w={10} h={10} color="orange.500" />
            <Text mt={2}>Referral Earnings</Text>
            <Text fontSize="2xl" fontWeight="bold" color="orange.600">
              8% Commission
            </Text>
            <Text color="gray.600" textAlign="center">
              Earn 8% on every order made by others through your affiliate link. Grow your income as your network expands.
            </Text>
          </Flex>
        </HStack>

        <Stack align="center" spacing={6}>
          <Heading as="h2" size="lg" textAlign="center">
            Why Choose Academy.malinka?
          </Heading>
          <Text textAlign="center" color="gray.600">
            With Academy.malinka, you choose certified quality and unparalleled prices. Our direct-from-manufacturer approach ensures you get the best deal every time.
          </Text>
          <Button rightIcon={<FaInfinity />} colorScheme="pink" size="lg">
            Start Your Journey
          </Button>
        </Stack>

        <Box bgColor="gray.100" borderRadius="lg" p={5}>
          <Heading as="h3" size="md" textAlign="center" mb={4}>
            Your Path to Financial Freedom Starts Today
          </Heading>
          <Text fontSize="md" color="gray.700" mb={6}>
            Say goodbye to rigid schedules and embrace a life of freedom. As an affiliate, you call the shots. Enjoy the liberty of working from anywhere, at any time, all while building a sustainable and thriving business with Academy.malinka.
          </Text>
          <Flex justifyContent="center">
            <Button leftIcon={<FaDollarSign />} colorScheme="green" size="md">
              Apply Now
            </Button>
          </Flex>
        </Box>
      </VStack>
    </Container>
  );
};

export default Index;
