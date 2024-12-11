import { Box, Flex, ScrollArea, StyleProp, Text } from '@mantine/core';
import classes from './Navigation.module.css';
import { useNavigate } from 'react-router-dom';
import { IconType } from '../common/Icons';
import { Icon } from '../common/Icons/Icon';

interface NavigationProps {
  w?: StyleProp<React.CSSProperties['width'] | undefined>;
  isTextVisible?: boolean;
}

const Navigation1: React.FC<NavigationProps> = ({ w = '250px', isTextVisible = true }) => {
  const navigate = useNavigate();

  const handleOnClickBotstore = () => navigate('/botshop');
  const handleOnClickPayment = () => navigate('/payment');

  return (
    <nav className={classes.navbar} style={{ width: w as string | number }}>
    
      <ScrollArea className={classes.links}>
        <div className={classes.linksInner}>
          <Box pl={0} mb="md">
          
            <Flex justify="center" align="center" gap="15px" onClick={handleOnClickBotstore}>
              <Icon icon={IconType.Botstore} style={{ marginTop: '6px', cursor: 'pointer' }} />
              <Text c="#007bff" style={{ cursor: 'pointer' }}>
                {isTextVisible ? 'Botstore' : ''}
              </Text>
            </Flex>
            <Flex justify="center" align="center" gap="15px" onClick={handleOnClickPayment}>
              <Icon icon={IconType.Payment} style={{ marginTop: '6px', cursor: 'pointer' }} />
              <Text c="#595959" style={{ cursor: 'pointer' }}>
                {isTextVisible ? 'Payment' : ''}
              </Text>
            </Flex>
          </Box>
        </div>
      </ScrollArea>
    </nav>
  );
};

export default Navigation1;
