import { Box, Icon, Link, Stack, Text } from '@chakra-ui/react'
import React from 'react'
import { RiContactsLine, RiDashboardLine, RiGitMergeLine, RiInputMethodLine } from 'react-icons/ri'

type Props = {}

const Sidebar = (props: Props) => {
  return (
    <Box
      as='aside'
      w='64'
      mr='8'
    >
      <Stack
        spacing='12'
        align='self-start'
      >
        <Box>
          <Text
            fontWeight='bold'
            color='gray.400'
            fontSize='small'
          >
            GERAL
          </Text>
          <Stack
            spacing='4'
            mt='8'
            align='stretch'
          >
            <Link
              display='flex'
              alignItems='center'
            >
              <Icon
                as={RiDashboardLine}
                fontSize={20}
              />
              <Text
                fontSize='medium'
                ml='4'
              >
                Dashboard
              </Text>
            </Link>

            <Link
              display='flex'
              alignItems='center'
            >
              <Icon
                as={RiContactsLine}
                fontSize={20}
              />
              <Text
                fontSize='medium'
                ml='4'
              >
                Usuarios
              </Text>
            </Link>
          </Stack>
        </Box>

        
        <Box>
          <Text
            fontWeight='bold'
            color='gray.400'
            fontSize='small'
          >
            AUTOMAÇÃO
          </Text>
          <Stack
            spacing='4'
            mt='8'
            align='stretch'
          >
            <Link
              display='flex'
              alignItems='center'
            >
              <Icon
                as={RiInputMethodLine}
                fontSize={20}
              />
              <Text
                fontSize='medium'
                ml='4'
              >
                Formularios
              </Text>
            </Link>

            <Link
              display='flex'
              alignItems='center'
            >
              <Icon
                as={RiGitMergeLine}
                fontSize={20}
              />
              <Text
                fontSize='medium'
                ml='4'
              >
                Automação
              </Text>
            </Link>
          </Stack>
        </Box>
      </Stack>
    </Box>
  )
}

export default Sidebar