import { useState } from 'react';
import { Menu, Sidebar as ProSidebar, MenuItem } from 'react-pro-sidebar';
import { Box, IconButton, Typography, useTheme } from '@mui/material';
import { Link } from 'react-router-dom';
import {
  HomeOutlined,
  ContactsOutlined,
  ReceiptOutlined,
  CalendarTodayOutlined,
  PersonOutline,
  HelpOutlineOutlined,
  BarChartOutlined,
  PieChartOutlineOutlined,
  TimelineOutlined,
  MenuOutlined,
  MapOutlined,
  PeopleOutline,
} from '@mui/icons-material';

import { tokens } from '../../theme';

const Item = ({ title, to, icon, selected, setSelected, isCollapsed }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
    <MenuItem
      active={selected === title}
      style={{ color: colors.grey[100] }}
      onClick={() => setSelected(title)}
      icon={icon}
      component={<Link to={to} />}
    >
      {!isCollapsed && <Typography variant="body1">{title}</Typography>}
    </MenuItem>
  );
};

const Sidebar = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [selected, setSelected] = useState('Dashboard');

  return (
    <>
      <ProSidebar
        backgroundColor={colors.primary[400]}
        collapsed={isCollapsed}
        width={isCollapsed ? '80px' : '250px'}
      >
        <Menu iconShape="square">
          {isCollapsed && (
            <MenuItem
              onClick={() => setIsCollapsed(!isCollapsed)}
              icon={isCollapsed ? <MenuOutlined /> : undefined}
              style={{ margin: '10px 0 20px 0', color: colors.grey[100] }}
            />
          )}
          {!isCollapsed && (
            <Box display="flex" flexDirection="column" mt="20px">
              <Box
                display="flex"
                justifyContent="space-between"
                alignItems="center"
                mx="15px"
                mb="20px"
              >
                <Typography variant="h3" color={colors.grey[100]}>
                  ADMINIS
                </Typography>
                <IconButton onClick={() => setIsCollapsed(!isCollapsed)}>
                  <MenuOutlined />
                </IconButton>
              </Box>

              <Box mb="25px">
                <Box display="flex" justifyContent="center" alignItems="center">
                  <img
                    alt="profile-user"
                    width="80px"
                    height="80px"
                    src={'../../assets/user.png'}
                    style={{ cursor: 'pointer', borderRadius: '50%' }}
                  />
                </Box>

                <Box textAlign="center">
                  <Typography
                    variant="h2"
                    color={colors.grey[100]}
                    fontWeight="bold"
                    sx={{ m: '10px 0 0 0 ' }}
                  >
                    Ed Roh
                  </Typography>
                  <Typography variant="h5" color={colors.greenAccent[500]}>
                    VP Fancy Admin
                  </Typography>
                </Box>
              </Box>
            </Box>
          )}

          {/** MENU ITEMS */}

          <Item
            title="Dashboard"
            to="/"
            icon={<HomeOutlined />}
            selected={selected}
            setSelected={setSelected}
            isCollapsed={isCollapsed}
          />

          <Typography
            variant="h6"
            color={colors.grey[300]}
            sx={{
              mt: '15px',
              mr: '0',
              mb: '5px',
              ml: isCollapsed ? '25px' : '28px',
            }}
          >
            Data
          </Typography>

          <Item
            title="Manage Team"
            to="/team"
            icon={<PeopleOutline />}
            selected={selected}
            setSelected={setSelected}
            isCollapsed={isCollapsed}
          />

          <Item
            title="Contacts Information"
            to="/contacts"
            icon={<ContactsOutlined />}
            selected={selected}
            setSelected={setSelected}
            isCollapsed={isCollapsed}
          />

          <Item
            title="Invoices Balances"
            to="/invoices"
            icon={<ReceiptOutlined />}
            selected={selected}
            setSelected={setSelected}
            isCollapsed={isCollapsed}
          />

          <Typography
            variant="h6"
            color={colors.grey[300]}
            sx={{
              mt: '15px',
              mr: '0',
              mb: '5px',
              ml: isCollapsed ? '25px' : '28px',
            }}
          >
            Pages
          </Typography>

          <Item
            title="Profie Form"
            to="/form"
            icon={<PersonOutline />}
            selected={selected}
            setSelected={setSelected}
            isCollapsed={isCollapsed}
          />
          <Item
            title="Calendar"
            to="/calendar"
            icon={<CalendarTodayOutlined />}
            selected={selected}
            setSelected={setSelected}
            isCollapsed={isCollapsed}
          />

          <Item
            title="FAQ Page"
            to="/faq"
            icon={<HelpOutlineOutlined />}
            selected={selected}
            setSelected={setSelected}
            isCollapsed={isCollapsed}
          />

          <Typography
            variant="h6"
            color={colors.grey[300]}
            sx={{
              mt: '15px',
              mr: '0',
              mb: '5px',
              ml: isCollapsed ? '25px' : '28px',
            }}
          >
            Charts
          </Typography>

          <Item
            title="Bar Chart"
            to="/bar"
            icon={<BarChartOutlined />}
            selected={selected}
            setSelected={setSelected}
            isCollapsed={isCollapsed}
          />

          <Item
            title="Pie Chart"
            to="/pie"
            icon={<PieChartOutlineOutlined />}
            selected={selected}
            setSelected={setSelected}
            isCollapsed={isCollapsed}
          />

          <Item
            title="Line Chart"
            to="/line"
            icon={<TimelineOutlined />}
            selected={selected}
            setSelected={setSelected}
            isCollapsed={isCollapsed}
          />

          <Item
            title="Geography Chart"
            to="/geography"
            icon={<MapOutlined />}
            selected={selected}
            setSelected={setSelected}
            isCollapsed={isCollapsed}
          />
        </Menu>
      </ProSidebar>
    </>
  );
};

export default Sidebar;
