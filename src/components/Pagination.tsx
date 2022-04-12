import { Box, Button, Stack } from "@chakra-ui/react";
import React from "react";

const Pagination = () => {
  return (
    <Stack
      direction="row"
      mt="8"
      justifyContent="space-between"
      alignItems="center"
      spacing="6"
    >
      <Box>
        <strong>0</strong> - <strong>10</strong> de <strong>100</strong>
      </Box>
      <Stack
        direction="row"
        spacing="2"
      >
        <Button
          size="sm"
          fontSize="xs"
          w="4"
          colorScheme="pink"
          disabled
          _disabled={{
            bgColor: "pink.500",
            cursor: "default"
          }}
        >
          1
        </Button>
        <Button
          size="sm"
          fontSize="xs"
          w="4"
          bgColor="gray.700"
          disabled
          _hover={{
            bgColor: "gray.500"
          }}
        >
          2
        </Button>
      </Stack>
    </Stack>
  )
}

export default Pagination;