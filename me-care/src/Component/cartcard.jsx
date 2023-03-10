import { useState } from 'react';
import {
  Box,
  Heading,
  Text,
  Img,
  Flex,
  Center,
  useColorModeValue,
  HStack,
} from '@chakra-ui/react';
import { BsArrowUpRight, BsHeartFill, BsHeart } from 'react-icons/bs';
import {Link as RouterLink} from 'react-router-dom'

export default function PostWithLike({title,price,category,image,id}) {
  const [liked, setLiked] = useState(false);

  return (
    <Center py={6}>
      <Box
        w="xs"
        rounded={'sm'}
        my={5}
        mx={[0, 5]}
        overflow={'hidden'}
        bg="white"
        border={'1px'}
        borderColor="blue.700"
        boxShadow={useColorModeValue('6px 6px 0 gray.300', '6px 6px 0 cyan')}>
        <Box h={'200px'} borderBottom={'1px'} borderColor="black">
          <Img
            src={image}
            roundedTop={'sm'}
            objectFit="cover"
            h="full"
            w="full"
            alt={'Blog Image'}
          />
        </Box>
        <Box p={4}>
          <Box
            bg="cyan.500"
            display={'inline-block'}
            px={2}
            py={1}
            color="gray.600"
            mb={2}>
            <Text fontSize={'xl'} fontWeight="medium">
              {title}
            </Text>
          </Box>
          <Heading color={'black'} fontSize={'2xl'} noOfLines={1}>
          ₹{price} /-
          </Heading>
          <Text color={'gray.500'} noOfLines={2}>
           {category}
          </Text>
        </Box>
        <HStack borderTop={'1px'} color="blue.700">
          <Flex
            p={4}
            alignItems="center"
            justifyContent={'space-between'}
            roundedBottom={'sm'}
            cursor={'pointer'}
            w="full">
           <RouterLink to={`/massagechair/${id}`}><Text fontSize={'md'} fontWeight={'semibold'}>
              see product
            </Text></RouterLink> 
            <BsArrowUpRight />
          </Flex>
          <Flex
            p={4}
            alignItems="center"
            justifyContent={'space-between'}
            roundedBottom={'sm'}
            borderLeft={'1px'}
            cursor="pointer"
            onClick={() => setLiked(!liked)}>
            {liked ? (
              <BsHeartFill fill="red" fontSize={'24px'} />
            ) : (
              <BsHeart fontSize={'24px'} />
            )}
          </Flex>
        </HStack>
      </Box>
    </Center>
  );
}