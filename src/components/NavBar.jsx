import React from 'react';
import { Box, Flex, Text, IconButton, Badge, Menu, MenuButton, MenuList, MenuItem } from '@chakra-ui/react';
import { ChevronDownIcon } from '@chakra-ui/icons';
import '../index.css';
import CartWidget from './CartWidget';
import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <Box className="navbar" py={4} px={6}>
      <Flex alignItems="center" justifyContent="space-between">
        <Box>
          <Link to={"/"}>
          <Text color="white" fontWeight="bold" fontSize="2em">Stone Dark</Text>
          </Link>
        </Box>
        <div className='menu'>
        <Box>
          <Text color="white" fontWeight="bold" fontSize="1.5em">Nuestras Piedras</Text>
        </Box>
    
        <Box>
          <Menu>
            <MenuButton as={IconButton} icon={<ChevronDownIcon />} variant="outline" colorScheme="white" aria-label="Desplegable"> 
            </MenuButton>
            <MenuList>
              <MenuItem>
              <Link to={`/category/${"ppreciosas"}`}>
              Piedras Preciosas
              </Link>
              </MenuItem>
              <MenuItem>
              <Link to={`/category/${"psemipreciosas"}`}>
              Piedras Semipreciosas
              </Link>
              </MenuItem>
              <MenuItem>Item 3</MenuItem>
            </MenuList>
          </Menu>
        </Box>
        </div>

     
    <Box>  
     <Link to={"/Cart"}>
        <CartWidget/>
     </Link>   
    </Box> 

      </Flex>
    </Box>
  );
};

export default NavBar;
