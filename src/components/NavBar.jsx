import React from 'react';
import { Box, Flex, Text, IconButton, Badge, Menu, MenuButton, MenuList, MenuItem } from '@chakra-ui/react';
import { ChevronDownIcon } from '@chakra-ui/icons';
import '../index.css';
import CartWidget from './CartWidget';

const NavBar = () => {
  return (
    <Box className="navbar" py={4} px={6}>
      <Flex alignItems="center" justifyContent="space-between">
        <Box>
          <Text color="white" fontWeight="bold" fontSize="lg">Stone Dark</Text>
        </Box>
        <div className='menu'>
        <Box>
          <Text color="white" fontWeight="bold" fontSize="lg">Nuestras Piedras</Text>
        </Box>
    
        <Box>
          <Menu>
            <MenuButton as={IconButton} icon={<ChevronDownIcon />} variant="outline" colorScheme="white" aria-label="Desplegable"> 
            </MenuButton>
            <MenuList>
              <MenuItem>Item 1</MenuItem>
              <MenuItem>Item 2</MenuItem>
              <MenuItem>Item 3</MenuItem>
            </MenuList>
          </Menu>
        </Box>
        </div>
        
        <CartWidget/>
      </Flex>
    </Box>
  );
};

export default NavBar;
